const express = require("express");
const router = express.Router();
const {
  createPaymentSessionController,
} = require("../controllers/payment.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/create-session", auth, createPaymentSessionController);

module.exports = router;
