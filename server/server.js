<<<<<<< HEAD
const apiKey = process.env.KEY;
require("dotenv").config();
=======

//.env 
require("dotenv").config();
const apiKey = process.env.REACT_APP_BUILD_ENV;

//chatGPT
const { Configuration, OpenAIApi } = require("openai");


>>>>>>> c5ce9d5ac88293c3ad04a0c2252fdb750761b9c6

// mongoDB Database connect
const mongoDB_connect = require("./config/connection.js");
// Apollo & GraphQL
<<<<<<< HEAD
const { typeDefs, resolvers } = require("./graphQL");
=======
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");

>>>>>>> c5ce9d5ac88293c3ad04a0c2252fdb750761b9c6
// express
const express = require("express");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const app = express();
<<<<<<< HEAD
=======
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
>>>>>>> c5ce9d5ac88293c3ad04a0c2252fdb750761b9c6

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
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

<<<<<<< HEAD
// vroom_vroom-express-initialize
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
=======

>>>>>>> c5ce9d5ac88293c3ad04a0c2252fdb750761b9c6

// connects port
app.listen(process.env.PORT || 3001, async () =>
{

});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");

});