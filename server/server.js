require('dotenv').config({path: '../.env'})
const apiKey = process.env.API_KEY;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server");
const typeDefs = require('./graphQL/typeDefs');
const User = require('./models/User');
const  resolvers  = require("./graphQL/resolvers");
const PORT = process.env.PORT || 3001;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  })
})

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await Stripe.PaymentIntentsResource.create({
    currency: 'usd',
    amount: 1999,
    automatic_payment_methods: {
      enabled: true,
    },
  })
  res.send({ clientSecret: paymentIntent.client_secret })
})

async function startServer() {
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
}

startServer().then (() => {
  mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/algoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
    server.listen({ port: 5000 }).then((res) => {
      console.log(`Server running at ${res.url}`);
    });
  });
  
  app.listen(PORT, () => {
    console.log(
      `
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

// add addUser mutation resolver
const Mutation = {
  addUser: async (_, args) => {
    const { username, password } = args;
    const user = new User({ username, password });
    await user.save();
    return user;
  },
};

module.exports = { server, Mutation };
