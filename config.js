// ═══════════════════════════════════════════════════════════════════
//  config.js  —  THE ONLY FILE YOU NEED TO EDIT
// ═══════════════════════════════════════════════════════════════════

const CONFIG = {

  // ── Profile ───────────────────────────────────────────────────────
  name:   "mahtxx",

  /** Avatar URL. GitHub auto-hosts one at https://github.com/USERNAME.png
   *  Set to "" to hide the avatar. */
  avatar: "https://github.com/mahtxx.png",

  /** Short bio shown on the card. Set to "" to hide. */
  bio: "I build things. Sometimes they're useful, sometimes they're just cool.",


  // ── Background ────────────────────────────────────────────────────
  background: {
    /** "particles" | "snow" | "stars" | "none" */
    type:  "particles",

    /** Page background color */
    color: "#0a0a14",
  },


  // ── Music ─────────────────────────────────────────────────────────
  music: {
    /** Set to true to show the music player */
    enabled: false,

    /** Direct link to an audio file (.mp3 / .ogg / .wav)
     *  Example: "https://dl.sndup.net/xxxx/song.mp3"
     *  Upload your file free at: https://sndup.net */
    url: "",

    /** Shown in the player widget */
    title: "Artist - Song Name",
  },


  // ── Cursor ────────────────────────────────────────────────────────
  /** "glow"    — replaces the cursor with a smooth glowing dot
   *  "default" — keeps the normal cursor */
  cursor: "glow",


  // ── Links ─────────────────────────────────────────────────────────
  /** icon options:
   *  "github" | "discord" | "twitter" | "youtube" | "twitch" |
   *  "steam"  | "instagram" | "linkedin" | "email" | "website"   */
  links: [
    { label: "GitHub",  icon: "github",  url: "https://github.com/mahtxx" },

    // Paste more below:
    // { label: "Discord",   icon: "discord",   url: "https://discord.gg/your-server" },
    // { label: "Twitter",   icon: "twitter",   url: "https://twitter.com/yourname" },
    // { label: "YouTube",   icon: "youtube",   url: "https://youtube.com/@yourchannel" },
    // { label: "Twitch",    icon: "twitch",    url: "https://twitch.tv/yourname" },
    // { label: "Steam",     icon: "steam",     url: "https://steamcommunity.com/id/yourname" },
    // { label: "Instagram", icon: "instagram", url: "https://instagram.com/yourname" },
    // { label: "LinkedIn",  icon: "linkedin",  url: "https://linkedin.com/in/yourname" },
    // { label: "Email",     icon: "email",     url: "mailto:you@example.com" },
    // { label: "Website",   icon: "website",   url: "https://yoursite.com" },
  ],


  // ── Theme ─────────────────────────────────────────────────────────
  /** Any hex color.
   *  Presets:
   *    Purple (default) → "#8264dc"
   *    Cyan             → "#00e5ff"
   *    Pink             → "#ff4f81"
   *    Green            → "#00ff9f"
   *    Orange           → "#ff8c42"
   *    Red              → "#ff4444"          */
  accentColor: "#8264dc",
};
