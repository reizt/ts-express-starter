# TypeScript Express (+ Docker) Starter

## Why

When you develop API with express.js using typescript and docker, there're many things to set up such as

- Formatter, linter and TS compiler settings
- Build settings
- Hot reload settings
- Dockerize settings

I hope this package speeds up your development.

## Preset settings

### Formatter, linter and TS compiler settings

- Formatter: [Prettier](https://prettier.io) (rules: `.prettierrc.yml`)
- Linter: [ESLint](https://eslint.org) (rules: `.eslintrc.yml`)
- TS compiler (rules: `tsconfig.json`)

### Build settings

Using [esbuild](https://esbuild.github.io).

Bulid runs in `scripts/build.js`.

### Hot reload settings

Using [nodemon](https://nodemon.io).

It detects changes in files, run build script (`scripts/build.js`) and execute the built file in `dist`.

In development mode, source map is enabled.

### Docker compose settings

docker-compose.yml is like this:

```yaml
volumes:
  node_modules:
  yarn_cache:
services:
  api:
    image: node:19-alpine
    working_dir: /app
    volumes:
      - .:/app
      - node_modules:/app/node_modules
      - yarn_cache:/usr/local/share/.cache/yarn/v6
    command: yarn dev -p 4157
    ports:
      - 4157:4157
```

- With installing `node_modules` separatedly on local and container, synchronization of node_modules between host and container is not required so you can speed up package installation and server launch.
- With voluming yarn cache, you can speed up package installation.

## Commands

If you use docker environment, run following commands in docker compose.

```
# Install dependencies
yarn install

# Launch development server
yarn dev
## Specify server port
yarn dev -p 4157

# Test
yarn test

# Format, lint and type check
yarn organize

# Build for production
yarn build:prod

# Preview production server
yarn start:prod
## Specify server port
yarn start:prod -p 4157
```
