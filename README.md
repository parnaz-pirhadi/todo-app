# Getting Started with Simple ToDo App

This is a simple project for a todo app, using Redux, and a styled component.
it used best practices for file structure, and also a good example for ducks structure management for separating the data flow layer of the application.

Click [Here](http://ws-simple-todo-app.surge.sh) to see the demo.

## Directory Structure

### Components

instead of categorizing components in two categories of dumb and smart components, or `components` and `containers`, we use three categories

- *Globals*: contains dumb components such as UI components.
- *Common*: contains dependent smart components, components that are smart enough to have their own functionality, but dependent to their parent to be fully functional.
- *Pages*: fully smart components, they can not be wrapped in other components rather than the router.


### Config

Contains the configuration of the app, such as middlewares, store, and anything that should be integrated with react to configure the project.

### Constants

Any constants such as API statuses, messages, theme constants goes to the constants directory.

### Ducks

the ducks directory provides the logic of the application.
all actions, reducers, and anything related to the data flow go here, each directory in ducks provides a feature.
also, side-effects such as saga go here, so the layer of the logic can be separated


### Helpers

contains the helper functions grouped based on their functionality.
the approach to developing the helper functions is single-responsibility, so they must have only one thing to do.

### Resources

contains any resources such as images, fonts, icons, and any other asset

## Available Scripts

In the project directory, you can run:

### `yarn`

To install the dependencies you need to run this command.
it adds the dependencies in the `node_modile` directory

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

