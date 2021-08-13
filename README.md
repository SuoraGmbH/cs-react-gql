# React & GraphQL Playground repo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn backend`

Starts our nodejs based GraphQL backend

### `yarn run graphql:codegen`

Generates the JS code for querying the graphql backend.
For development, run it as `yarn run graphql:codegen --watch` to have a continous watch mode that immediately 
generates the client code.

## Learn More

- [GraphQL](https://graphql.org/learn/)
- [Apollo](https://www.apollographql.com/) (the GraphQL client/server library that we use)
- [GraphQL code generator](https://www.graphql-code-generator.com/) (generates the hooks such as `useAllMessagesQuery`)
- https://github.com/graphql/graphql-playground

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
