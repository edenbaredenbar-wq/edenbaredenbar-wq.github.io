# ★ Chicago Rush ★

A projector game show for a 30-minute team competition: 4 teams, 5 rounds, and one presenter on a laptop.

- The whole game is `2026-10-05-chicago-rush.html`. All the questions and answers are in `data.js`, and the Round 2 photos go in `photos/`.
- No internet needed, nothing to install, and no build step.
- It is also published at `https://edenbaredenbar-wq.github.io/chicago-rush/2026-10-05-chicago-rush.html`.

```
chicago-rush/
├── 2026-10-05-chicago-rush.html   ← double-click this to play
├── data.js                        ← all game content (edit with any text editor)
├── photos/                        ← Round 2 photos go here
│   └── README.txt
└── README.md                      ← this file
```

Keep these files together in one folder. The game won't load without `data.js` next to it.

---

## Before the event

1. **Add the 8 photos for Round 2.**
   - Copy them into `photos/`. JPG, PNG and WEBP all work.
   - Open `data.js`, find `round2`, and fill in each photo's `file`, its `answer` (`"chicago"` or `"israel"`) and its `place` name. File names must match exactly, including capital letters.
   - A missing photo shows a "PHOTO COMING SOON" card instead of breaking the game.
2. **Rehearse once.** Then press **Home** and click **Reset scores to 0**. Team names and scores are saved in the browser, so leftovers from a rehearsal will still be there.

## On the day

1. Double-click `2026-10-05-chicago-rush.html`. Chrome or Edge is recommended.
2. Plug in the projector and press **F11** for fullscreen (on a Mac: Ctrl + Cmd + F).
3. Type the 4 team names, click a color for each team, and press **Enter**.
4. Press **→** to move through the game and **Space** to reveal answers.

Sounds start after your first key press or click, because browsers block sound until then. Press **M** to mute.

## Controls

Press **H** at any time to show all the shortcuts on screen.

| Key | What it does |
|---|---|
| **→** / **←** | Next / previous screen |
| **Space** | Reveal the answer, the next card, or the winner |
| **Home** | Back to team setup |
| **H** | Show or hide help |
| **M** | Sound on or off |

**Scoring.** The +1 / −1 / +3 / −3 buttons on each team's panel do the same thing.

| Team | +1 | −1 | +3 | −3 |
|---|---|---|---|---|
| 1 | `1` | Shift + `1` | `A` | Shift + `A` |
| 2 | `2` | Shift + `2` | `S` | Shift + `S` |
| 3 | `3` | Shift + `3` | `D` | Shift + `D` |
| 4 | `4` | Shift + `4` | `F` | Shift + `F` |

**Round controls**

| Round | Keys |
|---|---|
| 1 · Chicago or Not? | **Space** shows TRUE or FALSE and the explanation |
| 2 · Chicago or Israel? | **C** runs the countdown "3, 2, 1, SHOW YOUR ANSWER!" · **Space** shows the full photo and the answer · **P** pauses or resumes the zoom · **Z** restarts the zoom |
| 3 · Build the Chicago Dog | **T** starts or pauses the 60-second timer · **R** resets it · **Space** reveals the next card |
| 4 · Skyscraper Build | **T** starts or pauses the 4-minute timer · **R** resets it |
| 5 · Closest Number Wins | **Space** counts up to the answer |
| Final | **Space** plays a drumroll, then shows the winner and confetti |

## Editing the content

Open `data.js` in any text editor, such as Notepad or TextEdit, save it, and reload the page. Change only the text inside the quotes, and keep the commas and brackets as they are.
