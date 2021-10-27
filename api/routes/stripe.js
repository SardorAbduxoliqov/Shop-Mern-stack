const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51IspusCBAU79yaYIIut6Ozz8LQmql9dvDOWRSXOCrnpd1llJfFHIvxsH99sj6CeXB0HQ4Ug3N3zOCZWk5qZvQKMV0091dugmpX"
);
// (process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
