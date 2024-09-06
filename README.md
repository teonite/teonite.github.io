# teontie Website

Powered by: [Astro](https://astro.build/)

## Prerequisites
### Node

Current recommended version of Node.js is 21.4  
Install via NVM or manually.

### NVM
```bash
nvm install 21.4
nvm use 21.4
```

### PNPM
```bash
npm i -g pnpm
```

## Install deps

Install dependencies with [pnpm](https://pnpm.io/), then:

```bash
pnpm install
```

## Build

### PNPM

```bash
pnpm build
```
After that static files will reside in ./dist

### Docker

```bash
docker-compose -f ./docker-compose.build.yaml run --build  site-build
```

After that the ready build will be inside ./docker-dist.  
Note that docker will make docker-dist owned by root.

## Launch dev server

```bash
pnpm dev
```

## Deploy

To deploy your changes in production you should configure kubectl.
After your changes you should run in your repo

```bash
./build-deploy.sh build
```

And if you are ready to deploy all your changes run this command
```bash
./build-deploy.sh deploy
```