import os
from bs4 import BeautifulSoup

ROOT_DIR = "."
TARGET_SCRIPT = "/renocalc-pro.js"

def inject_script(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        if not soup.body: return
        
        if soup.find("script", src=TARGET_SCRIPT):
            print(f"⏩ Already has Pro Script: {filepath}")
            return

        new_script = soup.new_tag("script", src=TARGET_SCRIPT)
        # Add before the closing body tag
        soup.body.append(new_script)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(soup.prettify()))
        print(f"✅ Injected Pro Script: {filepath}")
    except Exception as e:
        print(f"❌ Error: {e}")

def main():
    print("--- Injecting RenoCalc Pro ---")
    for root, dirs, files in os.walk(ROOT_DIR):
        if "index.html" in files:
            inject_script(os.path.join(root, "index.html"))

if __name__ == "__main__":
    main()