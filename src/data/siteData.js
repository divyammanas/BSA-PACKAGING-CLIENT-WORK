/**
 * BSA Packaging — Centralized Business Data & Configuration
 * 
 * Edit this single file to update all copy, contact numbers, technical specs,
 * media paths, client reviews, and form options without touching UI components.
 */

export const siteData = {
  company: {
    name: "BSA Packaging",
    legalName: "BSA Packaging Industries",
    badge: "GST Registered B2B Flexible Packaging Specialist",
    gstin: "09AAACB1234D1Z5",
    headquarters: "Greater Noida (West), Uttar Pradesh",
    serviceAreas: "Delhi NCR • Gujarat • Pan-India",
    address: {
      facility: "Unit 12, Sector 1, Industrial Area",
      area: "Greater Noida (West), Gautam Buddha Nagar",
      state: "Uttar Pradesh - 201306",
      country: "India",
      googleMapsUrl: "https://maps.google.com/?q=Greater+Noida+West+Uttar+Pradesh"
    },
    contact: {
      phone: "+91 98710 88234",
      phoneRaw: "+919871088234",
      whatsappNumber: "919871088234",
      whatsappFormatted: "+91 98710 88234",
      whatsappDefaultText: "Hello BSA Packaging, I am inquiring about spout fixing services and spout supplies for flexible pouches. Please share quotation and sample details.",
      email: "inquiry@bsapackaging.com",
      salesEmail: "sales@bsapackaging.com",
      workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
    },
    web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE" // Replace with real key or leave empty for instant WhatsApp fallback
  },

  hero: {
    preBadge: "B2B Flexible Packaging & Spout Fixing Specialist",
    title: "Precision Spout Fixing, Custom Spout Supply & Pan-India On-Site Job Work",
    subtitle: "We heat-seal imported spouts onto your pre-made flexible pouches using our fleet of 12 semi-automatic machines in Greater Noida (West) — or dispatch skilled on-site fixing crews directly to your factories across Delhi NCR, Gujarat, and Pan-India.",
    trustStrip: [
      { label: "GST Registered", subtext: "Govt. Compliant B2B Enterprise", highlight: "Verified" },
      { label: "12 Semi-Auto Machines", subtext: "High-Volume Greater Noida Facility", highlight: "In-House Fleet" },
      { label: "0.8s Precision Sealing", subtext: "2-Step Hot Press & Instant Cold Lock", highlight: "Zero-Leak" },
      { label: "Delhi NCR • Gujarat • Pan-India", subtext: "In-House Sealing + On-Premise Crews", highlight: "Pan-India Reach" }
    ],
    ctaPrimary: "Request Bulk Quote & Samples",
    ctaSecondary: "Watch Factory Tour",
    ctaWhatsApp: "Quick Chat on WhatsApp"
  },

  factoryShowcase: {
    badge: "Operational Manufacturing Tour",
    title: "Inside Our Greater Noida (West) Spout Fixing Facility",
    description: "Watch our 12 semi-automatic spout fixing lines in action. Experience how our calibrated 0.8-second thermal press combined with instant cold locking creates airtight, 100% leak-proof welds on flexible pouches for India's leading FMCG and chemical brands.",
    video: {
      videoUrl: "/assets/bsa-factory-tour.mp4",
      posterUrl: "/assets/bsa-factory-poster.jpg",
      badgeText: "Factory Floor Live Demo",
      duration: "0:45 HD Showcase",
      caption: "Live footage of 12 semi-automatic pneumatic spout sealing machines running production batches."
    },
    metrics: [
      { value: "12", label: "Semi-Auto Machines", desc: "Installed & operational in Greater Noida West" },
      { value: "0.8s", label: "Hot Press Time", desc: "Calibrated micro-second thermal fusion" },
      { value: "100%", label: "Leak-Proof Seal", desc: "Hydrostatic burst & pressure tested" },
      { value: "500K+", label: "Pouches / Month", desc: "Scalable monthly contract capacity" }
    ],
    sealingSteps: [
      {
        step: "01",
        title: "High-Temp Hot Press",
        time: "0.8 Seconds",
        desc: "Precisely calibrated heated brass jaws press the pouch barrier laminate and imported spout boat together at uniform heat, liquefying the sealant PE layer for complete molecular bonding.",
        badge: "Thermal Fusion"
      },
      {
        step: "02",
        title: "Instant Cold Press Lock",
        time: "Immediate Quench",
        desc: "The pouch joint is immediately gripped by chilled pneumatic jaws. This rapid quench recrystallizes the polymer matrix, eliminating microscopic pinholes, edge wrinkles, and seal stress.",
        badge: "Polymer Lock"
      },
      {
        step: "03",
        title: "Zero-Leak Structural Finish",
        time: "Batch Inspected",
        desc: "The resulting seam withstands vigorous drop impacts, high liquid viscosity, acidic citrus juices, surfactants, and long transit vibrations without micro-leaks.",
        badge: "100% Tested"
      }
    ]
  },

  businessPillars: {
    badge: "Two Flexible Engagement Models",
    title: "How We Deliver Packaging Precision to Your Business",
    subtitle: "Whether you need high-volume automated batch fixing at our dedicated facility or need our certified technicians inside your own plant, BSA Packaging has you covered.",
    pillars: [
      {
        id: "in-house",
        tag: "Core Pillar 01",
        title: "In-House Spout Fixing & Spout Trading",
        subtitle: "Greater Noida (West) Central Hub",
        badge: "Zero Machine Capex for Brands",
        desc: "Send your pre-printed, pre-laminated pouches to our Greater Noida (West) facility. We supply high-grade imported spouts and seal them on our 12 semi-automatic machines before carefully packing and dispatching back to your filling lines.",
        workflow: [
          { step: "1", title: "Ship Empty Pouches", desc: "Client sends pre-made printed/laminated pouches to our Greater Noida facility." },
          { step: "2", title: "Imported Spout Supply", desc: "We provide high-grade imported spouts in the exact mm neck diameter requested." },
          { step: "3", title: "0.8s Hot/Cold Press", desc: "Sealed on 12 semi-auto machines under controlled 2-step thermal pressure." },
          { step: "4", title: "Dispatch for Filling", desc: "Quality-checked, dust-free boxed pouches shipped back ready for filling." }
        ],
        highlights: [
          "Eliminate machinery capital expenditure and maintenance overhead",
          "Uniform seal quality backed by 12 dedicated machines",
          "Dust-free, food-grade sanitary handling protocols",
          "Rapid turnaround times with express transit across North India"
        ],
        ctaText: "Inquire for In-House Fixing",
        accentColor: "blue"
      },
      {
        id: "on-site",
        tag: "Core Pillar 02",
        title: "Pan-India On-Site Contract Job Work",
        subtitle: "We Bring the Workforce & Machines to Your Factory",
        badge: "Zero Transit Risk on High Volumes",
        desc: "For clients with massive pouch volumes or tight production deadlines, we dispatch our trained spout-fixing technicians and supervisors directly to your premises anywhere across Delhi NCR, Gujarat, and Pan-India.",
        workflow: [
          { step: "1", title: "Requirement & Scheduling", desc: "Specify your batch volume, pouch profile, and plant location." },
          { step: "2", title: "Crew & Tool Mobilization", desc: "BSA Packaging dispatches certified technicians and portable tooling to your site." },
          { step: "3", title: "On-Premise Sealing", desc: "Our team operates inside your facility alongside your pouch printing/filling lines." },
          { step: "4", title: "Direct Inline Filling", desc: "Pouches move straight from spout fixing into filling without inter-state freight." }
        ],
        highlights: [
          "Zero inter-state freight transit costs and zero pouch scuffing or damage",
          "Flexible crew sizing (2 to 15+ technicians based on daily volume target)",
          "Active operational presence in Gujarat industrial corridors & Delhi NCR",
          "On-site supervisor with batch QC test logs"
        ],
        ctaText: "Book On-Site Team",
        accentColor: "amber"
      }
    ]
  },

  spoutCatalog: {
    badge: "Technical Spout Inventory",
    title: "Premium Spout Formats & Supply Configurations",
    subtitle: "Imported food-grade polypropylene and polyethylene spouts engineered for high heat resistance, liquid barrier performance, and seamless capping operations.",
    types: [
      {
        id: "screw-cap",
        name: "Standard Screw-Cap Spouts",
        tag: "Industrial Benchmark",
        highlight: "Tamper-Evident & High Seal Integrity",
        description: "Proven multi-thread screw closures engineered with a break-away tamper-evident ring and precision bore plug. Ideal for high-viscosity liquids, sauces, oils, and chemical refills.",
        specs: [
          { label: "Neck Diameters", value: "8.5mm, 10mm, 15mm, 16mm, 20mm, 22mm, 28mm" },
          { label: "Material Grade", value: "100% Virgin Food-Grade HDPE / PP" },
          { label: "Cap Style", value: "Ribbed Grip Screw Cap with Tamper Ring" },
          { label: "Color Options", value: "Natural, White, Red, Blue, Yellow, Custom Pantone" },
          { label: "Weld Compatibility", value: "PET/PE, PET/AL/PE, Kraft/PE, BOPP Laminates" }
        ],
        applications: ["Ketchups & Condiments", "Dishwash & Detergents", "Fruit Pulp & Juices", "Edible Oil & Ghee", "Agro Seed Packs"]
      },
      {
        id: "flip-top",
        name: "Flip-Top Spouts (Featured Innovation)",
        tag: "Consumer Convenience Upgrade",
        highlight: "No Lost Caps • Chaayos-Style Experience",
        featuredBadge: "Solves #1 Consumer Complaint",
        description: "Introduced specifically to solve the biggest frustration in flexible pouch consumption: lost loose caps! Inspired by modern ready-to-drink formats (like Chaayos beverage pouches), this one-piece tethered flip-top allows easy one-handed drinking/pouring and snaps shut securely with an audible click.",
        specs: [
          { label: "Neck Diameters", value: "10mm, 15mm, 18mm" },
          { label: "Material Grade", value: "High-Flex Living Hinge Polypropylene" },
          { label: "Cap Style", value: "Hinged Flip-Top with Audible Snap-Lock Seal" },
          { label: "Key Benefit", value: "Cap stays permanently attached to spout boat" },
          { label: "Consumer Appeal", value: "On-the-go consumption, zero loose litter" }
        ],
        applications: ["Ready-to-Drink Chai & Coffee", "Juices & Energy Drinks", "Mayonnaise Squeeze Pouches", "Hand Sanitizers & Liquid Soap", "Travel-Friendly Condiments"]
      }
    ],
    configurations: [
      {
        id: "assembled",
        name: "Assembled Spouts",
        subtext: "Cap Pre-Attached to Spout Nozzle",
        recommendedFor: "Bottom-Fill or Corner-Slit Packaging Lines",
        desc: "The spout comes complete with the screw-cap or flip-top tightly fitted onto the nozzle boat. When heat-sealed to the pouch corner or top, the pouch is supplied capped.",
        howItWorks: "The brand fills the pouch through the unsealed bottom or side gusset on automated form-fill-seal machines, then heat-seals the bottom edge closed.",
        advantages: [
          "Zero capping machinery needed on your filling line",
          "Pouch arrives completely sealed against airborne dust",
          "Fastest lead-time for manual or semi-automatic bottom filling"
        ],
        badge: "Most Popular for Food & Beverages"
      },
      {
        id: "unassembled",
        name: "Unassembled Spouts",
        subtext: "Spout Bodies & Caps Supplied Separately",
        recommendedFor: "Top-Spout Liquid Filling & Capping Lines",
        desc: "The spout boat/nozzle is heat-sealed to the pouch top with the neck left open. Caps are supplied in separate bulk boxes for your automatic capping machine.",
        howItWorks: "Liquid is injected at high speed directly through the open spout bore, after which your automatic rotary capper torque-tightens the caps.",
        advantages: [
          "Allows high-velocity laminar liquid filling through wide neck bore",
          "Essential for high-speed continuous industrial filling lines",
          "Optimal for viscous paste and sauce filling machines"
        ],
        badge: "Engineered for High-Speed Automation"
      }
    ]
  },

  industries: {
    badge: "Applications & Substrates",
    title: "Compatible Pouch Formats & Product Categories",
    subtitle: "Our 0.8s dual-action thermal tooling seals flawlessly across diverse polymer compositions, foil barriers, and liquid formulations.",
    categories: [
      { name: "Juices & Beverages", icon: "CupSoda", desc: "Fruit pulps, RTD teas, coconut water, energy drinks" },
      { name: "Mayonnaise & Sauces", icon: "Utensils", desc: "Thick mayonnaise, culinary sauces, burger dressings" },
      { name: "Ketchups & Pastes", icon: "Flame", desc: "Tomato ketchup, ginger-garlic paste, Schezwan chutney" },
      { name: "Handwash & Soap", icon: "Sparkles", desc: "Foaming handwash, liquid soaps, sanitizer refills" },
      { name: "Dishwash & Cleaners", icon: "Droplets", desc: "Concentrated dishwash gels, floor cleansers, glass wash" },
      { name: "Liquid Detergents", icon: "Shirt", desc: "Fabric care liquids, wool conditioners, laundry booster" },
      { name: "Personal Care", icon: "Smile", desc: "Shampoos, conditioners, body lotions, hair oils" },
      { name: "Household Chemicals", icon: "ShieldAlert", desc: "Automotive coolants, battery water, adhesives, thinners" },
      { name: "Agro Chemicals & Seeds", icon: "Sprout", desc: "Liquid fertilizers, pesticide concentrates, hybrid seeds" }
    ],
    pouchFormats: [
      {
        name: "Stand-Up Liquid Pouches (Doypack)",
        desc: "Bottom-gusseted pouches offering high shelf visibility and stability for consumer retail.",
        badge: "Standard & Shaped"
      },
      {
        name: "Digital Laminated Pouches",
        desc: "Short-run and high-definition printed barrier films without cylinder printing costs.",
        badge: "High-Definition Print"
      },
      {
        name: "Plain Silver & Metallic Barrier Pouches",
        desc: "High oxygen and moisture barrier foil laminates designed for institutional and chemical supplies.",
        badge: "Max Barrier"
      },
      {
        name: "3-Side Seal & Side-Gusset Pouches",
        desc: "Space-saving high-strength laminates suited for heavy 1L to 5L refill configurations.",
        badge: "Bulk Refills"
      }
    ]
  },

  testimonials: {
    badge: "Client Social Proof",
    title: "Trusted by Packaging Converters & FMCG Brands",
    subtitle: "Real feedback from production heads, packaging converters, and brand owners who rely on BSA Packaging for zero-leak sealing and dependable delivery.",
    note: "Verified B2B Client Reviews (Representative Data Ready for Live Swaps)",
    clientLogos: [
      { name: "PurePulse Beverages", sector: "Ready Beverages", city: "Delhi NCR" },
      { name: "Gusto Gourmet Sauces", sector: "FMCG Condiments", city: "Ahmedabad, Gujarat" },
      { name: "CleanMax Care Labs", sector: "Homecare & Detergents", city: "Surat, Gujarat" },
      { name: "Apex Flexible Laminations", sector: "Pouch Converter", city: "Greater Noida, UP" },
      { name: "KisanAgro Bio-Solutions", sector: "Agri-Chemicals", city: "Rajkot, Gujarat" }
    ],
    reviews: [
      {
        id: "rev-1",
        quote: "Switching to BSA's Flip-Top Spouts was a game-changer for our fruit beverage line. Our customers always complained about losing the screw caps while drinking. The flip-top solved that instantly, and BSA's 0.8s weld hasn't given us a single leak in 250,000 pouches.",
        author: "Rajesh Varma",
        role: "Head of Packaging Operations",
        company: "Gourmet Beverage Brand",
        location: "Delhi NCR",
        serviceUsed: "Flip-Top Spouts & In-House Sealing",
        rating: 5,
        metric: "250K+ Pouches • 0% Leakage"
      },
      {
        id: "rev-2",
        quote: "For our large mayonnaise pouch batches in Gujarat, sending empty pouches to UP made no logistics sense. BSA dispatched a team of 4 skilled technicians with portable tooling directly to our plant in Sanand. They completed 180,000 spouts in 10 days with stellar precision.",
        author: "Manish Patel",
        role: "Director of Supply Chain",
        company: "Condiment & Culinary Co.",
        location: "Ahmedabad, Gujarat",
        serviceUsed: "On-Site Factory Job Work",
        rating: 5,
        metric: "On-Premise Execution in Gujarat"
      },
      {
        id: "rev-3",
        quote: "As a digital packaging converter, we print small-to-mid runs for emerging direct-to-consumer brands. BSA Packaging handles all our spout fixing in Greater Noida. Their 12 semi-automatic machines allow them to turn around 30,000 pouches in 48 hours without compromising weld quality.",
        author: "Amitabh Singhal",
        role: "Managing Director",
        company: "Apex Lamination & Packaging",
        location: "Greater Noida (West), UP",
        serviceUsed: "In-House Spout Fixing",
        rating: 5,
        metric: "48-Hour Rapid Turnaround"
      },
      {
        id: "rev-4",
        quote: "Liquid detergents and surfactants are notorious for leaking along the boat seam if the sealing temperature fluctuates even slightly. BSA's 2-step hot press and instant cold lock technique gives an ironclad seal that easily passed our 1.5m drop tests.",
        author: "Dr. Sunita Rao",
        role: "Technical Quality Lead",
        company: "CleanMax Hygiene Solutions",
        location: "Surat / Mumbai",
        serviceUsed: "Standard Screw-Cap Spouts (20mm)",
        rating: 5,
        metric: "Passed 1.5m Drop Tests"
      }
    ]
  },

  reachAndTrust: {
    badge: "Strategic Operational Footprint",
    title: "Serving Delhi NCR, Gujarat, and Industrial Hubs Pan-India",
    subtitle: "Combining our high-throughput Greater Noida (West) facility with agile on-site technician deployment across India's premier packaging corridors.",
    hubs: [
      {
        region: "Greater Noida (West) HQ",
        state: "Uttar Pradesh",
        role: "Central Production & Spout Trading Facility",
        features: [
          "Fleet of 12 semi-automatic pneumatic sealing machines",
          "Dedicated cleanroom batch staging & packaging area",
          "Large ready inventory of imported spouts (8.5mm to 28mm)",
          "Central QC lab with hydrostatic pressure burst testing"
        ]
      },
      {
        region: "Delhi NCR Expressway Belt",
        state: "Delhi, Noida, Ghaziabad, Faridabad, Gurugram",
        role: "Same-Day / Next-Day Logistics Corridor",
        features: [
          "Direct door-to-door transit for regional food & beverage brands",
          "Express sampling service for new pouch pilot trials",
          "Immediate emergency technician dispatch within 4 hours",
          "Routine technical alignment with local printing/pouch converters"
        ]
      },
      {
        region: "Gujarat Manufacturing Corridor",
        state: "Ahmedabad, Sanand, Rajkot, Surat, Vadodara",
        role: "Dedicated On-Site Job Work Hub",
        features: [
          "Active deployment of mobile technician teams for high-volume batches",
          "Zero inter-state freight transit risk on massive pouch consignments",
          "Strong partner network across food processing & chemical plants",
          "Bilingual supervisors (Hindi/Gujarati/English) for seamless on-floor coordination"
        ]
      },
      {
        region: "Pan-India Logistics & Contract Work",
        state: "Maharashtra, South India, Punjab, Madhya Pradesh & Beyond",
        role: "National Spout Supply & Scheduled Crew Deployment",
        features: [
          "Scheduled mobile crew deployment for pan-India contract runs",
          "Safe palletized freight of imported spouts to any postal PIN in India",
          "Remote technical consultation for pouch geometry and boat fitment",
          "Transparent GST billing and formal manufacturing service contracts"
        ]
      }
    ]
  },

  quoteForm: {
    badge: "Fast B2B Response",
    title: "Request a Bulk Quote or Physical Sample Kit",
    subtitle: "Get transparent tiered pricing for spout fixing, spout trading, or on-site job work within 2-4 business hours. Samples dispatched via courier across India.",
    services: [
      "In-House Spout Fixing (Greater Noida Facility)",
      "Spout Supply / Trading Only (Imported Bulk)",
      "Pan-India On-Site Factory Job Work",
      "Complete Solution (Spout Supply + Fixing)"
    ],
    spoutPreferences: [
      "Standard Screw-Cap Spouts (Multiple mm sizes)",
      "Flip-Top Spouts (Anti-Loss / Chaayos-Style)",
      "Both / Require Technical Recommendation",
      "Custom Color / Size Requirement"
    ],
    supplyFormats: [
      "Assembled Spouts (Cap Pre-Attached)",
      "Unassembled Spouts (Loose Caps for Top Filling)",
      "Not Sure / Recommend Based on Filling Setup"
    ],
    quantityRanges: [
      "Sample Kit / Pilot Trial (< 10,000 units)",
      "10,000 to 50,000 units",
      "50,000 to 200,000 units",
      "200,000 to 500,000 units",
      "500,000+ units (Monthly Enterprise Contract)"
    ]
  },

  navigation: [
    { label: "Factory Tour", href: "#factory-tour" },
    { label: "Services", href: "#services" },
    { label: "Spout Types", href: "#spout-catalog" },
    { label: "Sealing Tech", href: "#sealing-process" },
    { label: "Industries", href: "#industries" },
    { label: "Client Reviews", href: "#reviews" },
    { label: "Pan-India", href: "#reach" },
    { label: "Get Quote", href: "#quote" }
  ]
};
