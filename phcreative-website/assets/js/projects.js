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
    id: "mural-lewis-bbq",
    title: "All Hail the King",
    subtitle: "Mural",
    client: "Lewis Barbecue",
    categories: ["fineart"],
    src: "assets/img/work/mural-lewis-bbq.jpg",
    size: "wide",
    featured: true,
    services: ["Mural", "Hand lettering", "Large-scale painting"],
    description: "A crowned bull in engraving-style linework on a turquoise brick wall, with sunburst rays, art deco corner fans and \"All Hail the King\" lettering, under the patio's string lights."
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
    id: "carolina-life-rebrand",
    title: "Carolina Life Real Estate & Auctions",
    subtitle: "Rebrand + brand guide",
    client: "Carolina Life Real Estate & Auctions · Moncks Corner, SC",
    year: "2022",
    categories: ["branding"],
    src: "assets/img/work/carolina-life-rebrand.jpg",
    featured: true,
    services: ["Rebrand", "Logo suite", "Brand guide", "Color + type system"],
    description: "A full rebrand for a Lowcountry real estate and auction firm. It has primary and secondary logos built around a palmetto and an ornamental \"C\" seal, a seafoam palette with PMS and hex values, repeat patterns, and a three-tier type system (Trajan Pro Bold headlines, Neue Haas Grotesk body, and a decorative script).",
    points: ["The guide sets the look that carries through everything else I made for Carolina Life: social posts, print collateral, event booths and auction campaigns.", "The seal works as a stand-alone icon on clocks, plates and pins in their social posts.", "Realtor personal brands, like Robin Ward's, sit inside the same family."]
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
    id: "cmf-2025",
    title: "Clemson Music Fest 2025",
    subtitle: "Event + brand activation photography",
    client: "Clemson Music Fest",
    year: "2025",
    categories: ["photography"],
    src: "assets/img/work/cmf-2025.jpg",
    size: "wide",
    featured: true,
    services: ["Event photography", "Brand activation coverage"],
    description: "Festival coverage centered on the BeatBox party-punch truck: glitter artists at work, fans with branded hand fans, product on ice, and the crowd under the stage lights."
  },
  {
    id: "illustration-silhouettes",
    title: "Custom Silhouettes & Line Drawings",
    subtitle: "Illustration commissions",
    client: "Couples, families, weddings & pets",
    categories: ["illustration"],
    src: "assets/img/work/illustration-silhouettes.jpg",
    featured: true,
    services: ["Silhouettes", "Line drawings", "Starting at $75"],
    description:
      "Hand-traced silhouettes and fine line drawings from your own photos: profiles, couples, a wedding portrait, a heart-framed kiss, even a pet's paw print. They work as gifts, wedding signage, logos and keepsake prints.",
    points: [
      "Solid silhouettes with fine white detail lines that keep hair, fabric and hands readable.",
      "Pure line drawings for a softer, more intimate portrait.",
      "Delivered print-ready, or framed into shapes like the heart."
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
    id: "swirling-seas",
    title: "Swirling Seas",
    subtitle: "Acrylic on canvas",
    client: "Original painting · Payton Hood",
    categories: ["fineart"],
    src: "assets/img/work/swirling-seas.jpg",
    featured: true,
    services: ["Acrylic painting", "Prints available by request"],
    description:
      "A curling Carolina wave under lavender-lit clouds, built up in thick, quick brushwork so the foam feels like it's still moving. Prints are available by request."
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
    id: "melt-mural-fest",
    title: "Melt Mural Fest: Photo Booth",
    subtitle: "Event branding + photo booth",
    client: "Melt Mural Fest",
    categories: ["branding", "photography"],
    src: "assets/img/work/melt-mural-fest.jpg",
    size: "wide",
    featured: true,
    services: ["Event branding", "Photo prop build", "Stickers + merch", "Event photography"],
    description: "\"Photo Booth by Payton Hood Creative\": I branded and ran the festival's photo booth. That meant a sign print in melting sunset colors, a giant popsicle photo prop I built, Melt stickers for guests and a PHCreative merch table, plus the photos themselves with festival-goers and the fest founders."
  },
  {
    id: "unlonely-campaign",
    title: "The UnLonely Project",
    subtitle: "Advertising campaign",
    client: "The UnLonely Project · The Foundation for Art & Healing",
    categories: ["branding"],
    src: "assets/img/work/unlonely-campaign.jpg",
    size: "wide",
    featured: true,
    services: ["Ad campaign", "Vehicle wraps", "Out-of-home", "Digital"],
    description: "A campaign built on one line: \"Let's ___ to be UnLonely. Let's be creative.\" Paint, sing, dance, write and cook each get their own duotone image, carried across a bus wrap, a van wrap, digital ads, a mall kiosk, a cinema screen and a billboard."
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
    id: "gippy-auction",
    title: "Gippy Plantation Auction",
    subtitle: "Real estate auction campaign",
    client: "Carolina Life Real Estate & Auctions · Moncks Corner, SC",
    categories: ["branding"],
    src: "assets/img/work/gippy-auction.jpg",
    size: "wide",
    featured: true,
    services: ["Auction signage", "Mailer + brochure", "Presentation board", "Historical storytelling"],
    description: "A complete campaign to auction a home on 14± acres at 282 Dairy Farm Rd in Moncks Corner. It includes the auction sign and mailer, a property brochure, and a rezoning presentation board. The property's history is told on a piece styled as a Gippy Plantation Dairy milk bottle, with archival farm photos shown as polaroids."
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
    id: "overlooked-townscapes",
    title: "Overlooked Townscapes",
    subtitle: "Photo book",
    client: "Bonneau, Macedonia & Saint Stephen · Berkeley County, SC",
    categories: ["photography", "fineart"],
    src: "assets/img/work/overlooked-townscapes.jpg",
    size: "wide",
    services: ["Photo book", "HDR photography", "Book design"],
    description: "A 22-page photo book of the houses, churches and storefronts in the small Lowcountry towns of Bonneau, Macedonia and Saint Stephen. These places are usually passed by or seen as eyesores. I shot every image in high dynamic range to give the run-down buildings more life and character, and to leave the viewer wondering what each place used to be."
  },
  {
    id: "fa-family-fibers",
    title: "Family Fibers",
    subtitle: "Digital illustration",
    client: "Original artwork · Payton Hood",
    categories: ["fineart", "illustration"],
    src: "assets/img/work/fa-family-fibers.jpg",
    services: ["Digital illustration", "Lettering"],
    description: "An anatomical heart drawn entirely from family names, framed by \"Love you with every beat of my heart.\""
  },
  {
    id: "lotus-piano",
    title: "Lotus Piano",
    subtitle: "Painted public piano",
    client: "Public art piano",
    categories: ["fineart"],
    src: "assets/img/work/lotus-piano.jpg",
    services: ["Painting", "Public art"],
    description: "A piano painted end to end: a stone lotus blooming over a mountain sunset, a dove in flight, a meditating figure on a lily pad, and a lightning-bolt leg."
  },
  {
    id: "stage-production-design",
    title: "Stage Production Design",
    subtitle: "Sets, scenic pieces & stage graphics",
    client: "Live stage productions",
    categories: ["film"],
    src: "assets/img/work/stage-production-design.jpg",
    size: "wide",
    services: ["Production design", "Scenic builds", "Stage graphics"],
    description:
      "Scenery built to be read from the back row: timber A-frames lit with paper stars, a wooden fence stenciled with the words that wall people in (prejudice, abandonment, rejection, betrayal), an O-FENCE floor graphic, and a wall of bold paper shapes that frames the stage under full concert lighting.",
    points: [
      "Each set carries the message of the series it was built for, so the story starts before anyone speaks.",
      "Pieces are designed around stage lighting, haze and camera so they hold up in person and on the livestream.",
      "Hands-on builds in wood, paint, stencil and paper."
    ]
  },
  {
    id: "fa-one-in-ten",
    title: "1/10",
    subtitle: "Mixed-media collage",
    client: "Original artwork · Payton Hood",
    categories: ["fineart"],
    src: "assets/img/work/fa-one-in-ten.jpg",
    size: "wide",
    services: ["Collage", "Mixed media"],
    description: "Ten figures cut from South Carolina \"I Voted\" stickers. Nine are pieced together from scraps; one is made from a whole sticker and raises a rolled-up arm."
  },
  {
    id: "remnants-of-ash",
    title: "Remnants of Ash",
    subtitle: "Camera department: 1st AC",
    client: "Concord Creative Company · directed by Josh Myers",
    categories: ["film"],
    src: "assets/img/work/remnants-of-ash.jpg",
    services: ["1st Assistant Camera"],
    description:
      "I worked as 1st Assistant Camera on this Concord Creative Company production, written by Josh Myers and Tammy Mattox, keeping the image sharp and the camera department running."
  },
  {
    id: "carolina-life-social",
    title: "Carolina Life: Social Media",
    subtitle: "Seasonal + listing posts",
    client: "Carolina Life Real Estate & Auctions · Moncks Corner, SC",
    categories: ["branding"],
    src: "assets/img/work/carolina-life-social.jpg",
    size: "wide",
    services: ["Social media graphics", "Listing posts", "Campaign templates"],
    description: "Posts that keep a local brokerage visible all year: a Spring Forward clock made from the brand seal, \"easy as pie\" for Pi Day, South Carolina Day, a Just Sold listing at 1180 Moss Grove Drive, National Physicians Week, and \"Welcome Back Home\" closing posts."
  },
  {
    id: "death-to-life",
    title: "Death to Life",
    subtitle: "Photography diptych: Emersion / Recession",
    client: "Original artwork · Payton Hood",
    categories: ["photography", "fineart"],
    src: "assets/img/work/death-to-life.jpg",
    services: ["Fine art photography"],
    description: "In Emersion, a fern grows toward the window of an abandoned room. In Recession, the next room's paint peels away in the same light."
  },
  {
    id: "fantascape-bts-lab",
    title: "Fantascape: The Lab",
    subtitle: "BTS photography",
    client: "Fantascape · Carolina Sundancers & Stardead Nostalgias · 48 Hour Film Project",
    year: "2025",
    categories: ["photography", "film"],
    src: "assets/img/work/fantascape-bts-lab.jpg",
    services: ["Production stills", "BTS photography"],
    description:
      "A production still in the film's magenta-and-blue world: the author and the lab-coated scientist moments before the escape begins."
  },
  {
    id: "realtor-pop-bys",
    title: "Realtor Pop-By Gifts",
    subtitle: "Print + gift design",
    client: "Carolina Life Real Estate & Auctions · Moncks Corner, SC",
    categories: ["branding"],
    src: "assets/img/work/realtor-pop-bys.jpg",
    size: "wide",
    services: ["Pop-by tags", "Seasonal print", "Gift concepts"],
    description: "Small gifts that keep realtors top of mind. \"Do you have any Peeps with real estate needs?\" \"We would be lucky to be your realtor.\" There are \"Thanks a latte\" teacher cards, first-responder and Nurses Appreciation Week cards, and a football-season peanut bag, each with its own printed tag."
  },
  {
    id: "fa-divine-feminine",
    title: "Divine Feminine",
    subtitle: "Mixed media",
    client: "Original artwork · Payton Hood",
    categories: ["fineart", "illustration"],
    src: "assets/img/work/fa-divine-feminine.jpg",
    services: ["Mixed media", "Illustration"],
    description: "Four scalloped wheels of pastel figure illustrations, each one circling the same golden cloud photograph."
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
    services: ["Logo design"],
    description:
      "Four marks, four personalities: a gold script seal for The Gilded Pearl mobile event company, a refined monogram for Little Miss Macarons, a mandala-style emblem for Carolina Life Real Estate & Auctions, and a bold vintage badge for Status Quo Cigars."
  },
  {
    id: "fa-inside-out",
    title: "Inside Out",
    subtitle: "Digital photography diptych",
    client: "Original artwork · Payton Hood",
    categories: ["fineart", "photography"],
    src: "assets/img/work/fa-inside-out.jpg",
    size: "wide",
    services: ["Fine art photography"],
    description: "Two views of an abandoned building: the graffiti-covered outside under a red-tiled roof, and the collapsed inside where those same tiles have fallen in."
  },
  {
    id: "mural-ground",
    title: "Ground Mural",
    subtitle: "Painted walkway mural",
    client: "Public walkway",
    categories: ["fineart"],
    src: "assets/img/work/mural-ground.jpg",
    services: ["Ground mural", "Large-scale painting"],
    description: "A walkway mural in sage, aqua and slate: circles and tapered bands linked by fine lines, like a mechanism drawn across the path."
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
    id: "wild-carolinas",
    title: "Wild Carolinas",
    subtitle: "Wildlife photography",
    client: "North & South Carolina",
    categories: ["photography"],
    src: "assets/img/work/wild-carolinas.jpg",
    size: "wide",
    services: ["Wildlife photography"],
    description: "Elk, herons, an osprey nest, turtles and songbirds, photographed across the Carolinas."
  },
  {
    id: "robin-ward-brand",
    title: "Robin Ward, Realtor®",
    subtitle: "Personal brand guide",
    client: "Carolina Life Real Estate & Auctions · Moncks Corner, SC",
    year: "2022",
    categories: ["branding"],
    src: "assets/img/work/robin-ward-brand.jpg",
    services: ["Personal brand", "Logo", "Brand guide"],
    description: "A personal brand for one of Carolina Life's realtors: a signature-style wordmark, key-and-house seals, and a palette and pattern set that stays inside the Carolina Life family."
  },
  {
    id: "cmf-beatbox-product",
    title: "BeatBox on Ice",
    subtitle: "Product photography",
    client: "Clemson Music Fest 2025",
    year: "2025",
    categories: ["photography"],
    src: "assets/img/work/cmf-beatbox-product.jpg",
    services: ["Product photography"],
    description: "A carton of BeatBox Orange Blast on crushed ice, shot on site during the festival activation."
  },
  {
    id: "troop6-fundraiser",
    title: "Troop 6 Post-A Fundraiser",
    subtitle: "Fundraiser flyer",
    client: "South Carolina Highway Patrol · Troop 6 Post-A",
    categories: ["branding"],
    src: "assets/img/work/troop6-fundraiser.jpg",
    services: ["Flyer design"],
    description: "A fundraiser flyer for the troopers who patrol Berkeley and Charleston counties, selling challenge coins for $15 with a Venmo QR code. A patrol car under a storm sky does the talking."
  },
  {
    id: "fa-captured-flashbacks",
    title: "Captured Flashbacks",
    subtitle: "Digital photography",
    client: "Original artwork · Payton Hood",
    categories: ["fineart", "photography"],
    src: "assets/img/work/fa-captured-flashbacks.jpg",
    services: ["Still life photography"],
    description: "Vintage cameras, flashbulbs, reading glasses and faded family snapshots, staged as two still lifes about how a photograph holds on to a moment."
  },
  {
    id: "fa-compare-to-contrast",
    title: "Compare to Contrast",
    subtitle: "Cut-paper collage",
    client: "Original artwork · Payton Hood",
    categories: ["fineart"],
    src: "assets/img/work/fa-compare-to-contrast.jpg",
    size: "wide",
    services: ["Collage"],
    description: "Two cut-paper compositions in the same four colors: one symmetrical and calm, the other split open with diagonals."
  },
  {
    id: "southern-sippin",
    title: "Southern Sippin'",
    subtitle: "Food photography",
    client: "Original photography · Payton Hood",
    categories: ["photography"],
    src: "assets/img/work/southern-sippin.jpg",
    services: ["Food photography"],
    description: "Sweet tea in a mason jar with lemon, plaid linen and a biscuit on the side, lit like a slow afternoon."
  },
  {
    id: "nc-postcards",
    title: "North Carolina Postcards",
    subtitle: "Landscape photography + layout",
    client: "Soco Falls · Lake Lure · Biltmore Gardens, NC",
    categories: ["photography"],
    src: "assets/img/work/nc-postcards.jpg",
    services: ["Landscape photography", "Postcard design"],
    description: "Soco Falls, Lake Lure and the glass gardens at Biltmore, shot and laid out as a postcard set."
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
    id: "music-on-main-booth",
    title: "Carolina Life at Music on Main",
    subtitle: "Event booth design",
    client: "Carolina Life Real Estate & Auctions · Moncks Corner, SC",
    categories: ["branding"],
    src: "assets/img/work/music-on-main-booth.jpg",
    services: ["Event booth", "Signage", "Giveaways"],
    description: "An event booth for a downtown summer concert series. It has a giant key-shaped sign (\"We said yes to the address!\"), a \"Keep Kool with the coolest realtors in town\" koozie giveaway and a QR sign-up, all in the brand's turquoise."
  },
  {
    id: "realtor-print-collateral",
    title: "Realtor Print Collateral",
    subtitle: "Business cards + stationery",
    client: "Carolina Life Real Estate & Auctions · Moncks Corner, SC",
    categories: ["branding"],
    src: "assets/img/work/realtor-print-collateral.jpg",
    size: "wide",
    services: ["Business cards", "Stationery"],
    description: "Business cards for Jennifer Lusk and Robin Ward, plus branded sympathy cards. These everyday pieces carry the Carolina Life look into every handshake."
  },
  {
    id: "realtor-services-flyer",
    title: "Creative Services for Realtors",
    subtitle: "PHCreative one-sheet",
    client: "Payton Hood Creative",
    categories: ["branding"],
    src: "assets/img/work/realtor-services-flyer.jpg",
    services: ["Self-promotion", "Flyer design"],
    description: "My one-sheet for real estate professionals: business cards, pop-by and leave-behind prints, social graphics, listing flyers, branded templates, office signage, and photography and headshots, shown with real work for local agents."
  },
  {
    id: "fa-physique",
    title: "PHysique",
    subtitle: "Tetraptych digital illustration",
    client: "Original artwork · Payton Hood",
    categories: ["fineart", "illustration"],
    src: "assets/img/work/fa-physique.jpg",
    services: ["Digital illustration"],
    description: "Four flat-color figure studies in coral, teal and cream. The bodies are built from confident shapes, with a single fine line for detail."
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
window.PHC_SPOTLIGHT = ["fantascape-poster", "carolina-life-rebrand", "reedy-reels", "melt-mural-fest"];

/* Homepage hero carousel slides (project id + caption label).
   contain: true shows the whole board instead of cropping it to fill the screen. */
window.PHC_HERO = [
  { id: "fantascape-poster", label: "Film Key Art", contain: true },
  { id: "mural-lewis-bbq", label: "Mural" },
  { id: "king-wings", label: "Brand + Packaging" },
  { id: "table-for-one", label: "Film Poster", contain: true },
  { id: "fantascape-bts-dome", label: "BTS Photography" },
  { id: "soil-soul", label: "Brand + Signage" },
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
