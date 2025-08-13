import os
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
STYLES_DIR = BASE_DIR / "styles"
# Order or the CSS file paths matter for the final output 
CSS_FILE_PATHS = [
    STYLES_DIR / "bootstrap_v4_0_0.min.css",
    STYLES_DIR / "style.min.css",
    BASE_DIR / "fontawesome-free-5.15.4-web" / "css" / "all.min.css",
    BASE_DIR / "aos" / "styles" / "aos_v3_0_0.css"
]
OUTPUT_FILE_PATH = STYLES_DIR / "combined.min.css"


def combine_css_files(css_files: list[Path], output_file: str | Path = OUTPUT_FILE_PATH):  
    """
    Combines the website CSS files into a single file for faster load times (no wait time to fetch each file)

    Has special handling for FontAwesome file (all.min.css) since it has relative paths for webfonts
    """  
    combined_content = []
    
    for i, css_file in enumerate(css_files, 1):
        if css_file.exists():
            print(f"{i}. Reading: {css_file}")
            
            with open(css_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if 'fontawesome' in str(css_file):
                print("Updating FontAwesome webfonts paths...")
                content = content.replace('../webfonts', '../fontawesome-free-5.15.4-web/webfonts')
            
            combined_content.append(f"/* === {css_file.name} === */")
            combined_content.append(content)
            combined_content.append("")  
            
        else:
            print(f"{i}. ERROR: File not found: {css_file}")
            return False
    
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(combined_content))
        
        print(f"Successfully combined CSS files into: {output_file}")
        print(f"Output file size: {output_file.stat().st_size:,} bytes")
        
        return True
        
    except Exception as e:
        print(f"Error writing output file: {e}")
        return False


def main():
    success = combine_css_files(CSS_FILE_PATHS)
    
    if success:
        print("\nCSS combination completed successfully!")
    else:
        print("\nCSS combination failed...")

if __name__ == "__main__":
    main()