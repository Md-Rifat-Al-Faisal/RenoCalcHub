import os
from bs4 import BeautifulSoup

# CONFIGURATION
ROOT_DIR = "."
SKIP_DIRS = ["blog", "css", "js", "img", ".git"]
TARGET_FILE = "index.html"

def widen_layout(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, "html.parser")
    changed = False

    # 1. WIDEN THE MAIN CONTAINER (max-w-6xl -> max-w-7xl)
    # Find the section that contains the grid
    # We look for the section wrapping the article or the specific grid class
    sections = soup.find_all("section")
    for section in sections:
        if section.has_attr("class") and "max-w-6xl" in section["class"]:
            section["class"] = [c.replace("max-w-6xl", "max-w-7xl") for c in section["class"]]
            changed = True

    # 2. WIDEN THE MAIN COLUMN (lg:col-span-8 -> lg:col-span-9)
    main_cols = soup.find_all("div", class_="lg:col-span-8")
    for col in main_cols:
        col["class"] = [c.replace("lg:col-span-8", "lg:col-span-9") for c in col["class"]]
        changed = True

    # 3. SHRINK THE SIDEBAR (lg:col-span-4 -> lg:col-span-3)
    sidebars = soup.find_all("aside", class_="lg:col-span-4")
    for sidebar in sidebars:
        sidebar["class"] = [c.replace("lg:col-span-4", "lg:col-span-3") for c in sidebar["class"]]
        changed = True

    if changed:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(soup.prettify()))
        print(f"✅ Widened: {filepath}")
    else:
        print(f"⚪ No changes needed: {filepath}")

def main():
    print("--- Starting Width Adjustment (8/4 -> 9/3) ---")
    for root, dirs, files in os.walk(ROOT_DIR):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        if TARGET_FILE in files:
            if root == ".": continue
            filepath = os.path.join(root, TARGET_FILE)
            widen_layout(filepath)
    print("--- Adjustment Complete ---")

if __name__ == "__main__":
    main()