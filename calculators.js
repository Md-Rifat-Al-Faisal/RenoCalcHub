const allCalculators = [
    // --- INTERIOR ---
    { id: "paint", title: "Paint Calculator", url: "./paint/", category: "interior", icon: "fa-fill-drip", color: "rose", desc: "Walls, ceilings, trim & primer." },
    { id: "drywall", title: "Drywall Estimator", url: "./drywall/", category: "interior", icon: "fa-hammer", color: "orange", desc: "Sheets, mud, tape & screws." },
    { id: "flooring", title: "Flooring Calculator", url: "./flooring/", category: "interior", icon: "fa-ruler-combined", color: "blue", desc: "Laminate, vinyl & hardwood boxes." },
    { id: "tile", title: "Tile & Grout", url: "./tile/", category: "interior", icon: "fa-layer-group", color: "teal", desc: "Tiles, mortar bags & grout lbs." },
    { id: "wallpaper", title: "Wallpaper", url: "./wallpaper/", category: "interior", icon: "fa-scroll", color: "indigo", desc: "Rolls & paste with pattern repeat." },
    { id: "ac", title: "AC BTU Sizer", url: "./ac/", category: "interior", icon: "fa-temperature-arrow-down", color: "cyan", desc: "Cooling power for specific rooms." },
    { id: "insulation", title: "Attic Insulation", url: "./insulation/", category: "interior", icon: "fa-temperature-arrow-up", color: "pink", desc: "Blown-in bags or fiberglass rolls." },
    { id: "wainscoting", title: "Wainscoting", url: "./wainscoting/", category: "interior", icon: "fa-ruler-vertical", color: "rose", desc: "Board & batten spacing layout." },
    { id: "countertop", title: "Countertops", url: "./countertop/", category: "interior", icon: "fa-kitchen-set", color: "emerald", desc: "Square footage & cost estimator." },
    { id: "lighting", title: "Recessed Lights", url: "./lighting/", category: "interior", icon: "fa-lightbulb", color: "amber", desc: "Grid layout & spacing calculator." },

    // --- EXTERIOR ---
    { id: "roofing", title: "Roofing", url: "./roofing/", category: "exterior", icon: "fa-house", color: "red", desc: "Shingle bundles, squares & pitch." },
    { id: "siding", title: "Siding", url: "./siding/", category: "exterior", icon: "fa-house-user", color: "sky", desc: "Vinyl or Cement squares & cartons." },
    { id: "deck", title: "Decking", url: "./deck/", category: "exterior", icon: "fa-hammer", color: "amber", desc: "Boards & fasteners (Wood/Composite)." },
    { id: "fence", title: "Fencing", url: "./fence/", category: "exterior", icon: "fa-bars", color: "emerald", desc: "Pickets, posts, rails & concrete." },
    { id: "framing", title: "Wall Framing", url: "./framing/", category: "exterior", icon: "fa-ruler-combined", color: "amber", desc: "Studs, plates & headers (16\" OC)." },
    { id: "stairs", title: "Stair Calculator", url: "./stairs/", category: "exterior", icon: "fa-stairs", color: "indigo", desc: "Rise, run & stringer length." },
    { id: "baluster", title: "Baluster Spacing", url: "./baluster/", category: "exterior", icon: "fa-ruler-vertical", color: "cyan", desc: "Even layout for deck railings." },
    { id: "gutters", title: "Rain Gutters", url: "./gutters/", category: "exterior", icon: "fa-cloud-rain", color: "blue", desc: "Downspouts, hangers & guards." },
    { id: "lumber", title: "Lumber (Board Ft)", url: "./lumber/", category: "exterior", icon: "fa-tree", color: "amber", desc: "Volume calc for hardwoods." },
    { id: "dumpster", title: "Dumpster Size", url: "./dumpster/", category: "exterior", icon: "fa-trash-can", color: "orange", desc: "Construction debris estimator." },

    // --- LANDSCAPE ---
    { id: "concrete", title: "Concrete", url: "./concrete/", category: "landscape", icon: "fa-trowel", color: "stone", desc: "Slabs, post holes & 80lb bags." },
    { id: "pavers", title: "Pavers & Patio", url: "./pavers/", category: "landscape", icon: "fa-road", color: "orange", desc: "Bricks, sand & gravel base." },
    { id: "gravel", title: "Gravel Driveway", url: "./gravel/", category: "landscape", icon: "fa-truck-monster", color: "stone", desc: "Tons of stone & truckloads." },
    { id: "retaining", title: "Retaining Wall", url: "./retaining-wall/", category: "landscape", icon: "fa-layer-group", color: "stone", desc: "Blocks, caps & drainage stone." },
    { id: "brick", title: "Brick Masonry", url: "./brick/", category: "landscape", icon: "fa-dungeon", color: "red", desc: "Bricks & mortar bags for walls." },
    { id: "mulch", title: "Mulch & Soil", url: "./mulch/", category: "landscape", icon: "fa-leaf", color: "green", desc: "Bags or bulk yards for gardens." },
    { id: "grass", title: "Grass Seed & Sod", url: "./grass/", category: "landscape", icon: "fa-seedling", color: "green", desc: "Seed pounds or sod pallets." }
];