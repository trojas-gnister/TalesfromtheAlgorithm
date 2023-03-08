require("dotenv").config();
const key = process.env.API_KEY;

// mongoDB Database connect
const mongoDB_connect = require("./config/db/connection.js");

// graphQL - apollo - tools
const { apolloServerExpress, typeDefs, resolvers } = require("./graphQL");
const graphQL = apolloServerExpress({ typeDefs, resolvers });

// express
const express = require("express");
// const router = require("express-router")
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const app = express()
  //.router(); once routes are finished then can uncomment or else error will ensue

// vroom_vroom-express-initialize
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  })
})

app.post("/create-payment-intent", async (req, res) =>
{
  const paymentIntent = await Stripe.PaymentIntentsResource.create({
    currency: 'usd',
    amount: 1999,
    automatic_payment_methods: {
      enabled: true,
    },
  })
  res.send({ clientSecret: paymentIntent.client_secret })
})