# CLAUDE.md

## Stack
- React 18 with Create React App (`react-scripts` 5.0.1), `react-select` 5, Jest + React Testing Library.
- No backend, no Docker, no CI.

## Structure
- `src/components/App.js`: state (`tasks`, `tags`), localStorage sync, handlers. Other components: Header, Sidebar, TaskInput, TagInput, TaskList, Task, Tag.
- `src/components/App.test.js`: tests. `src/styles/`: CSS per component.

## Commands
- Install: `npm install`; dev: `npm start`; build: `npm run build`
- Tests: `CI=true npm test -- --watchAll=false`
- Lint: ESLint runs through `react-scripts` at build time (no separate script)

## Conventions
- Function components and hooks; never mutate state, always create new arrays/objects.
- Tags are identified by their (unique) `title`; tasks by `id` (`Date.now()`).
- Default branch is `master`. Work on `refresh/<topic>` branches and open a PR; never commit directly to `master`.
- No secrets in the repo. No history rewrite or force push without explicit approval. Do not alter commit dates or authors.

## Known issues
- Create React App is unmaintained; the remaining npm audit findings need a migration to Vite.
- `JSON.parse` of localStorage in `App.js` is not guarded against corrupted data.
- Page title and meta tags in `public/index.html` are still the CRA defaults.
