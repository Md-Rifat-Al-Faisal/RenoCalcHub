import os
from bs4 import BeautifulSoup

# CONFIGURATION
ROOT_DIR = "."  # Current directory
SKIP_DIRS = ["blog", "css", "js", "img", ".git"] # Folders to ignore
TARGET_FILE = "index.html"

def update_html_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, "html.parser")

    # 1. FIND THE MAIN ARTICLE
    # We look for the <article> tag
    article = soup.find("article")
    
    if not article:
        print(f"⚠️  Skipping {filepath}: No <article> found.")
        return

    # Check if we already processed this file (Idempotency)
    if soup.find(id="related-sidebar"):
        print(f"⏩ Skipping {filepath}: Sidebar already exists.")
        return

    # 2. FIND THE PARENT SECTION
    # The article is usually inside a <section>. We need to widen this section.
    section = article.parent
    
    # Update Section Width (max-w-4xl -> max-w-6xl)
    if section.has_attr("class"):
        classes = section["class"]
        if "max-w-4xl" in classes:
            classes.remove("max-w-4xl")
            classes.append("max-w-6xl")
            # Ensure grid structure classes if missing
            section["class"] = classes

    # 3. CREATE THE NEW GRID STRUCTURE
    # Create the wrapper: <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
    grid_div = soup.new_tag("div", **{"class": "grid grid-cols-1 lg:grid-cols-12 gap-12"})

    # Create Main Column: <div class="lg:col-span-8">
    main_col = soup.new_tag("div", **{"class": "lg:col-span-8"})
    
    # Create Sidebar Column: <aside class="lg:col-span-4 hidden lg:block">
    sidebar_col = soup.new_tag("aside", **{"class": "lg:col-span-4 hidden lg:block"})
    
    # Create the Sidebar Container Div
    # (The JS will categorize it automatically based on URL, so we don't need to hardcode category here)
    sidebar_content = soup.new_tag("div", id="related-sidebar")
    sidebar_col.append(sidebar_content)

    # 4. MOVE THE ARTICLE
    # We extract the article from its current spot and append it to main_col
    article_content = article.extract() 
    main_col.append(article_content)

    # 5. ASSEMBLE
    grid_div.append(main_col)
    grid_div.append(sidebar_col)
    
    # Append the new Grid back to the section
    section.append(grid_div)

    # 6. INJECT SCRIPTS (calculators.js & articles.js)
    # Check if they exist, if not, add them before the closing </body>
    body = soup.body
    
    scripts_to_add = [
        {"src": "/calculators.js"},
        {"src": "/articles.js"},
        {"src": "/load-related.js"}
    ]

    for script_def in scripts_to_add:
        # Check if script already exists
        if not soup.find("script", src=script_def["src"]):
            new_script = soup.new_tag("script", src=script_def["src"])
            # Insert before the last script (usually the custom logic one) or at end of body
            scripts = body.find_all("script")
            if scripts:
                scripts[0].insert_before(new_script)
            else:
                body.append(new_script)

    # 7. SAVE THE FILE
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(str(soup.prettify()))
    
    print(f"✅ Updated: {filepath}")

def main():
    print("--- Starting Bulk Layout Update ---")
    
    for root, dirs, files in os.walk(ROOT_DIR):
        # Skip blacklisted directories
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        
        if TARGET_FILE in files:
            # We assume any folder with index.html that isn't root is a calculator
            if root == ".": continue 
            
            filepath = os.path.join(root, TARGET_FILE)
            update_html_file(filepath)

    print("--- Update Complete ---")

if __name__ == "__main__":
    main()