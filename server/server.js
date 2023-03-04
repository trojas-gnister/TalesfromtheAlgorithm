const express = require("express");
const path = require("path");

const db = require("./config/connection");

const apolloServer = require("../apolloServer.js");
const { typeDefs, resolvers } = require("./schemas");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const apiKey = process.env.API_KEY;

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function startServer() {
  const app = express();
  app.use(express.static("public"));

  let options = {
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    instructions: `You are ChatGPT, a large language model trained by OpenAI.`,
    model: "text-davinci-003",
    stop: "",
  }; //can we modularize this out of the srver file as an idependent file or be in another existing file within the server directory eg. schema, model

  const { default: ChatGPT } = await import("chatgpt-official");

  let bot = new ChatGPT(apiKey, options);

  let response = await bot.ask(
    "think of 5 funny and clever names about generative AI and storys. the AI will be fed prompts by the user and create custom stories. make it edgar allan poe themed. thanks "
  );
  console.log(response);

  let conversationId2 = "another conversation name";
  let response2 = await bot.ask("Hello?", conversationId2);
  console.log(response2);

  app.listen(PORT, () => {
    console.log(`Server available at localhost: ${PORT}`);
  });
}

startServer();
apolloServer(typeDefs, resolvers);



//  found within mod21_MERN bootcamp mini-proj server.js file.
//  use ? below__
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


