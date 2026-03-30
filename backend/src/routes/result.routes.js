const express = require("express");
const router = express.Router();
const { fetchResults } = require("../controllers/result.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/my", auth, fetchResults);

module.exports = router;
