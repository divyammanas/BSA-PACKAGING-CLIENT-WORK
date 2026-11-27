/**
 * BSA Packaging — Centralized Business Data & Configuration
 *
 * Edit this single file to update copy, contact numbers, technical specs,
 * media paths, client reviews, and form options without modifying components.
 */

export const siteData = {
  company: {
    name: "BSA Packaging",
    legalName: "BSA Packaging",
    badge: "GST Registered B2B Flexible Packaging Specialist",
    gstin: "09AAACB1234D1Z5",
    headquarters: "Greater Noida (West), Uttar Pradesh",
    serviceAreas: "Delhi NCR • Gujarat • Pan-India",
    address: {
      facility: "Khasra no 832, Greater Noida W Rd",
      area: "Khera Choganpur, Chauganpur, Knowledge Park V, Bisrakh Jalalpur",
      state: "Greater Noida, Uttar Pradesh 201306",
      full: "Khasra no 832, Greater Noida W Rd, Khera Choganpur, Chauganpur, Knowledge Park V, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 201306",
      country: "India",
      googleMapsUrl: "https://maps.app.goo.gl/JaiadmsL8spYnFdc6",
      coordinates: {
        lat: 28.5509,
        lng: 77.4594
      }
    },
    contact: {
      phone: "+91 98682 26908",
      phoneRaw: "+919868226908",
      whatsappNumber: "919868226908",
      whatsappFormatted: "+91 98682 26908",
      whatsappDefaultText: "Hello BSA Packaging, I am inquiring about spout fixing services and spout supplies for flexible pouches. Please share quotation and sample details.",
      email: "inquiry@bsapackaging.com",
      salesEmail: "sales@bsapackaging.com",
      workingHours: "Mon – Sat: 9:00 AM – 7:00 PM IST"
    },
    web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
  },

  hero: {
    preBadge: "Flexible Packaging & Spout Fixing Specialist",
    title: "Precision Spout Fixing, Custom Spout Supply & Pan-India Job Work",
    subtitle: "We heat-seal imported food-grade spouts onto your pre-made laminated pouches using 12 semi-automatic machines in Greater Noida (West) — or deploy trained fixing crews directly to your factories across Delhi NCR, Gujarat, and Pan-India.",
    trustStrip: [
      { label: "GST Registered", subtext: "Compliant B2B Enterprise", highlight: "Verified" },
      { label: "12 Semi-Auto Machines", subtext: "Greater Noida (W) Facility", highlight: "In-House Fleet" },
      { label: "0.8s Precision Sealing", subtext: "Hot Press & Cold Lock", highlight: "Leak-Proof" },
      { label: "Delhi NCR • Gujarat • Pan-India", subtext: "In-House + On-Site Crews", highlight: "Pan-India Reach" }
    ],
    ctaPrimary: "Request Bulk Quote",
    ctaSecondary: "Watch Factory Tour",
    ctaWhatsApp: "WhatsApp Us"
  },

  factoryShowcase: {
    badge: "Manufacturing Facility",
    title: "Inside Our Greater Noida (West) Spout Fixing Unit",
    description: "View our 12 semi-automatic spout fixing machines in operation. Our calibrated 0.8-second hot press paired with an instant cold press lock produces consistent, leak-proof welds on flexible pouches for FMCG and industrial brands.",
    video: {
      videoUrl: "/assets/bsa-factory-tour.mp4",
      posterUrl: "/assets/bsa-factory-poster.jpg",
      badgeText: "Factory Floor Tour",
      duration: "0:45 Showcase",
      caption: "Footage of our 12 semi-automatic pneumatic spout sealing machines handling production batches."
    },
    metrics: [
      { value: "12", label: "Semi-Auto Machines", desc: "Operational in Greater Noida (W)" },
      { value: "0.8s", label: "Hot Press Cycle", desc: "Calibrated thermal fusion" },
      { value: "100%", label: "Leak-Tested Seams", desc: "Hydrostatic pressure checked" },
      { value: "500K+", label: "Monthly Capacity", desc: "Scalable contract throughput" }
    ],
    sealingSteps: [
      {
        step: "01",
        title: "High-Temp Hot Press",
        time: "0.8 Seconds",
        desc: "Calibrated heated jaws press the pouch sealant layer and imported spout boat together under uniform pressure for 0.8 seconds, achieving full thermal fusion.",
        badge: "Thermal Fusion"
      },
      {
        step: "02",
        title: "Instant Cold Press Lock",
        time: "Immediate Quench",
        desc: "The welded joint is immediately gripped by chilled pneumatic jaws to set and stabilize the polymer seam, preventing pinholes, edge wrinkles, and warping.",
        badge: "Polymer Lock"
      },
      {
        step: "03",
        title: "Leak-Proof Structural Finish",
        time: "Batch Inspected",
        desc: "Each batch is checked to withstand drop impacts, viscous pastes, acidic beverages, surfactants, and long-haul transit without seam failure.",
        badge: "Quality Checked"
      }
    ]
  },

  businessPillars: {
    badge: "Service Models",
    title: "Two Flexible Ways We Work With Your Plant",
    subtitle: "Send your pouches to our Greater Noida (West) unit for end-to-end spout supply and sealing, or bring our trained technicians directly onto your factory floor.",
    pillars: [
      {
        id: "in-house",
        tag: "Service 01",
        title: "In-House Spout Fixing & Spout Supply",
        subtitle: "Greater Noida (West) Facility",
        badge: "Zero Machine Capex",
        desc: "Send your pre-printed, laminated pouches to our Knowledge Park V facility in Greater Noida (West). We supply imported spouts in your required neck diameter, seal them across our 12 semi-automatic machines, and dispatch finished pouches ready for filling.",
        workflow: [
          { step: "1", title: "Send Empty Pouches", desc: "Dispatch pre-made printed or plain pouches to our Greater Noida facility." },
          { step: "2", title: "Imported Spout Supply", desc: "We supply virgin food-grade spouts in your specified mm diameter." },
          { step: "3", title: "0.8s Hot & Cold Press", desc: "Sealed on our 12 semi-automatic machines using a 2-step thermal weld." },
          { step: "4", title: "Dispatch for Filling", desc: "Quality-inspected pouches packed neatly in cartons and returned for filling." }
        ],
        highlights: [
          "Avoid machinery capital expenditure and maintenance overhead",
          "Consistent weld strength across 12 dedicated sealing lines",
          "Clean, organized batch handling for food and homecare products",
          "Dependable turnaround times across Delhi NCR and North India"
        ],
        ctaText: "Inquire for In-House Fixing"
      },
      {
        id: "on-site",
        tag: "Service 02",
        title: "Pan-India On-Site Contract Job Work",
        subtitle: "Trained Technicians at Your Premises",
        badge: "Zero Transit Damage",
        desc: "For high-volume runs or tight production schedules, BSA Packaging dispatches experienced spout-fixing technicians and supervisors directly to your plant across Delhi NCR, Gujarat, and other Indian industrial hubs.",
        workflow: [
          { step: "1", title: "Volume & Schedule", desc: "Confirm pouch volume, spout specification, and factory location." },
          { step: "2", title: "Team Mobilization", desc: "We dispatch trained operators and sealing tooling directly to your plant." },
          { step: "3", title: "On-Premise Fixing", desc: "Our team works inside your facility alongside your converting or filling lines." },
          { step: "4", title: "Direct Inline Filling", desc: "Sealed pouches move straight to filling without interstate back-and-forth freight." }
        ],
        highlights: [
          "Eliminates two-way interstate freight costs and transit scuffing",
          "Scalable technician teams sized to match your daily production targets",
          "Regular on-site operations across Gujarat (Sanand, Ahmedabad, Surat, Rajkot) & NCR",
          "Dedicated floor supervision with periodic leak-test checks"
        ],
        ctaText: "Request On-Site Job Work"
      }
    ]
  },

  spoutCatalog: {
    badge: "Product Range",
    title: "Spout Formats & Supply Configurations",
    subtitle: "Imported virgin polypropylene and polyethylene spouts engineered for reliable thermal welding, chemical resistance, and clean consumer dispensing.",
    types: [
      {
        id: "screw-cap",
        name: "Standard Screw-Cap Spouts",
        tag: "Standard Industrial",
        highlight: "Tamper-Evident & High Seal Integrity",
        description: "Multi-thread screw closures fitted with a break-away tamper-evident ring and tight bore seal. Widely used for sauces, viscous pastes, fruit juices, detergents, and agro-chemical packs.",
        specs: [
          { label: "Neck Diameters", value: "8.5mm, 10mm, 15mm, 16mm, 20mm, 22mm, 28mm" },
          { label: "Material Grade", value: "Virgin Food-Grade HDPE / PP" },
          { label: "Cap Design", value: "Ribbed Screw Cap with Tamper-Evident Ring" },
          { label: "Color Options", value: "Natural, White, Red, Blue, Yellow, Custom Colors" },
          { label: "Film Compatibility", value: "PET/PE, PET/AL/PE, Kraft/PE, BOPP Laminates" }
        ],
        applications: ["Ketchups & Sauces", "Dishwash & Detergents", "Juices & Pulps", "Edible Oil", "Seeds & Agro Packs"]
      },
      {
        id: "flip-top",
        name: "Flip-Top Spouts",
        tag: "Anti-Loss Convenience",
        highlight: "No Lost Caps • Chaayos-Style Design",
        featuredBadge: "Solves Loose Cap Loss",
        description: "Designed specifically to eliminate a common consumer complaint with liquid pouches: losing small loose screw caps. Similar to modern ready-to-drink beverage pouches (such as Chaayos), the tethered hinged cap stays attached to the nozzle and snaps shut securely.",
        specs: [
          { label: "Neck Diameters", value: "10mm, 15mm, 18mm" },
          { label: "Material Grade", value: "Flexible Living-Hinge Polypropylene (PP)" },
          { label: "Cap Design", value: "One-Piece Tethered Flip-Top with Snap Seal" },
          { label: "Key Advantage", value: "Cap stays attached — zero misplaced caps" },
          { label: "Best Suited For", value: "On-the-go beverages, condiments, travel packs" }
        ],
        applications: ["RTD Chai & Coffee", "Juices & Beverages", "Mayonnaise Pouches", "Handwash & Sanitizers", "Condiments"]
      }
    ],
    configurations: [
      {
        id: "assembled",
        name: "Assembled Spouts",
        subtext: "Cap or Flip-Top Pre-Attached to Nozzle",
        recommendedFor: "Bottom-Fill or Side-Gusset Filling Lines",
        desc: "Supplied with the screw cap or flip-top already fitted onto the spout body. Once welded to the pouch, your team fills from the open bottom or side seam and seals it shut.",
        howItWorks: "Your filling line fills through the unsealed bottom edge, then completes a standard straight heat seal.",
        advantages: [
          "No separate rotary capping machine required on your floor",
          "Pouch interior stays protected from dust during transit",
          "Straightforward workflow for semi-automatic and manual bottom filling"
        ],
        badge: "For Bottom-Fill Workflows"
      },
      {
        id: "unassembled",
        name: "Unassembled Spouts",
        subtext: "Nozzle Bodies & Caps Supplied Separately",
        recommendedFor: "Automated Top-Spout Filling & Capping Lines",
        desc: "The spout nozzle is heat-sealed into the pouch with the bore left open, while matching caps or flip-tops are delivered separately in bulk cartons for your capping machine.",
        howItWorks: "Liquid is dosed directly through the open spout neck at speed before your automatic capper applies and torques the cap.",
        advantages: [
          "Supports high-speed automated top-fill liquid dosing",
          "Ideal for thick pastes, sauces, and high-throughput lines",
          "Clean integration with rotary capping heads"
        ],
        badge: "For Top-Spout Filling Lines"
      }
    ]
  },

  industries: {
    badge: "Applications",
    title: "Compatible Pouches & Industries We Serve",
    subtitle: "Our 2-step thermal and cold press tooling accommodates standard laminated structures, digital short runs, and metallic barrier films across food, homecare, and industrial segments.",
    categories: [
      { name: "Juices & Beverages", icon: "CupSoda", desc: "Fruit pulps, RTD tea/coffee, energy drinks, coconut water" },
      { name: "Mayonnaise & Sauces", icon: "Utensils", desc: "Mayonnaise, culinary dressings, marinades, dips" },
      { name: "Ketchups & Pastes", icon: "Flame", desc: "Tomato ketchup, ginger-garlic paste, culinary purees" },
      { name: "Handwash & Soaps", icon: "Sparkles", desc: "Liquid handwash, soap refills, sanitizers" },
      { name: "Dishwash & Cleaners", icon: "Droplets", desc: "Dishwash gels, surface cleaners, glass cleaners" },
      { name: "Liquid Detergents", icon: "Shirt", desc: "Laundry detergents, fabric conditioners, liquid wash" },
      { name: "Personal Care", icon: "Smile", desc: "Shampoos, lotions, hair oils, body wash refills" },
      { name: "Household Chemicals", icon: "ShieldAlert", desc: "Automotive coolants, distilled water, adhesives" },
      { name: "Agro Chemicals & Seeds", icon: "Sprout", desc: "Liquid bio-fertilizers, agri-concentrates, hybrid seeds" }
    ],
    pouchFormats: [
      {
        name: "Stand-Up Liquid Pouches (Doypack)",
        desc: "Bottom-gusseted retail pouches designed for stable shelf display.",
        badge: "Standard & Shaped"
      },
      {
        name: "Digital Laminated Pouches",
        desc: "Short-run and multi-SKU digital printed barrier films.",
        badge: "Short-Run Ready"
      },
      {
        name: "Plain Silver & Metallic Pouches",
        desc: "High-barrier aluminum foil laminates for industrial & institutional refills.",
        badge: "High Barrier"
      },
      {
        name: "3-Side Seal & Bulk Refill Pouches",
        desc: "Heavy-duty laminates suited for 500ml to 5L refill packs.",
        badge: "Bulk Refill"
      }
    ]
  },

  testimonials: {
    badge: "Client Feedback",
    title: "Trusted by Packaging Converters & FMCG Brands",
    subtitle: "Feedback from production managers, packaging converters, and brand teams working with BSA Packaging across Delhi NCR, Gujarat, and Pan-India.",
    note: "Representative Client Testimonials (Editable in siteData.js)",
    clientLogos: [
      { name: "PurePulse Beverages", sector: "Ready Beverages", city: "Delhi NCR" },
      { name: "Gusto Gourmet Sauces", sector: "Condiments", city: "Ahmedabad, Gujarat" },
      { name: "CleanMax Care Labs", sector: "Homecare", city: "Surat, Gujarat" },
      { name: "Apex Flexible Laminations", sector: "Pouch Converter", city: "Greater Noida, UP" },
      { name: "KisanAgro Bio-Solutions", sector: "Agri-Inputs", city: "Rajkot, Gujarat" }
    ],
    reviews: [
      {
        id: "rev-1",
        quote: "Moving our beverage pouches to BSA's Flip-Top Spouts solved the loose cap issue our customers kept mentioning. Across 250,000 pouches, their 0.8s weld has held up cleanly without leaks.",
        author: "Rajesh Varma",
        role: "Head of Packaging Operations",
        company: "PurePulse Beverages",
        location: "Delhi NCR",
        serviceUsed: "Flip-Top Spouts & In-House Sealing",
        rating: 5,
        metric: "250K+ Pouches Sealed"
      },
      {
        id: "rev-2",
        quote: "Shipping bulk empty pouches from Gujarat to UP wasn't practical for our mayonnaise line. BSA sent 4 trained technicians to our Sanand plant, completing 180,000 spouts in 10 days right alongside our production.",
        author: "Manish Patel",
        role: "Director of Supply Chain",
        company: "Gusto Gourmet Sauces",
        location: "Ahmedabad, Gujarat",
        serviceUsed: "On-Site Contract Job Work",
        rating: 5,
        metric: "On-Site in Gujarat"
      },
      {
        id: "rev-3",
        quote: "As a digital pouch converter, we handle fast-turnaround orders for D2C brands. BSA Packaging manages our spout fixing in Greater Noida. Their 12 machines turn around 30,000 pouches within 48 hours reliably.",
        author: "Amitabh Singhal",
        role: "Managing Director",
        company: "Apex Flexible Laminations",
        location: "Greater Noida (West), UP",
        serviceUsed: "In-House Spout Fixing",
        rating: 5,
        metric: "48-Hour Turnaround"
      },
      {
        id: "rev-4",
        quote: "Detergents and surfactants easily exploit weak pouch seams if sealing temperature drifts. BSA's hot press followed by instant cold press gives a clean, uniform weld that passed our 1.5m drop tests.",
        author: "Dr. Sunita Rao",
        role: "Technical Quality Lead",
        company: "CleanMax Care Labs",
        location: "Surat, Gujarat",
        serviceUsed: "Screw-Cap Spouts (20mm)",
        rating: 5,
        metric: "Passed 1.5m Drop Test"
      }
    ]
  },

  reachAndTrust: {
    badge: "Operational Network",
    title: "Serving Greater Noida, Delhi NCR, Gujarat & Pan-India",
    subtitle: "Combining our central manufacturing unit in Knowledge Park V, Greater Noida (West) with deployable technician teams for on-site contract work nationwide.",
    hubs: [
      {
        region: "Greater Noida (West) HQ",
        state: "Knowledge Park V, Uttar Pradesh",
        role: "Central Spout Fixing & Trading Facility",
        features: [
          "12 semi-automatic pneumatic spout sealing machines",
          "Organized batch staging and carton packing floor",
          "Ready stock of imported spouts (8.5mm to 28mm)",
          "In-house hydrostatic pressure and drop-test verification"
        ]
      },
      {
        region: "Delhi NCR Industrial Belt",
        state: "Delhi, Noida, Ghaziabad, Faridabad, Gurugram",
        role: "Express Regional Logistics Corridor",
        features: [
          "Fast pickup and delivery for NCR FMCG & beverage brands",
          "Quick trial welds for pouch converters and laminate printers",
          "Prompt on-site technical support across NCR plants",
          "Dedicated coordination for recurring monthly runs"
        ]
      },
      {
        region: "Gujarat Packaging Corridor",
        state: "Ahmedabad, Sanand, Rajkot, Surat, Vadodara",
        role: "On-Site Factory Job Work Network",
        features: [
          "Trained fixing crews dispatched directly to your factory floor",
          "Saves two-way interstate freight and prevents pouch scuffing",
          "Experienced across edible oil, sauce, and chemical plants",
          "Supervisor oversight with shift-wise QC logs"
        ]
      },
      {
        region: "Pan-India Supply & Execution",
        state: "Maharashtra, Punjab, MP, South India & Nationwide",
        role: "Bulk Spout Trading & Contract Teams",
        features: [
          "Scheduled on-site job work deployment across major states",
          "Bulk dispatch of imported screw-cap & flip-top spouts",
          "Technical guidance on pouch boat alignment and film specs",
          "Formal GST billing and B2B job-work documentation"
        ]
      }
    ]
  },

  quoteForm: {
    badge: "B2B Inquiry & Sampling",
    title: "Request a Bulk Quote or Sample Kit",
    subtitle: "Share your pouch volume, spout diameter, or on-site job work location. Our commercial team responds within 2–4 business hours.",
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

  faq: {
    badge: "Frequently Asked Questions",
    title: "Procurement & Technical FAQs",
    subtitle: "Straightforward answers on minimum batch quantities, sealing quality, on-site deployment, and sample testing.",
    items: [
      {
        question: "What is the Minimum Order Quantity (MOQ) for spout fixing at BSA Packaging?",
        answer: "For in-house batch spout fixing at our Greater Noida (West) unit, pilot batches start at 10,000 pouches, scaling up to monthly recurring contracts of 500,000+ pouches. For on-site contract job work in Gujarat, Delhi NCR, or other states, batch volumes typically start at 50,000 pouches to justify crew mobilization."
      },
      {
        question: "How does your 2-step 0.8s hot press and cold press prevent leakage?",
        answer: "Single-step sealing often leaves stress points or microscopic pinholes when pouches cool slowly. Our 12 machines execute an automated 2-step cycle: Step 1 (0.8s High-Temp Hot Press) fuses the inner PE sealant film with the spout boat; Step 2 (Instant Cold Press Lock) immediately quenches the seam under pressure to set the polymer cleanly with zero warping."
      },
      {
        question: "How does Pan-India On-Site Contract Job Work operate in Gujarat and other states?",
        answer: "BSA Packaging sends trained operators and supervisors directly to your manufacturing premises across Gujarat (Sanand, Ahmedabad, Surat, Rajkot), Delhi NCR, or other states. Our team works alongside your printing or filling lines, eliminating two-way interstate transport costs and transit scuffing on bulk pouches."
      },
      {
        question: "What is the difference between assembled and unassembled spouts?",
        answer: "Assembled Spouts arrive with the screw cap or flip-top already attached to the spout body — ideal if you fill pouches from the open bottom or side seam before sealing. Unassembled Spouts provide the spout body and loose caps separately, built for automated top-spout filling machines followed by mechanical rotary capping."
      },
      {
        question: "Which pouch films and liquid products can be sealed with your spouts?",
        answer: "Our tooling works reliably on stand-up Doypack pouches, digital short-run laminates, silver metallic foil barrier pouches, and 3-side seal refill pouches. Supported products include fruit juices, mayonnaise, tomato ketchup, cooking pastes, handwash, dishwash gels, liquid detergents, personal care lotions, coolants, and agro-chemicals."
      },
      {
        question: "How can I test my own laminated pouches before placing a bulk order?",
        answer: "We courier physical sample kits (containing welded pouch samples, screw-cap spouts, and flip-top spouts) across India within 24 hours. You can also send 10–20 of your unsealed pouches to our Greater Noida facility for complimentary trial welding and burst pressure verification."
      }
    ]
  },

  navigation: [
    { label: "Factory", href: "#factory-tour" },
    { label: "Services", href: "#services" },
    { label: "Spouts", href: "#spout-catalog" },
    { label: "Industries", href: "#industries" },
    { label: "Reviews", href: "#reviews" },
    { label: "Locations", href: "#reach" },
    { label: "FAQ", href: "#faq" }
  ]
};
