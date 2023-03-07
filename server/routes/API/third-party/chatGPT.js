const express = require("express");
const graphqlHTTP = require("express-graphql");
const typeDefs = require("./graphQL/typeDefs.js");

const app = express();

app.use(
  "/api/chatGPT",
  graphqlHTTP({
    typeDefs,
    graphiql: true,
  })
);

module.exports = app;
