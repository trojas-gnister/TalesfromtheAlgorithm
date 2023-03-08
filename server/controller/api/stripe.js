// stripe
app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});
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


// app.post("/charge", async (req, res) => {
//   try {
//     let { status } = await stripe.charges.create({
//       amount: 2000,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body.token,
//     });

//     res.json({ status });
//   } catch (err) {
//     console.log(err);
//     res.status(500).end();
//   }
// });

