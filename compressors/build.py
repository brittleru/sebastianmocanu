import argparse
import subprocess
import sys
import time
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent

BUILD_STEPS = [
    ("Minify style.css", "minify_css.py"),
    ("Combine CSS bundles", "combine_css.py"),
    ("Combine & minify JS", "combine_minify_js.py")
]


def run_step(label: str, script_name: str) -> float:
    """Run a single build step and return its duration in seconds."""
    script_path = SCRIPT_DIR / script_name
    if not script_path.exists():
        raise FileNotFoundError(f"Build script not found: {script_path}")

    print(f"\n{'=' * 60}")
    print(f"\t{label}  ({script_name})")
    print(f"{'=' * 60}")

    start = time.perf_counter()
    result = subprocess.run([sys.executable, str(script_path)], check=False)
    elapsed = time.perf_counter() - start

    if result.returncode != 0:
        print(f"\nStep failed: {label} (exit code {result.returncode})")
        sys.exit(result.returncode)

    return elapsed


def main() -> None:
    parser = argparse.ArgumentParser(description="Run all build steps for the portfolio site.")
    parser.add_argument("--skip-css", action="store_true", help="Skip the CSS minify and combine steps.")
    parser.add_argument("--skip-js", action="store_true", help="Skip the JS combine and minify step.")
    args = parser.parse_args()

    steps = []
    for label, script in BUILD_STEPS:
        if args.skip_css and script in ("minify_css.py", "combine_css.py"):
            continue
        if args.skip_js and script == "combine_minify_js.py":
            continue
        steps.append((label, script))

    if not steps:
        print("Nothing to do (all steps skipped).")
        return

    print(f"Running {len(steps)} build step(s)...")
    total_start = time.perf_counter()
    timings = []
    for label, script in steps:
        elapsed = run_step(label, script)
        timings.append((label, elapsed))

    total_elapsed = time.perf_counter() - total_start

    print(f"\n{'=' * 60}")
    print("\tBuild complete")
    print(f"{'=' * 60}")
    for label, elapsed in timings:
        print(f"  {label:<30} {elapsed:6.2f}s")
    print(f"\t{'-' * 40}")
    print(f"\t{'Total':<30} {total_elapsed:6.2f}s")


if __name__ == "__main__":
    main()
