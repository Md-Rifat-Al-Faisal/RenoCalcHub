// File: /renocalc-pro.js

document.addEventListener('DOMContentLoaded', () => {
    initWeather();
    renderProjectBin();
    initButtonToggler();
});

// --- 1. TOGGLER ---
function initButtonToggler() {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && 
           (e.target.innerText.toLowerCase().includes('calculate') || e.target.type === 'submit')) {
            setTimeout(() => {
                const btnGroup = document.getElementById('static-pro-actions');
                if (btnGroup) btnGroup.classList.remove('hidden');
            }, 200);
        }
    });
}

// --- 2. SNAPSHOT ENGINE (The "Digital Twin") ---
function getFullPageSnapshot() {
    // A. FIND THE CALCULATOR CARD
    // We look for the main white box that holds the calculator. 
    // This is usually the parent of our button group.
    const btnGroup = document.getElementById('static-pro-actions');
    let card = btnGroup ? btnGroup.closest('.bg-white') : null;

    // Fallback: Look for standard container classes if button method fails
    if (!card) {
        card = document.querySelector('.bg-white.rounded-xl') || 
               document.querySelector('.bg-white.shadow-sm') || 
               document.querySelector('article');
    }

    if (!card) return null;

    // B. CLONE IT
    const clone = card.cloneNode(true);

    // C. FREEZE THE INPUTS (Crucial: This bakes your numbers into the HTML)
    const originalInputs = card.querySelectorAll('input, select, textarea');
    const clonedInputs = clone.querySelectorAll('input, select, textarea');

    originalInputs.forEach((orig, i) => {
        const copy = clonedInputs[i];
        if (!copy) return;

        if (orig.tagName === 'SELECT') {
            const idx = orig.selectedIndex;
            if (idx !== -1) {
                copy.options[idx].setAttribute('selected', 'selected');
                // Also set value explicitly for some browsers
                copy.setAttribute('value', orig.value);
            }
        } else if (orig.type === 'checkbox' || orig.type === 'radio') {
            if (orig.checked) copy.setAttribute('checked', 'checked');
        } else {
            // Text/Number inputs
            copy.setAttribute('value', orig.value);
            // Force the value into the DOM 'value' property too
            copy.defaultValue = orig.value; 
        }
    });

    // D. CLEANUP (Remove the Save buttons from the snapshot so they don't appear twice)
    const junk = clone.querySelectorAll('#static-pro-actions, .hidden');
    junk.forEach(el => el.remove());

    return clone.outerHTML;
}

// --- 3. SAVE LOGIC ---
function saveProject() {
    const h1 = document.querySelector('h1');
    const title = h1 ? h1.innerText : "Renovation Project";
    
    // Capture the Full Calculator State
    const fullSnapshot = getFullPageSnapshot();

    if (!fullSnapshot) {
        alert("Could not capture calculator. Please calculate first.");
        return;
    }

    // Generate Summary for Sidebar (e.g., "594 Pavers")
    let summary = "Saved Result";
    // Create a temporary DOM to search for the big result number
    const temp = document.createElement('div');
    temp.innerHTML = fullSnapshot;
    
    // Try to find the result number
    const bigNum = temp.querySelector('.text-4xl') || temp.querySelector('.text-3xl');
    if (bigNum) {
        // Clean up text (remove newlines)
        summary = bigNum.innerText.replace(/\s+/g, ' ').trim().substring(0, 15);
    }

    const project = { 
        title, 
        snapshot: fullSnapshot, 
        summary: summary, 
        date: new Date().toLocaleDateString(), 
        url: window.location.href 
    };
    
    let projects = JSON.parse(localStorage.getItem('reno_projects') || '[]');
    projects.unshift(project);
    localStorage.setItem('reno_projects', JSON.stringify(projects));
    renderProjectBin();
    
    // Button Feedback
    const btn = document.querySelector('#static-pro-actions button');
    if(btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Saved';
        btn.classList.add('bg-emerald-900');
        setTimeout(() => { btn.innerHTML = originalHTML; btn.classList.remove('bg-emerald-900'); }, 2000);
    }
}

// --- 4. RENDER LIST (Fixes "undefined") ---
function renderProjectBin() {
    const list = document.getElementById('project-bin-list');
    if (!list) return;
    const projects = JSON.parse(localStorage.getItem('reno_projects') || '[]');
    
    if (projects.length === 0) { 
        list.innerHTML = '<p class="text-xs text-slate-400 italic text-center py-2">No projects yet.</p>'; 
        return; 
    }
    
    list.innerHTML = projects.map((p, index) => `
        <div class="border-b border-slate-100 pb-2 mb-2 last:border-0 group relative">
            <a href="${p.url}" class="font-bold text-[10px] text-slate-700 hover:text-blue-600 block pr-6 truncate">${p.title}</a>
            <div class="flex justify-between items-center mt-1">
                <span class="text-[9px] bg-slate-100 px-1 rounded text-slate-500 truncate max-w-[120px]">${p.summary}</span>
                <button onclick="printSavedProject(${index})" class="text-slate-400 hover:text-rose-600 transition" title="Print Full Report">
                    <i class="fa-solid fa-file-pdf text-xs"></i>
                </button>
            </div>
            <button onclick="deleteProject(${index})" class="absolute top-0 right-0 text-slate-300 hover:text-red-500 text-xs px-1">&times;</button>
        </div>`).join('');
}

function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem('reno_projects') || '[]');
    projects.splice(index, 1);
    localStorage.setItem('reno_projects', JSON.stringify(projects));
    renderProjectBin();
}

// --- 5. PRINT SAVED PROJECT (The "Mirror Mode") ---
function printSavedProject(index) {
    const projects = JSON.parse(localStorage.getItem('reno_projects') || '[]');
    const p = projects[index];
    if (!p) return;

    // Grab ALL styles from the current page to ensure 1:1 match
    let styles = "";
    document.querySelectorAll('link[rel="stylesheet"], style').forEach(node => {
        styles += node.outerHTML;
    });

    const printWindow = window.open('', '_blank', 'height=1000,width=900');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>${p.title}</title>
                ${styles}
                <script src="https://cdn.tailwindcss.com"><\/script>
                
                <style>
                    /* 2. Reset Body for Full Page Print */
                    body { 
                        background: white; 
                        padding: 40px; 
                        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    }
                    
                    /* 3. Container that mimics the main site wrapper */
                    .print-wrapper { 
                        max-width: 100%; 
                        width: 100%;
                        margin: 0 auto; 
                    }

                    /* 4. Header Styling */
                    .pdf-header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #f1f5f9; }
                    .pdf-header h1 { font-size: 2rem; font-weight: 800; color: #0f172a; }
                    .pdf-meta { color: #64748b; font-size: 0.875rem; margin-top: 5px; }

                    /* 5. Force Input Styling for Print */
                    /* Browsers hate printing inputs. We force them to look like clean boxes. */
                    input, select { 
                        appearance: none !important; 
                        -webkit-appearance: none !important;
                        border: 1px solid #cbd5e1 !important; 
                        background: #fff !important; 
                        color: #0f172a !important; 
                        padding: 10px !important;
                        border-radius: 6px !important;
                        width: 100% !important;
                        display: block !important;
                        opacity: 1 !important;
                        visibility: visible !important;
                    }

                    @media print {
                        body { padding: 0; margin: 0; }
                        .print-wrapper { width: 100%; max-width: none; }
                        button { display: none !important; }
                        /* Ensure background colors (like the result box) print correctly */
                        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                    }
                </style>
            </head>
            <body>
                <div class="print-wrapper">
                    <div class="pdf-header">
                        <h1>${p.title}</h1>
                        <div class="pdf-meta">Saved on ${p.date} • RenoCalcHub.com</div>
                    </div>

                    <div class="calculator-body">
                        ${p.snapshot}
                    </div>

                    <div class="mt-12 text-center text-xs text-slate-300">
                        Detailed Project Estimation
                    </div>
                </div>
                
                <script>
                    // Wait 1s for Tailwind/Styles to settle before printing
                    window.onload = function() { 
                        setTimeout(() => { window.print(); }, 1000); 
                    }
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
}

// --- 6. WEATHER & CONFIG (Unchanged) ---
async function initWeather() {
    const container = document.getElementById('weather-widget');
    if (!container) return;
    const apiKey = window.RENO_CONFIG ? window.RENO_CONFIG.WEATHER_API_KEY : '';
    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        container.innerHTML = '<p class="text-[10px] text-slate-400">Add API Key to config.js</p>';
        return;
    }
    const savedZip = localStorage.getItem('reno_weather_zip');
    if (savedZip) { fetchWeatherByZip(savedZip, apiKey); return; }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude, apiKey),
            () => showZipInput()
        );
    } else { showZipInput(); }
}
function showZipInput() {
    const w = document.getElementById('weather-widget');
    if(w) w.innerHTML = `<div class="flex gap-2"><input type="text" id="weather-zip" placeholder="Zip Code" class="w-full text-xs p-2 border border-slate-200 rounded"><button onclick="saveZip()" class="bg-blue-600 text-white text-xs px-3 rounded font-bold">Go</button></div>`;
}
function saveZip() {
    const zip = document.getElementById('weather-zip').value;
    const apiKey = window.RENO_CONFIG.WEATHER_API_KEY;
    if (zip) { localStorage.setItem('reno_weather_zip', zip); fetchWeatherByZip(zip, apiKey); }
}
async function fetchWeatherByZip(zip, apiKey) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`);
        if (!res.ok) throw new Error(); renderWeather(await res.json());
    } catch (e) { showZipInput(); }
}
async function fetchWeatherByCoords(lat, lon, apiKey) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
        renderWeather(await res.json());
    } catch (e) { showZipInput(); }
}
function renderWeather(data) {
    const temp = Math.round(data.main.temp);
    const isRain = data.weather[0].main.toLowerCase().includes('rain');
    const color = isRain || temp < 40 ? 'text-rose-600' : 'text-emerald-600';
    const icon = isRain ? 'fa-cloud-showers-heavy' : (temp < 40 ? 'fa-snowflake' : 'fa-sun');
    const status = isRain ? 'Rain Delay' : (temp < 40 ? 'Too Cold' : 'Good to Build');
    document.getElementById('weather-widget').innerHTML = `
        <div class="flex items-center justify-between">
            <div><p class="text-2xl font-black text-slate-800">${temp}°F</p><p class="text-[10px] text-slate-500 uppercase tracking-wide">${data.name}</p></div>
            <div class="text-right"><i class="fa-solid ${icon} ${color} text-xl mb-1"></i><p class="text-[10px] font-bold ${color} uppercase">${status}</p></div>
        </div>
        <button onclick="localStorage.removeItem('reno_weather_zip'); location.reload()" class="text-[10px] text-slate-300 hover:text-red-500 mt-2 w-full text-left">Change</button>`;
}
function printQuote() { window.print(); }