import os
from bs4 import BeautifulSoup

# CONFIGURATION
ROOT_DIR = "."
SKIP_DIRS = ["node_modules", ".git", "admin_tools", "css", "js"]

def switch_to_production(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        changed = False

        # 1. REMOVE THE CDN SCRIPT
        cdn_script = soup.find("script", src=lambda s: s and "cdn.tailwindcss.com" in s)
        if cdn_script:
            cdn_script.decompose()
            changed = True
            print(f"   - Removed CDN from: {filepath}")

        # 2. ADD THE LOCAL CSS LINK
        local_link = soup.find("link", href="/css/styles.css")
        if not local_link:
            new_tag = soup.new_tag("link", href="/css/styles.css", rel="stylesheet")
            if soup.head:
                soup.head.append(new_tag)
                soup.head.append("\n")
                changed = True
                print(f"   + Added Production CSS to: {filepath}")

        if changed:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(str(soup.prettify()))
            print(f"✅ Fixed: {filepath}")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Switching from CDN to Production CSS ---")
    for root, dirs, files in os.walk(ROOT_DIR):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for file in files:
            if file.endswith(".html"):
                switch_to_production(os.path.join(root, file))

if __name__ == "__main__":
    main()