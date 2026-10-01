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
    id: "fantascape-poster",
    title: "Fantascape",
    subtitle: "Film poster / key art",
    client: "Stardead Nostalgias & the Carolina Sundancers · 48 Hour Film Project",
    year: "2025",
    categories: ["film"],
    src: "assets/img/work/fantascape-poster.jpg",
    featured: true,
    services: ["Key art", "Title design", "Photo treatment", "BTS photography"],
    description:
      "Key art for a 48 Hour Film Project short about a struggling author who wants to escape reality. It premiered June 21, 2025 at the Leonard Theatre Chapel at Wofford College. Electric blues and magentas, a retro script title, and a question split across the frame: will he get more than he bargained for? I also shot BTS on set.",
    points: [
      "The tagline is broken across both sides of the figure so the eye travels through the story.",
      "The lighting is pushed into a dream-like neon to sell the escape from reality.",
      "The 48 Hour Film Project mark and premiere details are built into the layout for festival use."
    ]
  },
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
    id: "table-for-one",
    title: "Table for One",
    subtitle: "Film poster · script supervisor",
    client: "Cat Borovicka · 48 Hour Film Project",
    categories: ["film"],
    src: "assets/img/work/table-for-one.jpg",
    featured: true,
    services: ["Key art", "Script supervisor", "Graphic design"],
    description:
      "“Can a shy aspiring chef help save her favorite local bar?” I was on this crew as Script Supervisor and Graphic Designer. The poster pairs two moments of the same character in warm, out-of-focus bar light with an elegant high-contrast serif title."
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
    featured: true,
    services: ["Brand development", "Logo design", "Packaging", "Business cards"],
    description:
      "A crowned, illustrated rooster and a bold hexagon pattern for a food trailer, carried across cups, takeout boxes and business cards printed as custom playing cards."
  },
  {
    id: "fantascape-bts-dome",
    title: "Fantascape: Under the Dome",
    subtitle: "BTS photography",
    client: "Fantascape · Carolina Sundancers & Stardead Nostalgias · 48 Hour Film Project",
    year: "2025",
    categories: ["photography", "film"],
    src: "assets/img/work/fantascape-bts-dome.jpg",
    size: "wide",
    featured: true,
    services: ["BTS photography", "On-set coverage"],
    description:
      "The lead lit up under the escape machine while the crew can't keep a straight face. Neon set lighting, a gimbal rig and a real laugh, all in one frame."
  },
  {
    id: "five-hours-earlier",
    title: "5 Hours Earlier",
    subtitle: "Film poster / key art",
    client: "Team JoyFilm · 48 Hour Film Project",
    categories: ["film"],
    src: "assets/img/work/five-hours-earlier.jpg",
    featured: true,
    services: ["Key art", "Title design", "Billing block"],
    description:
      "“Some fires don't erase what's been done.” A sunset cast portrait over open flame, with a title where a pair of garden shears cuts through the A. That one prop hints at the story without giving it away."
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
    id: "lunch-hour",
    title: "Lunch Hour",
    subtitle: "Rom-com poster",
    client: "Lunch Hour (short film)",
    categories: ["film"],
    src: "assets/img/work/lunch-hour.jpg",
    featured: true,
    services: ["Key art", "Title design"],
    description:
      "“A soup loving man meets the soup loving woman of his dreams. The only problem… they're both married.” A warm, glowing two-shot full of sideways glances, and a title where a clock face replaces the O in HOUR."
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
    id: "can-i-come-in",
    title: "Can I Come In?",
    subtitle: "Horror film poster",
    client: "Vantage Pointe Pictures · written & directed by Dustin Weible",
    categories: ["film"],
    src: "assets/img/work/can-i-come-in.jpg",
    featured: true,
    services: ["Key art", "Photo compositing", "Billing block"],
    description:
      "“A stranger knocks at the door. Who lies within?” The whole poster is one extreme close-up of an eye, with something waiting in its reflection, and a full theatrical billing block below."
  },
  {
    id: "fantascape-bts-lab",
    title: "Fantascape: The Lab",
    subtitle: "BTS photography",
    client: "Fantascape · Carolina Sundancers & Stardead Nostalgias · 48 Hour Film Project",
    year: "2025",
    categories: ["photography", "film"],
    src: "assets/img/work/fantascape-bts-lab.jpg",
    size: "tall",
    featured: true,
    services: ["Production stills", "BTS photography"],
    description:
      "A production still in the film's magenta-and-blue world: the author and the lab-coated scientist moments before the escape begins."
  },
  {
    id: "remnants-of-ash",
    title: "Remnants of Ash",
    subtitle: "Camera department: 1st AC",
    client: "Concord Creative Company · directed by Josh Myers",
    categories: ["film"],
    src: "assets/img/work/remnants-of-ash.jpg",
    featured: true,
    services: ["1st Assistant Camera"],
    description:
      "I worked as 1st Assistant Camera on this Concord Creative Company production, written by Josh Myers and Tammy Mattox, keeping the image sharp and the camera department running."
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
    id: "fantascape-bts-gimbal",
    title: "Fantascape: Low Angle",
    subtitle: "BTS photography",
    client: "Fantascape · Carolina Sundancers & Stardead Nostalgias · 48 Hour Film Project",
    year: "2025",
    categories: ["photography", "film"],
    src: "assets/img/work/fantascape-bts-gimbal.jpg",
    services: ["BTS photography"],
    description:
      "The camera operator drops the gimbal to the floor for a low shot, washed in the set's teal light."
  },
  {
    id: "knuckle-casting",
    title: "Knuckle: Extras Casting",
    subtitle: "Production graphics",
    client: "Knuckle (feature film) · Gaffney, SC",
    categories: ["film"],
    src: "assets/img/work/knuckle-casting.jpg",
    services: ["Casting flyer", "Production graphics", "Typography"],
    description:
      "A casting call for locals to appear as college students, staff and carnival-goers. The carnival-swirl background, circus-poster lettering and ribbon banner put the film's world on the flyer before anyone reads a word."
  },
  {
    id: "prop-consular-id",
    title: "Screen-Ready Prop ID",
    subtitle: "Production design: prop graphics",
    client: "Film production prop · fictional character",
    categories: ["film"],
    src: "assets/img/work/prop-consular-id.jpg",
    services: ["Prop design", "Production graphics", "Print finishing"],
    description:
      "A front-and-back consular ID card designed, printed and finished for a character, detailed enough to hold up in a close-up. Every name and number on it is invented for the story."
  },
  {
    id: "coastal-creations",
    title: "Coastal Creations",
    subtitle: "Candle & soap scent shop: logo variations",
    client: "Coastal Creations",
    categories: ["branding", "illustration"],
    drive: "1NjdsyZDSTbEupUXwdsjSoAyuW0RzcZ6-",
    src: "assets/img/work/coastal-creations.jpg",
    services: ["Logo design", "Logo variations", "Illustrated mark"],
    description:
      "A firefly tucked inside a “C” for a candle and soap scent shop, with honeycomb-gold badges, a script wordmark and seals that say it serves “coast to coast.”"
  },
  {
    id: "fantascape-bts-vineyard",
    title: "Fantascape: Vineyard Blocking",
    subtitle: "BTS photography",
    client: "Fantascape · Carolina Sundancers & Stardead Nostalgias · 48 Hour Film Project",
    year: "2025",
    categories: ["photography", "film"],
    src: "assets/img/work/fantascape-bts-vineyard.jpg",
    services: ["BTS photography"],
    description:
      "Boom up, camera ready. The director walks the cast through a scene among the vines."
  },
  {
    id: "fantascape-bts-crew",
    title: "Fantascape: Pond-Side Setup",
    subtitle: "BTS photography",
    client: "Fantascape · Carolina Sundancers & Stardead Nostalgias · 48 Hour Film Project",
    year: "2025",
    categories: ["photography", "film"],
    src: "assets/img/work/fantascape-bts-crew.jpg",
    services: ["BTS photography"],
    description:
      "Silks, a bounce, the slate on the grass and the whole crew huddled in the shade. This is what a 48-hour shoot actually looks like."
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
    services: ["Concept development", "Presentation design"],
    description:
      "The presentation board that walked the festival through every hidden layer: river, canebrake, reel, ticket and lens. Each concept is a timeless mark with meaning built in."
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
    services: ["Moodboard", "Monogram", "Type pairing"],
    description:
      "Identity and moodboard for a community relief effort across the Carolinas: a WC monogram with a water-drop counter, an earthy teal, gold, forest and clay palette, an Acherus Grotesque type pairing, and photos from the ground."
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
    id: "bchs-signage",
    title: "BCHS: Signage System",
    subtitle: "Wayfinding + environmental",
    client: "Berkeley County Historical Society",
    categories: ["branding"],
    drive: "1o-9AAz89EOQVHFJru_s4e3PJh7YxPUEM",
    src: "assets/img/work/bchs-signage.jpg",
    services: ["Signage", "Badges", "Silhouette illustration"],
    description: "Seals, badges and county-shaped markers that carry the society's silhouette scene onto signage at different scales."
  }
];

/* Homepage "Client Spotlight": rotates through these project ids. */
window.PHC_SPOTLIGHT = ["fantascape-poster", "reedy-reels", "bchs-branding", "king-wings"];

/* Homepage hero carousel slides (project id + caption label).
   contain: true shows the whole board instead of cropping it to fill the screen. */
window.PHC_HERO = [
  { id: "fantascape-poster", label: "Film Key Art", contain: true },
  { id: "king-wings", label: "Brand + Packaging" },
  { id: "table-for-one", label: "Film Poster", contain: true },
  { id: "soil-soul", label: "Brand + Signage" },
  { id: "lunch-hour", label: "Film Poster", contain: true },
  { id: "fantascape-bts-dome", label: "BTS Photography" },
  { id: "reedy-reels", label: "Festival Branding", contain: true }
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
