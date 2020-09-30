<div align="center">
    <a href="https://react-simple-boilerplate.vercel.app">
        <h1>React Simple Boilerplate</h1>
    </a>
</div>

<div align="center">
    <strong>Start your next react project in seconds</strong>
    <br />
    <div>
        <!-- travis -->
        <a href="https://travis-ci.org/udaypydi/react-simple-boilerplate">
            <img src="https://travis-ci.org/udaypydi/react-simple-boilerplate.svg" alt="Test Coverage" />
        </a>
        <!-- Mit License -->
        <a href="https://github.com/udaypydi/react-simple-boilerplate/blob/master/LICENSE">
            <img src="https://img.shields.io/github/license/udaypydi/react-simple-boilerplate">
        </a>
        <!-- Pr's -->
        <a href="https://github.com/udaypydi/react-simple-boilerplate/blob/master/CONTRIBUTING.md"> 
        <img src="https://img.shields.io/badge/PRs-welcome-blueviolet.svg">
        </a>
    </div>
</div>

A simple react boilerplate with webpack hmr and latest babel packages. It comes with inbuilt [Travis-CI](https://travis-ci.org/) for PR checks, lint checks and builds. Kick start the development with tailwind css, react hooks and much more.

This React Boilerplate works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/udaypydi/react-simple-boilerplate/issues/new/choose).<br>

## Quick Overview

```sh
git clone https://github.com/udaypydi/react-simple-boilerplate.git
cd my-app
yarn install
npm run dev
```

Then open [http://localhost:9000/](http://localhost:9000/) to load your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are reconfigured and hidden so that you can focus on the code.

Clone the project, and you’re good to go.

### Prerequisites

- [yarn](https://classic.yarnpkg.com/en/docs/install/) (version > 1.0.0)
- [node](https://nodejs.org/en/download/)

## Creating an App

**You’ll need to have Node 10.16.0 or higher version on your local development machine**. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you should clone this repository using the following command:

### Clone

```sh
git clone https://github.com/udaypydi/react-simple-boilerplate.git my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure.

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `yarn install`

It will install all the packages that are required for project to up and running

### `npm run dev`

Runs the app in development mode.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm run test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://testing-library.com/docs/react-testing-library/intro)

### `npm run lint`

Runs the eslint over the `src` dir. You get a list of list errors and warnings if any.

### `npm run lint:fix`

Run this command to autofix eslint issues. All the autofixable issues will be fixed.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.


# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

