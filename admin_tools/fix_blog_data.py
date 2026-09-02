import os
from bs4 import BeautifulSoup

# CONFIGURATION
BLOG_DIR = "./blog"
REQUIRED_SCRIPTS = [
    "/calculators.js",
    "/articles.js",
    "/load-related.js" # Ensuring this is last
]

def inject_data_scripts(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        
        if not soup.body:
            print(f"⚠️  Skipping {filepath}: No <body> tag.")
            return

        changed = False
        
        # We want to insert these scripts at the end of the body
        # Check for each script and append if missing
        for script_src in REQUIRED_SCRIPTS:
            if not soup.find("script", src=script_src):
                new_script = soup.new_tag("script", src=script_src)
                soup.body.append(new_script)
                # Add a newline for neatness
                soup.body.append("\n")
                changed = True
                print(f"   + Added {script_src}")

        if changed:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(str(soup.prettify()))
            print(f"✅ Fixed Data Links: {filepath}")
        else:
            print(f"⚪ All scripts present: {filepath}")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Injecting Data Scripts into Blog Posts ---")
    if not os.path.exists(BLOG_DIR):
        print(f"❌ Error: Directory '{BLOG_DIR}' not found.")
        return

    for root, dirs, files in os.walk(BLOG_DIR):
        for file in files:
            if file.endswith(".html"):
                inject_data_scripts(os.path.join(root, file))

if __name__ == "__main__":
    main()