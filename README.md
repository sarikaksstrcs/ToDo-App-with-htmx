# HTMX For Beginners — Starter Project

A minimal Node.js + Express starter project demonstrating basic HTMX interactions (server-rendered partial updates) with a simple todo list.

**Features**
- Server-side rendering with small template functions in `views/`.
- Add, toggle, and delete todo items using HTMX requests.
- Static assets served from `public/` (CSS, client files).

## Screenshot
<img width="897" height="825" alt="image" src="https://github.com/user-attachments/assets/a1baf52e-917d-40b1-a074-edc7fea57c4c" />


## Prerequisites
- Node.js (v14+ recommended)
- npm
- Optional: `nodemon` for development hot-reload

## Install
From the project root:

```bash
npm install
```

## Run
Start the app using Node:

```bash
node app.js
```

Or run with `nodemon` during development (if installed globally):

```bash
nodemon app.js
```

The server listens on port `3000` by default. Open `http://localhost:3000` in your browser.

## Project Structure
- `app.js` — Express app and route handlers.
- `package.json` — project metadata and dependencies.
- `public/` — static assets (CSS, client files). Example: `public/styles.css`.
- `data/` — in-memory data store used for demos (`data.js`).
- `views/` — small template modules that return HTML strings:
  - `index.js` — home page template
  - `todo_list.js` — renders the full todo list
  - `components/todo_item.js` — renders a single todo item

## Usage
- Visit `/` to see the home page and todo list.
- Add todos via the form — the server responds with a rendered todo item.
- Toggle or delete items via HTMX-powered requests (handled by `PUT`/`DELETE` routes).

## Notes
- This project uses an in-memory array (`data/data.js`) for simplicity. It's not persistent — restarting the server resets the data.
- The app is written using ES modules (`type: "module"` in `package.json`).

## Contributing
Feel free to open issues or submit PRs to improve examples and documentation.


## License
ISC
