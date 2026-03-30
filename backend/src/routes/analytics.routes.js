const express = require("express");
const router = express.Router();
const {
  dashboardStats,
  demographics,
} = require("../controllers/analytics.controller");
const auth = require("../middlewares/auth.middleware");
const hasRole = require("../middlewares/role.middleware");

router.get("/dashboard", auth, hasRole("admin"), dashboardStats);
router.get("/demographics", auth, hasRole("admin"), demographics);

module.exports = router;
