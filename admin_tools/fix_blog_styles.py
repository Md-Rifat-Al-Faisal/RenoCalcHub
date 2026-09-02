import os
from bs4 import BeautifulSoup

# CONFIGURATION
BLOG_DIR = "./blog"

def fix_styles(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        changed = False

        # 1. FIX TABLES (Prevent Squishing)
        # Find all tables that aren't already responsive
        tables = soup.find_all("table")
        for table in tables:
            # Check if parent is already overflow-x-auto
            parent = table.parent
            if parent.name == "div" and "overflow-x-auto" in parent.get("class", []):
                continue
            
            # Create wrapper
            wrapper = soup.new_tag("div", **{"class": "overflow-x-auto mb-8 rounded-lg border border-slate-200"})
            
            # Swap
            table.replace_with(wrapper)
            wrapper.append(table)
            
            # Remove border from table itself since wrapper has it now
            if table.has_attr("class"):
                table["class"] = [c for c in table["class"] if c != "border"]

            changed = True

        # 2. FIX IMAGES (Ensure they fit)
        # Find images inside the article content
        article = soup.find("article")
        if article:
            images = article.find_all("img")
            for img in images:
                # Ensure they have max-w-full
                if not img.has_attr("class"):
                    img["class"] = []
                
                if "w-full" not in img["class"] and "max-w-full" not in img["class"]:
                    img["class"].append("w-full")
                    img["class"].append("h-auto")
                    img["class"].append("object-cover")
                    changed = True

        if changed:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(str(soup.prettify()))
            print(f"✅ Fixed Styles: {filepath}")
        else:
            print(f"⚪ No fixes needed: {filepath}")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Fixing Blog Tables & Images ---")
    if not os.path.exists(BLOG_DIR):
        print(f"❌ Error: Directory '{BLOG_DIR}' not found.")
        return

    for root, dirs, files in os.walk(BLOG_DIR):
        for file in files:
            if file.endswith(".html"):
                fix_styles(os.path.join(root, file))

if __name__ == "__main__":
    main()