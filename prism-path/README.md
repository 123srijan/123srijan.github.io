# Prism Path

A small, self-contained mirror-routing puzzle inspired by the supplied visual reference. Tap a mirror to turn it, then guide the cyan beam into the crystal.

## Play

Open `index.html` in a browser, or start a local server from this folder with:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included

- Five hand-built puzzles, from a quick warm-up to a final route
- Mirror rotation, live beam tracing, undo, restart, and hints
- Level selection and local progress saved in the browser
- Responsive layout, keyboard-accessible controls, reduced-motion support, and optional sound
- No build step, backend, or third-party game engine

`levels.json` is a compact puzzle catalog. The playable levels are embedded in `script.js`, so the game also works when `index.html` is opened directly from disk.

## Publishing

The files are ready for a static host such as GitHub Pages. The Google Fonts import is optional; the game falls back to system fonts when it is unavailable.
