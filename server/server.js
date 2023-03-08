//.env 
require("dotenv").config();

// Dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const { ApolloServer } = require("apollo-server");

// GraphQL
const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");

// MongoDB Database connect
const mongoDBConnect = require("./config/db/connection.js");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Configure OpenAI
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.REACT_APP_BUILD_ENV,
  })
);

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Define routes
app.get("/api/completion", async (req, res) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 256,
      prompt: "Write me a fantasy story about STORYMAN. Make the story 2 sentences long.",
    });
    console.log(completion.data.choices[0].text)
    // send the completion text as response
    res.json({ text: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Connect to Apollo
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

// Connect to port
app.listen(PORT, () => {
  mongoDBConnect();
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
