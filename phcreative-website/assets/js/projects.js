/* ==========================================================================
   PORTFOLIO DATA — edit this file to add, remove or reorder work.

   Images: each piece points at its file in the PHCreative Google Drive
   (shared "anyone with the link"). To host an image yourself instead, drop it
   in assets/img/work/ and set `src: "assets/img/work/your-file.jpg"`;
   `src` always wins over `drive`. (tools/fetch-drive-images.sh does this for
   every piece at once.)

   categories: "branding" | "film" | "photography" | "illustration" | "fineart"
   featured:   shows in "Selected Work" on the homepage + TRIFF page
   size:       "wide" | "tall" | undefined (grid layout hint)
   ========================================================================== */

window.PHC_CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "branding", label: "Branding" },
  { id: "film", label: "Film + Entertainment" },
  { id: "photography", label: "Photography" },
  { id: "illustration", label: "Illustration" },
  { id: "fineart", label: "Fine Art" }
];

window.PHC_PROJECTS = [
  {
    id: "reedy-reels",
    title: "Reedy Reels Film Festival",
    subtitle: "Logo redesign: three concepts",
    client: "Reedy Reels Film Festival · Greenville, SC",
    year: "2025",
    categories: ["branding", "film"],
    drive: "1Ow7jxr2kHx4pCbv6ui8cEvbfP5qEP-BA",
    src: "assets/img/work/reedy-reels.jpg",
    size: "wide",
    featured: true,
    services: ["Logo design", "Festival identity", "Typography"],
    description:
      "Three wordmark directions for Greenville's film festival, each rooted in the city's identity and the language of film.",
    points: [
      "Concept 1: a wavy “R” with ripple lines for the Reedy River, and a “T” that becomes canebrake reeds and a film reel.",
      "Concept 2: rounded R's shaped like film reels, with a hand grabbing a ticket for the festival's live, community energy.",
      "Concept 3: the two E's form a camera lens. What filmmakers put in is what comes out on screen."
    ]
  },
  {
    id: "reedy-reels-process",
    title: "Reedy Reels: Design Thought Process",
    subtitle: "The research behind the marks",
    client: "Reedy Reels Film Festival",
    year: "2025",
    categories: ["branding", "film"],
    drive: "1XEv39q4Zv1UE_WnteoAMXv7gj5LfqQ0X",
    src: "assets/img/work/reedy-reels-process.jpg",
    size: "tall",
    featured: true,
    services: ["Concept development", "Presentation design"],
    description:
      "The presentation board that walked the festival through every hidden layer: river, canebrake, reel, ticket and lens. Each concept is a timeless mark with meaning built in."
  },
  {
    id: "fantascape-11",
    title: "Fantascape: Behind the Scenes",
    subtitle: "BTS photography",
    client: "Fantascape",
    categories: ["photography", "film"],
    drive: "1FpB3kn2mMaaOaoAVKkGARaJbqhkCG9ML",
    featured: true,
    services: ["BTS photography", "On-set coverage"],
    description:
      "Behind-the-scenes coverage from set, capturing the crew, the craft and the moments between takes."
  },
  {
    id: "bchs-branding",
    title: "Berkeley County Historical Society",
    subtitle: "Brand identity",
    client: "Berkeley County Historical Society · SC",
    categories: ["branding", "illustration"],
    drive: "1LtSanWOwM3mBpa2InnIXamWvs6vW07Q3",
    src: "assets/img/work/bchs-branding.jpg",
    size: "wide",
    featured: true,
    services: ["Logo suite", "Typography system", "Brand marks"],
    description:
      "A heritage identity built on custom silhouette illustration: a colonial militiaman and a fox beneath live oaks and a cannon, set inside the county's shape. It includes a seal, wordmarks, an ornamental border and a Freight Text Pro type system."
  },
  {
    id: "fantascape-9",
    title: "Fantascape: On Set",
    subtitle: "BTS photography",
    client: "Fantascape",
    categories: ["photography", "film"],
    drive: "17OxTx3AR58D5FRiuvqzgq4gUHbyiEe8M",
    featured: true,
    services: ["BTS photography"],
    description: "Documenting production from the inside: the people and the process that make the picture."
  },
  {
    id: "soil-soul",
    title: "Soil & Soul Nursery",
    subtitle: "Exotic plant shop: full brand",
    client: "Soil & Soul Nursery · Summerville, SC",
    categories: ["branding"],
    drive: "1abFONygn4m07z9phHFxlaIuckrVBX8cu",
    src: "assets/img/work/soil-soul.jpg",
    pdf: true,
    featured: true,
    services: ["Brand development", "Logo design", "Packaging", "Collateral", "Signage"],
    description:
      "A start-to-finish identity for an exotic plant shop, from the hanging storefront sign to embroidered apparel, watering-bottle labels, plant tags and price tags."
  },
  {
    id: "bchs-signage",
    title: "BCHS: Signage System",
    subtitle: "Wayfinding + environmental",
    client: "Berkeley County Historical Society",
    categories: ["branding"],
    drive: "1o-9AAz89EOQVHFJru_s4e3PJh7YxPUEM",
    src: "assets/img/work/bchs-signage.jpg",
    featured: true,
    services: ["Signage", "Badges", "Silhouette illustration"],
    description: "Seals, badges and county-shaped markers that carry the society's silhouette scene onto signage at different scales."
  },
  {
    id: "coastal-creations",
    title: "Coastal Creations",
    subtitle: "Candle & soap scent shop: logo variations",
    client: "Coastal Creations",
    categories: ["branding", "illustration"],
    drive: "1NjdsyZDSTbEupUXwdsjSoAyuW0RzcZ6-",
    src: "assets/img/work/coastal-creations.jpg",
    featured: true,
    services: ["Logo design", "Logo variations", "Illustrated mark"],
    description:
      "A firefly tucked inside a “C” for a candle and soap scent shop, with honeycomb-gold badges, a script wordmark and seals that say it serves “coast to coast.”"
  },
  {
    id: "wnc-moodboard",
    title: "Weathering & Nurturing the Carolinas",
    subtitle: "Brand moodboard",
    client: "Weathering & Nurturing the Carolinas",
    categories: ["branding"],
    drive: "1MTKHWfrDlEXPGCXD7Yr8avSnLH2nUrmj",
    src: "assets/img/work/wnc-moodboard.jpg",
    size: "wide",
    featured: true,
    services: ["Moodboard", "Monogram", "Type pairing"],
    description:
      "Identity and moodboard for a community relief effort across the Carolinas: a WC monogram with a water-drop counter, an earthy teal, gold, forest and clay palette, an Acherus Grotesque type pairing, and photos from the ground."
  },
  {
    id: "fantascape-20",
    title: "Fantascape: The Crew",
    subtitle: "BTS photography",
    client: "Fantascape",
    categories: ["photography", "film"],
    drive: "1xMilug27uxEMR7en1x13vvidDC_OX32O",
    featured: true,
    services: ["BTS photography"],
    description: "Behind-the-scenes stills from production."
  },
  {
    id: "logo-collection",
    title: "Logo Design Collection",
    subtitle: "Marks for small businesses",
    client: "The Gilded Pearl · Little Miss Macarons · Carolina Life · Status Quo Cigars",
    categories: ["branding"],
    drive: "1aNRblGR_-P-lPBs1pYLvXQHY7tcRP5tP",
    src: "assets/img/work/logo-collection.jpg",
    pdf: true,
    featured: true,
    services: ["Logo design"],
    description:
      "Four marks, four personalities: a gold script seal for The Gilded Pearl mobile event company, a refined monogram for Little Miss Macarons, a mandala-style emblem for Carolina Life Real Estate & Auctions, and a bold vintage badge for Status Quo Cigars."
  },
  {
    id: "king-wings",
    title: "King Wings Wit' It",
    subtitle: "Food & beverage trailer: full brand",
    client: "King Wings Wit' It",
    categories: ["branding"],
    drive: "1bDWXjqYKMmlgvCfydfC9Jcrqs4z-gEEx",
    src: "assets/img/work/king-wings.jpg",
    pdf: true,
    services: ["Brand development", "Logo design", "Packaging", "Business cards"],
    description:
      "A crowned, illustrated rooster and a bold hexagon pattern for a food trailer, carried across cups, takeout boxes and business cards printed as custom playing cards."
  },
  {
    id: "irmas-oriental",
    title: "Irma's Oriental",
    subtitle: "Grocery store: logo + signage",
    client: "Irma's Oriental Grocery Store",
    categories: ["branding"],
    drive: "1sUaTnPEsegNi1aYyKoLTgQui162PeFB1",
    src: "assets/img/work/irmas-oriental.jpg",
    pdf: true,
    services: ["Logo design", "Pylon & box sign", "Window vinyl"],
    description:
      "A logo built to live outdoors: an illuminated box sign, a pylon panel and storefront window vinyl, all readable day and night."
  },
  {
    id: "fantascape-25",
    title: "Fantascape: Between Takes",
    subtitle: "BTS photography",
    client: "Fantascape",
    categories: ["photography", "film"],
    drive: "11-0QsWOQKwBM3J_jelZBywvPD1sSYgkv",
    services: ["BTS photography"],
    description: "Behind-the-scenes stills from production."
  }
];

/* Homepage "Client Spotlight": rotates through these project ids. */
window.PHC_SPOTLIGHT = ["reedy-reels", "bchs-branding", "king-wings", "soil-soul"];

/* Homepage hero carousel slides (project id + caption label).
   contain: true shows the whole board instead of cropping it to fill the screen. */
window.PHC_HERO = [
  { id: "king-wings", label: "Brand + Packaging" },
  { id: "fantascape-11", label: "BTS Photography" },
  { id: "soil-soul", label: "Brand + Signage" },
  { id: "reedy-reels", label: "Festival Branding", contain: true },
  { id: "irmas-oriental", label: "Logo + Signage" },
  { id: "fantascape-9", label: "On Set" }
];

/* Set to true after running tools/fetch-drive-images.sh. Every piece then
   loads from assets/img/work/<id>.jpg (faster, and no longer depends on Drive). */
window.PHC_LOCAL_IMAGES = false;

/* Image URL helper: `src` wins, then local copies, then Drive's thumbnail service. */
window.PHC_IMG = function (p, width) {
  if (!p.src && window.PHC_LOCAL_IMAGES) p = Object.assign({}, p, { src: "assets/img/work/" + p.id + ".jpg" });
  if (p.src) return (/^(https?:)?\/\//.test(p.src) ? "" : (document.documentElement.dataset.root || "")) + p.src;
  return "https://drive.google.com/thumbnail?id=" + p.drive + "&sz=w" + (width || 1600);
};
window.PHC_VIEW = function (p) {
  return "https://drive.google.com/file/d/" + p.drive + "/view";
};
