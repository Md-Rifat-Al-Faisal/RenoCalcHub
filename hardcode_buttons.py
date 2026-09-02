import os
from bs4 import BeautifulSoup

ROOT_DIR = "."

# The Buttons HTML
BUTTONS_HTML = """
<div id="static-pro-actions" class="hidden mt-4 pt-3 border-t border-slate-200/50 flex gap-3 print:hidden">
    <button onclick="saveProject()" class="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded shadow-sm transition transform active:scale-95">
        <i class="fa-solid fa-floppy-disk"></i> Save Result
    </button>
    <button onclick="printQuote()" class="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 text-slate-700 text-xs font-bold rounded transition shadow-sm">
        <i class="fa-solid fa-file-pdf"></i> Print PDF
    </button>
</div>
"""

def inject_buttons(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")

        # 1. Check for duplicates
        if soup.find(id="static-pro-actions"):
            print(f"⏩ Buttons already exist: {filepath}")
            return

        target = None

        # STRATEGY 1: Look for ID="result" (Best Case)
        target = soup.find(id="result")

        # STRATEGY 2: Look for known background colors (Result Boxes)
        if not target:
            target = soup.find("div", class_="bg-emerald-50")
        if not target:
            target = soup.find("div", class_="bg-blue-50")
        if not target:
            target = soup.find("div", class_="bg-slate-50")

        # STRATEGY 3: THE ULTIMATE FALLBACK (Find "Calculate" Button)
        if not target:
            # Find any button with "Calculate" text
            calc_btn = soup.find("button", string=lambda t: t and "Calculate" in t)
            if calc_btn:
                # We usually want to inject AFTER the button's container, not inside the button
                # Go up to the parent DIV of the button
                target = calc_btn.find_parent("div")
                # If that parent is tiny (just a wrapper), go up one more level
                if target and len(target.text) < 50: 
                    target = target.parent

        if not target:
            print(f"⚠️  FAILED: Could not find ANY anchor in: {filepath}")
            return

        # Inject Buttons AFTER the target found
        new_tag = BeautifulSoup(BUTTONS_HTML, "html.parser")
        target.insert_after(new_tag)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(str(soup.prettify()))
            
        print(f"✅ Injected into: {filepath} (Anchor: {target.name})")

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    print("--- Injecting Buttons (Final Attempt) ---")
    for root, dirs, files in os.walk(ROOT_DIR):
        if "css" in dirs: dirs.remove("css")
        if "js" in dirs: dirs.remove("js")
        if "blog" in dirs: dirs.remove("blog")
        
        if "index.html" in files:
            inject_buttons(os.path.join(root, "index.html"))

if __name__ == "__main__":
    main()