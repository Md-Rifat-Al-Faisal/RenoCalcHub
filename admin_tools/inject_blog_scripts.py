import os
from bs4 import BeautifulSoup

# CONFIGURATION
ROOT_DIR = "./blog"  # Target the blog folder specifically
TARGET_SCRIPT = "/load-related.js"

def inject_script(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html_content = f.read()

        soup = BeautifulSoup(html_content, "html.parser")
        body = soup.body

        if not body:
            print(f"⚠️  No body tag in {filepath}")
            return

        # Check if script already exists
        if soup.find("script", src=TARGET_SCRIPT):
            print(f"⏩ Already has script: {filepath}")
            return

        # Create new script tag
        new_script = soup.new_tag("script", src=TARGET_SCRIPT)
        
        # Append to end of body
        body.append(new_script)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(soup.prettify()))
        
        print(f"✅ Injected script into: {filepath}")
        
    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Injecting Pinterest Script to Blogs ---")
    if not os.path.exists(ROOT_DIR):
        print(f"❌ Error: Directory '{ROOT_DIR}' not found.")
        return

    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                inject_script(filepath)
    print("--- Injection Complete ---")

if __name__ == "__main__":
    main()