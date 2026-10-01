# PHCreative website: rules for Claude

This is Payton Hood Creative's portfolio site (paytonhood.com). It's a static site in plain HTML, CSS and JS, with no build step. `PAYTON_BRIEF.md` is her original brief and the source of truth; it wins wherever anything disagrees with it. `PROJECT_CONTEXT.md` expands on it. These are the rules that always apply.

**Layout reference:** cobaltproduction.com, for its client spotlight, rotating top carousel, easy navigation and "simplistic but has character" feel. Never copy its black and white color scheme.

## Brand
- **Colors:**
  - Coral is required.
  - Use navy (`--dress-blues` #363D4E, `--eclipse` #3B3A50) instead of black, and peach-cream `--cream` #FFF4EC instead of white.
  - Black and white must never dominate a section.
  - Use the named tokens at the top of `assets/css/styles.css` and never introduce off-palette colors.
- **Type:** Playfair Display for display, a thin sans (Neue, falling back to Jost) for body, and Oswald only in the film-credits billing block.
- **Feel:** 60% playful to 40% sophisticated, 75% artistic to 25% corporate. Never generic, bland or corporate.
- **Logo:** the PH monogram (`assets/img/ph-monogram.svg`, plus `ph-logo-full.svg` with the curved text). Don't redraw it.
- **Fox:** present but never overpowering.

## Portfolio
- Every piece is one entry in `window.PHC_PROJECTS` in `assets/js/projects.js`. Array order is display order. The first 9 featured pieces show on the homepage and the first 12 on `/triff/`.
- **Category ids:** `branding`, `film`, `photography`, `illustration`, `fineart`. Add new ids to `PHC_CATEGORIES` only when `DECISIONS.md` says so.
- **Images:** go in `assets/img/work/<id>.jpg` as JPEG at about 2000 px on the long edge and quality 85, never upscaled. Render PDFs page 1 at 220 dpi.
- **Never invent** dates, awards, clients, credits or results. Use only what is visible in the work, in `incoming/MANIFEST.md`, or in `PROJECT_CONTEXT.md`. If a detail is missing, ask.
- **Don't show** generic family photo sessions. Lead with film and graphics.
- **Descriptions:** plain, specific and warm. Name the real client and place and the idea behind the work. First person is fine.
- **Grid sizes:** `size: "wide"` is for landscape boards only. Too many `tall` cards leave gaps, so posters use the default size.

## Pages
The header and footer are repeated in every page's HTML (`index.html`, `work/`, `services/`, `about/`, `contact/`, `triff/`, `shop/`, `404.html`). A nav or footer change has to be made in every one.

## Checks before committing
- `node --check assets/js/site.js assets/js/projects.js`
- Serve the site with `python3 -m http.server 8000`, open it at 390 px and 1440 px wide, and check there is no horizontal scroll, the work grid has no gaps, and the console shows no errors.
