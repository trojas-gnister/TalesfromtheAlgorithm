
//.env 
require("dotenv").config();
const apiKey = process.env.REACT_APP_BUILD_ENV;

//chatGPT
const { Configuration, OpenAIApi } = require("openai");



// mongoDB Database connect
const mongoDB_connect = require("./config/db/connection.js");

// Apollo & GraphQL
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");

// express
const express = require("express");
// const router = require("express-router")
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const app = express();

//openai config. need to setup fetch calls from frontend to grab response from chatgpt. test routes with insomnia
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_BUILD_ENV,
});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "How are you today?",
  });
  // testing
  console.log(completion.data.choices[0].text);
  console.log(completion.data.choices[0].text);
  console.log(completion.data.choices[0].text);
  console.log(completion.data.choices[0].text);
  console.log(completion.data.choices[0].text);
  console.log(completion.data.choices[0].text);
  console.log(completion.data.choices[0].text);

  }


runCompletion()
// vroom_vroom-express-initialize
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// connect to Apollo
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});



// connects port
app.listen(PORT, () => {
  mongoDB_connect();
  console.log(`
    ==============================
    "Online at ${PORT}, Server is."
                __.-._
                '-._"7'
                  /'.-c
                  |  /T
                _)_/LI
    ==============================
  `);
});
