import argparse
import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
STYLES_DIR = BASE_DIR / "styles"
YUI_COMPRESSOR_PATH = BASE_DIR / "compressors" / "yuicompressor-2.4.8.jar"
CSS_FILE_PATH = STYLES_DIR / "style.css"
MINIFIED_CSS_PATH = STYLES_DIR / "style.min.css"


def main():
    parser = argparse.ArgumentParser(description="Minify CSS file using YUI Compressor")
    parser.add_argument("--input", default=CSS_FILE_PATH, help="Input CSS file path")
    parser.add_argument("--output", default=MINIFIED_CSS_PATH, help="Output minified file path")
    parser.add_argument("--jar", default=YUI_COMPRESSOR_PATH, help="Path to yuicompressor.jar")
    parser.add_argument("--line-break", type=int, default=0,
                        help="Insert line break after the specified column number (0 = no line breaks)")
    parser.add_argument("--preserve-semi", action="store_true", help="Preserve unnecessary semicolons")
    parser.add_argument("--disable-optimizations", action="store_true", help="Disable all micro optimizations")
    parser.add_argument("--verbose", "-v", action="store_true", help="Display informational messages and warnings")

    args = parser.parse_args()

    if not Path(args.input).exists():
        raise FileNotFoundError(f"Input CSS file not found: {args.input}")

    command = [
        "java", "-jar", str(args.jar),
        "--type", "css",
        str(args.input),
        "-o", str(args.output)
    ]

    if args.line_break > 0:
        command.extend(["--line-break", str(args.line_break)])

    if args.preserve_semi:
        command.append("--preserve-semi")

    if args.disable_optimizations:
        command.append("--disable-optimizations")

    if args.verbose:
        command.append("--verbose")

    print(f"Compressing: {args.input} -> {args.output}")
    print(f"Running command:\n\t{' '.join(command)}")

    subprocess.run(command, check=True)
    print(f"Minified CSS file written to: {args.output}")


if __name__ == '__main__':
    main()
