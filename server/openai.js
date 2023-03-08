//.env 
require("dotenv").config();

// express
const express = require("express");
const app = express();


const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const { Configuration, OpenAIApi } = require("openai");

const secret_name = "CHATGPT-APIKEY";

const client = new SecretsManagerClient({
  region: "us-east-1",
});

let response;
let secret;

client.send(
  new GetSecretValueCommand({
    SecretId: secret_name,
    VersionStage: "AWSCURRENT",
  })
)
  .then((data) => {
    response = data;
    secret = response.SecretString;
    const secretObj = JSON.parse(secret);
    const apiKey = secretObj.REACT_APP_BUILD_ENV;
    console.log(apiKey);
    const configuration = new Configuration({
      apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);

    // Add API route
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
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;