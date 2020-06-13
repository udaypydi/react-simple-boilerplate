# CLI-CRB
This repo is a Interactive CLI for the react-simple-boilerplate

# Create React Boilerplate

Create React apps with no build configuration offline every time.

Installing the CLI
For first time you need to install the CRASB CLI via this command, then after you'll be able to create React apps offline.

## `npm install -g create-react-boilerplate`

### Usage

## `crb -n <app-name>`

for example:

## `crb -n my-app`

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
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm run test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.
