
//.env 
require("dotenv").config();
const apiKey = process.env.REACT_APP_BUILD_ENV;

//chatGPT
const { Configuration, OpenAIApi } = require("openai");



// mongoDB Database connect
const mongoDB_connect = require("./config/db/connection.js");

// Apollo & GraphQL
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");

// express
const express = require("express");
// const router = require("express-router")
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//openai config. need to setup fetch calls from frontend to grab response from chatgpt. test routes with insomnia
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_BUILD_ENV,
});
const openai = new OpenAIApi(configuration);


// vroom_vroom-express-initialize
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get('/api/completion', async (req, res) => {
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


// connect to Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
  });
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
