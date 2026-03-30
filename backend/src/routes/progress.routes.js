const express = require("express");
const router = express.Router();
const {
  getCourseProgress,
  updateCourseProgress,
} = require("../controllers/progress.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/course/:courseId", auth, getCourseProgress);
router.put("/course/:courseId", auth, updateCourseProgress);

module.exports = router;
