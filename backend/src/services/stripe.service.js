const { createCheckoutSession } = require("../config/stripe");
const Payment = require("../models/Payment.model");
const ApiError = require("../utils/ApiError");

const createPaymentSession = async (
  userId,
  customerEmail,
  courseId,
  price,
  courseName,
) => {
  const lineItems = [
    {
      price_data: {
        currency: "inr",
        product_data: { name: courseName || "Course Enrollment" },
        unit_amount: Math.round(price * 100),
      },
      quantity: 1,
    },
  ];

  const session = await createCheckoutSession(
    customerEmail,
    lineItems,
    `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    `${process.env.FRONTEND_URL}/courses`,
  );

  await Payment.create({
    user: userId,
    course: courseId,
    amount: price,
    stripeSessionId: session.id,
    status: "pending",
  });

  return session.url;
};

module.exports = { createPaymentSession };
