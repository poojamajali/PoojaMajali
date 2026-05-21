# Pooja Majali — Profile Web App

A clean, interactive single-page profile web app for job applications and sharing.

## Project structure

```
pooja-profile/
├── index.html   ← open this in a browser
├── app.jsx      ← all sections & logic (React + JSX)
├── styles.css   ← all styling
├── README.md
└── photo.jpg    ← add your photo here (optional)
```

## How to run

Just open `index.html` in any modern browser — no install or build step needed.

> Uses React 18 + Babel via CDN for JSX compilation in the browser.

## How to customise

All your personal data lives at the top of `app.jsx` in clearly named constants:

| Constant    | What it controls                                |
|-------------|-------------------------------------------------|
| `PROFILE`   | Name, initials, email, phone, LinkedIn, photo   |
| `METRICS`   | The 4 impact stat boxes                         |
| `HERO_BADGES` | Badges shown in the navy hero card            |
| `AI_CARDS`  | The 4 AI highlight cards in Overview            |
| `EXPERIENCE`| Work history entries with bullets & tags        |
| `SKILLS`    | Backend skill groups + AI skill groups          |
| `CERTS`     | Education and certifications in sidebar         |
| `PROJECTS`  | Project cards with badges, bullets, and tags    |

### Adding a photo

1. Drop your photo into the project folder (e.g. `photo.jpg`)
2. In `app.jsx`, set `photo: "photo.jpg"` inside the `PROFILE` object

### Adding a new project

Add an object to the `PROJECTS` array in `app.jsx`:

```js
{
  name:     "Your Project Name",
  badge:    "✦ Your Badge",
  featured: false,
  badgeCls: "badge-ai",   // badge-ai | badge-ml | badge-featured
  desc:     "Short description of the project.",
  bullets:  [],           // optional bullet points
  tags:     ["Tech 1", "Tech 2"],
  aiTags:   ["AI Tool"],
},
```

## How to share

### Option 1 — Share as a file
Zip the folder and send it. Recipients open `index.html` in their browser.

### Option 2 — Host for free (shareable link)
1. [Netlify Drop](https://app.netlify.com/drop) — drag the folder → get a public URL instantly
2. [GitHub Pages](https://pages.github.com/) — push to a repo, enable Pages
3. [Vercel](https://vercel.com/) — drag and drop deploy

### Option 3 — Save as PDF (for job applications)
Open `index.html` in Chrome → navigate to the section you want → Ctrl/Cmd+P → Save as PDF.
