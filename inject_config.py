import os
from bs4 import BeautifulSoup

ROOT_DIR = "."

def inject_config(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        
        # Check if already injected
        if soup.find("script", src="/config.js"):
            print(f"⏩ Config already exists: {filepath}")
            return

        # Create new script tag
        config_script = soup.new_tag("script", src="/config.js")
        
        # Find the renocalc-pro.js script to insert BEFORE it
        pro_script = soup.find("script", src="/renocalc-pro.js")
        
        if pro_script:
            pro_script.insert_before(config_script)
            # Add a newline for neatness
            pro_script.insert_before("\n    ")
        else:
            # Fallback: Add to end of body
            if soup.body:
                soup.body.append(config_script)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(soup.prettify()))
            
        print(f"✅ Injected config.js into: {filepath}")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Injecting Config File ---")
    for root, dirs, files in os.walk(ROOT_DIR):
        if "index.html" in files:
            inject_config(os.path.join(root, "index.html"))

if __name__ == "__main__":
    main()