# M.M. Mufas — Digital Media Marketing Portfolio

## Overview
This is the revised version of the original M.M. Mufas personal portfolio, repositioned for Digital Media Marketing and related UAE / Gulf job applications.

The original active visual identity has been preserved: emerald/teal theme in light and dark modes, glass cards, coordinated accents, profile-image placement, responsive navigation, hover effects, reveal animations, project modal, floating WhatsApp button, and the existing Tailwind-based layout model.

## Main Positioning
- Digital Media Marketing Professional
- Digital Marketing
- Social Media Marketing
- Content Marketing
- Customer Engagement
- Campaign Promotion
- Lead Generation
- AI-Assisted Content Creation
- Digital Operations
- Supporting IT / technical experience

## Files
- `index.html` — main deployable portfolio page; updated content, SEO, navigation, projects, contact details, and JavaScript bug fixes.
- `profile.jpg` — original source asset retained unchanged.
- `style.css` — original legacy stylesheet retained unchanged for source completeness; the current website design is driven by the inline styles and Tailwind classes in `index.html`, as in the uploaded source.
- `script.js` — original legacy script retained unchanged for source completeness; the current page interactions are handled by the inline script in `index.html`, as in the uploaded source.
- `assets/portfolio/README.txt` — instructions for adding real marketing evidence later.

## Local Preview
Open `index.html` directly in a modern browser. An internet connection is required for the same external dependencies used by the original source (Tailwind CDN, Google Fonts, Font Awesome, and the externally hosted profile image).

## Deploy to Hostinger
1. Extract this project.
2. Open Hostinger hPanel → Websites → Manage → File Manager.
3. Open the website's `public_html` directory.
4. Upload the project files so `index.html` sits directly inside `public_html`.
5. Keep the `assets` folder structure intact.
6. Visit the domain and refresh / clear cache if an older version is still displayed.

## Deploy to Vercel
### Option A — GitHub
1. Upload or push these files to a GitHub repository with `index.html` in the repository root.
2. In Vercel choose **Add New → Project**.
3. Import the repository.
4. For a plain static site, no framework preset or build command is required.
5. Deploy.

### Option B — Vercel CLI
From the project root, run `vercel` and follow the prompts. Keep `index.html` in the root.

## Marketing Evidence
The Projects section includes four labelled sample illustrations. Replace them with your own real screenshots, creatives, posts, reels, webinar materials, website work or analytics. See `assets/portfolio/README.txt` for the replacement pattern.

## Theme update
- `index.html` — original layout/content retained; blue/cyan accents changed to emerald/teal; accessible theme button added to the header; early theme initialization prevents flashing; navbar breakpoint adjusted to fit the switch.
- `theme.css` — new theme variables and color mappings for headings, body text, cards, forms, navigation, footer and modal, plus keyboard focus states.
- `README.md` — updated instructions. All other files are unchanged from the completed marketing portfolio.

The sun/moon button is always visible on desktop, tablet and mobile. First visits follow the device appearance. Manual choices are saved in browser localStorage and restored on reload; the switch also works when storage is unavailable. To return to the device default, clear the site's saved browser data. No backend or build command is needed.

## Validation
JavaScript syntax, section IDs, internal navigation targets, local asset references, and theme preference logic were checked. Theme logic checks include device defaults, live device preference changes, explicit override, reload persistence, invalid saved values and blocked storage. A visual browser verification could not be completed in the editing environment because the browser binary was unavailable and its download timed out. External CDN resources remain the same deployment dependency as the original website.

## Latest requested updates
- Russian — Intermediate added to the existing language card grid.
- Four sample campaign illustrations added to the existing project-card image areas; all images are bundled locally in assets/portfolio/.
- The supplied MOVRO Enterprises business card is displayed intact below the MOVRO founder experience; click it to see the full-size image.
- Only index.html, README.md and assets/portfolio/README.txt changed in this update, with five image assets added. Theme CSS, light/dark behavior, navigation, other content and animations are unchanged.
- Replacement filenames and image-generation prompt descriptions are documented in assets/portfolio/README.txt.
