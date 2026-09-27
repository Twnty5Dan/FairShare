# FairShare — setup (about 20 minutes, one time)

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
