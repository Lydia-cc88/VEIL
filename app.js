const projects = [
  { id: "digital-01", name: "Tuborg Ringbeats", category: "Digital", type: "Web & UI / Campaign", year: "2025", words: ["Pressure", "Rhythm"], bg: "#0b1713", colors: ["#c8ff19", "#07110e"], icon: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-icon.png", summary: "Tuborg Ringbeats transforms everyday noise and pressure into shareable electronic music. The campaign connects a bottle-cap ring with a web experience where people upload sounds, shape a track and share it with the community.", role: "Concept\nCampaign Design\nUX / UI\nWeb Experience\nVideo Editing\nAI Asset Production\nScriptwriting\nStoryboarding", credits: "Concept project for Tuborg", website: "https://tuborg-ringbeats.webflow.io/" },
  { id: "digital-02", name: "PathMuse", category: "Digital", type: "UX / UI / Service Design", year: "2026", words: ["Collect", "Navigate"], bg: "#df6689", colors: ["#c59a43", "#171717"], icon: "assets/projects/pathmuse/pathmuse-bastet-icon.png", summary: "PathMuse is a personalised museum navigation system for the British Museum. Visitors select the collections they want to explore, receive a tailored indoor route, discover object stories along the way and preserve the visit as a visual memory.", role: "UX Research\nService Design\nUI / Interaction\nPhysical-Digital Prototype\nBluetooth Testing\nVideo Editing\nAI Asset Generation\nLogo Design", credits: "Collaborative university project\nBritish Museum concept" },
  { id: "digital-03", name: "Marx Memorial Library", category: "Digital", type: "Web Design / Visual Identity", year: "2026", words: ["Archive", "Struggle"], bg: "#392722", colors: ["#df4d2d", "#211a18"], icon: "assets/projects/spatial/project-03-icon.png", summary: "A contemporary digital identity and communication system for the Marx Memorial Library. The project connects its historic building, socialist archive and educational mission through a new website, campaign language and public-facing applications.", role: "Visual Identity\nWeb Design\nArt Direction\nCampaign System\nBranding\nDisplay Design\nPoster", credits: "Marx Memorial Library concept project", website: "https://torriki74-eng.github.io/MML-6.0-Website/" },
  { id: "digital-04", name: "MeloTrip", category: "Digital", type: "Web / UI / Service Design", year: "2026", words: ["Memory", "Melody"], bg: "#bfd7e9", colors: ["#f3e45b", "#17345f"], icon: "assets/projects/melotrip/melotrip-orbit.png", summary: "MeloTrip turns journeys into sound-linked memories. It records seven-second fragments, pairs them with images and places, and builds a private listening atlas across mobile and web.", role: "UX Research\nService Design\nUI / Interaction\nWeb Experience\nUser Testing\nVideo Editing\nBranding", credits: "Individual postgraduate project\nExperience prototype", links: [
    { label: "Case Study", title: "Read the MeloTrip case study", url: "https://mining-relax-35841162.figma.site/" },
    { label: "UI Prototype", title: "Open the interactive prototype", url: "https://mining-relax-35841162.figma.site/" },
    { label: "Website", title: "Visit the web experience", url: "https://torriki74-eng.github.io/MML-6.0-Website/" }
  ] },
  { id: "gold-rush", name: "Gold Rush", category: "Transmedia", type: "Interactive Installation", year: "2026", words: ["Fragment", "Memory"], bg: "#b59a61", colors: ["#f1d89a", "#17120b"], icon: "assets/projects/gold-rush/gold-rush-sign-transparent.png", summary: "Gold Rush reimagines archaeological ceramics as a responsive field of particles. Vessels, figures and fragments dissolve and gather again through gesture, turning the act of looking into an encounter with unstable material memory.", role: "Concept & Art Direction\nInteractive Installation\n3D / Particle Visuals\nExperience Design\n3D Rendering\nTouchDesigner", credits: "Independent interactive installation" },
  { id: "welcome-exe", name: "Welcome.exe", category: "Transmedia", type: "Interactive Moving-image Installation", year: "2025", words: ["Algorithm", "Existence"], bg: "#101820", colors: ["#e6a330", "#69e8f6"], icon: "assets/projects/welcome-exe/welcome-exe-icon.png", summary: "Welcome.exe constructs a future society governed by algorithms and attention metrics. Seen through a woman's first-person perspective, the AI-generated film traces her gradual estrangement inside this algorithmic world. The installation operates as a terminal: as viewers approach and participate, they form a closer connection with that future and confront a question — are we increasingly using data to prove that we exist?", role: "Concept & Art Direction\nInteractive Installation\nAI Moving Image\nExperience Design\nVideo Editing\nScriptwriting\nArduino Interaction\nGesture Tracking", credits: "Interactive moving-image installation\nSupervised by Zhang Meng\n200 × 300 cm" },
  { id: "microscopic-world", name: "The Microscopic World", category: "Transmedia", type: "Photography Installation / Participatory Observation", year: "2025", words: ["Culture", "Observe"], bg: "#07110d", colors: ["#d6ff48", "#ef7d2c"], icon: "assets/projects/microscopic-world/microscopic-world-icon.png", summary: "The Microscopic World brings the ecology of the Xinkai River into the exhibition through a series of living photographic cultures. Samples collected directly from the river were inoculated in Petri dishes and incubated for approximately ten days, producing distinct forms, colours and textures. In the installation, visitors use microscopes to inspect the specimens, becoming active observers — and participants — in the work's continuing process of transformation.", role: "Concept & Art Direction\nPhotography Installation\nSample Collection & Cultivation\nParticipatory Experience", credits: "Independent photography installation\nXinkai River ecological samples" },
  { id: "shoots", name: "SHOOTS", category: "Transmedia", type: "Experimental Short Film / Moving-image Installation", year: "2025", words: ["Fragment", "Connection"], bg: "#161526", colors: ["#ef5f7c", "#31588f"], icon: "assets/projects/shoots/shoots-icon.png", summary: "SHOOTS investigates how mobile digital media intervenes in remembering. Still images, moving images and phone-borne memories are recomposed through the semiotic associations that mobile devices forge with scenes once lived or passed through. Presented as an experimental short film and multi-screen installation, the work turns a personal digital archive into a shifting spatial map of connection, displacement and return.", role: "Concept & Direction\nExperimental Film\nInstallation Design\nEditing & Image Research", credits: "Independent experimental short film and moving-image installation" }
];

const categoryModules = [
  { id: "digital", category: "DIGITAL", type: "Web & UI", projectIds: ["digital-01", "digital-02", "digital-03", "digital-04"], description: "Interface systems, web experiences and screen-based identities shaped through interaction." },
  { id: "spatial", category: "TRANSMEDIA", type: "Video & Interactive Installation", projectIds: ["gold-rush", "welcome-exe", "microscopic-world", "shoots"], description: "Video and interactive installations where audience, signal, moving image and physical space meet." }
];

const homeReturnProject = Object.freeze({
  id: "home-return",
  name: "Return Home",
  category: "VEIL",
  type: "Main Index",
  bg: "#ff087d",
  colors: ["#d7ff00", "#07112f"],
  icon: "assets/projects/shoots/shoots-end-ring.png"
});

const categoryTransitionIcons = [
  "assets/projects/tuborg-ringbeats/tuborg-ringbeats-icon.png",
  "assets/projects/gold-rush/gold-rush-sign-transparent.png",
  "assets/projects/spatial/project-03-icon.png",
  "assets/projects/melotrip/melotrip-orbit.png"
];

const projectMediaSystems = {
  Digital: [
    ["Hero demonstration", "Final interface / motion", "16:9", "wide"],
    ["Context + research", "Reference / insight", "4:3", "half-left"],
    ["User flow", "Journey / wireframe", "4:3", "half-right"],
    ["Core system", "Interaction / prototype", "8 columns", "feature"],
    ["Interface detail", "Type / component / state", "4 columns", "detail"]
  ],
  Transmedia: [
    ["Installation film", "Hero documentation", "16:9", "wide"],
    ["Space + context", "Site / audience", "4:3", "half-left"],
    ["Interaction test", "Prototype / response", "4:3", "half-right"],
    ["Technical system", "Signal / construction", "8 columns", "feature"],
    ["Audience experience", "Detail / observation", "4 columns", "detail"]
  ]
};

const projectMediaContent = {
  "digital-01": [
    { title: "Campaign Film", description: "Full promotional film", ratio: "16:9", layout: "wide", type: "video", src: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-campaign-film.mp4", controls: true, preload: "metadata" },
    { title: "Master Cover", description: "Project concept and campaign overview", ratio: "16:9", layout: "wide", type: "image", src: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-cover.jpg", alt: "Tuborg Ringbeats campaign cover explaining the insight, idea and execution" },
    { title: "Motion Detail", description: "Short campaign motion study", ratio: "16:9", layout: "half-left", type: "video", src: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-motion-detail.mp4", muted: true, loop: true, autoplay: true },
    { title: "Web Experience", description: "Upload, remix and community interaction flow", ratio: "16:9", layout: "half-right", type: "image", src: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-web-experience.jpg", alt: "Tuborg Ringbeats website experience and interaction flow" },
    { title: "Shared Release", description: "Campaign atmosphere and social ritual", ratio: "16:9", layout: "feature", type: "image", src: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-celebration.jpg", alt: "Two people celebrating with Tuborg bottles under coloured lights" },
    { title: "Outdoor Poster", description: "Ringbeats campaign shown in the city", ratio: "Cropped", layout: "detail", type: "image", src: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-outdoor-poster.jpg", alt: "Tuborg Ringbeats outdoor poster at a night bus shelter", position: "50% 48%" },
    { title: "Live Experience", description: "The shared track moves from the web into a live event", ratio: "16:9", layout: "wide", type: "image", src: "assets/projects/tuborg-ringbeats/tuborg-ringbeats-live-experience.jpg", alt: "Tuborg Ringbeats live event with an audience and a large stage screen" }
  ],
  "digital-02": [
    { title: "Experience Film", description: "Full PathMuse experience and interaction walkthrough", ratio: "16:9", layout: "wide", type: "video", src: "assets/projects/pathmuse/pathmuse-film.mp4", controls: true, preload: "auto" },
    { title: "Entry & Route Selection", description: "Welcome flow, collection selection and personalised route setup", ratio: "3:2", layout: "wide", type: "image", src: "assets/projects/pathmuse/pathmuse-ui-onboarding.png", alt: "PathMuse onboarding, welcome and British Museum collection selection screens", fit: "contain", surfaceClass: "project-media-surface--pathmuse-ui" },
    { title: "Route Generation", description: "Generating and editing a multi-stop museum route", ratio: "3:2", layout: "half-left", type: "image", src: "assets/projects/pathmuse/pathmuse-ui-route-builder.png", alt: "PathMuse route generation and route editing interface", fit: "contain", surfaceClass: "project-media-surface--pathmuse-ui" },
    { title: "Map, Search & Object Detail", description: "Indoor map, collection search and contextual object story", ratio: "3:2", layout: "half-right", type: "image", src: "assets/projects/pathmuse/pathmuse-ui-map-search-object.png", alt: "PathMuse map, search result and museum object detail screens", fit: "contain", surfaceClass: "project-media-surface--pathmuse-ui" },
    { title: "Guided Navigation", description: "Route guidance, arrival states and transitions between collections", ratio: "3:2", layout: "half-left", type: "image", src: "assets/projects/pathmuse/pathmuse-ui-route-navigation.png", alt: "PathMuse guided museum route and arrival state screens", fit: "contain", surfaceClass: "project-media-surface--pathmuse-ui" },
    { title: "Progress & Visit Memory", description: "Exploration progress, checkout summary and saved objects", ratio: "3:2", layout: "half-right", type: "image", src: "assets/projects/pathmuse/pathmuse-ui-visit-summary.png", alt: "PathMuse visit progress, checkout summary and favourites screens", fit: "contain", surfaceClass: "project-media-surface--pathmuse-ui" },
    { title: "Scenario System", description: "Research, technology, application behaviour and product connectivity", ratio: "A1", layout: "poster", type: "image", src: "assets/projects/pathmuse/pathmuse-scenario-poster.png", alt: "PathMuse A1 scenario poster describing the museum navigation system", fit: "contain", surfaceClass: "project-media-surface--pathmuse-poster" },
    { title: "Physical Touchpoints", description: "Two navigation token and proximity-device prototype studies", ratio: "02 Studies", layout: "half-left", type: "gallery", variant: "prototypes", surfaceClass: "project-media-surface--pathmuse-prototypes", items: [
      { src: "assets/projects/pathmuse/pathmuse-prototype-cat.png", alt: "PathMuse circular physical navigation prototype with a cat symbol" },
      { src: "assets/projects/pathmuse/pathmuse-prototype-coin.png", alt: "PathMuse circular metal navigation token prototype" }
    ] },
    { title: "Object Icon Language", description: "Collection markers used across route and object states", ratio: "05 Icons", layout: "half-right", type: "gallery", variant: "icons", surfaceClass: "project-media-surface--pathmuse-icons", items: [
      { src: "assets/projects/pathmuse/pathmuse-icon-egypt.png", alt: "Egyptian collection icon" },
      { src: "assets/projects/pathmuse/pathmuse-icon-discobolus.png", alt: "Discobolus object icon" },
      { src: "assets/projects/pathmuse/pathmuse-icon-sutton-hoo.png", alt: "Sutton Hoo helmet icon" },
      { src: "assets/projects/pathmuse/pathmuse-icon-moai.png", alt: "Moai object icon" },
      { src: "assets/projects/pathmuse/pathmuse-icon-rosetta-stone.png", alt: "Rosetta Stone icon" }
    ] }
  ],
  "digital-03": [
    { title: "Logo Motion", description: "A short animated reveal of the renewed identity", ratio: "Motion / Loop", layout: "wide", type: "video", src: "assets/projects/marx-memorial-library/mml-logo-animation.mp4", muted: true, loop: true, autoplay: true, controls: true, preload: "auto", surfaceClass: "project-media-surface--mml-motion" },
    { title: "Digital Archive", description: "Website landing page and the visual language of the working struggle", ratio: "Website", layout: "wide", type: "image", src: "assets/projects/marx-memorial-library/mml-website-home.png", alt: "Marx Memorial Library website landing page", fit: "contain", surfaceClass: "project-media-surface--mml-website" },
    { title: "Campaign Posters I", description: "Class Struggle and Guided Tours as a paired institutional campaign", ratio: "02 Posters", layout: "wide", type: "gallery", variant: "mml-poster-pair", surfaceClass: "project-media-surface--mml-poster-pair", items: [
      { src: "assets/projects/marx-memorial-library/mml-poster-class-struggle.png", alt: "Marx Memorial Library Class Struggle campaign poster" },
      { src: "assets/projects/marx-memorial-library/mml-poster-guided-tours.png", alt: "Marx Memorial Library guided tours poster" }
    ] },
    { title: "Campaign Posters II", description: "Portrait-led Lenin and Karl Marx heritage campaign studies", ratio: "02 Posters", layout: "wide", type: "gallery", variant: "mml-poster-pair", surfaceClass: "project-media-surface--mml-poster-pair", items: [
      { src: "assets/projects/marx-memorial-library/mml-poster-lenin.png", alt: "Memorise Lenin campaign poster for Marx Memorial Library" },
      { src: "assets/projects/marx-memorial-library/mml-poster-marx.png", alt: "Memorise Karl Marx campaign poster for Marx Memorial Library" }
    ] },
    { title: "Historical Programme", description: "Historical events programme and anniversary communication", ratio: "Programme", layout: "poster", type: "image", src: "assets/projects/marx-memorial-library/mml-historical-events.png", alt: "Marx Memorial Library historical events information poster", fit: "contain", surfaceClass: "project-media-surface--mml-editorials" },
    { title: "Poster Environments", description: "The campaign translated from a single framed poster to a city-scale sequence", ratio: "03 Applications", layout: "wide", type: "gallery", variant: "mml-environments", surfaceClass: "project-media-surface--mml-environments", items: [
      { src: "assets/projects/marx-memorial-library/mml-framed-poster.png", alt: "Marx Memorial Library guided tours poster in a gallery frame" },
      { src: "assets/projects/marx-memorial-library/mml-city-campaign.png", alt: "Three Marx Memorial Library campaign posters in an urban environment" },
      { src: "assets/projects/marx-memorial-library/mml-a-frame-poster.png", alt: "Marx Memorial Library historical events poster on an A-frame display" }
    ] },
    { title: "Exhibition System", description: "An adaptable archive wall and spatial display language", ratio: "02 Views", layout: "wide", type: "gallery", variant: "mml-exhibition", surfaceClass: "project-media-surface--mml-exhibition", items: [
      { src: "assets/projects/marx-memorial-library/mml-archive-wall.png", alt: "Marx Memorial Library poster archive wall" },
      { src: "assets/projects/marx-memorial-library/mml-exhibition-system.png", alt: "Modular Marx Memorial Library exhibition display system" }
    ] },
    { title: "Identity Applications", description: "A consistent mark and campaign system across objects, merchandise and signage", ratio: "06 Applications", layout: "wide", type: "gallery", variant: "mml-identity", surfaceClass: "project-media-surface--mml-identity", items: [
      { src: "assets/projects/marx-memorial-library/mml-tshirt-black.png", alt: "Black Marx Memorial Library T-shirt" },
      { src: "assets/projects/marx-memorial-library/mml-tshirt-white.png", alt: "White Marx Memorial Library T-shirt" },
      { src: "assets/projects/marx-memorial-library/mml-mug.png", alt: "Marx Memorial Library branded mug" },
      { src: "assets/projects/marx-memorial-library/mml-notebook.png", alt: "Marx Memorial Library branded notebooks" },
      { src: "assets/projects/marx-memorial-library/mml-tote.png", alt: "Marx Memorial Library branded tote bag" },
      { src: "assets/projects/marx-memorial-library/mml-signage.png", alt: "Marx Memorial Library exterior signage" }
    ] }
  ],
  "digital-04": [
    { title: "Experience Film", description: "MeloTrip product narrative and interaction demonstration", ratio: "16:9", layout: "wide", type: "video", src: "assets/projects/melotrip/melotrip-demo.mp4", controls: true, preload: "metadata", surfaceClass: "project-media-surface--melotrip-video" },
    { title: "A0 Case Study", description: "The full MeloTrip service, interaction and visual system at a glance", ratio: "A0", layout: "wide", type: "image", src: "assets/projects/melotrip/melotrip-a0-poster.jpg", alt: "MeloTrip A0 case study poster", fit: "contain", surfaceClass: "project-media-surface--melotrip-poster" },
    { title: "Onboarding", description: "Launch, connected accounts and permission setup", ratio: "03 Screens", layout: "wide", type: "gallery", variant: "melotrip-ui", surfaceClass: "project-media-surface--melotrip-ui", items: [
      { src: "assets/projects/melotrip/ui-launch.png", alt: "MeloTrip launch screen" },
      { src: "assets/projects/melotrip/ui-accounts.png", alt: "MeloTrip connected accounts screen" },
      { src: "assets/projects/melotrip/ui-permissions.png", alt: "MeloTrip permissions screen" }
    ] },
    { title: "Journey Setup", description: "Home, new journey and destination planning flow", ratio: "03 Screens", layout: "wide", type: "gallery", variant: "melotrip-ui", surfaceClass: "project-media-surface--melotrip-ui", items: [
      { src: "assets/projects/melotrip/ui-home.png", alt: "MeloTrip home screen" },
      { src: "assets/projects/melotrip/ui-create-journey.png", alt: "MeloTrip create journey screen" },
      { src: "assets/projects/melotrip/ui-add-destinations.png", alt: "MeloTrip add destinations screen" }
    ] },
    { title: "Capture Flow", description: "Journey mode, seven-second recording and image-sound pairing", ratio: "03 Screens", layout: "wide", type: "gallery", variant: "melotrip-ui", surfaceClass: "project-media-surface--melotrip-ui", items: [
      { src: "assets/projects/melotrip/ui-journey-mode.png", alt: "MeloTrip journey mode screen" },
      { src: "assets/projects/melotrip/ui-recording-ready.png", alt: "MeloTrip recording ready screen" },
      { src: "assets/projects/melotrip/ui-pair-selected.png", alt: "MeloTrip selected image and sound pairing screen" }
    ] },
    { title: "Memory System", description: "Journey summary, memory collection and profile archive", ratio: "03 Screens", layout: "wide", type: "gallery", variant: "melotrip-ui", surfaceClass: "project-media-surface--melotrip-ui", items: [
      { src: "assets/projects/melotrip/ui-summary.png", alt: "MeloTrip journey summary screen" },
      { src: "assets/projects/melotrip/ui-memories.png", alt: "MeloTrip memory collection screen" },
      { src: "assets/projects/melotrip/ui-profile.png", alt: "MeloTrip profile and storage screen" }
    ] },
    { title: "Memory Detail", description: "Paired media states from selection through playback", ratio: "03 Screens", layout: "wide", type: "gallery", variant: "melotrip-ui", surfaceClass: "project-media-surface--melotrip-ui", items: [
      { src: "assets/projects/melotrip/ui-pair-empty.png", alt: "MeloTrip empty image and sound pairing screen" },
      { src: "assets/projects/melotrip/ui-memory-detail.png", alt: "MeloTrip memory detail screen" },
      { src: "assets/projects/melotrip/ui-memory-detail-playing.png", alt: "MeloTrip memory playback screen" }
    ] },
    { title: "Web Sound Atlas", description: "A global listening field connecting sound stories to places", ratio: "16:9", layout: "wide", type: "image", src: "assets/projects/melotrip/web-experience.png", alt: "MeloTrip global sound atlas web experience", fit: "contain", surfaceClass: "project-media-surface--melotrip-web" },
    { title: "Experience Across Devices", description: "Mobile touchpoint and responsive desktop experiences", ratio: "02 Scenes", layout: "wide", type: "gallery", variant: "melotrip-scenes", surfaceClass: "project-media-surface--melotrip-scenes", items: [
      { src: "assets/projects/melotrip/mockup-phone.png", alt: "MeloTrip mobile experience in hand" },
      { src: "assets/projects/melotrip/melotrip-responsive-web-devices.png", alt: "MeloTrip responsive web experience shown across three computers" }
    ] },
    { title: "Colour System", description: "Eight core tones drawn into one consistent MeloTrip colour system", ratio: "08 Colours", layout: "wide", type: "image", src: "assets/projects/melotrip/melotrip-colour-system.svg?v=20260826-3", alt: "MeloTrip unified eight-colour palette", fit: "contain", surfaceClass: "project-media-surface--melotrip-palette", slotClass: "project-media-slot--art-only" }
  ],
  "gold-rush": [
    { title: "Installation Film", description: "Gold Rush in motion", ratio: "16:9", layout: "wide", type: "video", src: "assets/projects/gold-rush/gold-rush-film.mp4", poster: "assets/projects/gold-rush/gold-rush-film-poster.jpg", controls: true, preload: "metadata", surfaceClass: "project-media-surface--gold-rush-film" },
    { title: "Live Installation", description: "Gesture-driven projected encounter", ratio: "1:1", layout: "wide", type: "image", src: "assets/projects/gold-rush/gold-rush-installation-web.jpg", alt: "A visitor interacting with a projected particle vessel in the Gold Rush installation", fit: "contain", surfaceClass: "project-media-surface--gold-rush-installation" },
    { title: "Source Forms", description: "Vessel and Tang sancai studies", ratio: "02 Objects", layout: "wide", type: "gallery", variant: "gold-rush-pair", surfaceClass: "project-media-surface--gold-rush-pair", items: [
      { src: "assets/projects/gold-rush/jade-vessel.webp", alt: "Jade vessel source study" },
      { src: "assets/projects/gold-rush/tang-sancai.webp", alt: "Tang sancai figure source study" }
    ] },
    { title: "Vessel Study", description: "Rendered ceramic form and surface", ratio: "02 Views", layout: "wide", type: "gallery", variant: "gold-rush-pair", surfaceClass: "project-media-surface--gold-rush-pair", items: [
      { src: "assets/projects/gold-rush/vessel-08.jpg", alt: "Rendered decorated ceramic vessel on a black field" },
      { src: "assets/projects/gold-rush/vessel-09.jpg", alt: "Rendered ceramic vessel from an angled view" }
    ] },
    { title: "Fragment Field", description: "Ceramic form held between object and debris", ratio: "16:9", layout: "wide", type: "image", src: "assets/projects/gold-rush/fragment-vessel.jpg", alt: "Ceramic vessel surrounded by suspended fragments", fit: "cover", surfaceClass: "project-media-surface--gold-rush-dark" },
    { title: "Reconstructed Light", description: "Perforated ceramic form study", ratio: "16:9", layout: "half-left", type: "image", src: "assets/projects/gold-rush/ceramic-lamp.jpg", alt: "Rendered perforated ceramic lamp on black", fit: "cover", surfaceClass: "project-media-surface--gold-rush-dark" },
    { title: "Fragment Figure", description: "Tang sancai figure reconstruction", ratio: "16:9", layout: "half-right", type: "image", src: "assets/projects/gold-rush/fragment-figurine.jpg", alt: "Rendered Tang sancai figure reconstructed from ceramic fragments", fit: "cover", surfaceClass: "project-media-surface--gold-rush-light" }
  ],
  "welcome-exe": [
    { title: "Terminal Film", description: "Full moving-image work", ratio: "04:04", layout: "wide", type: "video", src: "assets/projects/welcome-exe/welcome-exe-film.mp4", poster: "assets/projects/welcome-exe/welcome-exe-film-poster.jpg", controls: true, preload: "metadata", surfaceClass: "project-media-surface--welcome-film" },
    { title: "The Algorithmic Gaze", description: "Workplace and domestic life reconstructed through generated images", ratio: "02 Studies", layout: "wide", type: "gallery", variant: "welcome-contrast", surfaceClass: "project-media-surface--welcome-contrast", items: [
      { src: "assets/projects/welcome-exe/algorithmic-gaze-office.png?v=20260910-2", alt: "A visual comparison of a woman at a computer in conventional and AI-generated imagery" },
      { src: "assets/projects/welcome-exe/algorithmic-gaze-kitchen.png?v=20260910-2", alt: "A visual comparison of a woman in a kitchen in conventional and AI-generated imagery" }
    ] },
    { title: "Synthetic Subject", description: "The protagonist moves from recognition to estrangement", ratio: "02 Studies", layout: "wide", type: "gallery", variant: "welcome-contrast", surfaceClass: "project-media-surface--welcome-contrast", items: [
      { src: "assets/projects/welcome-exe/algorithmic-gaze-portrait.png?v=20260910-2", alt: "A visual comparison of a woman's portrait shifting into generated imagery" },
      { src: "assets/projects/welcome-exe/algorithmic-gaze-eye.png?v=20260910-2", alt: "A visual comparison of a human eye shifting into a synthetic illuminated iris" }
    ] },
    { title: "Terminal in Space", description: "The installation connects the audience to the algorithmic world", ratio: "Installation", layout: "wide", type: "image", src: "assets/projects/welcome-exe/installation-wide.jpg", alt: "Wide view of the Welcome.exe interactive moving-image installation", fit: "contain", surfaceClass: "project-media-surface--welcome-wide" },
    { title: "Approach", description: "The terminal activates through proximity and participation", ratio: "Portrait", layout: "half-left", type: "image", src: "assets/projects/welcome-exe/installation-front.jpg", alt: "Front view of the Welcome.exe installation with a camera facing the screen", fit: "contain", surfaceClass: "project-media-surface--welcome-portrait" },
    { title: "Data Stream", description: "Printed outputs turn data into a physical threshold", ratio: "Portrait", layout: "half-right", type: "image", src: "assets/projects/welcome-exe/installation-detail.jpg", alt: "Welcome.exe screen above a long stream of printed algorithmic records", fit: "contain", surfaceClass: "project-media-surface--welcome-portrait" }
  ],
  "microscopic-world": [
    { title: "Living Image", description: "The complete moving-image record", ratio: "Film", layout: "wide", type: "video", src: "assets/projects/microscopic-world/microscopic-world-film.mp4", controls: true, preload: "metadata", surfaceClass: "project-media-surface--microscopic-film" },
    { title: "River Culture", description: "A Xinkai River sample becomes a photographic world", ratio: "Specimen 00", layout: "wide", type: "image", src: "assets/projects/microscopic-world/plate-00.jpg", alt: "A circular green, blue and ochre Petri-dish culture on black", fit: "contain", surfaceClass: "project-media-surface--microscopic-hero", slotClass: "project-media-slot--microscopic-focus" },
    { title: "Incubation", description: "Distinct forms emerge after approximately ten days", ratio: "Specimens 01–04", layout: "wide", type: "gallery", variant: "microscopic-four", surfaceClass: "project-media-surface--microscopic-four", slotClass: "project-media-slot--microscopic-atlas", items: [
      { src: "assets/projects/microscopic-world/plate-01.jpg", alt: "Yellow and white river culture in a Petri dish" },
      { src: "assets/projects/microscopic-world/plate-02.jpg", alt: "White and orange river culture in a Petri dish" },
      { src: "assets/projects/microscopic-world/plate-03.jpg", alt: "Green and orange river culture in a Petri dish" },
      { src: "assets/projects/microscopic-world/plate-04.jpg", alt: "Dark green and violet river culture in a Petri dish" }
    ] },
    { title: "Emergent Forms", description: "Colour, fibre and colony negotiate the surface", ratio: "Specimens 05–08", layout: "wide", type: "gallery", variant: "microscopic-four", surfaceClass: "project-media-surface--microscopic-four", slotClass: "project-media-slot--microscopic-atlas", items: [
      { src: "assets/projects/microscopic-world/plate-05.jpg", alt: "Bright green culture with orange and white growth" },
      { src: "assets/projects/microscopic-world/plate-06.jpg", alt: "Amber culture with white, cyan and orange forms" },
      { src: "assets/projects/microscopic-world/plate-07.jpg", alt: "Amber culture with soft white colonies" },
      { src: "assets/projects/microscopic-world/plate-08.jpg", alt: "Orange culture with branching dark forms" }
    ] },
    { title: "Chromatic Colonies", description: "Each plate develops its own unstable palette", ratio: "Specimens 09–12", layout: "wide", type: "gallery", variant: "microscopic-four", surfaceClass: "project-media-surface--microscopic-four", slotClass: "project-media-slot--microscopic-atlas", items: [
      { src: "assets/projects/microscopic-world/plate-09.jpg", alt: "Blue and violet culture with circular colonies" },
      { src: "assets/projects/microscopic-world/plate-10.jpg", alt: "Turquoise culture with pale floating colonies" },
      { src: "assets/projects/microscopic-world/plate-11.jpg", alt: "Red-violet culture with white and blue growth" },
      { src: "assets/projects/microscopic-world/plate-12.jpg", alt: "Green culture with vivid green and white colonies" }
    ] },
    { title: "Ecological Variations", description: "Parallel cultures reveal difference within one river system", ratio: "Specimens 13–16", layout: "wide", type: "gallery", variant: "microscopic-four", surfaceClass: "project-media-surface--microscopic-four", slotClass: "project-media-slot--microscopic-atlas", items: [
      { src: "assets/projects/microscopic-world/plate-13.jpg", alt: "Green culture scattered with orange and white growth" },
      { src: "assets/projects/microscopic-world/plate-14.jpg", alt: "Blue-green culture with white, blue and brown colonies" },
      { src: "assets/projects/microscopic-world/plate-15.jpg", alt: "Green culture with diffuse white islands" },
      { src: "assets/projects/microscopic-world/plate-16.jpg", alt: "Yellow culture with orange, green and white growth" }
    ] },
    { title: "Microscopic Territories", description: "The dish becomes a map without a fixed scale", ratio: "Specimens 17–20", layout: "wide", type: "gallery", variant: "microscopic-four", surfaceClass: "project-media-surface--microscopic-four", slotClass: "project-media-slot--microscopic-atlas", items: [
      { src: "assets/projects/microscopic-world/plate-17.jpg", alt: "Amber culture crossed by turquoise lace-like growth" },
      { src: "assets/projects/microscopic-world/plate-18.jpg", alt: "Green and violet culture with dense pale structures" },
      { src: "assets/projects/microscopic-world/plate-19.jpg", alt: "Violet culture with branching white colonies" },
      { src: "assets/projects/microscopic-world/plate-20.jpg", alt: "Translucent culture shifting from green to red" }
    ] },
    { title: "Living Atlas", description: "A final field of cultures remains open to observation", ratio: "Specimens 21–26", layout: "wide", type: "gallery", variant: "microscopic-six", surfaceClass: "project-media-surface--microscopic-six", slotClass: "project-media-slot--microscopic-atlas", items: [
      { src: "assets/projects/microscopic-world/plate-21.jpg", alt: "Pale culture marked by orange and blue material" },
      { src: "assets/projects/microscopic-world/plate-22.jpg", alt: "Red culture populated by ringed orange colonies" },
      { src: "assets/projects/microscopic-world/plate-23.jpg", alt: "Pale culture dominated by cracked orange growth" },
      { src: "assets/projects/microscopic-world/plate-24.jpg", alt: "Amber culture with dispersed orange and cyan forms" },
      { src: "assets/projects/microscopic-world/plate-25.jpg", alt: "Blue and violet culture with sparse dark colonies" },
      { src: "assets/projects/microscopic-world/plate-26.jpg", alt: "Red-orange culture with dense cellular textures" }
    ] }
  ],
  "shoots": [
    { title: "Experimental Film", description: "The complete moving-image work", ratio: "Film", layout: "wide", type: "video", src: "assets/projects/shoots/shoots-film.mp4", controls: true, preload: "metadata", surfaceClass: "project-media-surface--shoots-film" },
    { title: "Mobile Image Field", description: "Stored images distributed across a multi-screen installation", ratio: "Installation", layout: "wide", type: "image", src: "assets/projects/shoots/installation-field.jpg", alt: "Multi-screen moving-image installation made from mobile phones mounted on stands", fit: "contain", surfaceClass: "project-media-surface--shoots-installation" },
    { title: "Scenes Remembered", description: "Movement, place and light recur as unstable coordinates", ratio: "03 Fragments", layout: "wide", type: "gallery", variant: "shoots-triptych", surfaceClass: "project-media-surface--shoots-triptych", items: [
      { src: "assets/projects/shoots/scene-forest.jpg", alt: "A dark wooded passage illuminated from behind" },
      { src: "assets/projects/shoots/scene-step.jpg", alt: "Shoes and legs crossed by a narrow line of sunlight" },
      { src: "assets/projects/shoots/scene-sunset.jpg", alt: "A sunset seen through a curved reflective frame and electrical wires" }
    ] },
    { title: "Objects as Signs", description: "Material fragments become anchors for mobile memory", ratio: "03 Objects", layout: "wide", type: "gallery", variant: "shoots-triptych", surfaceClass: "project-media-surface--shoots-triptych", items: [
      { src: "assets/projects/shoots/object-glow.jpg", alt: "Pink crystalline fragments lit on a circular light" },
      { src: "assets/projects/shoots/object-wire.jpg", alt: "A silhouetted figure surrounded by suspended wire forms" },
      { src: "assets/projects/shoots/object-chain.jpg", alt: "A black horse-head form draped with metal chains" }
    ] },
    { title: "Gesture, Trace, Body", description: "Bodies enter the archive as signs, shadows and directions", ratio: "03 Traces", layout: "wide", type: "gallery", variant: "shoots-triptych", surfaceClass: "project-media-surface--shoots-triptych", items: [
      { src: "assets/projects/shoots/gesture-hands.jpg", alt: "Three hands reaching into a blue field" },
      { src: "assets/projects/shoots/trace-shadow.jpg", alt: "A line drawing formed by a shadow on a blue surface" },
      { src: "assets/projects/shoots/figure-ladder.jpg", alt: "A small seated figure on a ladder inside an illuminated display" }
    ] },
    { title: "Stored Place", description: "A remembered location held as colour, surface and infrastructure", ratio: "4:3", layout: "wide", type: "image", src: "assets/projects/shoots/stored-place.jpg", alt: "Two electricity meters set into a vivid blue wall", fit: "cover", surfaceClass: "project-media-surface--shoots-place" },
    { title: "Memory Lexicon", description: "Fragment, connection, movement, territory and return", ratio: "Notes", layout: "poster", type: "image", src: "assets/projects/shoots/memory-lexicon.jpg", alt: "A French-language list of words related to fragments, movement, place and memory", fit: "contain", surfaceClass: "project-media-surface--shoots-lexicon" }
  ]
};

const body = document.body;
const workCollection = document.querySelector("#work-collection");
let collectionLockedUntil = 0;
let collectionWheelTotal = 0;
let collectionWheelTimer;
const collectionCovers = {
  "digital-02": "cube-media/museum.webp",
  "digital-03": "cube-media/library.webp",
  "digital-04": "collection-media/melotrip-cover.jpg",
  "welcome-exe": "collection-media/welcome-cover-v2.jpg",
  "microscopic-world": "collection-media/microscopic-cover.png",
  "shoots": "collection-media/shoots-cover.png"
};
document.querySelector("#collection-list").innerHTML = projects.map((project, index) => {
  const media = projectMediaContent[project.id];
  const cover = collectionCovers[project.id] || media.find(item => item.poster)?.poster || media.find(item => item.type === "image")?.src;
  return `<button class="collection-card" type="button" data-project="${project.id}" style="--float-delay:${index * -.83}s;--work-accent:${project.colors[0]}"><span class="collection-mark"><img src="${project.icon}" alt="" loading="lazy"></span><span class="collection-cover"><img src="${cover}" alt="${project.name} project cover" loading="lazy"></span><span class="collection-caption"><span><small>${String(index + 1).padStart(2, "0")} / ${project.category}</small><strong class="refraction-title" aria-label="${project.name}">${refractiveTextMarkup(project.name)}</strong></span></span></button>`;
}).join("");
function setCollection(open, immediate = false) {
  if (open && body.classList.contains("overlay-open")) return;
  if (!open) document.querySelectorAll(".collection-caption strong.is-refracting").forEach(releaseTitleRefraction);
  clearTimeout(collectionSnapTimer);
  collectionWheelStart = null;
  collectionDrag = null;
  collectionWheelTotal = 0;
  if (immediate) body.classList.add("collection-reset");
  body.classList.toggle("collection-open", open);
  if (typeof syncHomeRuntime === "function") syncHomeRuntime();
  if (!immediate) {
    body.classList.remove("collection-transiting");
    void workCollection.offsetHeight;
    body.classList.add("collection-transiting");
    clearTimeout(collectionPortalTimer);
    collectionPortalTimer = setTimeout(() => body.classList.remove("collection-transiting"), 1100);
  }
  workCollection.inert = !open;
  workCollection.setAttribute("aria-hidden", String(!open));
  document.querySelector("#home-view").inert = open;
  collectionLockedUntil = performance.now() + 1100;
  if (open) {
    collectionPointerOffset = 0;
    renderCollection();
    workCollection.scrollTop = 0;
    document.querySelector("#collection-title").focus({ preventScroll: true });
  }
  if (immediate) {
    void workCollection.offsetHeight;
    body.classList.remove("collection-reset");
  }
}
// A finite wheel: the homepage remains outside this independent carousel.
// 合集运动参数：Lerp 越小越柔和；鼠标视差和滚轮倍率越小，移动幅度越克制。
const COLLECTION_MOTION = Object.freeze({
  lerp: .085,
  mouseParallax: .16,
  dragDistance: .85,
  wheelSpeed: .0014
});
let collectionPosition = 0;
let collectionTarget = 0;
let collectionPointerOffset = 0;
let collectionFrame = 0;
let collectionPortalTimer;
let collectionSnapTimer;
let collectionWheelStart = null;
let collectionDrag = null;
let collectionSuppressClick = 0;
const collectionCards = [...document.querySelectorAll(".collection-card")];
const collectionSelector = document.querySelector("#collection-selector");
collectionSelector.innerHTML = projects.map((p, i) => `<button type="button" data-collection-index="${i}" aria-label="Select ${p.name}"><img src="${p.icon}" alt=""></button>`).join("");
function renderCollection() {
  const radius = Math.max(innerWidth * .72, innerHeight * .8);
  const active = Math.round(collectionPosition);
  collectionCards.forEach((card, i) => {
    const distance = i - collectionPosition;
    const angle = distance * .48;
    card.style.transform = `translate(-50%, -50%) translate(${Math.sin(angle) * radius}px, ${(1 - Math.cos(angle)) * radius}px) rotate(${angle * 25}deg) scale(${Math.max(.65, 1 - Math.abs(distance) * .16)})`;
    card.style.opacity = Math.abs(distance) > 2.5 ? "0" : String(Math.max(.15, 1 - Math.abs(distance) * .5));
    card.style.visibility = Math.abs(distance) > 2.5 ? "hidden" : "visible";
    card.style.zIndex = String(20 - Math.round(Math.abs(distance) * 5));
    card.tabIndex = i === active ? 0 : -1;
    card.classList.toggle("is-current", i === active);
  });
  [...collectionSelector.children].forEach((button, i) => button.setAttribute("aria-pressed", String(i === active)));
  document.querySelector("#collection-count").textContent = `${String(active + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  document.querySelector("#collection-prev").disabled = active === 0;
  document.querySelector("#collection-next").disabled = active === projects.length - 1;
}
function animateCollection() {
  // 高频 mousemove 只改目标值；已有 RAF 循环持续追赶，避免反复取消帧造成卡顿。
  if (collectionFrame) return;
  let last = performance.now();
  function step(now) {
    const dt = Math.min(48, now - last); last = now;
    const visualTarget = collectionTarget + collectionPointerOffset;
    const ease = 1 - Math.pow(1 - COLLECTION_MOTION.lerp, dt / 16.667);
    collectionPosition += (visualTarget - collectionPosition) * ease;
    if (Math.abs(visualTarget - collectionPosition) < .0005) collectionPosition = visualTarget;
    renderCollection();
    collectionFrame = collectionPosition !== visualTarget ? requestAnimationFrame(step) : 0;
  }
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { collectionPosition = collectionTarget + collectionPointerOffset; renderCollection(); }
  else collectionFrame = requestAnimationFrame(step);
}
function selectCollection(index) {
  clearTimeout(collectionSnapTimer);
  collectionTarget = Math.max(0, Math.min(projects.length - 1, index));
  animateCollection();
}
collectionSelector.addEventListener("click", event => {
  const button = event.target.closest("[data-collection-index]");
  if (button) selectCollection(Number(button.dataset.collectionIndex));
});
document.querySelector("#collection-prev").addEventListener("click", () => selectCollection(Math.round(collectionTarget) - 1));
document.querySelector("#collection-next").addEventListener("click", () => selectCollection(Math.round(collectionTarget) + 1));
document.querySelector("#collection-list").addEventListener("click", event => {
  const card = event.target.closest(".collection-card");
  if (!card) return;
  event.stopPropagation();
  if (performance.now() < collectionSuppressClick) return;
  const index = collectionCards.indexOf(card);
  if (Math.abs(collectionPosition - index) < .08) showProject(card.dataset.project);
  else selectCollection(index);
});
const collectionList = document.querySelector("#collection-list");
collectionList.addEventListener("pointerdown", event => {
  if (event.button !== 0) return;
  collectionWheelStart = null;
  collectionTarget = Math.max(0, Math.min(projects.length - 1, collectionPosition));
  collectionPointerOffset = 0;
  collectionDrag = { x: event.clientX, y: event.clientY, index: collectionTarget, moved: false };
  event.target.closest(".collection-card")?.setPointerCapture(event.pointerId);
});
window.addEventListener("pointermove", event => {
  if (!body.classList.contains("collection-open")) return;
  if (!collectionDrag) {
    const hoveredCard = event.target.closest(".collection-card");
    if (hoveredCard) updateTitleRefraction(hoveredCard.querySelector(".collection-caption strong"), event);
    document.querySelectorAll(".collection-caption strong.is-refracting").forEach((title) => {
      if (!hoveredCard || title !== hoveredCard.querySelector(".collection-caption strong")) releaseTitleRefraction(title);
    });
    const normalizedX = Math.max(-1, Math.min(1, event.clientX / innerWidth * 2 - 1));
    collectionPointerOffset = normalizedX * COLLECTION_MOTION.mouseParallax;
    animateCollection();
    return;
  }
  const dx = collectionDrag.x - event.clientX;
  if (Math.abs(dx) < 6) return;
  collectionDrag.moved = true;
  const offset = dx / Math.max(420, innerWidth * COLLECTION_MOTION.dragDistance);
  selectCollection(collectionDrag.index + offset);
});
function endCollectionDrag() {
  if (!collectionDrag) return;
  if (collectionDrag.moved) collectionSuppressClick = performance.now() + 350;
  collectionDrag = null;
}
window.addEventListener("pointerup", endCollectionDrag);
window.addEventListener("pointercancel", endCollectionDrag);
window.addEventListener("resize", renderCollection);
renderCollection();
const canvas = document.querySelector("#scene");
const context = canvas?.getContext("2d");
const frontCanvas = document.querySelector("#scene-front");
const frontContext = frontCanvas?.getContext("2d");
const enter = document.querySelector("#enter");
const loader = document.querySelector("#loader");
const workGrid = document.querySelector("#work-grid");
const workPreview = document.querySelector("#work-preview");
const workPreviewImage = workPreview.querySelector("img");
const WORK_PREVIEW_EASE = .11;
let workPreviewX = innerWidth * .5;
let workPreviewY = innerHeight * .5;
let workPreviewTargetX = workPreviewX;
let workPreviewTargetY = workPreviewY;
let workPreviewFrame = 0;

function animateWorkPreview() {
  workPreviewX += (workPreviewTargetX - workPreviewX) * WORK_PREVIEW_EASE;
  workPreviewY += (workPreviewTargetY - workPreviewY) * WORK_PREVIEW_EASE;
  workPreview.style.transform = `translate3d(${workPreviewX}px,${workPreviewY}px,0) translate(-50%,-50%)`;
  if (Math.abs(workPreviewTargetX - workPreviewX) > .1 || Math.abs(workPreviewTargetY - workPreviewY) > .1) {
    workPreviewFrame = requestAnimationFrame(animateWorkPreview);
  } else {
    workPreviewFrame = 0;
  }
}

function moveWorkPreview(event) {
  const halfWidth = Math.min(215, innerWidth * .14);
  workPreviewTargetX = Math.max(halfWidth + 18, Math.min(innerWidth - halfWidth - 18, event.clientX));
  workPreviewTargetY = Math.max(125, Math.min(innerHeight - 125, event.clientY));
  if (reducedMotion.matches) {
    workPreviewX = workPreviewTargetX;
    workPreviewY = workPreviewTargetY;
    workPreview.style.transform = `translate3d(${workPreviewX}px,${workPreviewY}px,0) translate(-50%,-50%)`;
  } else if (!workPreviewFrame) {
    workPreviewFrame = requestAnimationFrame(animateWorkPreview);
  }
}
const categoryIndex = document.querySelector("#category-index");
const detail = document.querySelector("#detail");
const info = document.querySelector("#info");
const infoBackground = document.querySelector("#info-background");
const infoBackgroundContext = infoBackground.getContext("2d", { alpha: false });
const infoGlitch = document.querySelector("#info-glitch");
const wipe = document.querySelector("#wipe");
const navChips = document.querySelector("#nav-chips");
const menuButton = document.querySelector("#menu-btn");
const signalDevice = document.querySelector("#signal-device");
const introTrigger = document.querySelector("#intro-trigger");
const homeBackgroundVideo = document.querySelector("#home-background-video");
const fieldDevice = document.querySelector("#field-device");
const fieldScreens = [...document.querySelectorAll(".field-screen:not(.field-screen--duplicate)")];
const viewModeToggle = document.querySelector("#view-mode-toggle");
const signalCore = document.querySelector("#signal-core");
const signalSphere = document.querySelector("#signal-sphere");
const signalScreens = [...document.querySelectorAll(".signal-screen")];
const signalCategories = [...document.querySelectorAll("[data-signal-target]")];
const signalCategoryNav = document.querySelector("#signal-categories");
const signalGlow = document.querySelector("#signal-glow");
const signalCursor = document.querySelector("#signal-cursor");
const identityRefract = document.querySelector("#identity-refract");
const screenExpand = document.querySelector("#screen-expand");
const categoryTransition = document.querySelector("#category-transition");
const categoryTransitionStack = document.querySelector(".category-transition-stack");
const categoryTransitionTitle = document.querySelector(".category-transition-title");
const orbitTitle = document.querySelector("#project-name");
const orbitCurrent = document.querySelector("#orbit-current");
const categoryCarousel = document.querySelector("#category-carousel");
const categoryIndexTitle = document.querySelector("#category-index-title");
const categoryIndexNumber = document.querySelector("#category-index-number");
const categoryIndexCount = document.querySelector("#category-index-count");
const categoryProjectPosition = document.querySelector("#category-project-position");
const categoryIndexDetails = document.querySelector("#category-index-details");
const categoryIndexRole = document.querySelector("#category-index-role");
const categoryIndexAmount = document.querySelector("#category-index-amount");
const categorySwitchPrev = document.querySelector("#category-switch-prev");
const categorySwitchNext = document.querySelector("#category-switch-next");
const detailGallery = document.querySelector("#detail-gallery");
const nextButton = document.querySelector("#detail-next");
const nextRunway = document.querySelector("#next-runway");
const nextProgressValue = document.querySelector("#next-progress-value");
const nextInstruction = document.querySelector("#next-instruction");
const detailProgressHint = document.querySelector("#next-hint");
detailProgressHint.firstChild.nodeValue = "Project progress ";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function resumeHomeBackgroundVideo() {
  if (!homeBackgroundVideo) return;
  homeBackgroundVideo.muted = true;
  homeBackgroundVideo.loop = true;
  homeBackgroundVideo.defaultPlaybackRate = .5;
  homeBackgroundVideo.playbackRate = .5;
  const playback = homeBackgroundVideo.play();
  if (playback?.catch) playback.catch(() => {});
}

function homeVisualsActive() {
  return !document.hidden && !body.classList.contains("overlay-open") && !body.classList.contains("collection-open");
}

function syncHomeRuntime() {
  if (homeVisualsActive()) {
    resumeHomeBackgroundVideo();
  } else {
    homeBackgroundVideo?.pause();
  }
}

function animateCursor() {
  const ease = .42;
  cursorX += (pointerClientX - cursorX) * ease;
  cursorY += (pointerClientY - cursorY) * ease;
  signalCursor.style.translate = `${cursorX.toFixed(2)}px ${cursorY.toFixed(2)}px`;
  if (Math.abs(pointerClientX - cursorX) > .08 || Math.abs(pointerClientY - cursorY) > .08) {
    cursorFrame = requestAnimationFrame(animateCursor);
  } else {
    cursorFrame = 0;
  }
}

function queueCursorFrame() {
  if (!cursorFrame && matchMedia("(pointer:fine)").matches) cursorFrame = requestAnimationFrame(animateCursor);
}

function updateCursorMode(target) {
  if (!(target instanceof Element)) return;
  const nativeControl = target.closest("video[controls],input,textarea,select,[contenteditable='true']");
  const dragSurface = target.closest("#collection-list,#category-index,#signal-device");
  const interactive = target.closest("a,button,[role='button'],summary");
  body.classList.toggle("cursor-native", Boolean(nativeControl));
  body.classList.toggle("cursor-drag", Boolean(dragSurface) && !nativeControl);
  body.classList.toggle("cursor-interactive", Boolean(interactive) && !dragSurface && !nativeControl);
}

if (homeBackgroundVideo) {
  resumeHomeBackgroundVideo();
  homeBackgroundVideo.addEventListener("loadedmetadata", resumeHomeBackgroundVideo);
  homeBackgroundVideo.addEventListener("canplay", resumeHomeBackgroundVideo);
  homeBackgroundVideo.addEventListener("ended", resumeHomeBackgroundVideo);
}
const signalProjectIndexes = [0, 4];
const signalGlowColors = ["rgba(181,234,255,.78)", "rgba(215,255,0,.72)"];
let activeIndex = 0;
let displayIndex = 0;
let targetRotation = 0;
let rotation = 0;
let pointerX = 0;
let pointerY = 0;
let pointerClientX = -1000;
let pointerClientY = -1000;
let cursorX = -1000;
let cursorY = -1000;
let cursorFrame = 0;
let sceneHover = false;
let wheelLocked = false;
let touchStartY = 0;
let frame = 0;
let lastSceneRender = 0;
let routeTimer;
let infoGlitchTimer;
let infoBackgroundFrame = 0;
let infoBackgroundLastTime = 0;
let infoBackgroundRotation = 0;
let infoBackgroundImage = null;
let infoBayerPattern = null;
let activeSignal = -1;
let forcedSignal = -1;
let signalLocked = false;
let lastSignalSource = null;
let mediaObserver = null;
let activeDetailProjectIndex = -1;
let nextTransitionLocked = false;
let nextTransitionTimer = 0;
let nextProgressTarget = 0;
let nextProgressRendered = 0;
let nextProgressFrame = 0;
let orbitIndex = 0;
let orbitVisualIndex = 0;
let orbitWheelTotal = 0;
let orbitWheelTimer = 0;
let orbitReleaseTimer = 0;
let orbitDragging = false;
let orbitDragStartX = 0;
let orbitDragProgress = 0;
let activeCategoryIndex = 0;
let categoryProjectIndex = 0;
let suppressOrbitClick = false;
let categoryWheelLocked = false;
let homeMode = "field";
let fieldActiveIndex = -1;
let categoryTransitionTimer = 0;
let categoryDragStartX = 0;
let categoryDragCurrentX = 0;
let categoryDragging = false;
let categorySwipeSuppressClick = false;
const signalStrengths = signalScreens.map(() => 0);
const signalTargets = signalScreens.map(() => 0);

function refractiveTextMarkup(text, includeDelay = false) {
  return [...text].map((character, index) => {
    const isSpace = character === " ";
    const className = isSpace ? "title-char refraction-char title-space" : "title-char refraction-char";
    const delay = includeDelay ? ` style="--char-delay:${(index * .026).toFixed(2)}s"` : "";
    const value = isSpace ? "&#160;" : character;
    return `<span class="${className}" data-char="${value}"${delay}>${value}</span>`;
  }).join("");
}

const titleRefractionStates = new WeakMap();

function getRefractionCompanion(title) {
  if (title.id === "detail-title") return document.querySelector("#detail-object");
  const row = title.closest(".grid-row");
  if (row) return document.querySelector("#work-preview");
  const card = title.closest(".collection-card");
  return card?.querySelector(".collection-mark") || null;
}

function paintRefractionCompanion(title, state, titleInfluence) {
  const companion = getRefractionCompanion(title);
  if (!companion) return false;
  const rect = companion.getBoundingClientRect();
  const centerX = rect.left + rect.width * .5;
  const centerY = rect.top + rect.height * .5;
  const distance = Math.hypot(centerX - state.x, centerY - state.y);
  const radius = Math.max(110, Math.max(rect.width, rect.height) * .82);
  const localInfluence = state.active ? Math.pow(Math.max(0, 1 - distance / radius), 2) : 0;
  const target = Math.max(localInfluence, titleInfluence * .72);
  state.companionInfluence = (state.companionInfluence || 0) + (target - (state.companionInfluence || 0)) * .12;
  const influence = state.companionInfluence;
  companion.classList.toggle("is-refracting-companion", influence > .003);
  companion.style.setProperty("--companion-scale-x", (1 + influence * .24).toFixed(3));
  companion.style.setProperty("--companion-scale-y", (1 - influence * .13).toFixed(3));
  companion.style.setProperty("--companion-lime", `rgba(183,255,42,${(influence * .48).toFixed(3)})`);
  companion.style.setProperty("--companion-violet", `rgba(122,85,255,${(influence * .42).toFixed(3)})`);
  document.querySelector("#logo-refraction-map")?.setAttribute("scale", (influence * 28).toFixed(2));
  return Math.abs(target - influence) > .002;
}

function paintTitleRefraction(title, state) {
  state.x += (state.targetX - state.x) * .08;
  state.y += (state.targetY - state.y) * .08;
  const titleRect = title.getBoundingClientRect();
  const closestX = Math.max(titleRect.left, Math.min(titleRect.right, state.x));
  const closestY = Math.max(titleRect.top, Math.min(titleRect.bottom, state.y));
  const distanceToTitle = Math.hypot(state.x - closestX, state.y - closestY);
  const titleRadius = Math.max(90, Math.min(220, titleRect.height * 2.4));
  const titleInfluence = state.active ? Math.pow(Math.max(0, 1 - distanceToTitle / titleRadius), 2) : 0;
  const stillMoving = paintRefractionCompanion(title, state, titleInfluence);
  state.velocityX *= .82;
  if (stillMoving || state.active || Math.abs(state.velocityX) > .1) {
    state.frame = requestAnimationFrame(() => paintTitleRefraction(title, state));
  } else {
    state.frame = 0;
    title.classList.remove("is-refracting");
    getRefractionCompanion(title)?.classList.remove("is-refracting-companion");
  }
}

function updateTitleRefraction(title, event) {
  let state = titleRefractionStates.get(title);
  if (!state) {
    state = { x: event.clientX, y: event.clientY, targetX: event.clientX, targetY: event.clientY, previousX: event.clientX, velocityX: 0, active: true, frame: 0 };
    titleRefractionStates.set(title, state);
  }
  state.velocityX += event.clientX - state.previousX;
  state.previousX = event.clientX;
  state.targetX = event.clientX;
  state.targetY = event.clientY;
  state.active = true;
  title.classList.add("is-refracting");
  if (!state.frame) state.frame = requestAnimationFrame(() => paintTitleRefraction(title, state));
}

function releaseTitleRefraction(title) {
  const state = titleRefractionStates.get(title);
  if (!state) return;
  state.active = false;
  if (!state.frame) state.frame = requestAnimationFrame(() => paintTitleRefraction(title, state));
}

function renderGrid() {
  document.querySelector("#counter-total").textContent = String(projects.length).padStart(2, "0");
  document.querySelector("#grid-list").innerHTML = projects.map((project, index) => {
    const media = projectMediaContent[project.id];
    const preview = collectionCovers[project.id] || media.find(item => item.poster)?.poster || media.find(item => item.type === "image")?.src || project.icon;
    return `
    <button class="grid-row" type="button" data-project="${project.id}" aria-label="Open ${project.name}">
      <span class="grid-row__index">${String(index + 1).padStart(2, "0")}</span>
      <span class="grid-row__name refraction-title" aria-label="${project.name}">${refractiveTextMarkup(project.name)}</span>
      <span class="grid-row__meta"><span class="grid-row__type">${project.type}</span></span>
      <span class="grid-row__cta" aria-hidden="true">→</span>
      <span class="grid-row__preview-source" data-src="${preview}" aria-hidden="true"></span>
    </button>
  `}).join("");
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 1.35);
  [canvas, frontCanvas].forEach((layer) => {
    layer.width = Math.round(innerWidth * ratio);
    layer.height = Math.round(innerHeight * ratio);
    layer.style.width = `${innerWidth}px`;
    layer.style.height = `${innerHeight}px`;
  });
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  frontContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  const mobile = innerWidth < 760;
  const targetHeight = Math.min(innerHeight * (mobile ? .55 : .72), innerWidth * (mobile ? .88 : .47), 700);
  signalDevice.style.setProperty("--device-scale", String(targetHeight / 620));
  if (fieldDevice) fieldDevice.style.setProperty("--field-scale", "1");
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, r);
}

function drawPanel(ctx, x, y, width, height, options = {}) {
  const depth = options.depth ?? 13;
  const fill = options.fill ?? "#07112f";
  const stroke = options.stroke ?? "rgba(255,255,255,.96)";
  ctx.save();
  ctx.globalAlpha = options.alpha ?? 1;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + depth, y - depth);
  ctx.lineTo(x + width + depth, y - depth);
  ctx.lineTo(x + width, y);
  ctx.closePath();
  ctx.fillStyle = options.top ?? "rgba(255,255,255,.84)";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + width, y);
  ctx.lineTo(x + width + depth, y - depth);
  ctx.lineTo(x + width + depth, y + height - depth);
  ctx.lineTo(x + width, y + height);
  ctx.closePath();
  ctx.fillStyle = options.side ?? "rgba(255,255,255,.2)";
  ctx.fill();

  ctx.fillStyle = fill;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.35;
  ctx.strokeRect(x, y, width, height);

  if (options.glass) {
    const shine = ctx.createLinearGradient(x, y, x + width, y + height);
    shine.addColorStop(0, "rgba(255,255,255,.58)");
    shine.addColorStop(.36, "rgba(255,255,255,.05)");
    shine.addColorStop(.7, "rgba(215,255,0,.13)");
    shine.addColorStop(1, "rgba(255,255,255,.34)");
    ctx.fillStyle = shine;
    ctx.fillRect(x, y, width, height);
  }
  ctx.restore();
}

function drawMediaMotif(ctx, project, x, y, width, height, time) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.clip();
  ctx.strokeStyle = project.colors[1];
  ctx.fillStyle = project.colors[1];
  ctx.lineWidth = 2;

  if (project.category === "Digital") {
    for (let row = 0; row < 5; row += 1) {
      ctx.globalAlpha = .22 + row * .1;
      ctx.fillRect(x + 14, y + 16 + row * 24, width * (.75 - row * .07), 7);
    }
    ctx.globalAlpha = 1;
    ctx.strokeRect(x + width * .58, y + height * .46, width * .28, height * .35);
  } else if (project.category === "Transmedia") {
    for (let i = 0; i < 6; i += 1) {
      const px = x + width * .5 + Math.cos(i * 1.2 + time * .0003) * width * .28;
      const py = y + height * .5 + Math.sin(i * 1.2 + time * .0003) * height * .28;
      ctx.globalAlpha = .35 + i * .08;
      ctx.strokeRect(px - 14, py - 14, 28, 28);
    }
  } else if (project.category === "Motion") {
    ctx.beginPath();
    for (let i = 0; i <= 50; i += 1) {
      const px = x + i / 50 * width;
      const py = y + height * .5 + Math.sin(i * .4 + time * .004) * height * .22;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + width * .43, y + height * .32);
    ctx.lineTo(x + width * .68, y + height * .5);
    ctx.lineTo(x + width * .43, y + height * .68);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.translate(x + width / 2, y + height / 2);
    for (let i = 0; i < 11; i += 1) {
      ctx.save();
      ctx.rotate(i * Math.PI * 2 / 11 + time * .00012);
      ctx.globalAlpha = .2 + i * .05;
      ctx.fillRect(8, -6, width * .4, 12);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(0, 0, width * .12, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawLiquidChrome(ctx, time) {
  const drift = Math.sin(time * .00072) * 2.2;
  const pieces = [
    { x: 304, y: -10 + drift, scale: .55, mirror: 1 },
    { x: -304, y: -10 + drift, scale: .55, mirror: -1 }
  ];

  pieces.forEach((piece, index) => {
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.scale(piece.scale * piece.mirror, piece.scale);
    const chrome = ctx.createLinearGradient(-55, -125, 72, 128);
    chrome.addColorStop(0, "#ffffff");
    chrome.addColorStop(.14, "#8e98a7");
    chrome.addColorStop(.28, "#f7f9fb");
    chrome.addColorStop(.43, "#263047");
    chrome.addColorStop(.58, "#eef1f5");
    chrome.addColorStop(.74, "#717b89");
    chrome.addColorStop(.9, "#ffffff");
    chrome.addColorStop(1, "#a5aeba");
    ctx.fillStyle = chrome;
    ctx.strokeStyle = "rgba(255,255,255,.9)";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(-18, -122);
    ctx.bezierCurveTo(38, -132, 54, -83, 22, -48);
    ctx.bezierCurveTo(-4, -20, 50, -9, 57, 26);
    ctx.bezierCurveTo(66, 72, 24, 113, -9, 126);
    ctx.bezierCurveTo(-49, 139, -70, 101, -49, 64);
    ctx.bezierCurveTo(-27, 26, -72, 8, -61, -31);
    ctx.bezierCurveTo(-51, -69, -62, -110, -18, -122);
    ctx.closePath();
    ctx.shadowColor = "rgba(7,17,47,.24)";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 10;
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.stroke();

    ctx.globalAlpha = .72;
    ctx.strokeStyle = "rgba(206,231,242,.68)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-21, -101);
    ctx.bezierCurveTo(25, -94, 22, -58, 5, -33);
    ctx.bezierCurveTo(-13, -6, 41, 17, 34, 52);
    ctx.bezierCurveTo(29, 81, 8, 99, -12, 107);
    ctx.stroke();
    ctx.restore();
  });
}

function drawStructureBack(ctx, project, time) {
  const bob = Math.sin(time * .0008) * 2.5;
  ctx.save();
  ctx.translate(0, bob);
  ctx.shadowColor = "rgba(7,17,47,.22)";
  ctx.shadowBlur = 42;
  ctx.shadowOffsetY = 24;
  drawPanel(ctx, -222, -276, 444, 552, { fill: "rgba(232,235,239,.08)", alpha: .56, depth: 18 });
  ctx.shadowColor = "transparent";

  drawPanel(ctx, -280, -176, 24, 352, { fill: "rgba(255,255,255,.2)", glass: true, alpha: .7, depth: 9 });
  drawPanel(ctx, 256, -176, 24, 352, { fill: "rgba(255,255,255,.2)", glass: true, alpha: .7, depth: 9 });
  drawPanel(ctx, -170, -292, 340, 24, { fill: "rgba(255,255,255,.3)", glass: true, alpha: .76, depth: 8 });
  drawPanel(ctx, -170, 268, 340, 24, { fill: "rgba(7,17,47,.18)", glass: true, alpha: .62, depth: 8 });
  drawPanel(ctx, -278, -26, 48, 52, { fill: "rgba(181,234,255,.3)", glass: true, alpha: .72, depth: 9 });
  drawPanel(ctx, 230, -26, 48, 52, { fill: "rgba(181,234,255,.3)", glass: true, alpha: .72, depth: 9 });
  drawPanel(ctx, -204, -268, 52, 68, { fill: "#b5eaff", glass: true, depth: 9, alpha: .56 });
  drawPanel(ctx, 152, -268, 52, 68, { fill: project.colors[0], glass: true, depth: 9, alpha: .68 });

  ctx.strokeStyle = "rgba(255,255,255,.86)";
  ctx.lineWidth = 1.4;
  for (let i = 0; i < 7; i += 1) {
    const inset = i * 10;
    ctx.strokeRect(-236 + inset, -266 + inset, 472 - inset * 2, 532 - inset * 2);
  }

  ctx.fillStyle = "#ffffff";
  for (let i = 0; i < 9; i += 1) {
    const px = 248 + (i % 3) * 18;
    const py = -228 + i * 56;
    const size = 1 + (i % 3);
    ctx.globalAlpha = .24 + (i % 4) * .1;
    ctx.fillRect(px, py, size, size);
    ctx.fillRect(-px - size, py, size, size);
  }
  ctx.restore();
}

function drawStructureFront(ctx, project, time) {
  const bob = Math.sin(time * .0008) * 2.5;
  const sensorLight = Math.max(...signalStrengths, 0);
  ctx.save();
  ctx.translate(0, bob);
  ctx.globalAlpha = .76 + sensorLight * .24;
  drawLiquidChrome(ctx, time);
  ctx.restore();
}

function drawScene(time = 0) {
  frame = 0;
  if (!homeVisualsActive()) return;
  if (lastSceneRender && time - lastSceneRender < 32) {
    frame = requestAnimationFrame(drawScene);
    return;
  }
  lastSceneRender = time;
  const width = innerWidth;
  const height = innerHeight;
  context.clearRect(0, 0, width, height);
  frontContext.clearRect(0, 0, width, height);
  updateSignalField();
  const isGrid = workGrid.classList.contains("open");
  const isInfo = info.classList.contains("open");
  const project = projects[displayIndex];
  const mobile = width < 760;
  const targetHeight = Math.min(height * (mobile ? .55 : .72), width * (mobile ? .88 : .47), 700);
  const structureScale = targetHeight / 620 * (isGrid ? .54 : 1);
  const centerX = width / 2 + pointerX * (mobile ? 1 : 2.5);
  const centerY = height / 2 + pointerY * (mobile ? 1 : 2);
  rotation += (targetRotation - rotation) * .055;
  if (isInfo) return;

  context.save();
  context.translate(centerX, centerY);
  context.scale(structureScale, structureScale);
  context.rotate(Math.sin(rotation * .08) * .004);
  context.globalAlpha = isGrid ? .3 : 1;
  drawStructureBack(context, project, time);
  context.restore();

  frontContext.save();
  frontContext.translate(centerX, centerY);
  frontContext.scale(structureScale, structureScale);
  frontContext.rotate(Math.sin(rotation * .08) * .004);
  frontContext.globalAlpha = isGrid ? .22 : 1;
  drawStructureFront(frontContext, project, time);
  frontContext.restore();
  frame = requestAnimationFrame(drawScene);
}

function updateSignalField() {
  cursorX += (pointerClientX - cursorX) * .24;
  cursorY += (pointerClientY - cursorY) * .24;
  signalCursor.style.left = `${cursorX}px`;
  signalCursor.style.top = `${cursorY}px`;
  signalGlow.style.setProperty("--glow-opacity", "0");
  identityRefract.style.opacity = "0";
}

function updateRefraction(screenRect, strength) {
  const textRect = identityRefract.getBoundingClientRect();
  const left = screenRect.left - textRect.left;
  const right = screenRect.right - textRect.left;
  const top = screenRect.top - textRect.top;
  const bottom = screenRect.bottom - textRect.top;
  identityRefract.style.clipPath = `polygon(${left}px ${top}px,${right}px ${top}px,${right}px ${bottom}px,${left}px ${bottom}px)`;
  identityRefract.style.opacity = String(Math.min(.72, strength * .72));
  identityRefract.style.setProperty("--refract-x", `${1 + strength * 1.2}px`);
}

function setActiveSignal(index) {
  commitOrbit(index < 0 ? orbitIndex : index, true);
}

function wrapOrbit(value) {
  return (value % categoryModules.length + categoryModules.length) % categoryModules.length;
}

function orbitDelta(index, position) {
  let delta = index - position;
  while (delta > 2) delta -= categoryModules.length;
  while (delta < -2) delta += categoryModules.length;
  return delta;
}

function renderOrbit(position = orbitVisualIndex) {
  const compact = innerWidth < 760;
  const radiusX = compact ? Math.min(innerWidth * .52, 220) : Math.min(innerWidth * .31, 455);
  const radiusY = compact ? 58 : 90;
  signalScreens.forEach((screen, index) => {
    const delta = orbitDelta(index, position);
    const angle = delta * Math.PI / 2;
    const depth = Math.cos(angle);
    const x = Math.sin(angle) * radiusX;
    const y = Math.sin(angle) * radiusY + depth * (compact ? 78 : 126);
    const scale = .55 + (depth + 1) * .225;
    const opacity = .14 + (depth + 1) * .43;
    screen.style.setProperty("--orbit-x", `${x.toFixed(2)}px`);
    screen.style.setProperty("--orbit-y", `${y.toFixed(2)}px`);
    screen.style.setProperty("--orbit-scale", scale.toFixed(3));
    screen.style.setProperty("--orbit-opacity", opacity.toFixed(3));
    screen.style.setProperty("--orbit-depth", depth.toFixed(3));
    screen.style.setProperty("--orbit-tilt", `${(-x / Math.max(1, radiusX) * 32).toFixed(2)}deg`);
    screen.style.zIndex = depth > .42 ? "7" : depth < -.42 ? "2" : "4";
    screen.classList.toggle("is-current", Math.abs(delta) < .12);
    screen.classList.toggle("is-behind", depth < 0);
    screen.tabIndex = Math.abs(delta) < .12 ? 0 : -1;
  });
}

function setOrbitTitle(text, instant = false) {
  const apply = () => {
    orbitTitle.classList.remove("field-title");
    orbitTitle.dataset.title = text;
    orbitTitle.innerHTML = `<span class="orbit-title-back">${text}</span><span class="orbit-title-front">${text}</span>`;
  };
  if (instant || reducedMotion.matches) return apply();
  orbitTitle.classList.add("is-changing");
  window.setTimeout(() => {
    apply();
    requestAnimationFrame(() => orbitTitle.classList.remove("is-changing"));
  }, 210);
}

function commitOrbit(index, instant = false) {
  const next = wrapOrbit(index);
  const changed = next !== orbitIndex;
  orbitIndex = next;
  orbitVisualIndex = next;
  activeSignal = next;
  activeCategoryIndex = next;
  const module = categoryModules[next];
  const position = String(next + 1).padStart(2, "0");
  body.classList.add("has-signal");
  signalCategoryNav.classList.add("has-active");
  signalCursor.classList.remove("visible");
  signalSphere.dataset.category = module.id;
  signalCore.setAttribute("aria-label", `Open ${module.category} category`);
  signalCategories.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === next);
    const state = item.querySelector("em");
    if (state) state.textContent = itemIndex === next ? "Current" : "";
  });
  if (orbitCurrent) orbitCurrent.textContent = position;
  document.querySelector("#system-label").textContent = `Signal ${position} / 02`;
  setOrbitTitle(module.category, instant || !changed);
  document.documentElement.style.setProperty("--bg", projects[signalProjectIndexes[next]].bg);
  document.documentElement.style.setProperty("--purple", projects[signalProjectIndexes[next]].bg);
  renderOrbit(next);
}

function rotateOrbit(step) {
  if (homeMode !== "orbit" || signalLocked || body.classList.contains("overlay-open") || !body.classList.contains("signal-ready")) return;
  transitionCategoryTo(orbitIndex + step, step);
  window.clearTimeout(orbitReleaseTimer);
  body.classList.add("orbit-moving");
  orbitReleaseTimer = window.setTimeout(() => body.classList.remove("orbit-moving"), reducedMotion.matches ? 30 : 1900);
}

function transitionCategoryTo(index, direction = 1) {
  const next = wrapOrbit(index);
  if (next === orbitIndex || signalLocked || body.classList.contains("overlay-open")) return;
  if (reducedMotion.matches) return commitOrbit(next, true);

  const previousModule = categoryModules[orbitIndex];
  const nextModule = categoryModules[next];
  signalLocked = true;
  window.clearTimeout(categoryTransitionTimer);
  categoryTransition.classList.remove("active");
  categoryTransition.dataset.direction = direction >= 0 ? "next" : "previous";
  categoryTransition.style.setProperty("--transition-bg", "#b97b91");
  categoryTransition.style.setProperty("--transition-accent", "#ece9e2");
  categoryTransition.style.setProperty("--transition-ink", "#101a34");
  categoryTransitionStack.innerHTML = Array.from({ length: 9 }, (_, itemIndex) => `<span style="--stack-index:${itemIndex}">${nextModule.category}</span>`).join("");
  categoryTransitionTitle.querySelector("span").textContent = `${previousModule.category} → ${nextModule.category}`;
  categoryTransitionTitle.querySelector("strong").textContent = nextModule.category;
  categoryTransitionTitle.querySelector("small").textContent = `VEIL / SIGNAL ${String(next + 1).padStart(2, "0")}—02`;
  categoryTransition.setAttribute("aria-hidden", "false");
  body.classList.add("category-switching");
  void categoryTransition.offsetWidth;
  categoryTransition.classList.add("active");

  window.setTimeout(() => {
    commitOrbit(next, true);
    orbitTitle.classList.add("orbit-title-arriving");
  }, 1490);

  categoryTransitionTimer = window.setTimeout(() => {
    categoryTransition.classList.remove("active");
    categoryTransition.setAttribute("aria-hidden", "true");
    body.classList.remove("category-switching");
    orbitTitle.classList.remove("orbit-title-arriving");
    signalLocked = false;
  }, 2760);
}

function setFieldTitle() {
  orbitTitle.classList.add("field-title");
  orbitTitle.dataset.title = "YUHENG WANG";
  orbitTitle.innerHTML = "<span>YUHENG</span><span>WANG</span>";
}

function setFieldActive(index) {
  fieldActiveIndex = index;
  const active = index >= 0;
  const homeTarget = active && fieldScreens[index]?.dataset.action === "home";
  body.classList.toggle("field-sensing", active && homeMode === "field");
  fieldDevice.classList.toggle("has-active", active);
  fieldScreens.forEach((screen, itemIndex) => {
    const selected = itemIndex === index;
    screen.classList.toggle("is-active", selected);
    screen.classList.toggle("is-muted", active && !selected);
    signalStrengths[itemIndex] = selected ? 1 : 0;
  });
  signalCategories.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
    const state = item.querySelector("em");
    if (state) state.textContent = itemIndex === index ? "Signal found" : "";
  });
  signalCategoryNav.classList.toggle("has-active", active);
  signalCursor.classList.toggle("visible", active && homeMode === "field" && matchMedia("(pointer:fine)").matches);
  if (active) signalCursor.querySelector("span").textContent = homeTarget ? "Home" : `View ${String(index + 1).padStart(2, "0")}`;
  const hint = document.querySelector("#activation-hint");
  hint.innerHTML = active ? (homeTarget ? "Return to index <span>+</span>" : `Signal ${String(index + 1).padStart(2, "0")} found <span>+</span>`) : "Move to activate <span>+</span>";
  document.querySelector("#system-label").textContent = active ? (homeTarget ? "Return Home" : categoryModules[index].category) : "Available for collaboration";
  if (active && !homeTarget) {
    displayIndex = signalProjectIndexes[index];
    document.documentElement.style.setProperty("--bg", projects[signalProjectIndexes[index]].bg);
    document.documentElement.style.setProperty("--purple", projects[signalProjectIndexes[index]].bg);
  }
}

function setHomeMode(mode, instant = false) {
  homeMode = "field";
  body.classList.remove("orbit-view", "has-signal", "field-sensing");
  body.classList.add("field-view");
  setFieldTitle();
  setFieldActive(-1);
  document.documentElement.style.setProperty("--bg", "#ff087d");
  document.documentElement.style.setProperty("--purple", "#ff087d");
  document.querySelector("#activation-hint").innerHTML = "Move to activate <span>+</span>";
}

function initSignalIntro() {
  const skipIntro = Boolean(location.hash);
  if (skipIntro) {
    body.classList.remove("signal-pending","signal-awaiting","signal-core-fired");
    body.classList.add("signal-ready");
    setHomeMode("field", true);
    return;
  }
  setHomeMode("field", true);
  body.classList.add("signal-awaiting");
  introTrigger.setAttribute("aria-label", "Enter VEIL");
}

function startSignalIntro() {
  if (!body.classList.contains("signal-awaiting")) return false;
  signalLocked = true;
  body.classList.remove("signal-awaiting", "signal-core-fired");
  body.classList.add("signal-enter");
  introTrigger.setAttribute("aria-label", "Building VEIL signal field");
  window.setTimeout(() => {
    body.classList.remove("signal-pending", "signal-enter");
    body.classList.add("signal-ready");
    introTrigger.setAttribute("aria-label", "VEIL signal field ready");
    signalLocked = false;
  }, reducedMotion.matches ? 30 : 3500);
  return true;
}

function cloneScreenIntoExpand(screen, rect) {
  screenExpand.innerHTML = screen.innerHTML;
  screenExpand.className = `active is-active ${[...screen.classList].find((name) => name.startsWith("signal-screen--")) || ""}`;
  screenExpand.style.left = `${rect.left}px`;
  screenExpand.style.top = `${rect.top}px`;
  screenExpand.style.width = `${rect.width}px`;
  screenExpand.style.height = `${rect.height}px`;
  screenExpand.style.opacity = "1";
  screenExpand.style.borderRadius = "1px";
}

function buildCategoryIntro(module) {
  const letters = [...module.category];
  const iconPositions = [
    "--icon-x:-30vw;--icon-y:-21vh;--icon-spin:-260deg;--icon-delay:.10s",
    "--icon-x:29vw;--icon-y:-22vh;--icon-spin:300deg;--icon-delay:.18s",
    "--icon-x:-27vw;--icon-y:23vh;--icon-spin:240deg;--icon-delay:.14s",
    "--icon-x:30vw;--icon-y:22vh;--icon-spin:-300deg;--icon-delay:.22s"
  ];
  screenExpand.removeAttribute("style");
  screenExpand.className = `active category-intro category-intro--${module.id}`;
  screenExpand.innerHTML = `<div class="category-intro__stage" aria-hidden="true">
    <div class="category-intro__word" aria-label="${module.category}">
      ${letters.map((letter, index) => `<span style="--letter-index:${index}">${letter}</span>`).join("")}
    </div>
    <div class="category-intro__icons">
      ${categoryTransitionIcons.map((src, index) => `<figure style="${iconPositions[index]}"><img src="${src}" alt=""></figure>`).join("")}
    </div>
    <span class="category-intro__signal">SIGNAL ${String(categoryModules.indexOf(module) + 1).padStart(2, "0")}</span>
  </div>`;
  void screenExpand.offsetWidth;
  screenExpand.classList.add("is-running");
}

function beginSignalTransition(screen) {
  if (signalLocked) return;
  const signalIndex = Number(screen.dataset.signal);
  const module = categoryModules[signalIndex];
  if (!module) return;
  if (signalIndex !== orbitIndex) {
    commitOrbit(signalIndex);
    return;
  }
  signalLocked = true;
  activeCategoryIndex = signalIndex;
  lastSignalSource = { signalIndex, moduleId: module.id };
  body.classList.add("signal-locking", "orbit-entering");
  document.querySelector("#system-label").textContent = "Signal locked";

  screen.style.visibility = "hidden";
  buildCategoryIntro(module);

  window.setTimeout(() => {
    const projectId = module.projectIds[0];
    const projectIndex = projects.findIndex((project) => project.id === projectId);
    if (projectIndex < 0) return;
    updateProject(projectIndex, projectIndex >= activeIndex ? 1 : -1, true);
    populateDetail(projectIndex);
    setOverlay(detail);
    jumpDetailTo(0);
    updateDetailProgress();
    history.pushState({ project: projectId }, "", `#project/${projectId}`);
  }, reducedMotion.matches ? 20 : 1180);

  window.setTimeout(() => {
    screenExpand.classList.add("is-leaving");
    body.classList.remove("signal-locking", "orbit-entering");
    window.setTimeout(() => {
      screenExpand.className = "";
      screenExpand.innerHTML = "";
      screenExpand.removeAttribute("style");
      screen.style.visibility = "";
      signalLocked = false;
    }, reducedMotion.matches ? 10 : 300);
  }, reducedMotion.matches ? 30 : 1430);
}

function beginFieldTransition(screen) {
  if (signalLocked || homeMode !== "field") return;
  const index = Number(screen.dataset.field);
  const module = categoryModules[index];
  if (!module) return;
  signalLocked = true;
  activeCategoryIndex = index;
  lastSignalSource = { signalIndex: index, moduleId: module.id };
  setFieldActive(index);
  body.classList.add("signal-locking", "field-entering");
  document.querySelector("#system-label").textContent = "Signal locked";

  screen.style.visibility = "hidden";
  buildCategoryIntro(module);

  window.setTimeout(() => {
    const projectId = module.projectIds[0];
    const projectIndex = projects.findIndex((project) => project.id === projectId);
    if (projectIndex < 0) return;
    updateProject(projectIndex, projectIndex >= activeIndex ? 1 : -1, true);
    populateDetail(projectIndex);
    setOverlay(detail);
    jumpDetailTo(0);
    updateDetailProgress();
    history.pushState({ project: projectId }, "", `#project/${projectId}`);
  }, reducedMotion.matches ? 20 : 1180);

  window.setTimeout(() => {
    screenExpand.classList.add("is-leaving");
    body.classList.remove("signal-locking", "field-entering");
    window.setTimeout(() => {
      screenExpand.className = "";
      screenExpand.innerHTML = "";
      screenExpand.removeAttribute("style");
      screen.style.visibility = "";
      signalLocked = false;
    }, reducedMotion.matches ? 10 : 300);
  }, reducedMotion.matches ? 30 : 1430);
}

function returnFromSignal(push = true) {
  if (!lastSignalSource || signalLocked) return false;
  const screen = signalScreens[lastSignalSource.signalIndex];
  const detailVisual = document.querySelector("#detail-object");
  const fallback = { left: innerWidth < 760 ? innerWidth * .04 : innerWidth * .025, top: innerHeight * .11, width: innerWidth < 760 ? innerWidth * .92 : innerWidth * .65, height: innerHeight * .72 };
  const visualRect = detailVisual.getBoundingClientRect();
  const startRect = visualRect.width > 20 && visualRect.bottom > 0 ? visualRect : fallback;
  signalLocked = true;
  body.classList.add("signal-locking");
  cloneScreenIntoExpand(screen,startRect);
  screen.style.visibility = "hidden";
  setOverlay(null);
  document.title = "VEIL — Digital & Transmedia";
  if (push) history.pushState(null,"","#");
  void screenExpand.offsetWidth;
  const target = screen.getBoundingClientRect();
  requestAnimationFrame(() => {
    screenExpand.style.left = `${target.left}px`;
    screenExpand.style.top = `${target.top}px`;
    screenExpand.style.width = `${target.width}px`;
    screenExpand.style.height = `${target.height}px`;
    screenExpand.style.borderRadius = "1px";
  });
  window.setTimeout(() => {
    screenExpand.style.opacity = "0";
    body.classList.remove("signal-locking");
    screen.style.visibility = "";
    window.setTimeout(() => {
      screenExpand.className = "";
      screenExpand.removeAttribute("style");
      signalLocked = false;
      forcedSignal = -1;
      setActiveSignal(-1);
    }, 260);
  }, reducedMotion.matches ? 20 : 1120);
  return true;
}

function updateProject(index, direction = 1, instant = false) {
  const nextIndex = (index + projects.length) % projects.length;
  if (nextIndex === activeIndex && !instant) return;
  const name = document.querySelector("#project-name");
  const label = document.querySelector("#active-label");
  const apply = () => {
    activeIndex = nextIndex;
    displayIndex = nextIndex;
    const project = projects[activeIndex];
    name.textContent = project.name;
    document.querySelector("#active-category").textContent = project.category;
    document.querySelector("#active-type").textContent = project.type;
    document.querySelector("#word-left").textContent = project.words[0];
    document.querySelector("#word-right").textContent = project.words[1];
    document.querySelector("#counter-current").textContent = String(activeIndex + 1).padStart(2, "0");
    document.querySelectorAll("#category-ticks span").forEach((tick) => tick.classList.toggle("active", tick.dataset.category === project.category));
    document.documentElement.style.setProperty("--bg", project.bg);
    document.documentElement.style.setProperty("--purple", project.bg);
    targetRotation += direction * Math.PI * .7;
  };
  if (instant || reducedMotion.matches) return apply();
  const titleTransform = (offset = 0) => innerWidth <= 760
    ? `translate(-50%, ${offset}px)`
    : `translate(-50%, calc(-1 * min(34vh, 345px) + ${offset}px))`;
  name.style.opacity = "0";
  label.style.opacity = "0";
  name.style.transform = titleTransform(direction * -18);
  window.setTimeout(() => {
    apply();
    name.style.transform = titleTransform(direction * 18);
    requestAnimationFrame(() => {
      name.style.opacity = "1";
      label.style.opacity = "1";
      name.style.transform = titleTransform();
    });
  }, 180);
}

function runLoader() {
  enter.classList.add("is-hidden");
  loader.classList.add("is-active");
  let progress = 0;
  const timer = window.setInterval(() => {
    progress = Math.min(100, progress + Math.ceil(Math.random() * 9));
    document.querySelector("#loader-count").textContent = String(progress).padStart(2, "0");
    document.querySelector("#loader-bar i").style.width = `${progress}%`;
    if (progress === 100) {
      clearInterval(timer);
      window.setTimeout(() => {
        body.classList.remove("is-booting");
        loader.classList.add("is-leaving");
        window.setTimeout(() => loader.classList.remove("is-active", "is-leaving"), reducedMotion.matches ? 20 : 950);
      }, reducedMotion.matches ? 20 : 250);
    }
  }, reducedMotion.matches ? 5 : 58);
}

function runWipe(callback) {
  clearTimeout(routeTimer);
  wipe.classList.remove("active");
  void wipe.offsetWidth;
  wipe.classList.add("active");
  window.setTimeout(callback, reducedMotion.matches ? 10 : 390);
  routeTimer = window.setTimeout(() => wipe.classList.remove("active"), reducedMotion.matches ? 30 : 1050);
}

function resizeInfoBackground() {
  const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
  infoBackground.width = Math.round(innerWidth * ratio);
  infoBackground.height = Math.round(innerHeight * ratio);
  infoBackground.style.width = `${innerWidth}px`;
  infoBackground.style.height = `${innerHeight}px`;
  infoBackgroundContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  infoBackgroundContext.imageSmoothingEnabled = false;
  const matrix = [
    0,48,12,60,3,51,15,63,
    32,16,44,28,35,19,47,31,
    8,56,4,52,11,59,7,55,
    40,24,36,20,43,27,39,23,
    2,50,14,62,1,49,13,61,
    34,18,46,30,33,17,45,29,
    10,58,6,54,9,57,5,53,
    42,26,38,22,41,25,37,21
  ];
  const patternCanvas = document.createElement("canvas");
  patternCanvas.width = 24;
  patternCanvas.height = 24;
  const patternContext = patternCanvas.getContext("2d");
  patternContext.clearRect(0, 0, 24, 24);
  matrix.forEach((threshold, index) => {
    const x = (index % 8) * 3;
    const y = Math.floor(index / 8) * 3;
    patternContext.fillStyle = threshold < 32 ? "rgba(232,222,208,.42)" : "rgba(0,0,0,.44)";
    patternContext.fillRect(x, y, 1.5, 1.5);
  });
  infoBayerPattern = infoBackgroundContext.createPattern(patternCanvas, "repeat");
}

function selectInfoBackgroundIcon() {
  const iconChoices = projects.map((project) => project.icon).filter(Boolean);
  const source = iconChoices[Math.floor(Math.random() * iconChoices.length)];
  const image = new Image();
  image.decoding = "async";
  image.onload = () => { infoBackgroundImage = image; };
  image.src = source;
}

function drawInfoSphere(ctx, image, centerX, centerY, radius, rotation) {
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.shadowColor = "rgba(0,0,0,.64)";
  ctx.shadowBlur = 55;
  ctx.shadowOffsetY = 24;
  const base = ctx.createRadialGradient(-radius * .32, -radius * .38, radius * .05, 0, 0, radius);
  base.addColorStop(0, "rgba(126,111,96,.62)");
  base.addColorStop(.38, "rgba(55,47,42,.82)");
  base.addColorStop(.78, "rgba(25,21,19,.94)");
  base.addColorStop(1, "rgba(8,7,6,.98)");
  ctx.fillStyle = base;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.clip();

  ctx.globalAlpha = .34;
  ctx.filter = "grayscale(1) sepia(.5) contrast(2.1) brightness(.72)";
  const stripWidth = 4;
  for (let destinationX = -radius; destinationX < radius; destinationX += stripWidth) {
    const normalizedX = destinationX / radius;
    const depth = Math.sqrt(Math.max(0, 1 - normalizedX * normalizedX));
    const longitude = Math.asin(normalizedX) + rotation;
    const wrapped = ((longitude / (Math.PI * 2)) % 1 + 1) % 1;
    const sourceX = Math.min(image.naturalWidth - 1, wrapped * image.naturalWidth);
    const sourceWidth = Math.min(image.naturalWidth - sourceX, Math.max(1, image.naturalWidth / (radius * 2)));
    ctx.globalAlpha = .12 + depth * .31;
    ctx.drawImage(image, sourceX, 0, sourceWidth, image.naturalHeight, destinationX, -radius, stripWidth + 1, radius * 2);
  }
  ctx.filter = "none";

  ctx.globalAlpha = .18;
  ctx.strokeStyle = "#c8b9aa";
  ctx.lineWidth = 1;
  [-.58,-.28,0,.28,.58].forEach((latitude) => {
    const latitudeRadius = Math.sqrt(1 - latitude * latitude);
    ctx.beginPath();
    ctx.ellipse(0, latitude * radius, radius * latitudeRadius, radius * .16 * latitudeRadius, 0, 0, Math.PI * 2);
    ctx.stroke();
  });
  [-.62,-.3,0,.3,.62].forEach((longitude) => {
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * Math.abs(Math.cos(longitude + rotation)) * .72, radius, 0, 0, Math.PI * 2);
    ctx.stroke();
  });

  const shade = ctx.createLinearGradient(-radius, 0, radius, 0);
  shade.addColorStop(0, "rgba(0,0,0,.86)");
  shade.addColorStop(.28, "rgba(0,0,0,.16)");
  shade.addColorStop(.57, "rgba(255,241,219,.06)");
  shade.addColorStop(1, "rgba(0,0,0,.88)");
  ctx.globalAlpha = 1;
  ctx.fillStyle = shade;
  ctx.fillRect(-radius, -radius, radius * 2, radius * 2);
  ctx.restore();

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.strokeStyle = "rgba(200,185,170,.22)";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawInfoBackground(time = performance.now()) {
  if (!info.classList.contains("open")) {
    infoBackgroundFrame = 0;
    infoBackgroundLastTime = 0;
    return;
  }
  if (infoBackgroundLastTime && time - infoBackgroundLastTime < 32) {
    infoBackgroundFrame = requestAnimationFrame(drawInfoBackground);
    return;
  }
  const delta = infoBackgroundLastTime ? Math.min(48, time - infoBackgroundLastTime) : 33;
  infoBackgroundLastTime = time;
  infoBackgroundRotation += delta * .00038;
  const width = innerWidth;
  const height = innerHeight;
  const ctx = infoBackgroundContext;

  const gradient = ctx.createRadialGradient(width * .5, height * .5, 0, width * .5, height * .5, Math.max(width, height) * .72);
  gradient.addColorStop(0, "#28211d");
  gradient.addColorStop(.46, "#181411");
  gradient.addColorStop(1, "#0d0b0a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  if (infoBackgroundImage?.complete && infoBackgroundImage.naturalWidth > 0) {
    const radius = Math.min(width * .22, height * .32, 310);
    drawInfoSphere(ctx, infoBackgroundImage, width * .5, height * .5, radius, infoBackgroundRotation);
  }

  if (infoBayerPattern) {
    ctx.save();
    ctx.globalAlpha = .42;
    ctx.globalCompositeOperation = "overlay";
    ctx.fillStyle = infoBayerPattern;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }

  infoBackgroundFrame = requestAnimationFrame(drawInfoBackground);
}

function startInfoBackground() {
  resizeInfoBackground();
  selectInfoBackgroundIcon();
  cancelAnimationFrame(infoBackgroundFrame);
  infoBackgroundFrame = requestAnimationFrame(drawInfoBackground);
}

function runInfoGlitch(callback) {
  clearTimeout(infoGlitchTimer);
  if (reducedMotion.matches) {
    callback();
    return;
  }
  body.classList.remove("info-glitching");
  void infoGlitch.offsetWidth;
  body.classList.add("info-glitching");
  window.setTimeout(callback, 280);
  infoGlitchTimer = window.setTimeout(() => body.classList.remove("info-glitching"), 720);
}

function setOverlay(element) {
  if (element) setCollection(false, true);
  [workGrid, categoryIndex, detail, info].forEach((overlay) => {
    const open = overlay === element;
    overlay.classList.toggle("open", open);
    overlay.setAttribute("aria-hidden", String(!open));
  });
  body.classList.toggle("overlay-open", Boolean(element));
  body.classList.toggle("work-open", element === workGrid);
  body.classList.toggle("category-open", element === categoryIndex);
  body.classList.toggle("detail-open", element === detail);
  body.classList.toggle("info-open", element === info);
  if (element) body.classList.remove("has-signal");
  if (element !== detail) detailGallery.querySelectorAll("video").forEach((video) => video.pause());
  syncHomeRuntime();
}

function showHome(push = true) {
  setCollection(false);
  setOverlay(null);
  setHomeMode("field", true);
  jumpDetailTo(0);
  requestAnimationFrame(syncHomeRuntime);
  document.title = "VEIL — Digital & Transmedia";
  if (push) history.pushState(null, "", "#");
}

function showWork(push = true) {
  setActiveSignal(-1);
  runWipe(() => setOverlay(workGrid));
  if (push) history.pushState({ view: "work" }, "", "#work");
}

function showInfo(push = true) {
  setActiveSignal(-1);
  runInfoGlitch(() => {
    setOverlay(info);
    info.scrollTop = 0;
    startInfoBackground();
  });
  if (push) history.pushState({ view: "info" }, "", "#info");
}

function styleObjects(project, nextProject) {
  const object = document.querySelector("#detail-object");
  const nextObject = document.querySelector("#next-object");
  object.style.setProperty("--object-accent", project.colors[0]);
  object.style.setProperty("--object-base", project.colors[1]);
  nextObject.style.setProperty("--object-accent", nextProject.colors[0]);
  nextObject.style.setProperty("--object-base", nextProject.colors[1]);
  object.classList.toggle("project-object--image", Boolean(project.icon));
  const nextVisualIcon = project.upNextIcon || nextProject.icon;
  nextObject.classList.toggle("project-object--image", Boolean(nextVisualIcon));
  if (project.icon) object.style.setProperty("--project-icon", `url("${project.icon}")`);
  else object.style.removeProperty("--project-icon");
  if (nextVisualIcon) nextObject.style.setProperty("--project-icon", `url("${nextVisualIcon}")`);
  else nextObject.style.removeProperty("--project-icon");
}

function setNextTitle(name) {
  const words = name.trim().split(/\s+/);
  const splitAt = Math.max(1, Math.ceil(words.length / 2));
  const left = words.slice(0, splitAt).join(" ");
  const right = words.slice(splitAt).join(" ") || "Next";
  const title = document.querySelector("#next-name");
  title.setAttribute("aria-label", name);
  title.innerHTML = `<span>${left}</span> <span>${right}</span>`;
}

function createNextObject() {
  const object = document.createElement("div");
  object.id = "next-object";
  object.className = "project-object";
  object.setAttribute("aria-hidden", "true");
  object.innerHTML = '<span class="next-icon-fill"></span><i></i><i></i><i></i>';
  nextButton.insertBefore(object, document.querySelector("#next-name"));
  return object;
}

function syncProjectIconMarkup(object, project, includeFill = false) {
  object.classList.remove("project-object--home");
  object.classList.toggle("project-object--image", Boolean(project.icon));
  if (project.icon) {
    object.style.setProperty("--project-icon", `url("${project.icon}")`);
    object.innerHTML = `${includeFill ? '<span class="next-icon-fill"></span>' : ""}<img class="project-object__image" src="${project.icon}" alt="" aria-hidden="true">`;
  } else {
    object.style.removeProperty("--project-icon");
    object.innerHTML = `${includeFill ? '<span class="next-icon-fill"></span>' : ""}<i></i><i></i><i></i>`;
  }
}

function syncHomeReturnMarkup(object, includeFill = false) {
  object.classList.remove("project-object--image");
  object.classList.add("project-object--home");
  object.style.removeProperty("--project-icon");
  object.innerHTML = `${includeFill ? '<span class="next-icon-fill"></span>' : ""}<span class="home-return-icon" aria-hidden="true"><img src="${homeReturnProject.icon}" alt=""></span>`;
}

function splitHeroTitle() {
  const title = document.querySelector("#detail-title");
  const text = title.textContent;
  title.setAttribute("aria-label", text);
  title.dataset.title = text;
  title.classList.add("refraction-title");
  title.innerHTML = refractiveTextMarkup(text, true);
}

function renderMediaElement(item) {
  if (item.type === "video") {
    const preload = item.preload === "auto" ? "metadata" : (item.preload || "none");
    const attributes = [
      "playsinline",
      `preload="${preload}"`,
      item.controls ? "controls" : "",
      item.muted ? "muted" : "",
      item.loop ? "loop" : "",
      item.autoplay ? "data-autoplay=\"true\"" : "",
      item.poster ? `poster=\"${item.poster}\"` : ""
    ].filter(Boolean).join(" ");
    return `<video ${attributes}><source src="${item.src}" type="video/mp4">Your browser does not support HTML video.</video>`;
  }
  if (item.type === "gallery") {
    return `<div class="project-media-asset-grid project-media-asset-grid--${item.variant || "default"}">
      ${item.items.map((asset) => `<img src="${asset.src}" alt="${asset.alt || item.title}" loading="lazy" decoding="async">`).join("")}
    </div>`;
  }
  const imageStyle = [item.fit ? `object-fit:${item.fit}` : "", item.position ? `object-position:${item.position}` : ""].filter(Boolean).join(";");
  return `<img src="${item.src}" alt="${item.alt || item.title}" loading="lazy" decoding="async"${imageStyle ? ` style="${imageStyle}"` : ""}>`;
}

function renderProjectMedia(project) {
  const customMedia = projectMediaContent[project.id];
  const slots = customMedia || (projectMediaSystems[project.category] || projectMediaSystems.Digital).map(([title, description, ratio, layout]) => ({ title, description, ratio, layout, type: "placeholder" }));
  const projectLinks = project.links || (project.website ? [{ label: "Website / Live experience", title: `Visit ${project.name}`, url: project.website }] : []);
  detailGallery.className = "project-media-grid";
  detailGallery.setAttribute("aria-label", `${project.name} media framework`);
  detailGallery.innerHTML = slots.map((item, index) => `
    <article class="project-media-slot project-media-slot--${item.layout}${item.type !== "placeholder" ? " project-media-slot--filled" : ""}${item.slotClass ? ` ${item.slotClass}` : ""}" data-slot="${String(index + 1).padStart(2, "0")}">
      <div class="project-media-surface${item.surfaceClass ? ` ${item.surfaceClass}` : ""}">
        ${item.type === "placeholder" ? `<div class="project-media-placeholder" aria-label="Empty ${item.title} media slot">
          <span class="project-media-placeholder__cross" aria-hidden="true"></span>
          <b>Add image / video</b>
          <small>${item.description}</small>
        </div>` : renderMediaElement(item)}
      </div>
    </article>
  `).join("") + projectLinks.map((link, index) => `
    <a class="project-website-link project-website-link--${index + 1}" href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.title}">
      <span>${link.label}</span>
      <strong>${link.title}</strong>
      <em>${link.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗</em>
    </a>`).join("");
  observeProjectMedia();
}

function observeProjectMedia() {
  if (mediaObserver) mediaObserver.disconnect();
  const slots = [...detailGallery.querySelectorAll(".project-media-slot")];
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    slots.forEach((slot) => slot.classList.add("is-visible"));
    return;
  }
  mediaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector("video");
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (video?.dataset.autoplay === "true") video.play().catch(() => {});
        if (!video) mediaObserver.unobserve(entry.target);
      } else if (video) {
        video.pause();
      }
    });
  }, { root: detail, rootMargin: "0px 0px -8%", threshold: .12 });
  slots.forEach((slot) => mediaObserver.observe(slot));
}

function configureNextReveal(nextItem, position, total) {
  window.cancelAnimationFrame(nextProgressFrame);
  nextProgressFrame = 0;
  nextProgressTarget = 0;
  nextProgressRendered = 0;
  nextButton.style.setProperty("--next-bg", nextItem.bg);
  nextRunway.style.setProperty("--next-bg", nextItem.bg);
  nextButton.style.setProperty("--unveil-progress", "0");
  nextButton.style.setProperty("--unveil-scale", "1");
  nextButton.style.setProperty("--unveil-bg", "0");
  nextButton.style.setProperty("--unveil-clip", "100%");
  nextButton.style.setProperty("--unveil-title-opacity", "0");
  nextButton.classList.remove("is-ready");
  if (!nextTransitionLocked) nextButton.classList.remove("is-handoff");
  document.querySelector("#next-pre").textContent = nextItem.id === "home-return"
    ? `Return / End of ${String(total).padStart(2, "0")}`
    : `Up Next / ${String(position).padStart(2, "0")} of ${String(total).padStart(2, "0")}`;
  nextProgressValue.textContent = "0%";
  nextInstruction.textContent = "Keep scrolling ↓";
}

function jumpDetailTo(top = 0, keepInstant = false) {
  const previousBehavior = detail.style.scrollBehavior;
  detail.style.scrollBehavior = "auto";
  detail.scrollTop = top;
  void detail.offsetHeight;
  if (keepInstant) return;
  requestAnimationFrame(() => {
    if (previousBehavior) detail.style.scrollBehavior = previousBehavior;
    else detail.style.removeProperty("scroll-behavior");
  });
}

function renderCategoryCarousel() {
  const module = categoryModules[activeCategoryIndex];
  const moduleProjects = module.projectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
  const total = moduleProjects.length;
  const positions = [-1, 0, 1];
  categoryCarousel.innerHTML = positions.map((offset) => {
    const projectPosition = (categoryProjectIndex + offset + total) % total;
    const project = moduleProjects[projectPosition];
    const globalIndex = projects.findIndex((item) => item.id === project.id);
    const role = offset === 0 ? "current" : offset < 0 ? "previous" : "next";
    return `<button class="category-panel category-panel--${role}" type="button" data-index-project="${project.id}" data-index-position="${projectPosition}" aria-label="${offset === 0 ? "Open" : "Select"} ${project.name}">
      <span class="category-panel__signal">Signal ${String(activeCategoryIndex + 1).padStart(2, "0")} / ${String(projectPosition + 1).padStart(2, "0")}</span>
      <span class="category-panel__visual" style="--panel-bg:${project.bg};--panel-accent:${project.colors[0]};--panel-base:${project.colors[1]}">
        <span class="category-panel__axis"></span><i></i><i></i><i></i><b>${module.category}</b>
      </span>
      <span class="category-panel__info"><em>${String(globalIndex + 1).padStart(2, "0")}</em><strong>${project.name}</strong><small>${project.type} / ${project.year}</small></span>
    </button>`;
  }).join("");
  categoryProjectPosition.textContent = `${String(categoryProjectIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
}

function populateCategoryIndex(index) {
  activeCategoryIndex = wrapOrbit(index);
  categoryProjectIndex = 0;
  const module = categoryModules[activeCategoryIndex];
  const previousModule = categoryModules[wrapOrbit(activeCategoryIndex - 1)];
  const nextModule = categoryModules[wrapOrbit(activeCategoryIndex + 1)];
  categoryIndex.dataset.category = module.id;
  categoryIndexNumber.textContent = `${String(activeCategoryIndex + 1).padStart(2, "0")} /`;
  categoryIndexTitle.textContent = module.category;
  categoryIndexCount.textContent = `${String(module.projectIds.length).padStart(2, "0")} Projects`;
  categoryIndexDetails.textContent = module.description;
  categoryIndexRole.textContent = `Multidisciplinary Designer\n${module.type}`;
  categoryIndexAmount.textContent = String(module.projectIds.length).padStart(2, "0");
  categorySwitchPrev.querySelector("b").textContent = previousModule.category;
  categorySwitchNext.querySelector("b").textContent = nextModule.category;
  renderCategoryCarousel();
  document.title = `${module.category} — VEIL`;
}

function switchCategoryIndex(step) {
  if (signalLocked || !categoryIndex.classList.contains("open")) return;
  signalLocked = true;
  const nextIndex = wrapOrbit(activeCategoryIndex + step);
  categoryIndex.classList.remove("category-shift-next", "category-shift-prev");
  categoryIndex.classList.add(step > 0 ? "category-shift-next" : "category-shift-prev");
  window.setTimeout(() => {
    commitOrbit(nextIndex, true);
    populateCategoryIndex(nextIndex);
    history.replaceState({ module: categoryModules[nextIndex].id }, "", `#field/${categoryModules[nextIndex].id}`);
    categoryIndex.classList.add("category-shift-return");
    requestAnimationFrame(() => categoryIndex.classList.remove("category-shift-next", "category-shift-prev"));
  }, reducedMotion.matches ? 10 : 270);
  window.setTimeout(() => {
    categoryIndex.classList.remove("category-shift-return");
    signalLocked = false;
  }, reducedMotion.matches ? 25 : 650);
}

function stepCategoryProject(step) {
  const module = categoryModules[activeCategoryIndex];
  categoryProjectIndex = (categoryProjectIndex + step + module.projectIds.length) % module.projectIds.length;
  categoryCarousel.classList.add(step > 0 ? "move-next" : "move-prev");
  window.setTimeout(() => {
    renderCategoryCarousel();
    categoryCarousel.classList.remove("move-next", "move-prev");
  }, reducedMotion.matches ? 10 : 260);
}

function openCategoryProject(id, panel) {
  if (signalLocked || !panel?.classList.contains("category-panel--current")) return;
  const index = projects.findIndex((project) => project.id === id);
  if (index < 0) return;
  signalLocked = true;
  const rect = panel.getBoundingClientRect();
  screenExpand.innerHTML = panel.innerHTML;
  screenExpand.className = "category-project-expand active";
  Object.assign(screenExpand.style, {
    left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, opacity: "1", borderRadius: "0"
  });
  panel.style.visibility = "hidden";
  body.classList.add("category-project-opening");
  void screenExpand.offsetWidth;
  requestAnimationFrame(() => {
    screenExpand.style.left = "0";
    screenExpand.style.top = "0";
    screenExpand.style.width = "100vw";
    screenExpand.style.height = "100svh";
  });
  window.setTimeout(() => {
    populateDetail(index);
    setOverlay(detail);
    jumpDetailTo(0);
    updateDetailProgress();
    history.pushState({ project: id }, "", `#project/${id}`);
  }, reducedMotion.matches ? 15 : 720);
  window.setTimeout(() => {
    screenExpand.style.opacity = "0";
    body.classList.remove("category-project-opening");
    window.setTimeout(() => {
      panel.style.visibility = "";
      screenExpand.className = "";
      screenExpand.removeAttribute("style");
      signalLocked = false;
    }, reducedMotion.matches ? 10 : 260);
  }, reducedMotion.matches ? 30 : 1320);
}

function populateCategoryModule(index, sourceScreen = signalScreens[index]) {
  const module = categoryModules[index];
  const nextIndex = (index + 1) % categoryModules.length;
  const nextModule = categoryModules[nextIndex];
  const moduleProjects = module.projectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);
  const leadProject = moduleProjects[0];
  const nextLeadProject = projects.find((project) => project.id === nextModule.projectIds[0]);
  const detailObject = document.querySelector("#detail-object");
  const sourceClass = [...sourceScreen.classList].find((name) => name.startsWith("signal-screen--") || name.startsWith("field-screen--"));
  const channelClass = sourceClass?.replace("field-screen--", "signal-screen--");
  if (mediaObserver) mediaObserver.disconnect();
  delete body.dataset.detailProject;

  detail.classList.add("category-module");
  activeDetailProjectIndex = -1;
  detailObject.className = "project-object detail-signal-screen";
  if (channelClass) detailObject.classList.add(channelClass);
  detailObject.innerHTML = sourceScreen.innerHTML;
  document.querySelector("#detail-title").textContent = module.category;
  document.querySelector("#detail-title").dataset.title = module.category;
  document.querySelector("#detail-summary-head").textContent = "Field";
  document.querySelector("#detail-summary").textContent = module.description;
  document.querySelector("#detail-role-head").textContent = "Practice";
  document.querySelector("#detail-role").textContent = module.type;
  document.querySelector("#detail-credits-head").textContent = "Index";
  document.querySelector("#detail-credits").textContent = `${String(moduleProjects.length).padStart(2,"0")} selected projects`;

  detailGallery.className = "module-gallery";
  detailGallery.setAttribute("aria-label", `${module.category} selected projects`);
  detailGallery.innerHTML = `<div class="module-index">
    <div class="module-index__head"><span>No.</span><span>Selected work</span><span>Year</span></div>
    ${moduleProjects.map((project, projectIndex) => `<button class="module-project" type="button" data-project="${project.id}">
      <span>${String(projectIndex + 1).padStart(2,"0")}</span>
      <strong>${project.name}</strong>
      <small>${project.type}</small>
      <em>${project.year} ↗</em>
    </button>`).join("")}
  </div>`;

  setNextTitle(nextModule.category);
  document.querySelector("#next-category").textContent = nextModule.type;
  delete nextButton.dataset.project;
  delete nextButton.dataset.home;
  nextButton.dataset.module = nextModule.id;
  styleObjects(leadProject, nextLeadProject);
  configureNextReveal(nextLeadProject, nextIndex + 1, categoryModules.length);
  document.title = `${module.category} — VEIL`;
}

function populateDetail(index, sourceScreen = null, preserveDetailObject = false) {
  const project = projects[index];
  const isFinalProject = index === projects.length - 1;
  const nextProject = isFinalProject ? homeReturnProject : projects[index + 1];
  const detailObject = document.querySelector("#detail-object");
  detail.dataset.project = project.id;
  body.dataset.detailProject = project.id;
  detail.classList.remove("category-module");
  activeDetailProjectIndex = index;
  renderProjectMedia(project);
  detailObject.className = preserveDetailObject ? "project-object handoff-icon" : "project-object";
  if (project.icon && !preserveDetailObject) {
    detailObject.className = "project-object project-object--image";
    syncProjectIconMarkup(detailObject, project);
  } else if (sourceScreen && !preserveDetailObject) {
    const channelClass = [...sourceScreen.classList].find((name) => name.startsWith("signal-screen--"));
    detailObject.classList.add("detail-signal-screen");
    if (channelClass) detailObject.classList.add(channelClass);
    detailObject.innerHTML = sourceScreen.innerHTML;
  } else if (!preserveDetailObject) {
    detailObject.innerHTML = "<i></i><i></i><i></i>";
  }
  document.querySelector("#detail-title").textContent = project.name;
  document.querySelector("#detail-title").dataset.title = project.name;
  document.querySelector("#detail-summary-head").textContent = "Details";
  document.querySelector("#detail-summary").textContent = project.summary;
  document.querySelector("#detail-role-head").textContent = "Role";
  document.querySelector("#detail-role").textContent = project.role;
  document.querySelector("#detail-credits-head").textContent = "Credits";
  document.querySelector("#detail-credits").textContent = project.credits;
  setNextTitle(nextProject.name);
  document.querySelector("#next-category").textContent = `${nextProject.category} / ${nextProject.type}`;
  delete nextButton.dataset.module;
  delete nextButton.dataset.project;
  delete nextButton.dataset.home;
  if (isFinalProject) nextButton.dataset.home = "true";
  else nextButton.dataset.project = nextProject.id;
  styleObjects(project, nextProject);
  if (isFinalProject) syncHomeReturnMarkup(document.querySelector("#next-object"), true);
  else {
    const nextVisual = project.upNextIcon ? { ...nextProject, icon: project.upNextIcon } : nextProject;
    syncProjectIconMarkup(document.querySelector("#next-object"), nextVisual, true);
  }
  configureNextReveal(nextProject, index + 2, projects.length);
  splitHeroTitle();
  document.title = `${project.name} — VEIL`;
}

function showCategoryModule(id, push = true) {
  const index = categoryModules.findIndex((module) => module.id === id);
  if (index < 0) return;
  const module = categoryModules[index];
  const projectId = module.projectIds[0];
  const projectIndex = projects.findIndex((project) => project.id === projectId);
  if (projectIndex < 0) return;
  lastSignalSource = { signalIndex: index, moduleId: id };
  activeCategoryIndex = index;
  setHomeMode("field", true);
  updateProject(projectIndex, projectIndex >= activeIndex ? 1 : -1, true);
  populateDetail(projectIndex);
  setOverlay(detail);
  jumpDetailTo(0);
  updateDetailProgress();
  const projectUrl = `#project/${projectId}`;
  if (push) history.pushState({ project: projectId }, "", projectUrl);
  else history.replaceState({ project: projectId }, "", projectUrl);
}

function showProject(id, push = true) {
  const index = projects.findIndex((project) => project.id === id);
  if (index < 0) return;
  window.clearTimeout(nextTransitionTimer);
  nextTransitionTimer = 0;
  window.cancelAnimationFrame(nextProgressFrame);
  nextProgressFrame = 0;
  nextTransitionLocked = false;
  detail.classList.remove("handoff-leaving","handoff-clearing","handoff-building","hero-title-enter","hero-meta-enter");
  detail.style.removeProperty("overflow-y");
  detail.style.removeProperty("overflow-anchor");
  detail.style.removeProperty("scroll-behavior");
  nextButton.style.removeProperty("--handoff-bg");
  nextRunway.style.removeProperty("--handoff-bg");
  lastSignalSource = null;
  setActiveSignal(-1);
  updateProject(index, index >= activeIndex ? 1 : -1, true);
  runWipe(() => {
    populateDetail(index);
    setOverlay(detail);
    jumpDetailTo(0);
    updateDetailProgress();
  });
  if (push) history.pushState({ project: id }, "", `#project/${id}`);
}

function beginNextProjectHandoff() {
  if (nextTransitionLocked || !nextButton.dataset.project || activeDetailProjectIndex < 0) return;
  const nextIndex = projects.findIndex((project) => project.id === nextButton.dataset.project);
  if (nextIndex < 0) return;

  const movingIcon = document.querySelector("#next-object");
  const start = movingIcon.getBoundingClientRect();
  const oldDetailObject = document.querySelector("#detail-object");
  nextTransitionLocked = true;
  window.clearTimeout(nextTransitionTimer);
  nextTransitionTimer = 0;
  nextButton.style.setProperty("--handoff-bg", projects[nextIndex].bg);
  nextRunway.style.setProperty("--handoff-bg", projects[nextIndex].bg);
  detail.style.overflowY = "hidden";
  detail.style.overflowAnchor = "none";
  detail.style.scrollBehavior = "auto";
  detail.classList.add("handoff-leaving","handoff-clearing");
  nextButton.classList.add("is-handoff");
  movingIcon.classList.add("handoff-icon");
  movingIcon.querySelector(".project-object__image")?.style.setProperty("object-fit", "contain");
  nextInstruction.textContent = "Loading";
  nextProgressValue.textContent = "100%";

  Object.assign(movingIcon.style, {
    position: "fixed",
    zIndex: "62",
    left: `${start.left}px`,
    top: `${start.top}px`,
    width: `${start.width}px`,
    height: `${start.height}px`,
    margin: "0",
    overflow: "visible",
    transform: "none",
    filter: "none",
    transition: "none",
    willChange: "left,top,width,height,transform,opacity"
  });
  document.body.appendChild(movingIcon);

  const lockWidth = start.width;
  const lockHeight = start.height;
  requestAnimationFrame(() => {
    movingIcon.style.transition = "left .34s cubic-bezier(.65,0,.35,1),top .34s cubic-bezier(.65,0,.35,1),transform .34s cubic-bezier(.65,0,.35,1)";
    movingIcon.style.left = `${(innerWidth - lockWidth) / 2}px`;
    movingIcon.style.top = `${(innerHeight - lockHeight) / 2}px`;
    movingIcon.style.transform = "scale(.94)";
  });

  window.setTimeout(() => {
    if (oldDetailObject && oldDetailObject !== movingIcon) oldDetailObject.remove();
    movingIcon.id = "detail-object";
    movingIcon.className = "project-object handoff-icon";
    movingIcon.querySelector(".next-icon-fill")?.remove();
    document.querySelector("#detail-stage").appendChild(movingIcon);
    const rebuiltNextObject = createNextObject();

    updateProject(nextIndex, 1, true);
    populateDetail(nextIndex, null, true);
    syncProjectIconMarkup(movingIcon, projects[nextIndex]);
    const followingProject = nextIndex === projects.length - 1 ? homeReturnProject : projects[nextIndex + 1];
    if (followingProject.id === "home-return") syncHomeReturnMarkup(rebuiltNextObject, true);
    else {
      const followingVisual = projects[nextIndex].upNextIcon ? { ...followingProject, icon: projects[nextIndex].upNextIcon } : followingProject;
      syncProjectIconMarkup(rebuiltNextObject, followingVisual, true);
    }
    history.pushState({ project: projects[nextIndex].id }, "", `#project/${projects[nextIndex].id}`);
    jumpDetailTo(0, true);
    detail.classList.remove("handoff-leaving", "handoff-clearing");
    detail.classList.add("handoff-building");

    const mobile = innerWidth <= 760;
    const nextHasImage = Boolean(projects[nextIndex].icon);
    const targetWidth = nextHasImage
      ? (mobile ? Math.min(innerWidth * .76, innerHeight * .48) : Math.min(innerHeight * .54, 540))
      : (mobile ? Math.min(innerWidth * .58, innerHeight * .38) : Math.min(innerHeight * .40, 430));
    const targetHeight = nextHasImage ? targetWidth : targetWidth / .82;
    const targetLeft = (innerWidth - targetWidth) / 2;
    const targetTop = innerHeight * .09 + (innerHeight * .54 - targetHeight) / 2;

    requestAnimationFrame(() => {
      movingIcon.style.transition = "left .9s cubic-bezier(.87,0,.13,1),top .9s cubic-bezier(.87,0,.13,1),width .9s cubic-bezier(.87,0,.13,1),height .9s cubic-bezier(.87,0,.13,1),border-radius .9s cubic-bezier(.87,0,.13,1),transform .9s cubic-bezier(.87,0,.13,1),opacity .28s ease";
      movingIcon.style.left = `${targetLeft}px`;
      movingIcon.style.top = `${targetTop}px`;
      movingIcon.style.width = `${targetWidth}px`;
      movingIcon.style.height = `${targetHeight}px`;
      movingIcon.style.transform = nextHasImage ? "rotate(0deg)" : "rotate(-5deg)";
    });

    window.setTimeout(() => detail.classList.add("hero-title-enter"), reducedMotion.matches ? 10 : 120);
    window.setTimeout(() => detail.classList.add("hero-meta-enter"), reducedMotion.matches ? 15 : 760);
    window.setTimeout(() => {
      ["position","z-index","left","top","width","height","margin","overflow","transform","filter","transition","will-change","opacity"].forEach((property) => movingIcon.style.removeProperty(property));
      movingIcon.classList.remove("handoff-icon");
      movingIcon.querySelector(".project-object__image")?.style.removeProperty("object-fit");
        detail.classList.remove("handoff-building","handoff-clearing","hero-title-enter","hero-meta-enter");
        detail.style.removeProperty("overflow-y");
        detail.style.removeProperty("overflow-anchor");
        detail.style.removeProperty("scroll-behavior");
        nextButton.classList.remove("is-handoff");
        nextButton.style.removeProperty("--handoff-bg");
        nextRunway.style.removeProperty("--handoff-bg");
        nextTransitionLocked = false;
      updateDetailProgress();
    }, reducedMotion.matches ? 30 : 1560);
  }, reducedMotion.matches ? 20 : 380);
}

function beginHomeReturn() {
  if (nextTransitionLocked || nextButton.dataset.home !== "true") return;
  nextTransitionLocked = true;
  window.clearTimeout(nextTransitionTimer);
  nextTransitionTimer = 0;
  window.cancelAnimationFrame(nextProgressFrame);
  nextProgressFrame = 0;
  nextInstruction.textContent = "Returning home";
  nextProgressValue.textContent = "100%";
  nextButton.classList.add("is-handoff");
  runWipe(() => {
    showHome();
    nextButton.classList.remove("is-handoff", "is-ready");
    nextTransitionLocked = false;
    nextProgressTarget = 0;
    nextProgressRendered = 0;
  });
}

function paintNextProgress(unveil) {
  const lateProgress = Math.min(1, Math.max(0, (unveil - .7) / .25));
  const backgroundProgress = Math.min(1, Math.max(0, (unveil - .7) / .3));
  nextButton.style.setProperty("--unveil-progress", unveil.toFixed(3));
  nextButton.style.setProperty("--unveil-scale", (1 + lateProgress * .08).toFixed(3));
  nextButton.style.setProperty("--unveil-bg", backgroundProgress.toFixed(3));
  nextButton.style.setProperty("--unveil-clip", `${Math.max(0, 100 - unveil * 125).toFixed(1)}%`);
  nextButton.style.setProperty("--unveil-title-opacity", lateProgress.toFixed(3));
  nextButton.classList.toggle("is-ready", unveil >= .995);
  const revealPercent = Math.round(unveil * 100);
  nextProgressValue.textContent = `${revealPercent}%`;
  nextInstruction.textContent = unveil >= .995 ? "Ready" : "Keep scrolling ↓";
  detailProgressHint.style.opacity = unveil > .12 ? "0" : "";

  const hasNextDestination = Boolean(nextButton.dataset.project || nextButton.dataset.home === "true");
  if (unveil >= .995 && nextProgressTarget >= .995 && hasNextDestination && !nextTransitionLocked && !nextTransitionTimer) {
    nextTransitionTimer = window.setTimeout(() => {
      nextTransitionTimer = 0;
      if (nextButton.dataset.home === "true") beginHomeReturn();
      else beginNextProjectHandoff();
    }, reducedMotion.matches ? 10 : 210);
  } else if (nextProgressTarget < .995 && !nextTransitionLocked) {
    window.clearTimeout(nextTransitionTimer);
    nextTransitionTimer = 0;
  }
}

function animateNextProgress() {
  const difference = nextProgressTarget - nextProgressRendered;
  if (Math.abs(difference) < .001) {
    nextProgressRendered = nextProgressTarget;
    nextProgressFrame = 0;
    paintNextProgress(nextProgressRendered);
    return;
  }
  nextProgressRendered += difference * .12;
  paintNextProgress(nextProgressRendered);
  nextProgressFrame = requestAnimationFrame(animateNextProgress);
}

function setNextProgress(progress) {
  nextProgressTarget = progress;
  if (reducedMotion.matches) {
    nextProgressRendered = progress;
    paintNextProgress(progress);
    return;
  }
  if (!nextProgressFrame) nextProgressFrame = requestAnimationFrame(animateNextProgress);
}

function updateDetailProgress() {
  const max = detail.scrollHeight - detail.clientHeight;
  const progress = max > 0 ? detail.scrollTop / max : 0;
  document.querySelector("#detail-percent").textContent = `${Math.round(progress * 100)}%`;

  const revealDistance = detail.clientHeight * .9;
  const revealStart = Math.max(0, max - revealDistance);
  const unveil = Math.min(1, Math.max(0, (detail.scrollTop - revealStart) / revealDistance));
  setNextProgress(unveil);
}

function handleAction(action) {
  navChips.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if (action === "home") showHome();
  if (action === "work") workGrid.classList.contains("open") ? showHome() : showWork();
  if (action === "info") {
    if (info.classList.contains("open")) runInfoGlitch(() => showHome());
    else showInfo();
  }
}

function handleHash() {
  const hash = location.hash.slice(1);
  if (hash.startsWith("field/")) return showCategoryModule(hash.split("/")[1], false);
  if (hash.startsWith("project/")) return showProject(hash.split("/")[1], false);
  if (hash === "work") return showWork(false);
  if (hash === "info") return showInfo(false);
  setOverlay(null);
  setHomeMode("field", true);
  requestAnimationFrame(syncHomeRuntime);
}

window.addEventListener("pageshow", () => {
  syncHomeRuntime();
});
document.addEventListener("visibilitychange", () => {
  syncHomeRuntime();
});

renderGrid();
document.querySelectorAll(".grid-row").forEach((row) => {
  row.addEventListener("pointerenter", (event) => {
    const source = row.querySelector(".grid-row__preview-source").dataset.src;
    if (source && workPreviewImage.getAttribute("src") !== source) workPreviewImage.src = source;
    workPreview.classList.add("visible");
    moveWorkPreview(event);
  });
});
workGrid.addEventListener("pointermove", (event) => {
  const row = event.target.closest(".grid-row");
  workPreview.classList.toggle("visible", Boolean(row));
  if (row) {
    moveWorkPreview(event);
    updateTitleRefraction(row.querySelector(".grid-row__name"), event);
    document.querySelectorAll(".grid-row__name.is-refracting").forEach((title) => {
      if (title !== row.querySelector(".grid-row__name")) releaseTitleRefraction(title);
    });
  }
});
workGrid.addEventListener("pointerleave", () => {
  workPreview.classList.remove("visible");
  document.querySelectorAll(".grid-row__name.is-refracting").forEach(releaseTitleRefraction);
});
const detailStage = document.querySelector("#detail-stage");
detailStage.addEventListener("pointermove", (event) => updateTitleRefraction(document.querySelector("#detail-title"), event));
detailStage.addEventListener("pointerleave", () => releaseTitleRefraction(document.querySelector("#detail-title")));
initSignalIntro();

signalScreens.forEach((screen,index) => {
  screen.addEventListener("click", () => index === orbitIndex ? beginSignalTransition(screen) : transitionCategoryTo(index, orbitDelta(index, orbitIndex)));
  screen.addEventListener("pointerenter", () => {
    if (!body.classList.contains("signal-ready")) return;
    signalCursor.querySelector("span").textContent = `View ${String(index + 1).padStart(2, "0")}`;
    signalCursor.classList.add("visible");
  });
  screen.addEventListener("pointerleave", () => signalCursor.classList.remove("visible"));
});

fieldScreens.forEach((screen, index) => {
  screen.addEventListener("pointerenter", () => setFieldActive(index));
  screen.addEventListener("pointerleave", () => { if (!signalLocked) setFieldActive(-1); });
  screen.addEventListener("focus", () => setFieldActive(index));
  screen.addEventListener("blur", () => setFieldActive(-1));
  screen.addEventListener("click", () => {
    if (screen.dataset.action === "home") return;
    beginFieldTransition(screen);
  });
});

signalCategories.forEach((item,index) => {
  item.addEventListener("pointerenter", () => { if (homeMode === "field") setFieldActive(index); });
  item.addEventListener("pointerleave", () => { if (homeMode === "field" && !signalLocked) setFieldActive(-1); });
  item.addEventListener("click", () => {
    if (item.dataset.action === "home") return;
    else if (homeMode === "field") beginFieldTransition(fieldScreens[index]);
    else if (index === orbitIndex) beginSignalTransition(signalScreens[index]);
    else transitionCategoryTo(index, orbitDelta(index, orbitIndex));
  });
});

if (viewModeToggle) viewModeToggle.addEventListener("click", () => setHomeMode("orbit"));

signalCore.addEventListener("click", () => {
  if (startSignalIntro()) return;
  if (suppressOrbitClick) {
    suppressOrbitClick = false;
    return;
  }
  beginSignalTransition(signalScreens[orbitIndex]);
});
introTrigger.addEventListener("click", startSignalIntro);
document.querySelectorAll("[data-orbit-step]").forEach((button) => button.addEventListener("click", () => rotateOrbit(Number(button.dataset.orbitStep))));
document.querySelector("#category-prev").addEventListener("click", () => stepCategoryProject(-1));
document.querySelector("#category-next").addEventListener("click", () => stepCategoryProject(1));
categorySwitchPrev.addEventListener("click", () => switchCategoryIndex(-1));
categorySwitchNext.addEventListener("click", () => switchCategoryIndex(1));
categoryCarousel.addEventListener("click", (event) => {
  if (categorySwipeSuppressClick) {
    categorySwipeSuppressClick = false;
    return;
  }
  const panel = event.target.closest("[data-index-project]");
  if (!panel) return;
  if (panel.classList.contains("category-panel--current")) openCategoryProject(panel.dataset.indexProject, panel);
  else stepCategoryProject(panel.classList.contains("category-panel--previous") ? -1 : 1);
});

nextButton.addEventListener("click", (event) => {
  if (!nextButton.dataset.project && nextButton.dataset.home !== "true") return;
  event.preventDefault();
  event.stopPropagation();
  if (nextButton.classList.contains("is-ready")) {
    if (nextButton.dataset.home === "true") beginHomeReturn();
    else beginNextProjectHandoff();
    return;
  }
  const target = detail.scrollHeight - detail.clientHeight;
  detail.scrollTo({ top: target, behavior: reducedMotion.matches ? "auto" : "smooth" });
});

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  const module = event.target.closest("[data-module]");
  const project = event.target.closest("[data-project]");
  if (action) handleAction(action.dataset.action);
  if (module) showCategoryModule(module.dataset.module);
  if (project && !module) showProject(project.dataset.project);
});

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navChips.classList.toggle("open", !open);
});

document.querySelector("#sound-toggle").addEventListener("click", (event) => {
  const pressed = event.currentTarget.getAttribute("aria-pressed") === "true";
  event.currentTarget.setAttribute("aria-pressed", String(!pressed));
});

document.querySelector("#theme-toggle").addEventListener("click", (event) => {
  const pressed = event.currentTarget.getAttribute("aria-pressed") === "true";
  event.currentTarget.setAttribute("aria-pressed", String(!pressed));
  body.classList.toggle("mono", !pressed);
  event.currentTarget.querySelector(".theme-glyph").textContent = pressed ? "☾" : "☀";
  event.currentTarget.setAttribute("aria-label", pressed ? "Switch to day mode" : "Switch to night mode");
});

window.addEventListener("wheel", (event) => {
  if (body.classList.contains("overlay-open")) return;
  if (homeMode === "field" && body.classList.contains("signal-ready")) {
    const open = body.classList.contains("collection-open");
    if (performance.now() < collectionLockedUntil) { event.preventDefault(); return; }
    event.preventDefault();
    if (open) {
      const delta = (Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY) * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
      collectionPointerOffset = 0;
      if (collectionTarget <= .001 && delta < 0) {
        collectionWheelTotal += delta;
        clearTimeout(collectionWheelTimer);
        collectionWheelTimer = setTimeout(() => { collectionWheelTotal = 0; }, 220);
        if (collectionWheelTotal < -160) { collectionWheelTotal = 0; setCollection(false); }
      } else {
        collectionWheelTotal = 0;
        selectCollection(collectionTarget + Math.max(-80, Math.min(80, delta)) * COLLECTION_MOTION.wheelSpeed);
        clearTimeout(collectionSnapTimer);
        collectionSnapTimer = setTimeout(() => { collectionWheelStart = null; }, 160);
      }
      return;
    }
    collectionWheelTotal += event.deltaY;
    clearTimeout(collectionWheelTimer);
    collectionWheelTimer = setTimeout(() => { collectionWheelTotal = 0; }, 180);
    if ((!open && collectionWheelTotal > 55) || (open && collectionWheelTotal < -55)) {
      collectionWheelTotal = 0;
      setCollection(!open);
    }
    return;
  }
  if (homeMode !== "orbit") return;
  event.preventDefault();
  if (signalLocked || !body.classList.contains("signal-ready")) return;
  orbitWheelTotal += Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  window.clearTimeout(orbitWheelTimer);
  orbitWheelTimer = window.setTimeout(() => { orbitWheelTotal = 0; }, 180);
  if (Math.abs(orbitWheelTotal) < 42 || wheelLocked) return;
  const direction = orbitWheelTotal > 0 ? 1 : -1;
  orbitWheelTotal = 0;
  wheelLocked = true;
  rotateOrbit(direction);
  window.setTimeout(() => { wheelLocked = false; }, reducedMotion.matches ? 30 : 760);
}, { passive: false });

signalDevice.addEventListener("pointerdown", (event) => {
  if (signalLocked || body.classList.contains("overlay-open")) return;
  if (event.target.closest(".signal-screen, #signal-core")) return;
  orbitDragging = true;
  orbitDragStartX = event.clientX;
  orbitDragProgress = 0;
  signalDevice.setPointerCapture(event.pointerId);
  body.classList.add("orbit-dragging");
});

signalDevice.addEventListener("pointermove", (event) => {
  if (!orbitDragging) return;
  orbitDragProgress = (orbitDragStartX - event.clientX) / Math.max(180, innerWidth * .18);
  if (Math.abs(orbitDragProgress) > .06) suppressOrbitClick = true;
  orbitVisualIndex = orbitIndex + orbitDragProgress;
  renderOrbit(orbitVisualIndex);
});

function finishOrbitDrag() {
  if (!orbitDragging) return;
  orbitDragging = false;
  body.classList.remove("orbit-dragging");
  if (Math.abs(orbitDragProgress) >= .35) transitionCategoryTo(orbitIndex + (orbitDragProgress > 0 ? 1 : -1), orbitDragProgress > 0 ? 1 : -1);
  else {
    orbitVisualIndex = orbitIndex;
    renderOrbit(orbitIndex);
  }
  orbitDragProgress = 0;
}

signalDevice.addEventListener("pointerup", finishOrbitDrag);
signalDevice.addEventListener("pointercancel", finishOrbitDrag);

signalCore.addEventListener("pointerdown", (event) => {
  if (body.classList.contains("signal-awaiting") || signalLocked || body.classList.contains("overlay-open")) return;
  orbitDragging = true;
  suppressOrbitClick = false;
  orbitDragStartX = event.clientX;
  orbitDragProgress = 0;
  signalCore.setPointerCapture(event.pointerId);
  body.classList.add("orbit-dragging");
});

categoryIndex.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (categoryWheelLocked || signalLocked) return;
  const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY) * 1.1;
  const delta = horizontal ? event.deltaX : event.deltaY;
  if (Math.abs(delta) < 8) return;
  categoryWheelLocked = true;
  if (horizontal) switchCategoryIndex(delta > 0 ? 1 : -1);
  else stepCategoryProject(delta > 0 ? 1 : -1);
  window.setTimeout(() => { categoryWheelLocked = false; }, reducedMotion.matches ? 30 : 560);
}, { passive: false });

categoryIndex.addEventListener("pointerdown", (event) => {
  if (!categoryIndex.classList.contains("open") || event.target.closest("#category-index-footer, #category-switcher")) return;
  categoryDragging = true;
  categoryDragStartX = event.clientX;
  categoryDragCurrentX = event.clientX;
  categoryIndex.setPointerCapture?.(event.pointerId);
  categoryIndex.classList.add("is-category-dragging");
});

categoryIndex.addEventListener("pointermove", (event) => {
  if (!categoryDragging) return;
  categoryDragCurrentX = event.clientX;
  const distance = Math.max(-120, Math.min(120, categoryDragCurrentX - categoryDragStartX));
  categoryIndex.style.setProperty("--category-drag-x", `${distance}px`);
});

function finishCategoryDrag() {
  if (!categoryDragging) return;
  categoryDragging = false;
  categoryIndex.classList.remove("is-category-dragging");
  const distance = categoryDragCurrentX - categoryDragStartX;
  categoryIndex.style.removeProperty("--category-drag-x");
  if (Math.abs(distance) >= 70) {
    categorySwipeSuppressClick = true;
    switchCategoryIndex(distance < 0 ? 1 : -1);
    window.setTimeout(() => { categorySwipeSuppressClick = false; }, 0);
  }
}

categoryIndex.addEventListener("pointerup", finishCategoryDrag);
categoryIndex.addEventListener("pointercancel", finishCategoryDrag);

window.addEventListener("touchstart", (event) => { touchStartY = event.touches[0].clientY; }, { passive: true });
window.addEventListener("touchend", (event) => {
  if (body.classList.contains("overlay-open")) return;
  if (homeMode !== "field" || !body.classList.contains("signal-ready") || performance.now() < collectionLockedUntil) return;
  const distance = touchStartY - event.changedTouches[0].clientY;
  const open = body.classList.contains("collection-open");
  if (!open && distance > 65) setCollection(true);
}, { passive: true });

window.addEventListener("pointermove", (event) => {
  const entering = pointerClientX < -500 || pointerClientY < -500;
  pointerClientX = event.clientX;
  pointerClientY = event.clientY;
  if (entering) {
    cursorX = pointerClientX;
    cursorY = pointerClientY;
  }
  pointerX = (event.clientX / innerWidth - .5) * 2;
  pointerY = (event.clientY / innerHeight - .5) * 2;
  body.classList.add("cursor-active");
  updateCursorMode(event.target);
  queueCursorFrame();
}, { passive: true });

window.addEventListener("pointerdown", () => body.classList.add("cursor-pressed"), { passive: true });
window.addEventListener("pointerup", () => body.classList.remove("cursor-pressed"), { passive: true });
window.addEventListener("pointercancel", () => body.classList.remove("cursor-pressed"), { passive: true });

document.documentElement.addEventListener("pointerleave", () => {
  pointerClientX = -1000;
  pointerClientY = -1000;
  forcedSignal = -1;
  body.classList.remove("cursor-active", "cursor-interactive", "cursor-drag", "cursor-native", "cursor-pressed");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") return showHome();
  if (!body.classList.contains("overlay-open") && body.classList.contains("signal-ready") && (event.key === "PageDown" || event.key === "PageUp")) {
    const open = body.classList.contains("collection-open");
    if (!open && event.key === "PageDown") { event.preventDefault(); setCollection(true); return; }
    if (open && event.key === "PageUp" && collectionTarget === 0) { event.preventDefault(); setCollection(false); return; }
  }
  if (body.classList.contains("collection-open")) {
    if (["ArrowRight", "ArrowDown", "PageDown", "ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      selectCollection(Math.round(collectionTarget) + (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key) ? 1 : -1));
    }
    return;
  }
  if (categoryIndex.classList.contains("open")) {
    if (event.key === "ArrowRight") switchCategoryIndex(1);
    if (event.key === "ArrowLeft") switchCategoryIndex(-1);
    if (event.key === "ArrowDown") stepCategoryProject(1);
    if (event.key === "ArrowUp") stepCategoryProject(-1);
    if (event.key === "Enter") {
      const panel = categoryCarousel.querySelector(".category-panel--current");
      if (panel) openCategoryProject(panel.dataset.indexProject, panel);
    }
    return;
  }
  if (body.classList.contains("overlay-open")) return;
  if (homeMode === "field") {
    if (["ArrowDown", "ArrowRight"].includes(event.key)) setFieldActive(fieldActiveIndex < 0 ? 0 : (fieldActiveIndex + 1) % fieldScreens.length);
    if (["ArrowUp", "ArrowLeft"].includes(event.key)) setFieldActive(fieldActiveIndex < 0 ? fieldScreens.length - 1 : (fieldActiveIndex - 1 + fieldScreens.length) % fieldScreens.length);
    if (event.key === "Enter" && fieldActiveIndex >= 0) beginFieldTransition(fieldScreens[fieldActiveIndex]);
    return;
  }
  if (["ArrowDown", "ArrowRight"].includes(event.key)) rotateOrbit(1);
  if (["ArrowUp", "ArrowLeft"].includes(event.key)) rotateOrbit(-1);
  if (event.key === "Enter") beginSignalTransition(signalScreens[orbitIndex]);
});

detail.addEventListener("scroll", updateDetailProgress, { passive: true });
window.addEventListener("resize", () => {
  if (info.classList.contains("open")) resizeInfoBackground();
  renderOrbit(orbitIndex);
});
window.addEventListener("online", () => document.querySelector("#status-dot").classList.remove("offline"));
window.addEventListener("offline", () => document.querySelector("#status-dot").classList.add("offline"));
window.addEventListener("popstate", handleHash);

if (!navigator.onLine) document.querySelector("#status-dot").classList.add("offline");
if (location.hash) handleHash();
