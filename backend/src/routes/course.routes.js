const express = require("express");
const router = express.Router();
const {
  addCourse,
  fetchCourses,
  fetchCourse,
  editCourse,
  removeCourse,
} = require("../controllers/course.controller");
const auth = require("../middlewares/auth.middleware");
const hasRole = require("../middlewares/role.middleware");

router.get("/", fetchCourses);
router.get("/:id", fetchCourse);
router.post("/", auth, hasRole("teacher", "admin"), addCourse);
router.put("/:id", auth, hasRole("teacher", "admin"), editCourse);
router.delete("/:id", auth, hasRole("teacher", "admin"), removeCourse);

module.exports = router;
