# IDF Unit Showdown

A projector game for a 45-minute high school Hebrew class. It's built for students who know little about Israel or the IDF. Teams compete on trivia, history, army slang and mystery units, earn power-up cards, and finish with a no-points discussion of current events. Students don't need phones. The teacher runs everything from one laptop.

- The whole game is one file, `index.html`. It has no build step and no backend, and it saves nothing between sessions.
- Live at `https://edenbaredenbar-wq.github.io/idf-showdown/`. You can also double-click `index.html` to open it offline; the stencil fonts load from Google Fonts, and without internet a standard font is used instead.
- Sounds are made by the browser. Press **M** to mute.

## How to run it

1. Open the link in Chrome or Edge and press **F** for full screen.
2. Choose **2–6 teams** and type their names (defaults: Falafel, Bamba, Shakshuka, Krembo, Sabich, Hummus). 4–5 teams of 4–6 students works best.
3. Untick any round you want to skip. The lesson plan shows the total minutes.
4. Press **Enter** to start.

## The rounds

| # | Round | Time | How it works | Points |
|---|---|---|---|---|
| | **Briefing** | 3 min | 5 slides: what Tzahal is, who serves at 18, the three branches, the rank ladder, the power-up cards. | none |
| 1 | **Boot Camp Trivia** | 9 min | Teams take turns on multiple-choice questions. Click the answer the team's captain says, or press A–D. If they're wrong, the next team can steal. | +100, steal +50 |
| 2 | **Timeline** | 6 min | Each team gets its own 4 history events (1948 to 2023) with hints. The captain says the order and you tap the cards (or press 1–4), then **Lock in**. | +50 per card in the right place, +100 bonus for all 4 |
| 3 | **Army Slang** | 8 min | An IDF slang word in Hebrew (jobnik, fashla, hamshush, pazam…). Every team holds up 1–4 fingers on "SHOW!". After the reveal, click the teams that were right, plus any team that uses the word correctly in a sentence. | +100 right, +50 sentence |
| 4 | **Who Am I?** | 7 min | Turn-based, like Trivia. Each team gets its own mystery: a lineup of 8 "suspects" (units and systems), each with a picture, name and one-line description, plus 4 clues from hard to easy. Students don't need to know any units beforehand; they read the board and use the clues to rule suspects out. After each clue the team on duty either guesses (click the suspect it names, or press 1–8) or asks for the next clue (Space). A wrong guess is crossed off the board, and the next team can steal for half the points. **R** passes to the steal; **W** is a wrong answer that isn't on the board. | 400 / 300 / 200 / 100, steal: half |
| 5 | **Real or Fake?** | 5 min | A surprising IDF fact. Teams show thumbs up (real) or down (fake). Press **R**, then click the teams that were right. | +100 each |
| | **Think Tank** | 5 min | Four topics: October 7, the Haredi draft, women in combat, being drafted at 18. Each has a short factual background and a discussion question; two show "Some say / Others say". Press **T** for a 90-second team talk. | none |
| | **Awards** | 2 min | Podium with ranks, confetti and an exit ticket. | |

Every answer is followed by a **Field Note**, a short fact to read aloud. In Army Slang there's also an example sentence.

Each game draws different questions: Trivia uses 2–5 questions per team, depending on the number of teams, out of 20; Army Slang uses 8 of 13 words; Who Am I? gives every team the same number of mysteries (1–3 each, depending on the number of teams) out of 10; Real or Fake? uses 8 of 24 facts; Timeline draws from 16 events.

## Ranks

Teams start as a *Tiron* (recruit) and get promoted as they score, with a bugle call: Turai (250), Rav-Turai (600), Samal (1,000), Segen (1,500), Seren (2,000), Rav-Seren (2,600), Aluf (3,200).

## Power-up cards

At the end of each scoring round, the team that scored the most points in that round draws a random card (on a tie, every tied team draws one). Teams never start with cards. A team's cards appear on its scoreboard tile; **click a card to play it**. The game explains when a card can't be played yet.

| Card | What it does | When |
|---|---|---|
| 🪖 **Miluim** (מילואים) | The team's next points are doubled. | Any time |
| 📡 **8200 Intel** (מודיעין) | Trivia: removes 2 wrong answers. Timeline: places the earliest event. Slang / Real or Fake: the team counts as right. Who Am I: crosses out 3 wrong suspects. | Trivia, Timeline and Who Am I: on your own turn (or when stealing). Others: before the reveal. |
| ⚡ **Raid** (פשיטה) | Steal up to 100 points from any team. | Any time, including right before the awards |
| 🛡️ **Iron Dome** (כיפת ברזל) | When another team raids you, the game asks whether you want to intercept. Intercepting cancels the raid and uses up both cards. | Automatic |
| 🏖️ **Hamshush** (חמשוש) | Skip the current question and get a new one. | Trivia, Timeline and Who Am I: on your own turn. Others: before the reveal. |

## Host keys

| Key | What it does |
|---|---|
| **Space** / Enter | The big yellow button: next slide, question, clue, card or round |
| **A–D** | Trivia: the answer the team chose |
| **1–4** | Timeline: tap the event cards in the team's order |
| **1–6** | Slang / Real or Fake: mark the teams that were right |
| **R** | Reveal the answer · no steal · Who Am I: pass |
| **1–8** | Who Am I: the suspect the team names |
| **W** | Who Am I: a wrong answer that isn't on the board |
| **T** | Restart the countdown · Think Tank: start the 90-second team talk |
| **U** | Undo the last action (press again to keep undoing). Card plays can be undone too. |
| **F** | Full screen |
| **M** | Sound on / off |
| **H** | Show the keys |

Hover over a team's score to add or take away 50 points by hand. **Rounds** in the top bar jumps to any round (scores and cards are kept).

## 45-minute teaching script

The clock in the top bar counts the class time and turns red when you're behind schedule for the current round.

| Class time | What happens | Teacher says / does |
|---|---|---|
| **0:00–3:00** | Teams + Briefing. | "In Israel, most 18-year-olds go from graduation straight into the army. Today you're the recruits." Point out the card slide: "Win a round, earn a power-up." |
| **3:00–12:00** | Boot Camp Trivia. | Only the captain's answer counts. Read every Field Note aloud. The first card drop happens at the end. |
| **12:00–18:00** | Timeline. | Give each team about a minute. After each reveal, ask: "Which of these surprised you?" |
| **18:00–26:00** | Army Slang. | Have the whole class read each Hebrew word aloud before answering. After the reveal, invite a sentence: "Who can use *fashla* in a sentence?" |
| **26:00–33:00** | Who Am I? | On the first mystery, read the 8 suspects aloud together. Then build suspense: "It's worth 400 right now… who's brave?" |
| **33:00–38:00** | Real or Fake? | Before the reveal, let one team explain its vote. |
| **38:00–43:00** | Think Tank. | Pick 1–2 of the 4 topics (Space skips a topic). Read the background aloud, press **T**, then take 2–3 short answers. Set the tone: "There's no right answer here, and we listen to each other." |
| **43:00–45:00** | Awards + exit ticket. | Teams with a Raid card get one last chance before you open the awards. Exit ticket: "Teach someone one army slang word tonight." |

**Running late?** Open **Rounds** and jump ahead, or untick a round on the setup screen next time. Real or Fake? and Think Tank are the easiest to shorten.

## A note on the Think Tank

The October 7 background is factual and short, and it acknowledges that the war in Gaza caused great loss of life and is debated. Read the four topics before class and choose the ones that fit your students. The text is in `CONTENT.thinktank` if you want to change it.

## Editing the content

Open `index.html` in a text editor. The `CONTENT` object near the top of the script holds every question:

- `trivia`: `q`, `opts` (the **first** option is the right answer; the game shuffles them on screen) and `note`.
- `timeline`: `y` (the year), `t` (the event), `hint` and `note`. Each event needs a different year.
- `slang`: `heb` (the Hebrew word), `tr` (how to say it), `opts` (first one is right), `note` and `ex` (an example sentence).
- `whoami`: `answer` (full name shown on the reveal), `name` and `tag` (the short name and description on the suspect board), `icon`, 4 `clues` from hardest to easiest, and `note`. Each board shows the answer plus 7 others from this list, so keep at least 8 entries.
- `realfake`: `s` (the statement), `real` (`true` or `false`) and `note`.
- `thinktank`: `title`, `primer` (the background), `prompt` and optional `sides` (two short opposing views).

Below the content you can change the cards (`CARDS`), the rank thresholds (`RANKS`), the round times (`ROUNDS`), the countdowns (`TRIVIA_SECONDS`, `TIMELINE_SECONDS`, `TALK_SECONDS`…) and how many questions each round uses (`SLANG_PER_GAME`, `REALFAKE_PER_GAME`).

Use curly quotes (“ ” ‘ ’) inside text. A plain `"` inside a string breaks the file. If the page goes blank after an edit, undo your last change.
