# VEIL Portfolio — Claude Handoff

This folder is a self-contained static website. No build step or package installation is required.

## Main files

- `index.html` — page structure and entry point
- `styles.css` — layout, typography, responsive rules, and animation styling
- `app.js` — project data, routing, interaction, scroll transitions, and media rendering
- `assets/` — images, videos, fonts, icons, and project media

## Preview

Open `index.html` in a browser. For the most reliable video and routing behaviour, run any local static server from this directory.

## Important implementation notes

- The site uses hash routes such as `#project/digital-04`.
- Project content is primarily defined in `app.js`.
- Do not rename files inside `assets/` unless the matching paths in `app.js` or `styles.css` are updated.
- Preserve the existing Up Next scroll-loading and project transition system when editing individual projects.
- The original working copy used a Windows directory junction for `assets`; this handoff package contains a normal physical `assets` folder and is portable.

## Large media

The full handoff package includes all media. The light package intentionally omits the largest MP4 files for easier upload. Their paths remain referenced in `app.js`, so copy the matching files from the full package into the same asset folders when finalising the site.
