// File: /load-related.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INJECT PINTEREST (With Camouflage & Cleanup)
    if (window.location.pathname.includes('/blog/')) {
        initPinterestSystem();
    }

    // 2. SIDEBAR BUILDER
    const container = document.getElementById('related-sidebar');
    
    // Safety Check: If data is missing, stop (don't crash)
    if (!container || typeof allArticles === 'undefined' || typeof allCalculators === 'undefined') return;

    // Detect Context
    const path = window.location.pathname; 
    // Flexible matching to find which tool we are currently viewing (if any)
    const currentTool = allCalculators.find(calc => path.includes(calc.url.replace(/^\/|\/$/g, ''))); 
    
    // Default to 'interior' if no specific category found
    const category = currentTool ? currentTool.category : 'interior';
    const currentId = currentTool ? currentTool.id : '';

    // Data Filtering
    // Get 3 articles from the same category
    const relatedBlogs = allArticles.filter(art => art.category === category).slice(0, 3);
    // Get 5 tools from the same category (excluding the current one)
    const relatedTools = allCalculators
        .filter(c => c.category === category && c.id !== currentId)
        .slice(0, 5);

    // Build HTML
    let html = `
        <div class="sticky top-24 space-y-8">
            
            <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                
                <div class="mb-4 pb-4 border-b border-slate-100" id="weather-widget">
                    <p class="text-xs text-slate-400 animate-pulse">Loading Local Weather...</p>
                </div>

                <div>
                    <h4 class="font-bold text-slate-900 text-[10px] uppercase tracking-widest mb-3 flex items-center justify-between">
                        <span><i class="fa-solid fa-box-archive text-blue-600 mr-1"></i> Saved Projects</span>
                        <button onclick="localStorage.removeItem('reno_projects'); renderProjectBin()" class="text-slate-300 hover:text-red-500 text-[9px]">Clear</button>
                    </h4>
                    <div id="project-bin-list" class="space-y-2">
                        </div>
                </div>
            </div>

            <div class="pl-6 border-l border-slate-200">
                <h3 class="font-bold text-slate-900 mb-5 flex items-center text-xs uppercase tracking-widest text-slate-400">
                    <i class="fa-solid fa-book-open text-blue-600 mr-2"></i> Related Guides
                </h3>
                <div class="space-y-6">
    `;

    relatedBlogs.forEach(art => {
        html += `
            <a href="/blog/${art.category}/${art.fileName}" class="group block">
                <div class="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 mb-3 shadow-sm border border-slate-100 relative">
                    <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                </div>
                <h4 class="font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition text-sm">
                    ${art.title}
                </h4>
                <p class="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wide">${art.date}</p>
            </a>
        `;
    });

    html += `
                </div>
            </div>

            <div class="pl-6 border-l border-slate-200">
                <h3 class="font-bold text-slate-900 mb-5 flex items-center text-xs uppercase tracking-widest text-slate-400">
                    <i class="fa-solid fa-calculator text-blue-600 mr-2"></i> More ${category} Tools
                </h3>
                <ul class="space-y-2">
    `;

    relatedTools.forEach(tool => {
        const colorMap = {
            rose: 'text-rose-600 bg-rose-50', orange: 'text-orange-600 bg-orange-50',
            blue: 'text-blue-600 bg-blue-50', teal: 'text-teal-600 bg-teal-50',
            indigo: 'text-indigo-600 bg-indigo-50', emerald: 'text-emerald-600 bg-emerald-50',
            amber: 'text-amber-600 bg-amber-50', cyan: 'text-cyan-600 bg-cyan-50',
            red: 'text-red-600 bg-red-50', stone: 'text-stone-600 bg-stone-50'
        };
        const style = colorMap[tool.color] || 'text-blue-600 bg-blue-50';
        
        // Ensure URL starts with a slash
        let cleanUrl = tool.url.startsWith('/') ? tool.url : '/' + tool.url;

        html += `
            <li>
                <a href="${cleanUrl}" class="flex items-center group py-2 hover:bg-slate-50 -mx-2 px-2 rounded-lg transition">
                    <span class="w-8 h-8 rounded-md flex items-center justify-center mr-3 ${style} shadow-sm group-hover:scale-110 transition">
                        <i class="fa-solid ${tool.icon} text-xs"></i>
                    </span>
                    <span class="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition">
                        ${tool.title}
                    </span>
                </a>
            </li>
        `;
    });

    html += `
                </ul>
                <a href="/#${category}" class="inline-flex items-center mt-6 text-xs font-bold text-blue-600 hover:text-blue-800 transition">
                    View All ${category} Tools <i class="fa-solid fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    `;

    container.innerHTML = html;
});


// --- THE CAMOUFLAGE & KILL SYSTEM (Pinterest) ---
function initPinterestSystem() {
    // 1. INJECT CSS CAMOUFLAGE
    const style = document.createElement('style');
    style.innerHTML = `
        /* HIDE if Extension Flag is present on BODY or HTML */
        body[data-pinterest-extension-installed] span[data-pin-log="button_pinit_floating"],
        html[data-pinterest-extension-installed] span[data-pin-log="button_pinit_floating"] {
            display: none !important;
        }

        /* CAMOUFLAGE: Force our button to standard Extension Position */
        span[data-pin-log="button_pinit_floating"] {
            top: 20px !important;
            left: 20px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
            z-index: 2147483640 !important; /* High Z-index */
        }
    `;
    document.head.appendChild(style);

    // 2. LOAD SCRIPT
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    script.src = "//assets.pinterest.com/js/pinit.js";
    script.setAttribute('data-pin-hover', 'true');
    script.setAttribute('data-pin-tall', 'true');
    script.setAttribute('data-pin-round', 'true');
    document.body.appendChild(script);

    // 3. THE CLEANUP CREW
    const cleanup = () => {
        const hasExtensionFlag = document.body.getAttribute('data-pinterest-extension-installed') || 
                                 document.documentElement.getAttribute('data-pinterest-extension-installed');
        
        if (hasExtensionFlag) {
            const myButtons = document.querySelectorAll('span[data-pin-log="button_pinit_floating"]');
            myButtons.forEach(btn => btn.style.display = 'none');
            console.log("Pinterest Extension detected. Website buttons hidden.");
        }
    };

    setTimeout(cleanup, 1000);
    setTimeout(cleanup, 2000);
    setTimeout(cleanup, 4000);
}