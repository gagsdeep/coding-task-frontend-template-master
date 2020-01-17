# Template: Simple GraphQL Server

This template contains a folder with a very basic implementation of a GraphQL server (with Apollo).

## Adding a frontend

One very easy way to add a React JS frontend application is to use create-react-app:
```
npx create-react-app frontend
```

The resulting structure will then look something like this:
```
|
|- api
|- frontend
|- README.md
```
### Prerequisites

You should have git,npm installed in your system.


### Run it

To run the application locally, you have to start both server and frontend application:
1. Navigate to the `api` folder in the terminal and start the server by using  two commands
a) `npm install`
b) `npm run start`
2. (Open `localhost:4000` in the browser to test the GraphQL API)
2. In a different terminal navigate to the `frontend` folder. Try running 
a)`npm install`
b) `npm run start`
3. Open `localhost:3000 in a browser to see the frontend application.



