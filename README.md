# Developer Portfolio

Modern, responsive developer portfolio built with React and Tailwind. All content is editable via a single config file.

## Features

- Single source of truth: `frontend/src/data/mock.js`
- Toggle sections (hero, projects, open source, about, footer)
- Filterable projects + featured flag
- GitHub repo showcase + contributions list
- Timeline (experience & education)
- Contact modal + floating button
- Responsive layout & accessible animations

## Quick Start

```bash
git clone <repo-url>
cd <repo>
cd frontend
yarn install
yarn start
```

## Customize Content

Edit `frontend/src/data/mock.js` for:

- sections visibility
- navigation items
- personalInfo, socialLinks
- projects, openSourceRepos, skills, timeline, contributions

Example toggle:

```js
sections: { showHero: true, showProjects: true, showOpenSource: false }
```

Add a project:

```js
{ id: 7, title: "Project", category: "Apps", techStack: ["React"], featured: true }
```

## Deploy (GitHub Pages)

Set `homepage` in `frontend/package.json`, push `main`, enable Pages (GitHub Actions).

Manual build:

```bash
cd frontend
yarn build
```

Deploy the `build` folder.

## Styling

Adjust Tailwind classes in components (Hero, Projects, Header). Primary accent uses `bg-blue-600` / `text-blue-600`.

## Tech Stack

React 19 · React Router · Tailwind CSS · Lucide Icons · clsx + tailwind-merge

## Scripts

`yarn start` dev · `yarn build` prod · `yarn test` tests

## License

MIT

Built with ❤️ using React.
