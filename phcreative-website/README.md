# Payton Hood Creative — website

Static site for **PHCreative** (paytonhood.com). There's no build step: it's plain HTML, CSS and JS, so it can be hosted anywhere.

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Rotating hero carousel, who/what/for whom, the 4 service pillars, client spotlight, selected work, 3 C's, shop teaser, CTA |
| Work | `/work/` | Full portfolio with filters (Branding, Film + Entertainment, Photography, Illustration, Fine Art) and a project lightbox. Deep links like `/work/#reedy-reels` and `/work/?category=photography` work |
| Services | `/services/` | Pricing, how it works (inquiry → quote → contract → deposit → project → final payment), the info needed for a quote, FAQ |
| About | `/about/` | Bio, why PHC, brand words, the toolkit |
| Contact | `/contact/` | Full inquiry form with auto-reply. `?interest=poster` pre-checks a box |
| TRIFF | `/triff/` | Temporary landing page for Tryon Film Fest (the QR destination) |
| Shop | `/shop/` | "Coming soon" page with prints, calendars and a waitlist |

## Preview locally
```bash
cd phcreative-website && python3 -m http.server 8000   # open http://localhost:8000
```

## Launch checklist (Tier 1, before TRIFF)
1. **Deploy.** Netlify, Cloudflare Pages or Vercel (all free). Point the project at this repo and set the **base/publish directory** to `phcreative-website`. Then connect `paytonhood.com` in the host's domain settings.
2. **Activate the inquiry form.** Submit one test inquiry on the live site. FormSubmit emails `paytonhoodcreative@gmail.com` an activation link; click it once. After that, every inquiry arrives by email and the sender gets an automatic reply. You can edit the auto-reply text in `contact/index.html` (`_autoresponse`).
3. **Print the QR code.** Use `assets/qr/triff-qr.png` (print-ready) or `triff-qr.svg` (vector). It points to `https://www.paytonhood.com/triff/?utm_source=qr&utm_campaign=triff`, so test it on a phone once the domain is live. Regenerate with `python3 tools/make-qr.py "<url>"`.
4. **Analytics (optional, 2 minutes).** Create a free site at goatcounter.com and put its code in `PHC_SETTINGS.goatcounter` at the top of `assets/js/site.js`. QR scans show up as `utm_source=qr`.
5. **Images.** The portfolio loads straight from the PHCreative Google Drive folder, which is shared "anyone with the link". Keep that sharing on. For faster, more reliable loading, run `bash tools/fetch-drive-images.sh` and then set `PHC_LOCAL_IMAGES = true` in `assets/js/projects.js`.
6. **Personal touches still needed:**
   - A portrait for `/about/` (see the comment in `about/index.html`).
   - The real PHC logo files. The fox mark in `assets/img/fox-mark.svg` is a stand-in.
   - The "Neue" font file and license. The site is set up for *Neue Montreal* and falls back to Jost until the font files are added.
   - A read-through of the bio copy.

## Editing content
- **Portfolio, hero slides and client spotlight:** all in `assets/js/projects.js`. Add an entry with its Drive file id (from the share link), categories and a description.
- **Colors and fonts:** CSS variables at the top of `assets/css/styles.css`. The brand palette is defined by name (`--peach-nectar`, `--limpet-shell`, `--eclipse`, …).
- **Brand pattern:** `assets/img/pattern.svg` is the William Morris–inspired tile (crescent moon, four-point star, spade heart, feather, fox-tail swirl, taper lines).
- Header and footer are repeated in each page's HTML. If you change the nav, update every page.

## Tier 2 / 3 roadmap hooks
- **Shop:** `/shop/` is ready to swap in Shopify Buy Buttons, Big Cartel or Printful (print-on-demand calendars).
- **Testimonials and case studies:** add a `caseStudy` page per project and link it from the lightbox.
- **Booking and payments:** inquiry → quote → contract → deposit can be automated later with HoneyBook or Dubsado, with Stripe or Venmo for deposits.
