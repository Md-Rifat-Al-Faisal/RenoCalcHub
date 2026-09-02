const allArticles = [
    {
        id: "vinyl-siding-cost-calculator-2026",
        title: "Vinyl Siding Cost Calculator 2026: Price Per Square",
        category: "exterior",
        author: "miller",
        date: "Jan 19, 2026",
        image: "https://placehold.co/1200x600?text=Vinyl+Siding+Cost",
        fileName: "vinyl-siding-cost-calculator-2026.html",
        description: "Breakdown of vinyl siding costs per square, J-channel pricing, and the hidden costs of insulated siding in 2026.",
        isNew: true
    },
    // 1. NEW: The 200 Amp Article (Manual Entry)
    {
        id: "cost-to-install-a-200-amp-service-panel",
        title: "Cost to Install a 200 Amp Service Panel (2026 Guide)",
        category: "interior",
        author: "miller",
        date: "Jan 13, 2026",
        image: "https://res.cloudinary.com/renocalchub/image/upload/f_auto,q_auto/v1768675112/Electrician-wiring-a-new-residential-breaker-panel_jqrqxu.png",
        fileName: "cost-to-install-a-200-amp-service-panel.html",
        description: "Breakdown of labor, permits, and materials for upgrading to 200 Amps. Learn why overhead vs. underground service changes the price.",
        isNew: true
    },
    // 2. RESTORED: Your Previous Articles (Clean Titles)
    {
        id: "mulch-calculator-guide",
        title: "How Much Mulch Do I Need? Bulk vs. Bag",
        category: "landscape",
        author: "sam",
        date: "Dec 23, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766423154/large-pile-dark-hardwood-mulch-driveway-delivery-wheelbarrow_ouwkee.png",
        fileName: "mulch-calculator-guide.html",
        description: "Sam Al-Fayed explains the math behind mulch. Learn why 13.5 bags equals 1 yard, why the 3-inch depth rule matters, and which wood types prevent fungus.",
        isNew: true
    },
    {
        id: "gravel-driveway-cost",
        title: "Gravel Driveway Cost: #3 vs #57 Stone",
        category: "landscape",
        author: "sam",
        date: "Dec 23, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766415460/grey-crushed-stone-driveway-installation-modern-farmhouse_idf7dg.png",
        fileName: "gravel-driveway-cost-guide.html",
        description: "Sam Al-Fayed explains gravel driveway costs per sq ft. Why #3 stone base matters, and why round river rock is a mistake.",
        isNew: true
    },
    {
        id: "concrete-bag-calculator",
        title: "How Many 80lb Bags for a 10x10 Slab?",
        category: "landscape",
        author: "sam",
        date: "Dec 22, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766416073/backyard-concrete-slab-construction-site-forms-materials_uaqbyx.png",
        fileName: "concrete-bag-calculator-guide.html",
        description: "Sam Al-Fayed breaks down the math for a 10x10 concrete slab. Learn why you need 60+ bags, why wheelbarrows fail, and the 'Grade Tax' rule.",
        isNew: false
    },
    {
        id: "shed-framing-guide",
        title: "Framing a Shed: A Stud Calculation Guide",
        category: "exterior",
        author: "miller",
        date: "Dec 22, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766401960/realistic-wooden-shed-frame-construction-backyard_sydp2b.png",
        fileName: "shed-framing-guide.html",
        description: "Jack Miller explains shed framing math. Learn why 16-inch spacing is better than 24-inch, how to build a California Corner, and the double top plate rule.",
        isNew: false
    },
    {
        id: "baluster-spacing-code",
        title: "Baluster Spacing Code: The 4-Inch Rule",
        category: "exterior",
        author: "miller",
        date: "Dec 22, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766398595/deck-railing-safety-check-with-red-sphere-baluster-gap_v7ihjr.jpg",
        fileName: "baluster-spacing-code-guide.html",
        description: "Jack Miller explains the IRC 4-inch sphere rule. Learn how to calculate even baluster spacing and avoid failing inspection on stairs.",
        isNew: false
    },
    {
        id: "siding-waste-calculator",
        title: "Siding Waste Factor: Vinyl vs. Hardie",
        category: "exterior",
        author: "miller",
        date: "Dec 21, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766390561/contractor-cutting-grey-vinyl-siding-with-guillotine-shear-on-jobsite_zu6ojd.jpg",
        fileName: "siding-waste-calculator-guide.html",
        description: "Jack Miller explains how to calculate siding waste for gables vs. rectangles. Learn why 'Dye Lots' matter and why subtracting windows is a mistake.",
        isNew: false
    },
    {
        id: "drywall-estimation",
        title: "How to Estimate Drywall: The Hanging Math",
        category: "interior",
        author: "miller",
        date: "Dec 20, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766175686/contractor-hanging-drywall-horizontally-with-screw-gun_murobg.png",
        fileName: "how-to-estimate-drywall.html",
        description: "Stop buying 4x8 sheets. Jack Miller explains why 12-footers save labor and how to calculate screws per sheet.",
        isNew: false
    },
    {
        id: "kitchen-cabinets-2025",
        title: "Cost to Paint Kitchen Cabinets in 2025",
        category: "interior",
        author: "elena",
        date: "Dec 20, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766160408/hvlp-paint-sprayer-masked-kitchen-cabinets-renovation_kwebhx.png",
        fileName: "cost-to-paint-kitchen-cabinet.html",
        description: "Elena Rossi breaks down the 2025 pros/cons, moisture resistance levels, and the installation math.",
        isNew: false
    },
    {
        id: "ac-sizing-guide",
        title: "AC BTU Sizing: Why Bigger Isn't Better",
        category: "interior",
        author: "elena",
        date: "Dec 20, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766211574/modern-living-room-split-system-air-conditioner-quiet-comfort_s6ymr5.png",
        fileName: "ac-btu-sizing.html",
        description: "Elena Rossi explains the 'Short Cycle' trap and how to calculate BTUs based on ceiling height and sun exposure.",
        isNew: false
    },
    {
        id: "laminate-vs-vinyl",
        title: "Laminate vs. Vinyl Plank: Which is Better?",
        category: "interior",
        author: "elena",
        date: "Dec 19, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766136984/laminate-vs-vinyl-plank-comparison-workspace_kfawro.png",
        fileName: "laminate-vs-vinyl-plank.html",
        description: "Don't let moisture destroy your floor. We compare the core differences between Laminate and LVP.",
        isNew: false
    },
    {
        id: "paver-sand-vs-gravel",
        title: "Paver Sand vs. Gravel Base Guide",
        category: "landscape",
        author: "sam",
        date: "Dec 19, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766469484/paver-patio-installation-cross-section-layers-gravel-sand-base_rgogf3.png",
        fileName: "paver-sand-vs-gravel-guide.html",
        description: "Sam Al-Fayed explains the correct paver layers. Learn the 6-inch gravel / 1-inch sand rule and the PVC screed trick.",
        isNew: false
    },
    {
        id: "insulation-comparison",
        title: "Blown-In vs. Rolled Insulation: Which is Cheaper?",
        category: "exterior",
        author: "miller",
        date: "Dec 19, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766219574/attic-insulation-comparison-fiberglass-batts-vs-blown-in-cellulose_kuuyd8.png",
        fileName: "blown-vs-rolled-insulation.html",
        description: "Jack Miller compares the cost and R-value of Fiberglass Batts vs. Cellulose. Learn why 'voids' destroy efficiency.",
        isNew: false
    },
    {
        id: "wallpaper-repeat",
        title: "Wallpaper Pattern Repeat: The 'Waste' Math",
        category: "interior",
        author: "elena",
        date: "Dec 19, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766240086/male-contractor-hanging-wallpaper-home-renovation-project_icekqd.png",
        fileName: "wallpaper-pattern-repeat.html",
        description: "Elena Rossi explains why 'Drop Match' kills your budget and how to calculate the extra rolls needed for a perfect seam.",
        isNew: false
    },
    {
        id: "stair-stringer-guide",
        title: "How to Calculate Stair Stringers: The Easy Way",
        category: "exterior",
        author: "miller",
        date: "Dec 18, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766242412/installed-deck-stair-stringers-framing-on-concrete-pad_zddhzj.jpg",
        fileName: "stair-stringer-calculator-guide.html",
        description: "Jack Miller explains how to cut stair stringers, use brass gauges, and avoid the common 'drop' mistake.",
        isNew: false
    },
    {
        id: "fence-cost-acre",
        title: "Cost to Fence 1 Acre: Wood vs. Chain Link",
        category: "exterior",
        author: "miller",
        date: "Dec 18, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766243492/racked-vs-stepped-fence-installation-on-slope-diagram_p6p1cv.jpg",
        fileName: "cost-to-fence-1-acre.html",
        description: "Jack Miller compares 835 linear feet of wood vs. chain link. Learn about hidden costs and the 'Woven Wire' compromise.",
        isNew: false
    },
    {
        id: "shingles-per-square",
        title: "How Many Shingle Bundles Per Square?",
        category: "exterior",
        author: "miller",
        date: "Dec 18, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766248453/gritty-roofer-installing-shingles-with-nail-gun-at-sunset_nc31pa.jpg",
        fileName: "shingles-per-square-calculator.html",
        description: "Jack Miller explains the '3 Bundles per Square' rule, pitch multipliers, and the hidden accessories for a waterproof roof.",
        isNew: false
    },
    {
        id: "deck-joist-spacing",
        title: "Deck Joist Spacing: 16\" vs 24\" OC Explained",
        category: "exterior",
        author: "miller",
        date: "Dec 18, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766251278/diagonal-deck-board-span-over-16-inch-joists-diagram_eapk3r.jpg",
        fileName: "deck-joist-spacing-guide.html",
        description: "Jack Miller explains why 16-inch OC is the standard, why 24-inch feels bouncy, and when you need 12-inch spacing.",
        isNew: false
    },
    {
        id: "retaining-wall-calculator-guide",
        title: "Retaining Wall Calculator & Guide",
        category: "landscape",
        author: "sam",
        date: "Dec 17, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766476751/retaining-wall-installation-trench-base-course-and-drainage-pipe_lasvmi.png",
        fileName: "retaining-wall-calculator-guide.html",
        description: "Sam Al-Fayed explains retaining wall math. Learn why you must bury the first row, how to calculate Face Feet, and the 12-inch drainage gravel rule.",
        isNew: false
    },
    {
        id: "sod-pallet-calculator",
        title: "How Many Sod Pallets for 1/4 Acre?",
        category: "landscape",
        author: "sam",
        date: "Dec 17, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766479845/forklift-unloading-sod-pallets-residential-installation-site_iko25v.png",
        fileName: "sod-pallet-calculator-guide.html",
        description: "Sam Al-Fayed explains sod logistics. Learn why a 1/4 acre needs 20+ pallets and why you must rototill before installing.",
        isNew: false
    },
    {
        id: "brick-mortar-ratio-guide",
        title: "Brick Mortar Ratio: The 1:4 Rule",
        category: "landscape",
        author: "sam",
        date: "Dec 17, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766487191/close-up-masonry-trowel-holding-fresh-mortar-peak-brick-construction_e378ae.png",
        fileName: "brick-mortar-ratio-guide.html",
        description: "Sam Al-Fayed teaches the exact mortar ratio for garden walls. Learn why you need Type N cement, soft sand, and plasticizer.",
        isNew: false
    },
    {
        id: "paint-sheen-guide",
        title: "Flat vs. Satin vs. Eggshell: Sheen Guide",
        category: "interior",
        author: "elena",
        date: "Dec 17, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/v1766494642/high-contrast-paint-sheen-comparison-white-stripes-on-white-wall_ixaqui.png",
        fileName: "paint-sheen-guide.html",
        description: "Elena explains the exact sheen to use for every room. Learn why flat hides flaws and why you need satin for bathrooms.",
        isNew: false
    },
    {
        id: "paint-estimation-guide",
        title: "How to Estimate Paint Like a Pro",
        category: "interior",
        author: "elena",
        date: "Dec 15, 2025",
        image: "https://res.cloudinary.com/renocalchub/image/upload/f_auto,q_auto/v1765991216/Professional_paint_supplies-and_calculator_esmipb.png",
        fileName: "how-to-estimate-paint-guide.html",
        description: "Elena explains how to calculate paint gallons accurately. Learn the 'Perimeter Formula', why you must subtract windows, and the 10% waste rule.",
        isNew: false
    }
];