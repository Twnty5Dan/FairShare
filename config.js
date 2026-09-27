// FairShare settings. Replace the PASTE_... values with the ones from your Firebase project:
// Firebase console -> Project settings (gear icon) -> Your apps -> the web app -> "SDK setup and configuration" -> Config.
// These values are not secret: your data is protected by the Firestore rules (only your two emails get in).
window.FAIRSHARE_CONFIG = {
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  },
  // Name of your shared household in the database. Leave as is.
  householdId: "home"
};
