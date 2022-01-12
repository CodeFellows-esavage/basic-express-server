# basic-express-server
Code401 Lab 02 to Build a core, standards compliant Express server

Deployment URL: https://esavage-basic-express-server.herokuapp.com/

![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/basic-express-server.git`
- `cd` into basic-express-server
- run `npm install`

## Usage
- To start server run : `npm start`
- To test server run: `npm run test`

## Routes
-  GET `/people`, requires `name` query parameter: returns an object `{ name: namesent}`

## Features
- Error Handling
  - sends 404 if route or method is unavailable
  - sends 500 if missing required name parameter in query

## Testing
Verifies the following:
- 404 on a bad route
- 404 on a bad method
- 500 if no name in the query string
- 200 if the name is in the query string
given an name in the query string, the output object is correct