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
    3: { title: "Who Am I?",             rules: "Clues come one at a time — raise your hand to guess! Right after clue 1 = 3 pts · clue 2 = 2 pts · clue 3 = 1 pt. Wrong guess = you're out for that person!" },
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
      answer: true,  explain: "Everyone just calls it “The Bean”." },
    { statement: "Chicago's flag has five stars.",
      answer: false, explain: "It has four red stars — look at the background of this game!" },
    { statement: "A huge fire burned down a big part of Chicago in 1871.",
      answer: true,  explain: "The Great Chicago Fire burned for about two days." },
    { statement: "Chicago is the biggest city in the United States.",
      answer: false, explain: "It's #3, after New York and Los Angeles." },
    { statement: "The world's first skyscraper is often said to have been built in Chicago.",
      answer: true,  explain: "The Home Insurance Building (1885) is often called the first." },
    { statement: "Lake Michigan, right next to Chicago, is salt water.",
      answer: false, explain: "It's one of the Great Lakes — all fresh water." },
    { statement: "The Chicago Cubs play baseball at Wrigley Field.",
      answer: true,  explain: "They've played there since 1916." },
    { statement: "The tallest building in the US is in Chicago.",
      answer: false, explain: "That's One World Trade Center in New York." },
    { statement: "Chicago's trains are called the “L” because they run above the streets.",
      answer: true,  explain: "“L” is short for “elevated” — some lines also go underground." }
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
      { file: "chicago.jpg",  answer: "chicago", place: "Lake Shore Drive & the Lake Michigan beaches" },
      { file: "israel2.webp", answer: "israel",  place: "Tel Aviv beaches & promenade" },
      { file: "israel3.webp", answer: "israel",  place: "Tel Aviv skyline at sunset" },
      { file: "chicago3.jpg", answer: "chicago", place: "Chicago Riverwalk & the Wrigley Building" },
      { file: "chicago4.jpg", answer: "chicago", place: "Cloud Gate (“The Bean”), Millennium Park" },
      { file: "israel4.jpg",  answer: "israel",  place: "Jerusalem's Old City & the Dome of the Rock" }
    ]
  },

  /* ---------- ROUND 3: Who Am I? ----------
     Famous people with a Chicago connection. Clues go from hardest to easiest.
     name:  the answer shown on reveal       emoji: shown next to the name
     clues: exactly 3 clues (clue 1 = 3 points, clue 2 = 2 points, clue 3 = 1 point)
     fact:  optional extra line shown with the answer */
  round3: [
    { name: "Walt Disney", emoji: "🐭",
      clues: ["I was born in Chicago in 1901.",
              "I created a famous cartoon mouse.",
              "My name is on theme parks all over the world."],
      fact: "Born in Chicago's Hermosa neighborhood." },
    { name: "Michael Jordan", emoji: "🏀",
      clues: ["There's a bronze statue of me at the United Center, Chicago's basketball arena.",
              "I won six championships with the Chicago Bulls.",
              "My sneakers are called “Air Jordan”."],
      fact: "6 NBA titles, all with the Bulls (1991–93 and 1996–98)." },
    { name: "Harrison Ford", emoji: "🤠",
      clues: ["I was born in Chicago in 1942.",
              "Before I was famous, I worked as a carpenter.",
              "I played Han Solo in Star Wars and Indiana Jones."],
      fact: "Born in Chicago on July 13, 1942." },
    { name: "Abraham Lincoln", emoji: "🎩",
      clues: ["I was picked to run for president at a big meeting in Chicago in 1860.",
              "Chicago's huge Lincoln Park is named after me.",
              "I was the 16th U.S. President and I'm on the $5 bill."],
      fact: "Illinois license plates say “Land of Lincoln”." },
    { name: "Al Capone", emoji: "🕴️",
      clues: ["I finally went to prison… for not paying my taxes!",
              "My nickname was “Scarface”.",
              "I was Chicago's most famous gangster in the 1920s."],
      fact: "He was later sent to Alcatraz, the famous island prison." },
    { name: "Michelle Obama", emoji: "📖",
      clues: ["I grew up on Chicago's South Side.",
              "My memoir is called “Becoming”.",
              "I was First Lady of the United States."],
      fact: "She and Barack met at a Chicago law firm in 1989." },
    { name: "Oprah Winfrey", emoji: "📺",
      clues: ["My TV talk show was filmed in Chicago for 25 years.",
              "I once gave everyone in my studio audience a new car.",
              "My last name is Winfrey."],
      fact: "“The Oprah Winfrey Show” ran from Chicago, 1986–2011." },
    { name: "Hillary Clinton", emoji: "🗳️",
      clues: ["I was born in Chicago in 1947.",
              "I was the U.S. Secretary of State.",
              "I ran for president in 2016 against Donald Trump."],
      fact: "She grew up in Park Ridge, just outside Chicago." },
    { name: "Barack Obama", emoji: "🇺🇸",
      clues: ["I taught law at the University of Chicago.",
              "I was a U.S. senator from Illinois.",
              "I was the 44th President of the United States."],
      fact: "He worked as a community organizer on Chicago's South Side." }
  ],

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
