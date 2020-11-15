# Viveo Challenge

> This project was created for the Viveo Challenge and it consists of a fullstack system where the user can add or subtract and, in its final result, a +5 o -5 will be added/substracted depending on its symbol
Yo use React/Javascript para el front-end y Node/Typescript para el backend.
> Created by Brian Luca Becci
## 1. Started ⌨️

for get the project you will use:

```tsx
//PRIVATE
git clone "https://github.com/lucabecci/ViveoGroup-developmentChallenge"
//PRIVATE
```

## 2. Pre-requeriments 🛠

You will need this requeriments for good rendiment:

- Node.JS > 10.X
- npm > 6.X
- MongoDB

## 3. Installation 🔩

You will need run this comands for the installation:

```tsx
With npm: 
cd DevelopmentChallenge //we entered the directory.
cd frontend// enter in the frontend
npm install //install the frontend dependencies.
		and 
cd backend//enter in the backend
npm install //install the backend dependencies.
npm run frontend //run the frontend
		and
npm run backend //run the backend

With yarn:
cd DevelopmentChallenge //we entered the directory.
cd frontend// enter in the frontend
yarn install //install the frontend dependencies.
		and 
cd backend//enter in the backend
yarn install //install the backend dependencies.
yarn run frontend //generate the prod code.
yarn run backend //execute the prod code with node.
```

## 4. Use the project

### About the app

Actually, there are two separated apps. The Client which serves the FrontEnd (using React/Javascript), and the API (in Node/Express/Typescript).

### How to run the API

1. In your terminal, navigate to the `backend` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run build` for the api build
4. Run `npm start` to start the app.

### How to run the Client

1. In another terminal, navigate to the frontend directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## 5. Project structure 📁

### Main

```tsx
|-- backend
|-- frontend
|-- .gitignore
|-- .prettierrc
|-- CHALLENGE.md
|-- package.json
|-- README.md
|-- STEPS.md

```

### Backend 📂

```tsx
|-- build
|-- node_modules
|-- src
	|-- config
		|-- config.ts
	|-- controllers
		|-- index.controller.ts
		|-- operation.controller.ts
	|-- database
		|-- database.ts
	|-- helpers
		|-- check.ts
	|-- models
		|-- Operation.ts
	|-- routes
		|-- index.routes.ts
		|-- operation.routes.ts
	|-- index.ts
|-- .eslintrc
|-- .gitignore
|-- .prettierignore
|-- .prettierrc
|-- nodemon.json
|-- package-lock.json
|-- package.json
|-- README.md
|-- tscongif.json
```

### Frontend 📂

```tsx
|-- build
|-- node_modules
|-- public
|-- src
	|-- components
		|-- Calculator.css
		|-- Calculator.js
		|-- ErrorMsg.js
		|-- History.js
		|-- Navigation.js
	|-- pages
		|-- CalculatorMain.js
		|-- Creator.js
		|-- Home.js
	|-- App.js
	|-- App.css
	|-- index.js
	|-- index.css
|-- .gitignore
|-- package.json
|-- README.md
|-- yarn.lock

```

## 6. Build with 🛠

### Backend 🔧

DEPENDENCIES:

- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for node.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
- [mongoose](https://mongoosejs.com/) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

DEV-DEPENDENCIES:

- [typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [ts-node](https://www.npmjs.com/package/ts-node) - TypeScript execution and REPL for node.js, with source map support.
- [nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
- [eslint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript/Typescript code.

### Frontend 🔧

DEPENDENCIES:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## 7. Database 📫

For the database i using MongoDB

- [MongoDB](https://www.mongodb.com/es)
- Version: 3.6.8

## 8. Versioned 1️⃣

For the versioning, [ConventionalCommits] was used ([https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/))

I using husky for the control in commits and push

## 9. Author 🙎🏻‍♂️

***Luca Becci -** code  and documentation*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)