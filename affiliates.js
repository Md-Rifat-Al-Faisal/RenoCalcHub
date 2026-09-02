const affiliateProducts = {
    // === TOPIC 5: AC SIZING TOOLS ===
    "laser_measure": {
        name: "Bosch Blaze Pro Laser Measure",
        // Paste the standard Amazon link here for now
        url: "https://www.amazon.com/BOSCH-GLM100-23-Measure-Backlit-Display/dp/B0C76CPGC7/ref=sr_1_1_sspa?sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY", 
        description: "Stop wrestling with a floppy tape measure. Get exact room dimensions and ceiling height instantly.",
        buttonText: "See on Amazon"
    },

    // === TOPIC 4: DRYWALL TOOLS ===
    "drywall_lift": {
        name: "Troy Professional Drywall Lift",
        url: "https://www.amazon.com/Idealchoiceproduct-Drywall-Rolling-Construction-Lockable/dp/B07169HDLY/ref=sr_1_4?sr=8-4",
        description: "Essential for ceilings. Lifts 11ft sheets easily. Don't break your back trying to hold sheets up with a broom.",
        buttonText: "Check Price"
    },
    "rotozip": {
        name: "RotoZip Spiral Saw",
        url: "https://www.amazon.com/RotoZip-SS355-10-5-5-Amp-High-Speed-Spiral/dp/B000051WQX",
        description: "The cleanest way to cut out outlet boxes after hanging sheets. No measuring mistakes.",
        buttonText: "Check Price"
    },
    "t_square": {
        name: "Johnson Level 48-Inch T-Square",
        url: "https://www.amazon.com/DEWALT-DW660-Cut-Out-Rotary-Collets/dp/B000051WQX/ref=sr_1_2?sr=8-2",
        description: "The only way to get a perfectly straight clean cut across a 4-foot sheet.",
        buttonText: "Check Price"
    },
    // === TOPIC 3: INSULATION ===
    "n95_mask": {
        name: "3M Cool Flow N95 Respirator",
        url: "https://www.amazon.com/3M-8511PB1-Particulate-Respirator-10-Pack/dp/B0002YKBV2/ref=sr_1_1?sr=8-1",
        description: "Don't use a cheap paper mask. Fiberglass gets in your lungs. You need a valved N95.",
        buttonText: "Check Price"
    },
    "headlamp": {
        name: "Energizer LED Headlamp",
        url: "https://www.amazon.com/Energizer-Resistant-Headlamps-High-Performance-Emergencies/dp/B083JV9DB9/ref=sr_1_3?sr=8-3",
        description: "You need both hands to operate the blower hose. Don't try to hold a flashlight in your mouth.",
        buttonText: "Check Price"
    },
    // === TOPIC 6: WALLPAPER ===
    "tape_measure": {
        name: "Stanley FatMax Tape Measure",
        url: "https://www.amazon.com/Stanley-Tools-33-725-25-Feet-Measure/dp/B00002PV66/ref=sr_1_1?crid=129BOHD9Y46BA&dib=eyJ2IjoiMSJ9.vDByqUid4EpzDlvylTn4e-Cb4NREHv3EcogQ19R80ID0zwxnZc1QPKlpdOhRS6T-15fBVEu_ezGVDBD4hW2zt7bTk4JqgP6DC1nYu0HufJU3F3mW7-QMQak4LgvY53cw1em2f_vexcRQOcUWQryM4KDMq4LotAK6aNFFDBNUk1OXCX6RYkNHjpVaat2ZrvytDSzWMYIBDciZBdQGRaVI2414alHXR2v8M3ihMZ3Ey8qeRUJCEueYtEmUncVCb7y9X7V9-wMv1mVLR2a4dJYmac2XzXezP0-uqcGCuq-TDFc.UR1L7r4MXYeF3-uFFETwVq11c-Cx-1I4Tr8FdstASr4&dib_tag=se&keywords=Stanley%2BFatMax%2BTape%2BMeasure&qid=1766307999&sprefix=stanley%2Bfatmax%2Btape%2Bmeasure%2Caps%2C420&sr=8-1&th=1",
        description: "Standard for a reason. Stiff standout helps you measure high ceilings without the tape collapsing.",
        buttonText: "Check Price"
    },
    // === TOPIC 8: STAIRS ===
    "framing_square": {
        name: "Swanson Steel Framing Square",
        url: "https://www.amazon.com/Swanson-Tool-TA127-Aluminum-16-Inch/dp/B0008IUWDO/ref=sr_1_2?sr=8-2",
        description: "The classic steel square. Indestructible and essential for marking stringers.",
        buttonText: "Check Price"
    },
    "stair_gauges": {
        name: "Brass Stair Gauges (2-Pack)",
        url: "https://www.amazon.com/Johnson-Professional-Easy-Read-Carpenter-Square/dp/B00002NBKH/ref=sr_1_1?sr=8-1",
        description: "These little knobs lock onto your square to keep your angles perfect for every step. Best $5 you will spend.",
        buttonText: "Check Price"
    },
    // === TOPIC 9: FENCING ===
    "survey_tape": {
        name: "Surveyor's Tape Measure (300 ft)",
        url: "https://www.amazon.com/Dewalt-300-Ft-Long-Tape/dp/B01N0QWA91/ref=sr_1_3?sr=8-3",
        description: "You cannot measure an acre with a standard 25-foot tape. You need the big reel.",
        buttonText: "Check Price"
    },
    "post_hole_digger": {
        name: "Manual Post Hole Digger",
        url: "https://www.amazon.com/Digger-Plugging-Digging-Cultivating-Weeding/dp/B0DYP4DD92/ref=sr_1_2?sr=8-2",
        description: "For the few holes the machine can't reach. Get one with fiberglass handles to absorb the shock.",
        buttonText: "Check Price"
    },
    // === TOPIC 10: ROOFING ===
    "roofing_shovel": {
        name: "Bully Tools Tear-Off Shovel",
        url: "https://www.amazon.com/Bully-Tools-14-Gauge-Shingle-Fiberglass/dp/B00R7UDDEG/ref=sr_1_1?sr=8-1",
        description: "The serrated teeth rip nails out with the shingle. Essential for tear-offs.",
        buttonText: "Check Price"
    },
    "hook_blade": {
        name: "Stanley Roofing Hook Blades (50-Pack)",
        url: "https://www.amazon.com/Neiko-00512A-Utility-Wall-Mountable-Dispenser/dp/B000V5HQRE/ref=sr_1_1?sr=8-1",
        description: "Don't use straight blades on asphalt. These hook under the shingle and cut cleanly without dulling instantly.",
        buttonText: "Check Price"
    },
    // === TOPIC 11: DECKING ===
    "tape_measure": {
        name: "Stanley FatMax Tape Measure (25')",
        url: "https://www.amazon.com/Stanley-Tools-33-725-25-Feet-Measure/dp/B00002PV66/ref=sr_1_2?sr=8-2",
        description: "The pro standard. The blade extends 11 feet without snapping, so you can measure joists alone.",
        buttonText: "Check Price"
    },
    "joist_hanger": {
        name: "Simpson Strong-Tie LU28 (50-Pack)",
        url: "https://www.amazon.com/Simpson-Strong-20-Gauge-Mount-Hanger/dp/B012GWUQ2G/ref=sr_1_1?sr=8-1",
        description: "Standard face-mount hangers for 2x8 joists. Don't rely on toe-nails for structural loads.",
        buttonText: "Check Price"
    },
    // === TOPIC 12: SIDING ===
    "tape_measure_100": {
        name: "Komelon 100-Foot Reel Tape Measure",
        url: "https://www.amazon.com/Komelon-8811-Measure-Fiberglass-100-Feet/dp/B000HE8BUU/ref=sr_1_1?sr=8-1",
        description: "Essential for measuring long exterior walls accurately in one go.",
        buttonText: "Check Price"
    },
    "siding_cutter": {
        name: "Bullet Tools 13-Inch Guillotine Shear",
        url: "http://amazon.com/Replacement-Flooring-Shear-Hardended-Stainless/dp/B0FMF9D8B9/ref=sr_1_1?sr=8-1",
        description: "Cuts Hardie plank and vinyl without dust, electricity, or noise. A pro favorite.",
        buttonText: "Check Price"
    },
    // === TOPIC 13: BALUSTERS ===
    "speed_square": {
        name: "Swanson Speed Square",
        url: "https://www.amazon.com/Swanson-SW1201K-Square-Tool-without/dp/B01CI4UBN6/ref=sr_1_1?sr=8-1",
        description: "The classic tool for marking 90-degree lines on railings and 45-degree cuts for stairs.",
        buttonText: "Check Price"
    },
    // (We reuse the tape measure from Topic 11, so no new entry needed if 'tape_measure' exists)
    // === TOPIC 14: FRAMING ===
    "framing_hammer": {
        name: "Estwing E3-22S Framing Hammer",
        url: "https://www.amazon.com/Estwing-Framing-Hammer-Straight-Reduction/dp/B00002N5N4/ref=sr_1_1?sr=8-1",
        description: "The gold standard. One-piece steel construction means the head never flies off. Indestructible.",
        buttonText: "Check Price"
    },
    "chalk_line": {
        name: "Irwin Strait-Line Blue Chalk Reel",
        url: "https://www.amazon.com/IRWIN-Tools-STRAIT-LINE-Classic-IWHT48441BC/dp/B0BWL62GNJ/ref=sr_1_1?sr=8-1",
        description: "Snap your wall layout on the floor first. Blue chalk is temporary; Red chalk is permanent.",
        buttonText: "Check Price"
    },
    // === TOPIC 15: CONCRETE ===
    "concrete_mixer": {
        name: "Kushlan 3.5 Cu. Ft. Portable Cement Mixer",
        url: "https://www.amazon.com/Kushlan-600DD-Wheelbarrow-Mixer-115V/dp/B00CTC50FC/ref=sr_1_1?sr=8-1",
        description: "Direct drive motor (no belts to break). Perfect size for DIY patios. Saves your back.",
        buttonText: "Check Price"
    },
    "magnesium_float": {
        name: "Marshalltown 16-Inch Magnesium Float",
        url: "https://www.amazon.com/MARSHALLTOWN-Premier-Line-145-Magnesium/dp/B00002N5PO/ref=sr_1_1?sr=8-1",
        description: "Magnesium draws water to the surface faster than wood, giving you a smoother finish with less effort.",
        buttonText: "Check Price"
    },
    // === TOPIC 16: GRAVEL ===
    "geotextile_fabric": {
        name: "VEVOR Woven Geotextile Driveway Fabric",
        url: "https://www.amazon.com/VEVOR-Driveway-Fabric-Geotextile-Stabilization/dp/B09C1L2L4W",
        description: "Heavy duty 600lb tensile strength. Stops gravel from sinking into mud. Essential for driveways.",
        buttonText: "Check Price"
    },
    "landscape_rake": {
        name: "Midwest 36-Inch Aluminum Landscape Rake",
        url: "https://www.amazon.com/Midwest-Rake-10036-Aluminum-Landscape/dp/B00002N8OP",
        description: "Wide 36-inch head levels gravel efficiently. Lightweight aluminum prevents fatigue.",
        buttonText: "Check Price"
    },
    // === TOPIC 17: MULCH ===
    "mulch_pitchfork": {
        name: "Truper Tru Tough Spading Fork",
        url: "https://www.amazon.com/Truper-88229-Tru-Tough-Spading/dp/B000KL2V54",
        description: "A garden fork (pitchfork) is 10x easier to use than a shovel for stringy hardwood mulch.",
        buttonText: "Check Price"
    },
    "gorilla_cart": {
        name: "Gorilla Carts Heavy-Duty Dump Cart",
        url: "https://www.amazon.com/Gorilla-Carts-GOR6PS-Heavy-Duty-Capacity/dp/B01BECQA2K",
        description: "Holds 1,200 lbs and dumps with a lever. Much more stable than a wheelbarrow.",
        buttonText: "Check Price"
    },
    // === TOPIC 18: PAVER BASE ===
    "plate_compactor": {
        name: "WEN 7 HP Plate Compactor",
        url: "https://www.amazon.com/WEN-4500-Pound-Compaction-Compactor-Construction/dp/B0B49BJXXD/ref=sr_1_1?sr=8-1",
        description: "For serious hardscaping, you can't beat a mechanical compactor. Renting is fine, but owning pays off for big jobs.",
        buttonText: "Check Price"
    },
    "screed_rails": {
        name: "Charlotte Pipe 1-Inch PVC Pipe (5-Pack)",
        url: "https://www.amazon.com/CKVIHAV-Industrial-Greenhouse-Workshop-Furniture/dp/B0DWSK524B/ref=sr_1_2?sr=8-2",
        description: "The cheapest leveling tool you'll ever buy. Provides a perfect 1-inch depth gauge for sand.",
        buttonText: "Check Price"
    },
    // === TOPIC 19: RETAINING WALL ===
    "dead_blow_hammer": {
        name: "Estwing 3lb Dead Blow Hammer",
        url: "https://www.amazon.com/Estwing-Strike-Drilling-Crack-Hammer/dp/B00433SC4Q/ref=sr_1_1?sr=8-1",
        description: "Standard hammers crack concrete blocks. This rubber mallet delivers force without damage.",
        buttonText: "Check Price"
    },
    "4ft_level": {
        name: "Empire 48-Inch Box Level",
        url: "https://www.amazon.com/EMPIRE-LEVEL-48-I-Beam-Level/dp/B07VQXDC4T/ref=sr_1_2?sr=8-2",
        description: "Essential for leveling the first row. If the base isn't level, the whole wall will lean.",
        buttonText: "Check Price"
    },
    // === TOPIC 20: SOD ===
    "measuring_wheel": {
        name: "Komelon 12-Inch Measuring Wheel",
        url: "https://www.amazon.com/Komelon-MK1212-DW-Meter-Man-4-Inch-Measuring/dp/B001QTVXXM/ref=sr_1_1?sr=8-1",
        description: "Essential for measuring large, irregular yards accurately. Much faster than a tape measure.",
        buttonText: "Check Price"
    },
    "sod_knife": {
        name: "Ox Tools Serrated Sod Knife",
        url: "https://www.amazon.com/minyuexia-Insulation-11-14-Inch-Stainless-insulation/dp/B0FH9TW2M3/ref=sr_1_1?sr=8-1",
        description: "A serrated blade is critical for cutting through the thick root mat of sod rolls.",
        buttonText: "Check Price"
    },
    // === TOPIC 21: MORTAR ===
    "builders_bucket": {
        name: "Heavy Duty 3-Gallon Builders Bucket",
        url: "https://www.amazon.com/Fortiflex-CF-24-Flat-Back-Bucket/dp/B0042L07X6",
        description: "Standard measure for masonry. 4 buckets sand + 1 bucket cement = perfect mix.",
        buttonText: "Check Price"
    },
    "mortar_plasticizer": {
        name: "SikaLatex Concrete Bonding Adhesive & Plasticizer",
        url: "https://www.amazon.com/Sika-SikaLatex-Concrete-Bonding-Adhesive/dp/B000BQKGOY",
        description: "Makes the mortar creamy, buttery, and stickier. Essential for good bricklaying.",
        buttonText: "Check Price"
    },
    // === TOPIC 22: PAINT SHEEN ===
    "sanding_sponge": {
        name: "3M Fine Grit Sanding Sponge (6-Pack)",
        url: "https://www.amazon.com/3M-Designed-Features-Abrasive-CP000-6P-CC/dp/B004MW4GGQ/ref=sr_1_1?sr=8-1",
        description: "Essential for knocking down bumps before painting with Satin or Semi-Gloss.",
        buttonText: "Check Price"
    },
    "microfiber_roller": {
        name: "Purdy 3/8\" Microfiber Roller Cover",
        url: "https://www.amazon.com/Purdy-140678092-Ultra-Finish-Roller/dp/B00AGZ0P2M/ref=sr_1_1?sr=8-1",
        description: "Creates a spray-like finish. Standard rollers leave lint, which ruins glossy paint.",
        buttonText: "Check Price"
    },
    // === TOPIC 23: PAINT ESTIMATION ===
    "tape_measure": {
        name: "DeWalt Atomic 25ft Tape Measure",
        url: "https://www.amazon.com/Dewalt-Atomic-Compact-Tape-Measure/dp/B0CXF6LCQB/ref=sr_1_1?sr=8-1",
        description: "Compact but tough. Features a stiff 'standout' blade that lets you measure ceilings solo.",
        buttonText: "Check Price"
    },
    "laser_measure": {
        name: "RockSeed Laser Distance Measure (165ft)",
        url: "http://amazon.com/RockSeed-Portable-Distance-Measurement-Conversion/dp/B0DJ7JKWRZ/ref=sr_1_1?sr=8-1",
        description: "The fastest way to measure room dimensions. Just point and click to get instant length/width.",
        buttonText: "Check Price"
    },
    // === NEW CALCULATORS (Jan 2026) ===
    
    // WAINSCOTING
    "brad_nailer": {
        name: "DEWALT 18GA Brad Nailer Kit",
        url: "https://www.amazon.com/DEWALT-DWFP12231-Pneumatic-18-Gauge-Nailer/dp/B000X1V8K2",
        description: "Essential for attaching MDF trim without splitting it. Lightweight and reliable.",
        buttonText: "See Price"
    },
    "laser_level": {
        name: "Huepar Self-Leveling Green Laser",
        url: "https://www.amazon.com/Huepar-Self-Leveling-Alignment-Line-B03CG/dp/B07GFY1K9G",
        description: "Don't trust a bubble level for long walls. This shoots a perfectly straight line around the room.",
        buttonText: "Check Price"
    },

    // GUTTERS
    "gutter_guards": {
        name: "Raptor Gutter Guard (Stainless Micro-Mesh)",
        url: "https://www.amazon.com/Raptor-Gutter-Guard-Contractor-Grade/dp/B079KV626Z",
        description: "The pro choice. Stainless steel mesh keeps out pine needles and roof grit. Fits any 5in gutter.",
        buttonText: "Check Price"
    },
    "splash_block": {
        name: "Decorative Splash Block (24-Inch)",
        url: "https://www.amazon.com/Suncast-SB24-Rain-Splash-Block/dp/B000BO9PCY",
        description: "Prevents foundation erosion by directing water away from your house.",
        buttonText: "View Item"
    },

    // COUNTERTOPS
    "granite_sealer": {
        name: "Granite Gold Sealer Spray",
        url: "https://www.amazon.com/Granite-Gold-Sealer-Spray-Preserve/dp/B00065W7Z4",
        description: "Essential maintenance. Seals natural stone countertops against oil, coffee, and wine stains.",
        buttonText: "Check Price"
    },

    // LIGHTING
    "led_dimmer": {
        name: "Lutron Diva LED+ Dimmer Switch",
        url: "https://www.amazon.com/Lutron-Diva-Dimmer-Bulbs-DVCL-153P-WH/dp/B004C2WZS0",
        description: "The gold standard. Prevents LED flickering and buzzing. Works with almost all wafer lights.",
        buttonText: "See Details"
    },
    "hole_saw": {
        name: "Adjustable Drywall Circle Cutter",
        url: "https://www.amazon.com/Klein-Tools-53731-Adjustable-Quick-Cutter/dp/B0033Z26NM",
        description: "Cut perfect holes for 4-inch or 6-inch lights without the dust mess.",
        buttonText: "Check Price"
    },

    // DUMPSTER / DEMO
    "demo_bags": {
        name: "Contractor Trash Bags (42 Gallon)",
        url: "https://www.amazon.com/Contractor-Bags-Heavy-Duty-Trash/dp/B07B6JL1QJ",
        description: "3 mil thick. These won't rip when filled with drywall chunks or old tiles.",
        buttonText: "Buy Bulk"
    },

    // LUMBER
    "speed_square": {
        name: "Swanson Speed Square Layout Tool",
        url: "https://www.amazon.com/Swanson-Tool-S0101-Speed-Square/dp/B00002255O",
        description: "The most important tool for marking lumber cuts. Indestructible.",
        buttonText: "Check Price"
    }
};

// --- FUNCTION 1: Render a "Recommended Tool" Box ---
// Usage in HTML: <div id="any-id"></div> 
// Usage in Script: renderProductCard('key_name', 'any-id');
function renderProductCard(key, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const product = affiliateProducts[key];
    if (!product) {
        console.warn(`Product key "${key}" not found.`);
        return;
    }

    container.innerHTML = `
        <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl my-8 relative overflow-hidden group hover:shadow-md transition-all">
            <div class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                Recommended Tool
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-6">
                <div class="flex-grow text-center sm:text-left">
                    <h4 class="font-black text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        <i class="fa-solid fa-star text-yellow-500 mr-2 text-sm"></i>${product.name}
                    </h4>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ${product.description}
                    </p>
                    <a href="${product.url}" target="_blank" rel="nofollow sponsored" class="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 px-6 rounded-full text-xs uppercase tracking-widest transition shadow-sm hover:shadow-md">
                        ${product.buttonText} <i class="fa-brands fa-amazon ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// --- FUNCTION 2: Auto-Linker for Text ---
// Usage: <a href="#" data-amz="drywall_lift">Click here</a>
// This runs automatically when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('[data-amz]');
    links.forEach(link => {
        const key = link.getAttribute('data-amz');
        if (affiliateProducts[key]) {
            link.href = affiliateProducts[key].url;
            link.target = "_blank";
            link.rel = "nofollow sponsored"; // Good for SEO even without affiliate tag
        }
    });
});