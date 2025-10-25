# Pick Squad - Fantasy Team Selector

A lightweight, static web app to pick a fantasy cricket squad of 11 players while enforcing credit, role, and team constraints. Built with HTML/CSS/JS—no build step required.

## Features
- Enforces all rules in real-time:
  - Total players: 11
  - Max 7 players from a single team
  - Team credits ≤ 100
  - Role constraints:
    - Batsmen: 3–7
    - Wicket Keepers: 1–5
    - All-Rounders: 0–4
    - Bowlers: 3–7
- Simple, sectioned UI that mirrors the provided mock
- Inline validation messages
- Proceed button enables only when the squad is valid
- Summary page listing the selected 11

## Getting Started

### 1) Open the app
- Double‑click `index.html` or open it in your browser.
- Alternatively, from PowerShell:
```powershell
cd "C:\\Users\\acr\\Downloads\\TheAlterOffice(assgn)"
start index.html
```

No server or installation is required.

### 2) Pick players
- Each section shows players by role with their credits on the right.
- Click "Select" to toggle a player on/off.
- The validation text informs you which rule is currently failing (if any).
- When the selection is valid, the "Proceed" button activates.

### 3) View summary
- Click "Proceed" to navigate to `summary.html`.
- The summary page displays the 11 selected players with their roles and team.

## Tech & Structure
- Plain HTML, CSS, and JavaScript. Data is embedded as a constant array.
- Files:
  - `index.html` — main Pick Players screen (four role sections)
  - `styles.css` — light theme and layout styles
  - `app.js` — rendering, selection state, and constraint validation
  - `summary.html` — displays the final 11
  - `summary.js` — reads selections from `sessionStorage` and renders a list

## Data Source
Player data is the provided "All Players JSON" (embedded in `app.js`).

If you want to fetch from a URL instead, replace the inline constant with a fetch call and render after the data resolves.

## Constraints Logic (overview)
- Selection state stored in a `Set` of selected player IDs.
- On each toggle, we compute:
  - Total selected count
  - Per‑role counts
  - Per‑team counts
  - Total credits
- A player can only be added if adding them still satisfies:
  - `total ≤ 11`, `roleCount ≤ roleMax`, `teamCount ≤ 7`, and `credits ≤ 100`.
- Proceed is enabled only when all final constraints are met, including role minimums and exactly 11 players.

## Customization
- Styling: adjust colours and spacing in `styles.css`.
- Layout: headings and section order are in `index.html`.
- Data: modify or replace the `ALL_PLAYERS` array in `app.js`.

