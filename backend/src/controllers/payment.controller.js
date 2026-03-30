const { createPaymentSession } = require("../services/stripe.service");

const createPaymentSessionController = async (req, res) => {
  try {
    const { courseId, price, courseName } = req.body;
    const sessionUrl = await createPaymentSession(
      req.user.id,
      req.user.email,
      courseId,
      price,
      courseName,
    );
    res.json({ success: true, url: sessionUrl });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createPaymentSessionController };
