// File: /renocalc-visuals.js

document.addEventListener('DOMContentLoaded', () => {
    initCostEstimator();
});

// ==========================================
// FEATURE 4: COST ESTIMATOR (Money Only)
// ==========================================
function initCostEstimator() {
    const btnGroup = document.getElementById('static-pro-actions');
    
    // We observe the "Save/PDF" button group. When it appears, we inject the Cost tool.
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.classList.contains('hidden') === false) {
                injectCostWidget();
            }
        });
    });

    if (btnGroup) {
        observer.observe(btnGroup, { attributes: true, attributeFilter: ['class'] });
    }
}

function injectCostWidget() {
    // Prevent duplicate injection
    if (document.getElementById('cost-estimator-widget')) return;

    const btnGroup = document.getElementById('static-pro-actions');
    if (!btnGroup) return;

    // 1. Try to find the Quantity from the result box
    let quantity = 0;
    let unitName = "Unit";
    
    // Look at the box directly above our buttons
    const resultBox = btnGroup.previousElementSibling;
    if (resultBox) {
        // Find the biggest number (Result)
        const bigNum = resultBox.querySelector('.text-4xl, .text-3xl');
        if (bigNum) {
            // Remove commas and convert to number
            quantity = parseFloat(bigNum.innerText.replace(/,/g, '').trim());
            
            // Try to find the label (Unit name)
            const label = bigNum.nextElementSibling;
            if (label) unitName = label.innerText;
        }
    }

    // If we couldn't find a quantity, abort (don't show the widget)
    if (!quantity || quantity === 0) return;

    // 2. Build the Cost Widget HTML
    const widget = document.createElement('div');
    widget.id = 'cost-estimator-widget';
    widget.className = 'mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg animate-fade-in';
    widget.innerHTML = `
        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            <i class="fa-solid fa-coins text-yellow-500 mr-1"></i> Cost Estimator
        </h4>
        <div class="flex items-center gap-3">
            <div class="flex-1">
                <label class="block text-[10px] text-slate-500 mb-1">Price per ${unitName}</label>
                <div class="relative">
                    <span class="absolute left-3 top-2 text-slate-400">$</span>
                    <input type="number" id="user-price-input" class="w-full pl-6 pr-2 py-1.5 text-sm border border-slate-300 rounded focus:border-blue-500 outline-none" placeholder="0.00">
                </div>
            </div>
            <div class="flex-none pt-4 text-slate-300"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="flex-1">
                <label class="block text-[10px] text-slate-500 mb-1">Total Estimated Cost</label>
                <div class="text-lg font-black text-slate-800" id="total-cost-display">$0.00</div>
            </div>
        </div>
    `;

    // 3. Inject it BEFORE the Save buttons
    btnGroup.parentNode.insertBefore(widget, btnGroup);

    // 4. Add Logic
    const input = document.getElementById('user-price-input');
    const display = document.getElementById('total-cost-display');

    input.addEventListener('input', (e) => {
        const price = parseFloat(e.target.value);
        if (!isNaN(price)) {
            const total = (price * quantity).toFixed(2);
            display.innerText = `$${Number(total).toLocaleString()}`;
            display.classList.add('text-emerald-600');
        } else {
            display.innerText = "$0.00";
            display.classList.remove('text-emerald-600');
        }
    });
}