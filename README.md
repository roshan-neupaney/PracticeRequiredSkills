# Adidas-inspired Svelte Store

This project is a SvelteKit storefront prototype that consumes a GraphQL API to list shoes, expose filter primitives (category, brand, color), and showcase shared UI elements such as filter boxes, sliders, navigation, and product cards. It ships with Tailwind-ready styles, reusable components under `src/lib`, and route-driven pages under `src/routes`.

## Tech Stack

- SvelteKit 2.x with Vite 7 for dev server and bundling
- GraphQL Requests via `graphql-request`
- Tailwind/PostCSS pipeline for styling
- Jest + Testing Library for unit tests

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (bundled with Node)
- A GraphQL endpoint compatible with the queries defined in `src/routes/[slug]/+page.ts`

## Quick Start

```bash
git clone <repo-url> adidas-svelte-store
cd adidas-svelte-store
npm install
cp .env.example .env      # create the env file (see below)
npm run dev -- --open
```

### Environment variables

Create `.env` (or `.env.local`) and provide:

```bash
VITE_GRAPHQL_URL=https://your-api.example.com/graphql
```

This value is read in `src/lib/graphql.js` when instantiating the `GraphQLClient`. Omit it to fall back to `http://localhost:3001/graphql`.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Launches the Vite dev server with hot module reload |
| `npm run dev -- --open` | Opens the dev server in the default browser |
| `npm run build` | Produces a production build in `build/` |
| `npm run preview` | Serves the production build locally |
| `npm run check` | Runs SvelteKit sync + `svelte-check` |
| `npm run test` | Executes the Jest suite (`src/__test__/load.test.ts`) |
| `npm run test:watch` | Jest watch mode |
| `npm run test:coverage` | Generates Jest coverage reports |

## Testing Notes

The current tests stub the GraphQL client and exercise the `load` function for the dynamic `[slug]` route. When expanding coverage:

- Add new test files under `src/__test__/`.
- Mock network calls via `jest.mock('../lib/graphql')`.
- Use `@testing-library/svelte` for component-level assertions.

## Project Structure

```
src/
  lib/                # shared components, icons, config, GraphQL client
  routes/
    +page.svelte      # landing page
    [slug]/           # dynamic shoe listings and data loader
  __test__/           # Jest-based unit tests
static/               # static assets served as-is
```

## Troubleshooting

- **Console noise during tests**: the error-handling test intentionally triggers `console.error`. Mock `console.error` inside the test if you prefer silent runs.
- **GraphQL failures**: ensure `VITE_GRAPHQL_URL` is reachable, or run the backing API locally on `http://localhost:3001/graphql`.
- **Type errors on Vitest config**: `defineConfig` comes from `vitest/config` in `vite.config.ts` so the `test` block is typed. Keep imports aligned if you upgrade Vite/Vitest.

## Next Steps

- Hook up real data for filters and product listing by pointing to your GraphQL backend.
- Expand UI coverage with `@testing-library/svelte`.
- Consider adding adapters (`@sveltejs/adapter-*`) that match your deployment target before shipping to production.
