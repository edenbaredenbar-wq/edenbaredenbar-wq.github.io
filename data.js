/* =====================================================================
   CHICAGO RUSH — game content
   ---------------------------------------------------------------------
   Edit anything in this file with a plain text editor, save, and reload
   the HTML page. Keep the quotes, commas and brackets as they are.
   ===================================================================== */

window.GAME = {

  /* ---------- Round titles + one-line rules (shown on each title screen) ---------- */
  rounds: {
    1: { title: "Chicago or Not?",       rules: "TRUE or FALSE? Agree as a team — one answer per team!" },
    2: { title: "Chicago or Israel?",    rules: "Watch the photo zoom out. On the countdown, shout CHICAGO or ISRAEL!" },
    3: { title: "Build the Chicago Dog", rules: "Pick the numbers of the real Chicago-dog toppings in 60 seconds. +1 per correct, −3 for ketchup!" },
    4: { title: "Skyscraper Build",      rules: "Build the tallest FREESTANDING tower using only paper and tape. 4 minutes!" },
    5: { title: "Closest Number Wins",   rules: "Write down your best guess. The closest team wins the point!" }
  },

  /* ---------- ROUND 1: Chicago or Not? (true / false) ---------- */
  round1: [
    { statement: "The Chicago River is dyed green every St. Patrick's Day.",
      answer: true,  explain: "Every year since 1962 — the whole river turns bright green." },
    { statement: "Chicago is the capital of Illinois.",
      answer: false, explain: "It's Springfield." },
    { statement: "Chicago is the windiest city in the US.",
      answer: false, explain: "The “Windy City” nickname may come from loud-talking politicians." },
    { statement: "Engineers reversed the Chicago River so it flows backward.",
      answer: true,  explain: "In 1900 — it now flows away from Lake Michigan." },
    { statement: "The Ferris wheel debuted in Chicago.",
      answer: true,  explain: "At the 1893 World's Fair." },
    { statement: "Chicago has more people than Israel.",
      answer: false, explain: "About 2.7 million vs. about 10 million." },
    { statement: "The Bean's official name is “Cloud Gate”.",
      answer: true,  explain: "Everyone just calls it “The Bean”." }
  ],

  /* ---------- ROUND 2: Chicago or Israel? ----------
     Put your photos in the "photos" folder next to this file.
     file:   the photo's file name inside /photos (e.g. "skyline.jpg")
     answer: "chicago" or "israel"
     place:  the exact place name shown on reveal
     A friendly placeholder is shown automatically if a file is missing. */
  round2: {
    zoomStart: 10,     // starting zoom (10 = 10x)
    zoomSeconds: 15,   // how long the zoom-out takes
    photos: [
      { file: "photo1.jpg", answer: "chicago", place: "PLACE NAME 1 — edit in data.js" },
      { file: "photo2.jpg", answer: "israel",  place: "PLACE NAME 2 — edit in data.js" },
      { file: "photo3.jpg", answer: "chicago", place: "PLACE NAME 3 — edit in data.js" },
      { file: "photo4.jpg", answer: "israel",  place: "PLACE NAME 4 — edit in data.js" },
      { file: "photo5.jpg", answer: "chicago", place: "PLACE NAME 5 — edit in data.js" },
      { file: "photo6.jpg", answer: "israel",  place: "PLACE NAME 6 — edit in data.js" },
      { file: "photo7.jpg", answer: "chicago", place: "PLACE NAME 7 — edit in data.js" },
      { file: "photo8.jpg", answer: "israel",  place: "PLACE NAME 8 — edit in data.js" }
    ]
  },

  /* ---------- ROUND 3: Build the Chicago Dog ----------
     Cards are numbered in this order and revealed in this order.
     correct: true = belongs on a Chicago dog. forbidden: true = the FORBIDDEN! animation. */
  round3: {
    seconds: 60,
    toppings: [
      { name: "Yellow mustard",       emoji: "🟡", correct: true  },
      { name: "Mayonnaise",           emoji: "🥚", correct: false },
      { name: "Chopped white onions", emoji: "🧅", correct: true  },
      { name: "Dill pickle spear",    emoji: "🥒", correct: true  },
      { name: "Cheese",               emoji: "🧀", correct: false },
      { name: "Tomato slices",        emoji: "🍅", correct: true  },
      { name: "Bright green relish",  emoji: "🟢", correct: true  },
      { name: "Ketchup",              emoji: "🥫", correct: false, forbidden: true },
      { name: "Sport peppers",        emoji: "🌶️", correct: true  },
      { name: "Hummus",               emoji: "🥣", correct: false },
      { name: "Celery salt",          emoji: "🧂", correct: true  },
      { name: "Poppy seed bun",       emoji: "🍞", correct: true  }
    ]
  },

  /* ---------- ROUND 4: Skyscraper Build ---------- */
  round4: {
    seconds: 240,
    details: "Paper + tape only · It must stand on its own · Tallest tower at the buzzer wins"
  },

  /* ---------- ROUND 5: Closest Number Wins ----------
     value: the number to count up to. decimals: digits after the point.
     prefix / suffix: text shown before / after the number. note: optional extra line. */
  round5: [
    { question: "How many floors does Willis Tower have?",
      value: 108, decimals: 0, prefix: "", suffix: " floors" },
    { question: "How many years did the Cubs go without winning the World Series?",
      value: 108, decimals: 0, prefix: "", suffix: " years", note: "Same number as the floors!" },
    { question: "Coldest temperature ever recorded in Chicago, in Celsius?",
      value: -33, decimals: 0, prefix: "about ", suffix: "°C" },
    { question: "How many people live in Chicago?",
      value: 2.7, decimals: 1, prefix: "about ", suffix: " million" },
    { question: "How tall is Willis Tower in meters?",
      value: 442, decimals: 0, prefix: "", suffix: " m" }
  ]
};
