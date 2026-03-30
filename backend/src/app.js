// src/app.js
require("./config/env"); // ← Load .env only once at the very top

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");
const connectCloudinary = require("./config/cloudinary");
const corsOptions = require("./config/corsOptions");
const { apiLimiter } = require("./middlewares/rateLimit.middleware");
const errorHandler = require("./middlewares/error.middleware");
const routes = require("./routes/index");

const app = express();

// Security & Logging
app.use(helmet());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use("/api", apiLimiter);

// Connect Database & Cloudinary
connectDB();
connectCloudinary();

// API Routes
app.use("/api", routes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;
