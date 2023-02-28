const express = require("express");
const PORT = process.env.PORT || 3001;

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

  let bot = new ChatGPT("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", options);

  let response = await bot.ask("simulate a hospital enivorment. i have a patient that came in with their ear hurting. what should i do?");
  console.log(response);
  let response2 = await bot.ask("what should i tell the patient")
  console.log(response2)


  let conversationId2 = "another conversation name";
  let response3 = await bot.ask("Hello?", conversationId2);
  console.log(response3);

  app.listen(PORT, () => {
    console.log(`Server available at localhost: ${PORT}`);
  });
}

startServer();
