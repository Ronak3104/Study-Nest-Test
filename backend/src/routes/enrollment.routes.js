const express = require("express");
const router = express.Router();
const {
  enrollInCourse,
  myEnrollments,
} = require("../controllers/enrollment.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, enrollInCourse);
router.get("/my", auth, myEnrollments);

module.exports = router;
