require("dotenv").config();
const apiKey = process.env.KEY;
const { default: ChatGPT } = await import("chatgpt-official");

const generateStoryResponse = async (userInput, conversationId) => {
  let apiKey = process.env.KEY;
  let options =
  {
    temperature: 1.0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    instructions: `If you had a chance to embark on an epic adventure...`,
    model: "text-ada-001",
    stop: "",
  }
  let chatGPT = new ChatGPT(apiKey, options);
  let response = await bot.ask(userInput, conversationId);
  return response.data[0].text;
};

module.exports = generateStoryResponse;


// exports a new function `generateChatResponse` that takes in `userInput` (text entered by the user) and `conversationId` as arguments, and returns the generated response text from the ChatGPT bot.