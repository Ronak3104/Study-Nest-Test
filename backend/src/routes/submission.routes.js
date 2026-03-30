const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");
const {
  submit,
  getAllSubmissions,
} = require("../controllers/submission.controller");
const auth = require("../middlewares/auth.middleware");
const hasRole = require("../middlewares/role.middleware");

router.post("/", auth, upload.single("file"), submit);
router.get(
  "/assignment/:assignmentId",
  auth,
  hasRole("teacher", "admin"),
  getAllSubmissions,
);

module.exports = router;
