// src/config/stripe.js
const stripe = require("stripe");

const createCheckoutSession = async (
  customerEmail,
  lineItems,
  successUrl,
  cancelUrl,
) => {
  // Safety check
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("❌ STRIPE_SECRET_KEY is missing in your .env file");
  }

  const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

  return await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: customerEmail,
    line_items: lineItems,
    success_url: successUrl,
    cancel_url: cancelUrl,
  });
};

module.exports = { createCheckoutSession };
