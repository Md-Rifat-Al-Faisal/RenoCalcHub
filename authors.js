const authors = {
    elena: {
        name: "Elena Rossi",
        role: "Master Finishes Specialist",
        // Precise icon requested
        icon: '<i class="fa-solid fa-paint-roller text-rose-600 text-xl"></i>', 
        bgClass: "bg-rose-100",
        avatar: "https://ui-avatars.com/api/?name=Elena+Rossi&background=0D8ABC&color=fff"
    },
    sam: {
        name: "Sam Al-Fayed",
        role: "Landscape Specialist",
        // Precise icon requested
        icon: '<i class="fa-solid fa-trowel text-emerald-600 text-xs"></i>',
        bgClass: "bg-emerald-100",
        avatar: "https://ui-avatars.com/api/?name=Sam+Al-Fayed&background=166534&color=fff"
    },
    miller: {
        name: "Jack Miller",
        role: "Structural Contractor",
        // Precise icon requested
        icon: '<i class="fa-solid fa-helmet-safety text-orange-600 text-xs"></i>',
        bgClass: "bg-orange-100",
        avatar: "https://ui-avatars.com/api/?name=Jack+Miller&background=334155&color=fff"
    }
};

/**
 * Injects the full author block HTML into a container.
 * @param {string} key - 'elena', 'sam', or 'miller'
 * @param {string} date - The publish date (e.g., 'Dec 19, 2025')
 * @param {string} containerId - The ID of the div where this should appear
 */
function renderAuthor(key, date, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const author = authors[key];
    if (!author) {
        console.error(`Author key "${key}" not found.`);
        return;
    }

    // The standardized HTML Template
    container.innerHTML = `
        <div class="flex items-center justify-center space-x-4 border-t border-b border-slate-100 py-6 mt-6">
            <div class="h-14 w-14 rounded-full ${author.bgClass} flex items-center justify-center ring-4 ring-white shadow-md border border-slate-100 overflow-hidden">
                <div class="flex items-center justify-center w-full h-full">
                    ${author.icon}
                </div>
            </div>
            
            <div class="text-left">
                <div class="font-bold text-slate-900 text-base leading-tight">By ${author.name}</div>
                <div class="text-slate-500 text-xs uppercase tracking-wide font-medium">${author.role}</div>
            </div>

            <div class="h-10 w-px bg-slate-200 mx-2"></div>

            <div class="text-slate-400 text-sm font-medium">
                <i class="fa-regular fa-calendar-check mr-1.5"></i> ${date}
            </div>
        </div>
    `;
}