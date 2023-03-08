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
