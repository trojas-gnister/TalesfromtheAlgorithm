//.env
require("dotenv").config();
const apiKey = process.env.REACT_APP_BUILD_ENV;

//chatGPT
const { Configuration, OpenAIApi } = require("openai");

// Apollo & GraphQL
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");

// express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/db/connection");
const PORT = process.env.PORT || 3001;

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

app.get("/api/completion", async (req, res) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 256,
      prompt:
        "Write me a fantasy story about STORYMAN. Make the story 2 sentences long.",
    });
    console.log(completion.data.choices[0].text);
    // send the completion text as response
    res.json({ text: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

(async () => {
  // Start the Apollo server and apply the middleware to the express app
  await server.start();
  server.applyMiddleware({ app });

  // serve static assets in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }

  // connect to MongoDB Atlas and start the server
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
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
  });
})();
