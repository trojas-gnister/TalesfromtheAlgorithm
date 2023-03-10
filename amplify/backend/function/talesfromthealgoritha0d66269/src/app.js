const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

const secret_name = "CHATGPT-APIKEY";
const client = new SecretsManagerClient({
  region: "us-east-1",
});

let response;
let secret;

client
  .send(
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
    const configuration = new Configuration({
      apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);

    // Enable CORS for all methods
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    });

    // Add API route
    app.get("/completion", async (req, res) => {
      try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          temperature: 0.7,
          max_tokens: 256,
          prompt:
            "Write me a fantasy story about STORYMAN. Make the story 1 paragraph long.",
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
