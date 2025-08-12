import argparse
import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
HTML_FILE_PATH = BASE_DIR / "index.html"
MINIFIED_HTML_PATH = BASE_DIR / "index.min.html"
HTML_COMPRESSOR_PATH = BASE_DIR / "compressors" / "htmlcompressor-2.2.0.jar"


def main():
    parser = argparse.ArgumentParser(description="Minify HTML file using Google HtmlCompressor")
    parser.add_argument("--input", default=HTML_FILE_PATH, help="Input HTML file path")
    parser.add_argument("--output", default=MINIFIED_HTML_PATH, help="Output minified file path")
    parser.add_argument("--jar", default=HTML_COMPRESSOR_PATH, help="Path to htmlcompressor.jar")

    # Basic compression options
    parser.add_argument("--preserve-comments", action="store_true",
                        help="Preserve all comments (default: remove comments)")
    parser.add_argument("--preserve-multi-spaces", action="store_true",
                        help="Preserve multiple spaces (default: collapse whitespace)")
    parser.add_argument("--preserve-line-breaks", action="store_true",
                        help="Preserve line breaks (default: remove unnecessary breaks)")

    # Attribute optimization
    parser.add_argument("--remove-quotes", action="store_true",
                        help="Remove unnecessary quotes around attributes")
    parser.add_argument("--simple-bool-attr", action="store_true",
                        help="Remove values from boolean attributes (checked='checked' -> checked)")
    parser.add_argument("--remove-style-attr", action="store_true",
                        help="Remove type='text/css' from style tags")
    parser.add_argument("--remove-link-attr", action="store_true",
                        help="Remove type='text/css' from link tags")
    parser.add_argument("--remove-script-attr", action="store_true",
                        help="Remove type='text/javascript' from script tags")
    parser.add_argument("--remove-form-attr", action="store_true",
                        help="Remove method='get' from form tags")
    parser.add_argument("--remove-input-attr", action="store_true",
                        help="Remove type='text' from input tags")

    # Protocol and doctype optimization
    parser.add_argument("--simple-doctype", action="store_true",
                        help="Change doctype to simple HTML5 doctype")
    parser.add_argument("--remove-js-protocol", action="store_true",
                        help="Remove 'javascript:' from inline event handlers")
    parser.add_argument("--remove-http-protocol", action="store_true",
                        help="Remove 'http:' from URLs")
    parser.add_argument("--remove-https-protocol", action="store_true",
                        help="Remove 'https:' from URLs")

    # Output options
    parser.add_argument("--generate-stats", action="store_true",
                        help="Generate compression statistics")
    parser.add_argument("--charset", default="utf-8",
                        help="Input file charset (default: utf-8)")

    args = parser.parse_args()

    if not Path(args.input).exists():
        raise FileNotFoundError(f"Input HTML file not found: {args.input}")

    slf4j_simple_jar = args.jar.parent / "slf4j-simple-2.0.17.jar"
    slf4j_api_jar = args.jar.parent / "slf4j-api-2.0.17.jar"

    if slf4j_simple_jar.exists() and slf4j_api_jar.exists():
        classpath = f"{args.jar}:{slf4j_api_jar}:{slf4j_simple_jar}"
        command = [
            "java", "-cp", classpath,
            "com.googlecode.htmlcompressor.CmdLineCompressor",
            "--type", "html",
            "--charset", args.charset,
            "-o", str(args.output),
            str(args.input)
        ]
    else:
        print(f"Need SLF4J JARs please download them. HTML Compressor might not work.")
        command = [
            "java", "-jar", str(args.jar),
            "--type", "html",
            "--charset", args.charset,
            "-o", str(args.output),
            str(args.input)
        ]

    if args.preserve_comments:
        command.append("--preserve-comments")

    if args.preserve_multi_spaces:
        command.append("--preserve-multi-spaces")

    if args.preserve_line_breaks:
        command.append("--preserve-line-breaks")

    if args.remove_quotes:
        command.append("--remove-quotes")

    if args.simple_bool_attr:
        command.append("--simple-bool-attr")

    if args.remove_style_attr:
        command.append("--remove-style-attr")

    if args.remove_link_attr:
        command.append("--remove-link-attr")

    if args.remove_script_attr:
        command.append("--remove-script-attr")

    if args.remove_form_attr:
        command.append("--remove-form-attr")

    if args.remove_input_attr:
        command.append("--remove-input-attr")

    if args.simple_doctype:
        command.append("--simple-doctype")

    if args.remove_js_protocol:
        command.append("--remove-js-protocol")

    if args.remove_http_protocol:
        command.append("--remove-http-protocol")

    if args.remove_https_protocol:
        command.append("--remove-https-protocol")

    if args.generate_stats:
        command.append("--generate-stats")

    print(f"Compressing: {args.input} -> {args.output}")
    print(f"Running command:\n\t{' '.join(command)}")

    subprocess.run(command, check=True)
    print(f"Minified HTML file written to: {args.output}")


if __name__ == '__main__':
    main()