import os
from bs4 import BeautifulSoup

# CONFIGURATION
ROOT_DIR = "."
SKIP_DIRS = ["admin_tools", "css", "js", "img", ".git"]

def process_file(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        changed = False

        # --- FIX 1: SIDEBAR VISIBILITY ON MOBILE ---
        # Find the sidebar aside
        sidebar = soup.find("aside")
        if sidebar and sidebar.has_attr("class"):
            classes = sidebar["class"]
            if "hidden" in classes:
                classes.remove("hidden")
                # Also remove lg:block if it exists since it's now visible everywhere
                if "lg:block" in classes:
                    classes.remove("lg:block")
                # Ensure spacing on mobile
                if "mt-12" not in classes:
                    classes.append("mt-12") # Add margin top for mobile spacing
                if "lg:mt-0" not in classes:
                    classes.append("lg:mt-0") # Reset margin on desktop
                
                sidebar["class"] = classes
                changed = True
                print(f"   [Sidebar] Made visible on mobile")

        # --- FIX 2: BUTTON RE-POSITIONING ---
        # 1. Find the buttons
        btn_group = soup.find(id="static-pro-actions")
        # 2. Find the Calculate button (The anchor)
        calc_btn = soup.find("button", onclick=lambda x: x and "calculate" in x.lower())
        
        if btn_group and calc_btn:
            # Check if they are already neighbors
            if btn_group.previous_sibling != calc_btn:
                # Extract buttons from current location
                btn_group = btn_group.extract()
                
                # Insert AFTER the Calculate button
                # We check if the calc button is inside a full-width container
                parent = calc_btn.parent
                if parent.name == "div" and len(parent.contents) < 5:
                    # If button is in a wrapper, insert after the wrapper
                    parent.insert_after(btn_group)
                else:
                    # Otherwise insert directly after button
                    calc_btn.insert_after(btn_group)
                
                changed = True
                print(f"   [Buttons] Moved to follow Calculate button")

        # --- FIX 3: SPEED (DEFER SCRIPTS) ---
        # Find all script tags
        scripts = soup.find_all("script")
        for script in scripts:
            if script.has_attr("src"):
                src = script["src"]
                # Defer these specific heavy scripts
                if "tailwindcss" in src or "renocalc" in src or "load-related" in src or "fontawesome" in src:
                    if not script.has_attr("defer"):
                        script["defer"] = "defer"
                        changed = True
                        print(f"   [Speed] Added 'defer' to {src[:20]}...")

        if changed:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(str(soup.prettify()))
            print(f"✅ Fixed: {filepath}")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Fixing Mobile Layout, Button Positions & Speed ---")
    for root, dirs, files in os.walk(ROOT_DIR):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        
        for file in files:
            if file.endswith(".html"):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()