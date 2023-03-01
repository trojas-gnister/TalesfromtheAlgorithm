const express = require("express");
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const apiKey = process.env.API_KEY

async function startServer() {
  const app = express();
  app.use(express.static('public'));

  let options = {
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    instructions: `You are ChatGPT, a large language model trained by OpenAI.`,
    model: "text-davinci-003",
    stop: "",
  }

  const { default: ChatGPT } = await import("chatgpt-official");

  let bot = new ChatGPT(apiKey, options);


  const prompt1 = "hello i am story man can you make story pleas"
  let response = await bot.ask(`${prompt1}`);
  console.log(response);
  let response2 = await bot.ask("now add a dragon to the story")
  console.log(response2)


  app.listen(PORT, () => {
    console.log(`Server available at localhost: ${PORT}`);
  });
}

startServer();
