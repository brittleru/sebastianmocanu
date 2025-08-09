import argparse
import fnmatch
import os
import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
SCRIPTS_DIR = BASE_DIR / "scripts"
CLOSURE_COMPILER_PATH = BASE_DIR / "compressors" / "closure-compiler-v20250706.jar"
COMBINED_JS_PATH = SCRIPTS_DIR / "app.js"
MINIFIED_COMBINED_JS_PATH = SCRIPTS_DIR / "app.min.js"


def find_js_files(directory: str | Path, exclude_patterns: list) -> list[str]:
    """Find all JS files from a directory with exceptions (e.g., particles)"""
    js_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".js"):
                full_path = os.path.join(root, file)
                if not any(fnmatch.fnmatch(file, pat) for pat in exclude_patterns):
                    js_files.append(full_path)
    return sorted(js_files)


def combine_js_files(js_files: list[str | Path], output_file_path: str | Path) -> None:
    with open(output_file_path, "w") as output_file:
        for js_file in js_files:
            with open(js_file, "r") as input_file:
                output_file.write(input_file.read() + "\n")


def main():
    parser = argparse.ArgumentParser(description="Combine and minify JS files using Google Closure Compiler")
    parser.add_argument("--dir", default=SCRIPTS_DIR, help="Directory containing JS files (default: current dir)")
    parser.add_argument("--exclude", nargs="*", default=["particles.js", "particles.min.js", "app.min.js"],
                        help="File patterns to exclude.")
    parser.add_argument(
        "--level",
        default="SIMPLE_OPTIMIZATIONS",
        choices=["WHITESPACE_ONLY", "SIMPLE_OPTIMIZATIONS", "ADVANCED_OPTIMIZATIONS"],
        help="Compilation level (default: SIMPLE_OPTIMIZATIONS)"
    )
    parser.add_argument("--output", default=MINIFIED_COMBINED_JS_PATH, help="Output minified file name")
    parser.add_argument("--jar", default=CLOSURE_COMPILER_PATH, help="Path to closure-compiler.jar")

    args = parser.parse_args()

    file_paths = find_js_files(SCRIPTS_DIR, args.exclude)
    if not file_paths:
        raise FileNotFoundError("No JS files found")

    print(f"Found {len(file_paths)} JS files to combine (excluding {args.exclude}).")
    combine_js_files(file_paths, COMBINED_JS_PATH)

    command = [
        "java", "-jar", str(args.jar),
        "--js", str(COMBINED_JS_PATH),
        "--js_output_file", str(args.output),
        "--compilation_level", args.level,
    ]

    print(f"Running command:\n\t{' '.join(command)}")
    subprocess.run(command, check=True)
    print(f"Minified file written to: {args.output}")
    os.remove(COMBINED_JS_PATH)

if __name__ == '__main__':
    main()