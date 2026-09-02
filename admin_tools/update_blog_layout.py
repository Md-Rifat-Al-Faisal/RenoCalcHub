import os
from bs4 import BeautifulSoup

# CONFIGURATION
BLOG_DIR = "./blog"  # We target the blog folder specifically
TARGET_SCRIPT = "/load-related.js"

def upgrade_blog_layout(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")

        # 1. CHECK IF ALREADY DONE
        if soup.find(id="related-sidebar"):
            print(f"⏩ Sidebar already exists: {filepath}")
            # Still check for JS injection even if layout exists
            inject_js(soup, filepath) 
            return

        # 2. FIND THE CONTENT
        # In your blogs, content is usually in an <article> tag inside a <main> tag
        article = soup.find("article")
        if not article:
            print(f"⚠️  No <article> found in: {filepath}")
            return

        main_container = article.parent # This is usually <main>

        # 3. WIDEN THE CONTAINER
        # Change max-w-3xl (narrow) to max-w-7xl (wide) so there is room for a sidebar
        if main_container.has_attr("class"):
            classes = main_container["class"]
            if "max-w-3xl" in classes:
                classes = [c.replace("max-w-3xl", "max-w-7xl") for c in classes]
                main_container["class"] = classes

        # 4. CREATE THE GRID STRUCTURE
        # <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        grid_wrapper = soup.new_tag("div", **{"class": "grid grid-cols-1 lg:grid-cols-12 gap-12"})

        # Left Column (Article) - Spans 8 or 9 columns
        content_col = soup.new_tag("div", **{"class": "lg:col-span-8 xl:col-span-9"})
        
        # Right Column (Sidebar) - Spans 4 or 3 columns
        sidebar_col = soup.new_tag("aside", **{"class": "lg:col-span-4 xl:col-span-3 hidden lg:block"})
        
        # The Sidebar Placeholder ID
        sidebar_box = soup.new_tag("div", id="related-sidebar")
        sidebar_col.append(sidebar_box)

        # 5. MOVE THE ARTICLE
        # We take the article OUT of main, put it in the grid column
        article_content = article.extract()
        content_col.append(article_content)

        # 6. ASSEMBLE
        grid_wrapper.append(content_col)
        grid_wrapper.append(sidebar_col)
        
        # Add the new grid back into the main container
        main_container.append(grid_wrapper)

        # 7. INJECT THE JS
        inject_js(soup, filepath)

        # 8. SAVE
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(soup.prettify()))
            
        print(f"✅ Upgraded Layout: {filepath}")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def inject_js(soup, filepath):
    # Check if script exists
    if soup.find("script", src=TARGET_SCRIPT):
        return

    # Add script to body
    if soup.body:
        new_script = soup.new_tag("script", src=TARGET_SCRIPT)
        soup.body.append(new_script)
        print(f"   + Injected {TARGET_SCRIPT}")

def main():
    print("--- Upgrading Blog Layouts (Adding Sidebars) ---")
    if not os.path.exists(BLOG_DIR):
        print(f"❌ Error: Directory '{BLOG_DIR}' not found.")
        return

    for root, dirs, files in os.walk(BLOG_DIR):
        for file in files:
            if file.endswith(".html"):
                upgrade_blog_layout(os.path.join(root, file))

if __name__ == "__main__":
    main()