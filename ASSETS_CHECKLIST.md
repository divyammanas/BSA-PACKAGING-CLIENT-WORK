# BSA Packaging — Media & Asset Checklist

Welcome to BSA Packaging's asset placement guide. To personalize your website with your authentic factory footage, real product photographs, and company branding, simply drop your files into the `/public/assets/` directory using the filenames and formats specified below.

All components in the website automatically read these paths from `src/data/siteData.js`. If any file is missing, the website displays an elegant industrial placeholder with technical diagrams so your site is always presentation-ready.

---

## 1. Brand & Logo Assets

| Target File Path | Description | Recommended Format | Recommended Dimensions | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `/public/assets/bsa-logo.png` | Primary Company Logo (Official Brand Mark) | PNG (Transparent) | 605 × 436 px | Installed from official brand logo; appears in the sticky navigation header and footer. |
| `/public/assets/bsa-packaging-og.png` | Social Sharing & WhatsApp Preview Card | PNG / WebP | 1200 × 630 px (1.91:1 ratio) | Used for Open Graph meta tags when sharing the link on WhatsApp, LinkedIn, or iMessage. |
| `/public/favicon.svg` | Browser Tab Icon (Favicon) | SVG / ICO / PNG | 64 × 64 px | Already pre-configured with the BSA Packaging spout mark. |

---

## 2. Factory Tour Video & Machinery Footage (CLIENT MUST-HAVE)

| Target File Path | Description | Recommended Format | Recommended Specs | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `/public/assets/bsa-factory-tour.mp4` | Full Factory Floor & 12 Machine Tour Video | MP4 (H.264 video codec, AAC audio) | 1920 × 1080 (1080p Full HD) or 1280 × 720 (720p), 30–60 FPS, max 25MB recommended | Showcases all 12 semi-automatic spout fixing machines, workers loading pouches, the 0.8s hot press, cold lock, and quality inspection. |
| `/public/assets/bsa-factory-poster.jpg` | Video Poster / Cover Thumbnail Image | JPG / WebP | 1920 × 1080 px | Crisp high-resolution still frame of the factory floor / machine in action before the user hits play. |

---

## 3. Product & Technical Imagery

| Target File Path | Description | Recommended Format | Recommended Dimensions | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `/public/assets/spout-screw-cap.png` | Standard Screw-Cap Spout Photography | PNG (transparent) or WebP | 800 × 800 px (Square) | Clear shot showing the threaded neck, sealing boat, and ribbed tamper-evident screw cap. |
| `/public/assets/spout-flip-top.png` | Flip-Top Spout Photography ("No Lost Caps") | PNG (transparent) or WebP | 800 × 800 px (Square) | Clear shot showing the hinged lid in both open and snap-closed states (highlighting Chaayos-style convenience). |
| `/public/assets/spout-assembled.png` | Assembled Spout Supply Format | PNG (transparent) or WebP | 800 × 800 px (Square) | Demonstrating spout with cap pre-attached to nozzle/boat ready for bottom/side fill. |
| `/public/assets/spout-unassembled.png` | Unassembled Spout Supply Format | PNG (transparent) or WebP | 800 × 800 px (Square) | Showing separate nozzle bodies and loose caps in bulk format for automated top-fill lines. |
| `/public/assets/sealing-process-hot.jpg` | Step 1: High-Temp Hot Press Close-Up | JPG / WebP | 1000 × 650 px | Macro or close-up photo of the heated jaws sealing the film and spout boat at 0.8s. |
| `/public/assets/sealing-process-cold.jpg` | Step 2: Cold Press Sealing Lock Close-Up | JPG / WebP | 1000 × 650 px | Photo of the rapid cold press locking the molecular bond for zero leaks. |

---

## 4. Client Partner Logos & Testimonial Badges

Place client company logos inside `/public/assets/clients/` (or update filenames in `src/data/siteData.js`):

| Target File Path | Description | Format | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| `/public/assets/clients/client-1.svg` | Beverage / Juice Brand Logo | SVG / PNG (monochrome/clean) | 240 × 80 px |
| `/public/assets/clients/client-2.svg` | Sauce / Condiment Brand Logo | SVG / PNG (monochrome/clean) | 240 × 80 px |
| `/public/assets/clients/client-3.svg` | FMCG Detergent & Handwash Brand Logo | SVG / PNG (monochrome/clean) | 240 × 80 px |
| `/public/assets/clients/client-4.svg` | Flexible Pouch Converter Partner Logo | SVG / PNG (monochrome/clean) | 240 × 80 px |
| `/public/assets/clients/client-5.svg` | Gujarat Agro / Seeds Manufacturer Logo | SVG / PNG (monochrome/clean) | 240 × 80 px |

---

## 5. How to Change Data or Add More Photos

Open `src/data/siteData.js` in your editor. You can update:
- Phone numbers, email addresses, WhatsApp numbers
- Factory address, GST registration number
- Video paths and captions
- Spout mm sizes, colors, and technical specifications
- Client review quotes, names, and ratings
- Form submission endpoints (e.g., your Web3Forms access key or EmailJS ID)
