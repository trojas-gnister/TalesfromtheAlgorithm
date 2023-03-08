const apiKey = process.env.KEY;
require("dotenv").config();

// mongoDB Database connect
const mongoDB_connect = require("./config/db/connection.js");

// Apollo & GraphQL
const { typeDefs, resolvers } = require("./graphQL");

// express
const express = require("express");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const app = express();
//.router(); once routes are finished then can uncomment or else error will ensue

// vroom_vroom-express-initialize
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// connect to Apollo
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
  // initialize ChatGPT after ApolloServer is ready
  initializeChatGPT();
});

// stripe
app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await Stripe.PaymentIntentsResource.create({
    currency: "usd",
    amount: 1999,
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// connects port
app.listen(PORT, () => {
  mongoDB_connect();
  console.log(`
    ==============================
    "Online at ${PORT}, Server is."
                __.-._
                '-._"7'
                  /'.-c
                  |  /T
                _)_/LI
    ==============================
     ==============================
    "Online at ${PORT}, Server MEOW."

            /\\_/\\
            ( o o )
           ==( I )==
             /_ \_

    ==============================
  `);
});
