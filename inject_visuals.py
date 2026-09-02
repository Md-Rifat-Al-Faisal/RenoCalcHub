import os
from bs4 import BeautifulSoup

ROOT_DIR = "."

def inject_visuals(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        
        # Check if already injected
        if soup.find("script", src="/renocalc-visuals.js"):
            print(f"⏩ Already has visuals: {filepath}")
            return

        # Create new script tag
        new_script = soup.new_tag("script", src="/renocalc-visuals.js")
        
        # Insert it AFTER renocalc-pro.js
        pro_script = soup.find("script", src="/renocalc-pro.js")
        
        if pro_script:
            pro_script.insert_after(new_script)
            pro_script.insert_after("\n    ")
        else:
            if soup.body:
                soup.body.append(new_script)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(soup.prettify()))
            
        print(f"✅ Injected visuals into: {filepath}")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Injecting Visualizer & Cost Tools ---")
    for root, dirs, files in os.walk(ROOT_DIR):
        if "index.html" in files:
            inject_visuals(os.path.join(root, "index.html"))

if __name__ == "__main__":
    main()