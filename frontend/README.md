# Portfolio Frontend

React 18 portfolio frontend built with CRACO, React Router, Tailwind CSS, and Lucide icons.

## Package Manager

Use Yarn only. The root workflow and `package.json` declare Yarn, and `yarn.lock` is the single dependency lockfile.

## Scripts

```bash
yarn install --frozen-lockfile
yarn start
yarn build
yarn test
```

## Content

Most portfolio content and section toggles live in `src/data/mock.js`.

## Runtime Notes

- External links are filtered to HTTP(S) URLs before rendering.
- Browser APIs such as storage, view transitions, scrolling, and intersection observers have guarded fallbacks.
- Optional development plugins in `craco.config.js` are loaded only when enabled and available.
