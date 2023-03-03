const express = require("express");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const { ChatGPT } = require("./config/api/ChatGPT.js");
const apiKey = process.env.API_KEY;
const test = "2213";

async function startServer() {
  const app = express();
  app.use(express.static("public"));

  const prompt1 = "hello i am story man can you make story pleas";
  let response = await ChatGPT.ask(`${prompt1}`);
  console.log(response);
  let response2 = await ChatGPT.ask("now add a dragon to the story");
  console.log(response2);

  app.listen(PORT, () => {
    console.log(`Server available at localhost: ${PORT}`);
  });
}

startServer();
