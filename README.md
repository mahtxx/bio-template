# bio-template

A free, open-source profile page template inspired by guns.lol.  
Edit **one file** and deploy — no frameworks, no build step, no backend.

**[→ Live Demo](https://mahtxx.github.io/bio-template/)**

---

## Features

- **Animated backgrounds** — floating particles, falling snow, or twinkling stars, all reacting to your mouse
- **Glassmorphism card** — frosted-glass profile card with a spinning avatar ring
- **Glow cursor** — smooth glowing dot that replaces your cursor
- **Music player** — floating widget with play/pause and animated bars (paste any direct audio link)
- **Social links** — 10 supported icons: GitHub, Discord, Twitter, YouTube, Twitch, Steam, Instagram, LinkedIn, Email, Website
- **Fully themeable** — change the accent color and everything updates: particles, glow, card, cursor, links
- **Zero dependencies** — plain HTML + CSS + JS, works in any browser

---

## Setup

**1. Fork or download this repo**

Click **Fork** at the top right, or download the ZIP.

**2. Edit `config.js`**

This is the only file you need to touch. Open it and fill in your details:

```js
const CONFIG = {
  name:   "yourname",
  avatar: "https://github.com/yourname.png",
  bio:    "Your short bio here.",

  background: {
    type:  "particles",   // "particles" | "snow" | "stars" | "none"
    color: "#0a0a14",
  },

  music: {
    enabled: false,
    url:     "",          // direct link to an .mp3 / .ogg file
    title:   "Artist - Song",
  },

  cursor: "glow",         // "glow" | "default"

  links: [
    { label: "GitHub", icon: "github", url: "https://github.com/yourname" },
    // add more...
  ],

  accentColor: "#8264dc", // any hex color
};
```

**3. Deploy to GitHub Pages (free)**

If you forked the repo:
1. Go to your fork → **Settings** → **Pages**
2. Set Source to **Deploy from branch** → `main` / `root`
3. Click **Save**

Your page will be live at `https://yourusername.github.io/bio-template/` within a minute.

> **Tip:** rename the repo to `yourusername.github.io` to get the cleaner URL `https://yourusername.github.io`.

---

## Config reference

| Key | Options | Description |
|---|---|---|
| `name` | any string | Display name |
| `avatar` | image URL | Profile picture. Use `""` to hide |
| `bio` | any string | Short bio. Use `""` to hide |
| `background.type` | `"particles"` `"snow"` `"stars"` `"none"` | Animated background style |
| `background.color` | hex color | Page background color |
| `music.enabled` | `true` / `false` | Show the music player |
| `music.url` | direct audio URL | Link to `.mp3` / `.ogg` / `.wav` file |
| `music.title` | any string | Shown in the player widget |
| `cursor` | `"glow"` `"default"` | Custom glow cursor or normal cursor |
| `links[].icon` | see below | Social icon to show |
| `accentColor` | hex color | Accent color for everything |

**Supported link icons:** `github` · `discord` · `twitter` · `youtube` · `twitch` · `steam` · `instagram` · `linkedin` · `email` · `website`

**Accent color presets:**
| Color | Hex |
|---|---|
| Purple (default) | `#8264dc` |
| Cyan | `#00e5ff` |
| Pink | `#ff4f81` |
| Green | `#00ff9f` |
| Orange | `#ff8c42` |
| Red | `#ff4444` |

---

## License

MIT — free to use, fork, and modify.
