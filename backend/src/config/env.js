// src/config/env.js
require("dotenv").config();

const required = [
  "MONGO_URI",
  "JWT_SECRET",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "STRIPE_SECRET_KEY",
];

required.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`);
    console.error("Please check your .env file");
    process.exit(1);
  }
});

console.log("✅ All environment variables loaded successfully");
module.exports = process.env;
