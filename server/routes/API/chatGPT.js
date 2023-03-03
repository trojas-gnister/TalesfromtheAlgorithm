const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/typeDef.js");

const app = express();

app.use(
  "/api/chatGPT",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;


// route logic using graphQL library