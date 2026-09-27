import type { CategoryId } from "../lib/categories";

/**
 * Demo newsroom. Every headline, source, place and person below is fictional
 * and written for this demo; nothing here reports real events.
 * `age` is minutes before "now", so the demo always looks freshly published.
 */
export interface SeedArticle {
  id: string;
  category: CategoryId;
  title: string;
  summary: string;
  body: [string, string, string];
  source: string;
  author: string;
  age: number;
}

export const SEED_ARTICLES: SeedArticle[] = [
  // ── World ───────────────────────────────────────────────────────────────
  {
    id: "w1",
    category: "world",
    title: "Coastal nations sign a shared plan to map rising tides",
    summary:
      "Eleven island and coastal states agree to pool sensor data so every harbour can see flood risk a week ahead.",
    body: [
      "Delegates from eleven coastal states closed a three-day summit by signing a data-sharing pact that links more than 400 tide gauges into one open network.",
      "Under the plan, each country keeps ownership of its sensors but publishes readings every ten minutes to a common feed. Harbour authorities say the combined picture should push reliable flood warnings from two days out to about seven.",
      "The first joint forecasts are expected before the next storm season. Smaller states, which could never afford dense sensor coverage alone, are expected to benefit most.",
    ],
    source: "Meridian Post",
    author: "Ines Varga",
    age: 35,
  },
  {
    id: "w2",
    category: "world",
    title: "Night trains return to a continental route after 20 years",
    summary:
      "A sleeper service linking five capitals relaunches with bookable cabins, bike racks and a dining car.",
    body: [
      "The overnight service departed at 21:40 with every cabin sold, marking the route's first scheduled sleeper in two decades.",
      "Operators credit rising demand for low-carbon travel and new rolling stock financed through a multi-country rail fund. Fares start below the cost of a budget flight plus a hotel night.",
      "A second weekly departure will be added in spring if occupancy stays above eighty percent.",
    ],
    source: "Northline Review",
    author: "Tomas Ekholm",
    age: 190,
  },
  {
    id: "w3",
    category: "world",
    title: "Global seed vault receives its largest deposit in a decade",
    summary:
      "Forty research centres send duplicate samples of drought-tolerant grains to long-term cold storage.",
    body: [
      "More than 60,000 seed samples arrived at the mountain vault this week, the largest single intake since the facility expanded its chambers.",
      "Most of the deposit focuses on grain and legume varieties bred to cope with heat and irregular rainfall, a priority for growers in several dry regions.",
      "Curators say duplication is the point: if a regional gene bank is damaged, its collection can be restored from the vault.",
    ],
    source: "Meridian Post",
    author: "Amara Osei",
    age: 610,
  },
  {
    id: "w4",
    category: "world",
    title: "Cross-border river clean-up removes 90 tonnes of waste",
    summary: "Volunteers in three countries worked the same weekend, downstream to upstream.",
    body: [
      "Organisers coordinated start times so crews in each country tackled their stretch of the river on the same weekend, preventing debris from simply drifting to the next section.",
      "Plastics made up about two-thirds of what was collected. Volunteers logged items by type through a shared app so the data can inform packaging rules.",
      "The groups plan to repeat the effort twice a year and publish the combined data set.",
    ],
    source: "Harbour Ledger",
    author: "Luca Brandt",
    age: 1500,
  },

  // ── Business ────────────────────────────────────────────────────────────
  {
    id: "b1",
    category: "business",
    title: "Independent bookshops post their strongest quarter in years",
    summary:
      "Events, subscriptions and in-store cafés are turning small shops into neighbourhood hubs.",
    body: [
      "A trade survey of 300 independent bookstores found average revenue up 14 percent year over year, with the biggest gains among shops that host regular events.",
      "Owners point to book-subscription boxes and café sales as steady income that smooths out seasonal swings in book buying.",
      "Analysts caution that rent increases remain the largest threat, particularly for shops on busy high streets.",
    ],
    source: "The Crimson Desk",
    author: "Priya Raman",
    age: 55,
  },
  {
    id: "b2",
    category: "business",
    title: "Four-day week pilot: most firms say they will keep it",
    summary:
      "Of 70 companies in a year-long trial, 58 plan to continue with reduced hours at full pay.",
    body: [
      "The pilot tracked output, sick days and staff turnover across companies ranging from design studios to logistics firms.",
      "Most participants reported stable output and a noticeable drop in resignations. Firms with shift-based work found the change harder and several reverted.",
      "Researchers will publish the full data set, including sector breakdowns, early next year.",
    ],
    source: "Northline Review",
    author: "Daniel Okafor",
    age: 240,
  },
  {
    id: "b3",
    category: "business",
    title: "Repair cafés spark a small boom in spare-parts start-ups",
    summary:
      "Demand for replacement hinges, batteries and screens is creating a new niche for small manufacturers.",
    body: [
      "As community repair events spread, organisers say their biggest bottleneck is sourcing parts rather than finding volunteers.",
      "A handful of start-ups now 3D-print discontinued plastic parts on demand or refurbish batteries for older devices, selling directly to repairers.",
      "Founders say margins are thin but customer loyalty is unusually high.",
    ],
    source: "Field & Circuit",
    author: "Hana Sato",
    age: 820,
  },
  {
    id: "b4",
    category: "business",
    title: "Regional airline bets on electric planes for short hops",
    summary: "The carrier orders twelve nine-seat electric aircraft for routes under 200 km.",
    body: [
      "The order covers island and lake routes where flights last under forty minutes and existing turboprops burn the most fuel per passenger.",
      "Charging stations will be installed at four small airfields over the next two years, partly funded by a regional transport grant.",
      "The airline expects the first electric route to open once the aircraft completes certification.",
    ],
    source: "Harbour Ledger",
    author: "Marco Ruiz",
    age: 2100,
  },

  // ── Sports ──────────────────────────────────────────────────────────────
  {
    id: "s1",
    category: "sports",
    title: "Underdog club clinches promotion on the final day",
    summary: "A 93rd-minute header sends a team with the league's smallest budget up a division.",
    body: [
      "Needing a win and help elsewhere, the club trailed at half-time before two late goals completed a comeback in front of a sold-out home crowd.",
      "The squad was assembled for a fraction of its rivals' budgets, relying on academy players and free transfers.",
      "The manager dedicated the result to the volunteers who run the club's youth programme.",
    ],
    source: "The Crimson Desk",
    author: "Kofi Mensah",
    age: 20,
  },
  {
    id: "s2",
    category: "sports",
    title: "Wheelchair basketball league doubles its number of teams",
    summary: "New franchises in six cities push the league to a full national season.",
    body: [
      "League officials announced six expansion teams, citing strong attendance and a broadcasting deal that streams every game for free.",
      "Each new franchise is paired with a local rehabilitation centre to run beginner sessions.",
      "The expanded season opens with a double-header featuring last year's finalists.",
    ],
    source: "Northline Review",
    author: "Sofia Lindqvist",
    age: 300,
  },
  {
    id: "s3",
    category: "sports",
    title: "Marathon introduces cooling stations after heat study",
    summary: "Race organisers add misting tents and move the start 90 minutes earlier.",
    body: [
      "A study of five years of race-day medical data found heat-related calls tripled when temperatures passed 24°C.",
      "Organisers responded with an earlier start, misting tents every five kilometres and extra water points in the final third of the course.",
      "Runners will also receive colour-coded heat alerts through the race app.",
    ],
    source: "Meridian Post",
    author: "Elena Petrova",
    age: 980,
  },
  {
    id: "s4",
    category: "sports",
    title: "Teen climber becomes youngest to top the national bouldering rankings",
    summary: "The 16-year-old won three of four qualifying events this season.",
    body: [
      "Her season included wins on every style of problem, from slab balance to dynamic coordination moves.",
      "Coaches credit a training plan that limits hard sessions to protect growing fingers.",
      "She now qualifies for the continental championships later this year.",
    ],
    source: "Field & Circuit",
    author: "Jonah Weiss",
    age: 2600,
  },

  // ── Politics ────────────────────────────────────────────────────────────
  {
    id: "p1",
    category: "politics",
    title: "City council opens its budget to public voting",
    summary: "Residents will decide how a $4M participatory fund is spent across eight districts.",
    body: [
      "Any resident over 14 can propose a project, from bike lanes to library hours, during a six-week submission window.",
      "Shortlisted proposals go to an online and in-person vote, with results binding on the council.",
      "Similar programmes elsewhere have funded playgrounds, tree planting and accessible transit stops.",
    ],
    source: "Harbour Ledger",
    author: "Rosa Delgado",
    age: 75,
  },
  {
    id: "p2",
    category: "politics",
    title: "Lawmakers agree on plain-language rule for public forms",
    summary: "Government forms must be readable at a secondary-school level within two years.",
    body: [
      "The cross-party bill passed with broad support after testimony that complex forms deter people from claiming benefits they qualify for.",
      "Departments must test new forms with members of the public before publishing them.",
      "An independent office will audit compliance and publish a yearly readability report.",
    ],
    source: "Northline Review",
    author: "Samuel Achebe",
    age: 420,
  },
  {
    id: "p3",
    category: "politics",
    title: "Youth parliament's climate motion heads to the main chamber",
    summary: "For the first time, a motion drafted by under-18s will receive a formal debate.",
    body: [
      "The motion calls for a school-transport strategy that would add safe cycling routes and discounted transit passes for students.",
      "Organisers say the debate is a test of whether youth assemblies can shape real legislation.",
      "The main chamber will hold the debate before the end of the session.",
    ],
    source: "The Crimson Desk",
    author: "Maya Goldberg",
    age: 1320,
  },
  {
    id: "p4",
    category: "politics",
    title: "Election commission trials accessible voting booths",
    summary: "Adjustable-height booths and audio ballots will be piloted in 40 polling stations.",
    body: [
      "The pilot follows complaints from disability advocates that many polling stations remain hard to use independently.",
      "Voters will be surveyed after casting their ballots to measure how the new equipment performs.",
      "If successful, the booths will be rolled out nationally before the next general election.",
    ],
    source: "Meridian Post",
    author: "Theo Laurent",
    age: 3000,
  },

  // ── Health ──────────────────────────────────────────────────────────────
  {
    id: "h1",
    category: "health",
    title: "Walking 7,000 steps a day linked to better sleep, study finds",
    summary: "A two-year study of 12,000 adults ties moderate daily activity to deeper sleep.",
    body: [
      "Participants wore activity trackers throughout the study, letting researchers compare step counts with measured sleep stages.",
      "Benefits levelled off above roughly 9,000 steps, suggesting consistency matters more than intensity.",
      "The authors note the study shows association, not cause, and call for controlled trials.",
    ],
    source: "Lumen Weekly",
    author: "Dr. Aisha Rahman",
    age: 95,
  },
  {
    id: "h2",
    category: "health",
    title: "Community clinics add evening hours to cut ER visits",
    summary: "A pilot keeping clinics open until 10pm reduced non-urgent emergency visits by 18%.",
    body: [
      "Extended hours let working patients see a nurse or doctor without taking time off.",
      "Hospitals in the pilot area reported shorter waiting times for genuinely urgent cases.",
      "Health officials are now reviewing whether to fund evening hours permanently.",
    ],
    source: "Harbour Ledger",
    author: "Nora Fitzgerald",
    age: 510,
  },
  {
    id: "h3",
    category: "health",
    title: "Schools that added a second recess report calmer classrooms",
    summary: "Teachers in a 30-school pilot saw fewer disruptions in afternoon lessons.",
    body: [
      "The pilot added a 15-minute outdoor break after lunch without extending the school day.",
      "Teachers logged classroom disruptions throughout the year; afternoon incidents fell by about a quarter.",
      "Researchers plan to follow the same pupils for another year to see whether results hold.",
    ],
    source: "Northline Review",
    author: "Carlos Mendes",
    age: 1750,
  },
  {
    id: "h4",
    category: "health",
    title: "Hospital replaces pagers with a secure messaging app",
    summary: "Staff report faster handovers after retiring a 30-year-old paging system.",
    body: [
      "Clinicians can now message a role, such as 'on-call surgeon', rather than a specific person.",
      "The hospital says average response time to urgent requests dropped from nine minutes to four.",
      "The system runs on hospital-issued devices to keep patient information protected.",
    ],
    source: "Lumen Weekly",
    author: "Grace Liu",
    age: 3400,
  },

  // ── Local ───────────────────────────────────────────────────────────────
  {
    id: "l1",
    category: "local",
    title: "Riverside District opens its first tool library",
    summary: "Residents can borrow drills, ladders and sewing machines with a library card.",
    body: [
      "The tool library launched with 600 items donated by residents and local businesses.",
      "Volunteers run weekend workshops on basic repairs, from fixing a bike chain to patching drywall.",
      "Organisers hope to open a second branch on the north side next year.",
    ],
    source: "Riverside Courier",
    author: "Ben Tremblay",
    age: 45,
  },
  {
    id: "l2",
    category: "local",
    title: "Old tram depot to become a covered night market",
    summary: "Food stalls, makers and live music will fill the restored building from June.",
    body: [
      "The depot has stood empty for twelve years. Restoration keeps the original iron roof and tram tracks.",
      "Half the stall spaces are reserved for first-time vendors at reduced rent.",
      "The market will open Thursday to Sunday evenings.",
    ],
    source: "Riverside Courier",
    author: "Chloé Martin",
    age: 360,
  },
  {
    id: "l3",
    category: "local",
    title: "Neighbourhood heat map shows where trees are needed most",
    summary: "Volunteers measured street temperatures on the hottest day of the year.",
    body: [
      "Teams drove fixed routes with temperature sensors at three times of day.",
      "Streets with little tree cover ran up to 6°C hotter than leafy blocks just a few streets away.",
      "The city will use the map to prioritise planting over the next five years.",
    ],
    source: "Riverside Courier",
    author: "Ali Haddad",
    age: 1100,
  },
  {
    id: "l4",
    category: "local",
    title: "Library extends hours for exam season",
    summary: "The central branch will stay open until midnight for three weeks.",
    body: [
      "Students asked for quiet late-night study space during a consultation last autumn.",
      "Extra staff and security will be in place during the extended hours.",
      "Free tea and coffee will be offered after 9pm.",
    ],
    source: "Riverside Courier",
    author: "Emma Roy",
    age: 2900,
  },

  // ── Science ─────────────────────────────────────────────────────────────
  {
    id: "sc1",
    category: "science",
    title: "Astronomers catalogue 1,200 new exoplanet candidates",
    summary: "A reanalysis of archived telescope data surfaces planets missed the first time.",
    body: [
      "Researchers applied a new signal-cleaning method to years of stored brightness measurements.",
      "Around eighty of the candidates orbit within their star's temperate zone, where liquid water could exist.",
      "Follow-up observations will be needed to confirm which candidates are real planets.",
    ],
    source: "Lumen Weekly",
    author: "Dr. Felix Adeyemi",
    age: 65,
  },
  {
    id: "sc2",
    category: "science",
    title: "Bees trained to detect crop disease by scent",
    summary: "Honeybees learned to flag a fungal infection days before leaves showed symptoms.",
    body: [
      "In controlled trials the bees extended their tongues when exposed to air from infected plants.",
      "Researchers say the approach could complement electronic sensors on large farms.",
      "Field trials with free-flying hives are planned for next season.",
    ],
    source: "Meridian Post",
    author: "Leah Novak",
    age: 700,
  },
  {
    id: "sc3",
    category: "science",
    title: "Deep-sea survey finds a coral garden at 1,000 metres",
    summary: "Remote cameras reveal a dense cold-water reef never recorded before.",
    body: [
      "The reef stretches for several kilometres along an underwater ridge.",
      "Scientists identified dozens of species, some of which may be new to science.",
      "The team is recommending the area for protection from bottom trawling.",
    ],
    source: "Northline Review",
    author: "Ravi Iyer",
    age: 1900,
  },
  {
    id: "sc4",
    category: "science",
    title: "New battery chemistry survives 20,000 charge cycles in lab",
    summary: "A sodium-based cell keeps 90% of its capacity after years of simulated use.",
    body: [
      "The cells avoid scarce metals, relying on sodium and iron compounds.",
      "Energy density is lower than lithium cells, making them better suited to grid storage than phones.",
      "The team is partnering with a manufacturer to test larger cells.",
    ],
    source: "Field & Circuit",
    author: "Mina Park",
    age: 3600,
  },

  // ── Technology ──────────────────────────────────────────────────────────
  {
    id: "t1",
    category: "technology",
    title: "Open-source screen reader adds on-device image descriptions",
    summary: "The update describes photos without sending them to the cloud.",
    body: [
      "Blind and low-vision users can now hear a short description of any image on screen.",
      "The model runs entirely on the user's computer, which contributors say was essential for privacy.",
      "Descriptions currently work in eight languages, with more planned.",
    ],
    source: "Field & Circuit",
    author: "Oskar Nilsson",
    age: 25,
  },
  {
    id: "t2",
    category: "technology",
    title: "Browser makers agree on a standard for passkey sync",
    summary: "Passkeys saved in one browser will soon move securely to another.",
    body: [
      "Until now, switching browsers often meant setting up passkeys again for every site.",
      "The shared format encrypts credentials end to end during transfer.",
      "Support is expected to ship in major browsers over the coming year.",
    ],
    source: "The Crimson Desk",
    author: "Julia Becker",
    age: 280,
  },
  {
    id: "t3",
    category: "technology",
    title: "City replaces paper parking permits with an accessible app",
    summary: "The redesign was co-built with residents who use screen readers.",
    body: [
      "Early testers flagged problems with colour contrast and time-out warnings, which were fixed before launch.",
      "Paper permits remain available for residents who prefer them.",
      "The city will publish the app's accessibility audit.",
    ],
    source: "Riverside Courier",
    author: "Yusuf Kaya",
    age: 900,
  },
  {
    id: "t4",
    category: "technology",
    title: "Student team's satellite sends back its first images",
    summary: "The shoebox-sized CubeSat was built for less than the cost of a used car.",
    body: [
      "The satellite launched as a secondary payload and began transmitting within hours.",
      "Its main mission is to test a low-cost camera for monitoring crop health.",
      "Students will operate it from a ground station on the university roof.",
    ],
    source: "Lumen Weekly",
    author: "Ana Costa",
    age: 2400,
  },

  // ── Entertainment ───────────────────────────────────────────────────────
  {
    id: "e1",
    category: "entertainment",
    title: "Silent-film festival pairs classics with live orchestras",
    summary: "Twelve screenings, each with a newly written score performed live.",
    body: [
      "Composers were given six months to write scores for restored films from the 1920s.",
      "Organisers say younger audiences have been the fastest-growing group of ticket buyers.",
      "Several scores will be released as recordings after the festival.",
    ],
    source: "Meridian Post",
    author: "Isabelle Moreau",
    age: 150,
  },
  {
    id: "e2",
    category: "entertainment",
    title: "Indie game about running a night bakery becomes a surprise hit",
    summary: "A two-person studio's cosy management game tops download charts.",
    body: [
      "Players manage dough schedules, delivery routes and neighbourhood regulars through the night.",
      "The developers say the game was inspired by the bakery below their first apartment.",
      "A free update adding seasonal recipes is planned next month.",
    ],
    source: "Field & Circuit",
    author: "Kenji Mori",
    age: 450,
  },
  {
    id: "e3",
    category: "entertainment",
    title: "Community theatre stages a play written by its audience",
    summary: "Scenes were crowdsourced over six months of open writing nights.",
    body: [
      "More than 200 residents contributed lines, characters or plot twists.",
      "A small team of volunteer editors stitched the material into a two-act comedy.",
      "Every performance includes a short scene the audience votes on at the interval.",
    ],
    source: "Riverside Courier",
    author: "Olivia Grant",
    age: 1250,
  },
  {
    id: "e4",
    category: "entertainment",
    title: "Streaming service adds audio description to its whole back catalogue",
    summary: "Every film and episode now includes a narrated track for blind viewers.",
    body: [
      "The service worked with voice actors and describers over two years to finish the project.",
      "Viewers can switch description on from the same menu used for subtitles.",
      "Advocacy groups called the move a benchmark for the industry.",
    ],
    source: "The Crimson Desk",
    author: "Ethan Brooks",
    age: 3300,
  },
];
