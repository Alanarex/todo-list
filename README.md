# Todo List

> A small React to-do app with colour-coded tags. Everything is stored in the browser, no backend.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Create React App](https://img.shields.io/badge/Create_React_App-5-09D3AC?logo=createreactapp&logoColor=white)
![Tests](https://img.shields.io/badge/tests-Jest_+_Testing_Library-C21325?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

**Résumé (FR)** : petite application de liste de tâches en React avec des tags colorés. Les tâches et les tags sont enregistrés dans le navigateur (`localStorage`), sans serveur.

## Features

- Add a task with a title, a description and any number of tags (`react-select` multi-select).
- Mark a task as done, delete it.
- Create and delete coloured tags from the sidebar (tag titles are unique).
- Remove a tag from a single task.
- Tasks and tags persist across reloads via `localStorage`.

## Architecture

```
src/components/   App (state + localStorage), Header, Sidebar, TaskInput, TaskList, Task, Tag, TagInput
src/styles/       one CSS file per component
```

`App` owns the `tasks` and `tags` state and passes handlers down; there is no router and no backend.

## Getting started

Requirements: Node.js 18+ and npm.

```sh
git clone https://github.com/Alanarex/todo-list.git
cd todo-list
npm install
npm start          # http://localhost:3000
```

## Tests and build

```sh
CI=true npm test -- --watchAll=false   # 4 tests (persistence, done toggle, delete, tag removal)
npm run build
```

## What it demonstrates

- React function components and hooks (`useState`, `useEffect`).
- State lifting and immutable updates.
- Client-side persistence with `localStorage`.
- Component tests with React Testing Library.

## License

MIT, see [LICENSE](LICENSE).
