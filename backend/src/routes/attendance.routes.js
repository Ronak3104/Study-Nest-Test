const express = require("express");
const router = express.Router();
const {
  mark,
  getMyAttendance,
} = require("../controllers/attendance.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, mark);
router.get("/course/:courseId", auth, getMyAttendance);

module.exports = router;
