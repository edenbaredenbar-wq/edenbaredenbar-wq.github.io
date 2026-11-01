# IDF Unit Showdown

A projector game for one 30-minute class of American 7th graders. Teams compete to learn about the Israel Defense Forces: its branches, units, berets and ranks. Students don't need phones. The teacher runs everything from one laptop.

- The whole game is one file, `index.html`. It has no build step and no backend, and it saves nothing between sessions.
- Live at `https://edenbaredenbar-wq.github.io/idf-showdown/`. You can also double-click `index.html` to open it offline; the stencil fonts load from Google Fonts, and without internet a standard font is used instead.
- Sounds are made by the browser. Press **M** to mute.

## How to run it

1. Open the link in Chrome or Edge and press **F** for full screen.
2. Choose **2–6 teams** and type their names (defaults: Falafel, Bamba, Shakshuka, Krembo, Sabich, Hummus).
3. Untick any round you want to skip. The lesson plan shows the total minutes.
4. Press **Enter** to start.

Teams start as a *Tiron* (recruit) and get promoted as they score: Turai, Rav-Turai, Samal, Segen, Seren, Rav-Seren, Aluf. A bugle plays at every promotion.

## The rounds

| Round | Time | How it works | Points |
|---|---|---|---|
| **Briefing** | 2 min | 4 slides: what Tzahal is, who serves at 18, the three branches, the rank ladder. | none |
| **Boot Camp Trivia** | 8 min | Teams take turns on multiple-choice questions. Click the answer the team says (or press A–D). If they're wrong, the next team can steal. | +100, steal +50 |
| **Beret Lineup** | 4 min | A beret appears with 4 units. All teams decide quietly, then hold up 1–4 fingers on "SHOW!". Press **R**, then click every team that was right. | +100 each |
| **Who Am I?** | 6 min | A mystery unit with 4 clues, hard to easy. Teams raise hands; click the first team, then **C** (correct) or **W** (wrong; that team is out for this card and the next clue appears). | 400 / 300 / 200 / 100 |
| **Commander Says** | 3 min | *HaMefaked omer*, the Israeli Simon Says. One player per team stands. Commands appear in Hebrew and English (Dom!, Noach!, Yamina pne!…) plus silly ones (tank noise, sniff like an Oketz dog). Click a team to put its player out. | +300 to the last one standing |
| **Real or Fake?** | 4 min | A strange IDF fact. All teams show thumbs up (real) or down (fake). Press **R**, click the teams that were right. | +100 each |
| **Awards** | 2 min | Podium with ranks, confetti and an exit question. | |

Every answer is followed by a **Field Note**, a one- or two-sentence fact. Read it aloud; that's the learning moment.

## Host keys

| Key | What it does |
|---|---|
| **Space** / Enter | Next step: next slide, next question, next clue, next command |
| **A–D** | Trivia: the answer the team chose |
| **R** | Reveal the answer · no steal · nobody knows |
| **1–6** | Pick a team: who was right, who buzzed first, who's out |
| **C** / **W** | Who Am I: correct / wrong |
| **T** | Restart the countdown |
| **U** | Undo the last action (press again to keep undoing) |
| **F** | Full screen |
| **M** | Sound on / off |
| **H** | Show the keys |

Every key also has a button on screen. Hover over a team's score to add or take away 50 points by hand. **Rounds** in the top bar jumps to any round; scores are kept.

## 30-minute teaching script

The clock in the top bar counts the class time and turns red when you're behind schedule for the current round.

| Class time | What happens | Teacher says / does |
|---|---|---|
| **0:00–2:00** | Split into teams, start, Briefing. | "Imagine graduating high school and going straight into the army. That's what most 18-year-olds in Israel do." |
| **2:00–10:00** | Boot Camp Trivia. | Keep it quick: question, answer, Field Note, Space. Only the team captain's answer counts. |
| **10:00–14:00** | Beret Lineup. | Count down "3, 2, 1, SHOW!" Nobody changes fingers after the show. |
| **14:00–20:00** | Who Am I? | Hype the points: "It's worth 400 right now… who's brave?" |
| **20:00–23:00** | Commander Says. | Students stand at the front. Read each command aloud in Hebrew first. Go faster as fewer players remain. Press "Time's up" to end with several winners. |
| **23:00–27:00** | Real or Fake? | Let one team explain its vote before you reveal. |
| **27:00–30:00** | Awards + exit question. | "Which IDF unit would you want to visit for a day, and why? Name one thing you learned today." |

**Running late?** Open **Rounds** and jump ahead, or untick a round on the setup screen next time.

## Editing the content

Open `index.html` in a text editor. The `CONTENT` object near the top of the script holds every question:

- `trivia`: `q`, `opts` (the **first** option is the right answer; the game shuffles them on screen) and `note`.
- `berets`: `unit`, `color` (a hex color, or `"camo"`) and `note`.
- `whoami`: `answer`, `icon`, 4 `clues` from hardest to easiest, and `note`.
- `commands`: `tr` (the big text), `en` (the explanation) and an optional Hebrew `heb`.
- `realfake`: `s` (the statement), `real` (`true` or `false`) and `note`.

How many questions each round uses is set just below the content: `BERETS_PER_GAME`, `REALFAKE_PER_GAME`, `WHOAMI_PER_GAME`, and the countdowns `TRIVIA_SECONDS` and `SHOW_SECONDS`. Trivia uses 2–4 questions per team, depending on the number of teams.

Use curly quotes (“ ” ‘ ’) inside text. A plain `"` inside a string breaks the file. If the page goes blank after an edit, undo your last change.
