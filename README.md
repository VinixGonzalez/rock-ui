# Rockr UI

Rock Content Design System component kit in React

## Using Rockr UI in a react project

Install the kit package in your react project

```
yarn add @rock-io
```

In your entry file (e.g `app.tsx`) use the theme provider

```typescript
# app.tsx

import * as React from "react"
import { ThemeProvider, CSSReset, RockrTheme } from "@rock-io"

// Use at the root of your app
function App() {
  return (
    <ThemeProvider theme={RockrTheme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  )
}
```

Use any component from the library

```typescript
# MyComponent.tsx
import React from 'react'
import { Button } from '@rock-io'

const MyComponent = () => <Button colorScheme="blue">Foobar</Button>
```

## Development

```
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

### Storybook

Run inside another terminal:

```
yarn storybook
```

This loads the stories from `./src/components/**/stories/*.stories.tsx`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

## Configuration

Code quality is set up with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

### Rollup

RockUI uses [Rollup v1.x](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Publishing to NPM

We use https://github.com/sindresorhus/np to publish to NPM
