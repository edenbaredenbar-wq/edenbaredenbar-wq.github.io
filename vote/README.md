# 🗳️ USA or Israel? A live class vote

A live voting game for a Hebrew class lesson that compares elections in the US and in Israel.

- **Host screen** (your laptop, on the projector): `https://edenbaredenbar-wq.github.io/vote/host.html`
- **Student phones**: `https://edenbaredenbar-wq.github.io/vote`. Students scan the QR code or type the 4-letter room code. They don't need names or logins, and every vote is anonymous.

**Round 1, "USA or Israel?"** You show a statement, students tap 🇺🇸 USA, 🇮🇱 Israel or Both, and then you reveal an animated chart, the right answer, and a short explanation with a Hebrew word.

**Round 2, "Same votes, different winner"** Students vote once on a topic (best fast food chain by default). Then the same votes are counted two ways:
1. **The American way**: the option with the most votes wins all the seats.
2. **The Israeli way**: the votes become a 20-seat parliament (D'Hondt method, 10% threshold).
3. **Build a coalition**: you tap parties until they reach 11 of 20 seats, and then you get confetti and **קואליציה!**

---

## One-time setup (about 15 minutes)

The app is hosted for free on GitHub Pages (the same place as your other games). The phones talk to your screen through **Firebase**, Google's free real-time database. You only need to do Firebase once.

### Step 1: Create the free Firebase database

1. Go to **https://console.firebase.google.com** and sign in with any Google account.
2. Click **Create a project** (it might say "Get started" or "Add project").
   - Name: `class-vote` (any name works). Click **Continue**.
   - If it asks about Gemini or Google Analytics, turn them **off**. You don't need them.
   - Click **Create project**, wait, then click **Continue**.
3. Create the database **first** (this order matters):
   - In the left menu, find **Realtime Database**. It may be under **Build** or **Databases & Storage**, or you can type "Realtime Database" into the search bar at the top.
   - Click **Create Database**.
   - Location: choose **United States** and click **Next**.
   - Choose **Start in locked mode** and click **Enable**.
4. Set the rules so the phones are allowed to vote:
   - On the Realtime Database page, open the **Rules** tab.
   - Delete everything in the box and paste in this:
     ```json
     {
       "rules": {
         "rooms": {
           "$room": {
             ".read": true,
             ".write": true
           }
         }
       }
     }
     ```
   - Click **Publish**.
5. Get your connection settings:
   - Click the **⚙️ gear** next to "Project Overview" (top left), then **Project settings**.
   - Scroll down to **Your apps** and click the **`</>`** (Web) icon.
   - App nickname: `class vote`. Leave "Firebase Hosting" **unchecked**. Click **Register app**.
   - You'll see some code. Copy **only** the part that looks like this (yours will have real values):
     ```js
     const firebaseConfig = {
       apiKey: "AIza...",
       authDomain: "class-vote-xxxx.firebaseapp.com",
       databaseURL: "https://class-vote-xxxx-default-rtdb.firebaseio.com",
       projectId: "class-vote-xxxx",
       storageBucket: "...",
       messagingSenderId: "...",
       appId: "..."
     };
     ```
   - Check that there's a **`databaseURL`** line. If it's missing, you registered the app before you created the database. Close the box, refresh the Project settings page, and copy the config again from **Your apps → SDK setup and configuration → Config**.

> These values aren't a password, so it's safe for them to sit in a public GitHub repo. The rules from Step 4 decide what's allowed.

### Step 2: Put your settings into the app

**Easiest:** paste your `firebaseConfig` block into the chat with Claude and ask for it to be added.

**Or do it yourself on GitHub:**
1. Open https://github.com/edenbaredenbar-wq/edenbaredenbar-wq.github.io and click into the `vote` folder, then `config.js`.
2. Click the ✏️ **pencil** (Edit this file).
3. Select the whole `const firebaseConfig = { ... };` block and paste yours over it.
4. Click **Commit changes…** and then **Commit changes** again.

### Step 3: Publish

GitHub Pages republishes the site by itself a minute or two after any change lands on the `main` branch. To check, open the host screen. The top bar should show a green **● Live**. If it shows a yellow **● Demo** banner, Firebase isn't connected yet: re-check Step 2, then hard-refresh with **Ctrl+Shift+R** (Mac: **Cmd+Shift+R**).

### Step 4: Test with your own phone

1. On your laptop, open `https://edenbaredenbar-wq.github.io/vote/host.html`.
2. Scan the QR code with your phone. The laptop should say **1 student joined**.
3. Click **Round 1**, tap an answer on your phone, and watch the counter go up. Then press **Space** to reveal.
4. When you're done, go back with 🏠 and click **↺ Reset everything** so the real class starts fresh.

---

## Running the lesson

1. Open the host screen on the classroom computer and press **F** (or ⛶) for full screen.
2. Students scan the QR code. The big counter shows how many have joined. Late arrivals can click the **Join** pill in the top bar to bring the QR code back.
3. **Round 1:** press **Space** to reveal each answer and **→** for the next question (**←** goes back).
4. **Round 2:** click **Open voting**, wait for the votes to come in, then click **Close voting** and move through the three result screens with **→**.
   - On "The Israeli way", the **− / +** buttons change the threshold live. Try 3.25% (Israel's real one) and compare.
   - On "Build a coalition", tap the parties. **↺ Reset coalition** lets you try another combination.
5. Next class: 🏠 → **↺ Reset everything (new class)**. This clears the votes and makes a new room code. Your questions stay.

**If the phones don't work:** in Round 2, click **✍️ Type votes by hand**, count a show of hands, type the numbers, and both results screens work the same way. Round 1 still reveals the answers even with no phone votes.

## Changing the questions

Click **⚙️ Settings** on the host screen. You can edit, add, delete and reorder the Round 1 statements, answers, explanations and Hebrew words. You can also change the Round 2 topic, options (2 to 8), threshold and number of seats. Changes save automatically, **but only on that computer**. To make a change permanent everywhere, edit `content.js` (or ask Claude to).

## Good to know

- **Free limits:** Firebase's free plan allows 100 phones connected at once, which is plenty for a class.
- **Anonymous:** each phone gets a random ID so it can only vote once. No names are stored.
- **Demo mode:** if Firebase isn't set up yet, the host screen still works. You can practise by clicking **Open a student view ↗**, which opens a pretend phone in another tab.
- Works on iPhone and Android in any normal browser. The host screen works best in Chrome or Edge.

## Files

```
vote/
├── host.html     ← the projector screen
├── index.html    ← the student phone page
├── config.js     ← your Firebase settings (Step 2)
├── content.js    ← the starting questions and Round 2 options
├── common.js     ← shared code (database connection, D'Hondt method)
├── app.css       ← shared colors and styles
└── vendor/       ← Firebase and QR-code libraries, stored here so nothing loads from other sites
```
