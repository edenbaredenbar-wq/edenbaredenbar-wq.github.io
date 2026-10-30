# Israeli Hitster

A projector music game for one class (middle school to grade 12, 15–30 students), based on the card game Hitster. Teams hear an Israeli song from 1958 to 2025 and place it on their own timeline. Students don't use phones; the host runs everything from one laptop.

- The whole game is one file, `index.html`. It has no build step. Music streams from YouTube, so the classroom needs internet access to YouTube.
- Live at `https://edenbaredenbar-wq.github.io/israeli-hitster/`. Open it from this web address rather than as a local file, because YouTube may refuse to play videos embedded in a page opened from a file (error 153).
- 57 built-in songs, 21 of them Eurovision entries. Each song has a year, English and Hebrew titles, artist, YouTube clip, start time and a short story card.
- 24 built-in history cards, from the founding of Tel Aviv (1909) to the Abraham Accords (2020).

## How to host

1. Open the link in Chrome, press **F** for fullscreen, choose 2–6 teams and **Quick** (first to 4 songs) or **Full** (first to 7, with a Eurovision Round), then **Start game**.
2. Press **Space** to play the 20-second clip. Only the music plays; the title, artist and video stay hidden. If the team names the artist or title, click **Named it ✓** to give them a token. If they also say the exact year before the reveal, click **said exactly … ✓** on the reveal screen for another token.
3. Click the gap the placer chooses (or press its number key), then press **Enter** to reveal.
4. If the spot is wrong, the next team can steal: pick a gap on its own timeline and press **Enter**, or click **No steal**. Read the story card aloud.
5. Press **N** for the next turn. **End game now** is always in the top bar.

## Extras (switches on the setup screen, both on by default)

**Twist cards.** Every 3rd turn starts with a surprise rule, shown before the music plays:

| Twist | What happens |
|---|---|
| **Exact year** | The exact-year bonus on the reveal screen is worth 2 tokens instead of 1 this turn. |
| **Double or nothing** | The team may bet 1 token. Right spot: the token comes back plus 2 more. Wrong spot: the token is lost. Only drawn when the team has a token. |
| **Lightning clip** | Only 5 seconds of music. No replay and no +10s. |
| **Open steal** | If the team misses, any team can steal. Click the team that raised a hand first. Only with 3 or more teams. |
| **Hebrew word** | The reveal teaches one Hebrew word from the song title. Words collect at the bottom of the scoreboard; when a team uses one correctly later, click it and pick the team: +1 token. |

**History cards.** About 1 card in 4 is a moment in Israeli history instead of a song. There's no music: the screen shows what happened, and teams place it on their timeline by year. The year and a short story appear on the reveal. History cards are never drawn during the Eurovision Round, and never twice in a row.

## Host keys

| Key | What it does |
|---|---|
| **Space** | Play / pause the clip |
| **R** | Replay the clip from its start |
| **T** | Jump ahead 10 seconds |
| **1–9**, ← → | Choose a gap on the timeline |
| **Enter** | Reveal |
| **N** | Next turn |
| **F** | Fullscreen |
| **?** | Show the keys |

## Editing songs and history cards

The **Songs** screen lists songs and history cards; the **Type** column switches a row between them. A history card needs a year, a title (the text shown before the reveal) and a story. The **Hebrew word** column sets the word taught by the Hebrew word twist (format: `זהב · zahav = gold`); if it's empty, the game uses a common word such as *toda* or *yalla*.

The **Songs** screen shows every title and artist, so blank the projector before opening it during a game. Edits are saved in the browser you use (localStorage), not on this site. Use **Export JSON** to back them up and **Import JSON** to load them on another computer. Unverified years show ⚠ in the editor only. Clip start times are estimates; use **▶ Test** to check them.
