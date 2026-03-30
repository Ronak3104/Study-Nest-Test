const express = require("express");
const router = express.Router();
const {
  addAssignment,
  getCourseAssignments,
} = require("../controllers/assignment.controller");
const auth = require("../middlewares/auth.middleware");
const hasRole = require("../middlewares/role.middleware");

router.post("/", auth, hasRole("teacher", "admin"), addAssignment);
router.get("/course/:courseId", auth, getCourseAssignments);

module.exports = router;
