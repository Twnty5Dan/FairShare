# FairShare

## Updating from the previous version (2 minutes)

1. In your GitHub repository, click **index.html → pencil/upload** and replace it with the new `index.html`.
   **Keep your own `config.js`**: don't upload the one from this zip (it has empty placeholders).
2. Wait 1–2 minutes, then on both phones swipe the app away in the app switcher and open it again.
3. That's it. Your data is converted automatically: your Food / Fun / Buffer amounts and savings % become
   Revolut pockets in the same order as before.

Tip: to try it first on a computer, serve this folder locally (e.g. `python -m http.server` in the folder, then
open http://localhost:8000). Without Firebase settings it offers **Preview on this device only**; paste a backup code (Settings → Backup) to see your real numbers.

## What's new (October 2026)

- **History tab**: every one of Sabrina's paydays in plain words ("rest of pay landed: €1,200 × 37.6% = €451.74 for
  the shared bills · Paid on Thu 8 Oct"), every payment and which payday it was for, and what's coming next.
  Tap a payday to see exactly where the amount comes from. "By month" has the monthly split.
- **Home is shorter**: only what needs attention now: what's open (and where it comes from), the last payment,
  the next two transfers, and the main bank. The 5-week calendar moved to **Bills → Coming up**.
- **Bills → Past**: the last 2 months, newest first: every date Sabrina's part was due (how much and why), whether
  and when it was paid, her payments, and the bills that went out.
- **Main bank, not Revolut**: all pay lands in the main bank and the bills are paid from there. The "Main bank"
  card says how much it should have today: (1) the bills up to the tightest moment (e.g. rent right after a
  payday), minus the money for bills that still comes in before then, plus (2) what's saved by now for yearly &
  quarterly bills. Tap *How?* for the full list. Revolut doesn't count.
- **Payday shows one Revolut deposit**: keep X in the main bank, deposit Y on Revolut in one transfer, then split
  it over the pockets. "Whole month" shows the same for a normal month.
- **Savings account or Revolut, per pocket**: in Edit split, each pocket "lives in" Revolut or the savings account
  (spaarrekening) at the main bank. Daniil's Savings is in the savings account, so Payday shows it as its own
  step and the Revolut deposit only has the Revolut pockets. "Main bank" always means the zichtrekening.
- **Move Sabrina's money to the main bank**: her transfers land in Revolut, but the bills are paid from the main
  bank. Home reminds you to move it over ("Done, moved" when you did). Settings → *When Sabrina sends money*.
- **Updates show up by themselves**: the app checks for a newer version each time it's opened, and shows a
  "New in this update" card once. Bigger, brighter text.
- **Small differences roll over**: when a pay is confirmed at a slightly different amount, the month's % shifts a
  little. A difference under €10 on a payday that was already paid no longer shows as "owes you"; it's added to
  the next transfer.

## Earlier

- **Payday tab**: the Revolut split for each payday as a checklist: what to send, what to move into
  each pocket, and what stays in the main account. Tap any amount to copy it, tick pockets off as you move them.
- **Sabrina's transfers follow the paydays**: the moment Sabrina's pay lands, her part becomes due. Home shows
  what's open now and the next transfers with their dates. One tap marks a transfer as sent or received (with Undo).
- **Split settings**: add, rename, reorder and remove pockets, € per month or % of pay, where the leftover goes,
  whole-euro rounding, with a live preview. Settings → *When Sabrina sends money*: every payday or once a month.
- **Confirm pay in one tap**: "Yes, it landed" on the payday, or "Other amount".
- **Main account card** now also tells you if Sabrina's open transfer covers a shortfall, and you can update the
  balance without doing a full check-in.
- Optional Revolut username: gives Sabrina an "Open Revolut" button with the amount already copied.

## How the money is divided

The fair rule is that you both put the same % of every euro you earn toward the shared bills.
That % = shared bills ÷ both incomes that month (e.g. €1,545 ÷ €3,440 = 44.9%).

On every payday, in this order:
1. **Shared bills**: Sabrina sends that % of her pay to Daniil; Daniil keeps that % of his pay in the main account.
2. **Own bills** stay in the main account.
3. **Pockets**, top to bottom. "€ a month" pockets are spread over the paydays by size (a pay that is 83% of the
   usual monthly pay fills 83% of each pocket). "% of pay" pockets take that % of this pay.
4. **Leftover** goes to the pocket you choose (Savings by default) or stays in the main account.

Payments always pay off the oldest open amount first. Paying too much is not lost: it comes off the next transfer.

## First-time setup (about 20 minutes, one time)

You need: a Google account (for Firebase) and a GitHub account. Both free. Easiest on a computer.

## Part 1 — Firebase (login + database)

1. Go to https://console.firebase.google.com and sign in with Google.
2. **Create a project** → name it `fairshare` → turn **off** Google Analytics → Create.
3. Left menu **Build → Authentication** → **Get started** → **Email/Password** → switch on the first toggle → **Save**.
4. Left menu **Build → Firestore Database** → **Create database**
   - Edition: **Standard** (if asked)
   - Location: **europe-west1 (Belgium)**
   - Start in **production mode** → Create.
5. Still in Firestore, open the **Rules** tab. Delete everything and paste the contents of `firestore.rules`.
   Replace the two example emails with **your email and Sabrina's email** (lowercase). Click **Publish**.
6. Click the **gear icon → Project settings**. Scroll to **Your apps** → click the **`</>`** (Web) icon →
   nickname `fairshare` → **don't** tick Firebase Hosting → **Register app**.
   You'll see a block like `const firebaseConfig = { apiKey: "...", ... }`. Keep this page open.

## Part 2 — fill in config.js

Open `config.js` in Notepad and replace each `PASTE_...` value with the matching value from step 6
(apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId). Keep the quotes. Save.

## Part 3 — GitHub Pages (the website)

1. Go to https://github.com and create an account (or sign in).
2. Top right **+ → New repository** → name `fairshare` → **Public** → **Create repository**.
3. Click **uploading an existing file** → drag in ALL files from this folder
   (index.html, config.js, manifest.webmanifest, the 3 .png icons; README and firestore.rules are optional) → **Commit changes**.
4. In the repository: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/(root)** → **Save**.
5. Wait 1–2 minutes. Your site is at `https://YOUR-GITHUB-NAME.github.io/fairshare/`
   (Settings → Pages shows the exact link).
6. Back in Firebase: **Authentication → Settings → Authorized domains → Add domain** → `YOUR-GITHUB-NAME.github.io`.

## Part 4 — on both iPhones

1. Open the link in **Safari** → **Create account** with the email you put in the rules.
2. Tap **Share → Add to Home Screen**. It now opens like an app.
3. Pick whose phone it is.
4. **Only on Daniil's phone, once:** in Scriptable, Settings → **Copy sync code**. In the website:
   Settings → paste → **Replace everything** (tap twice). Everything moves over.
5. Sabrina: open the link, create her account right away, add to home screen, pick "Sabrina". Her data is already there.

Both of you should create your accounts straight away, so nobody else can register with your emails.

## Good to know
- Changes show up on the other phone within a second or two. A dot at the top shows **Synced / Saving / Offline**.
- If you're offline while the app is open, changes are kept and sent when you're back online.
- The code is public on GitHub, but your data is not: only the two emails in the Firestore rules can read it.
- Keep the Scriptable app as a backup for a while. Settings → **Copy a backup code** in the website also gives you a backup.
- To update the app later: upload the new `index.html` to the same GitHub repository (keep your `config.js`).
