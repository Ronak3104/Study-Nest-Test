const express = require("express");
const router = express.Router();
const {
  getMyProfile,
  updateMyProfile,
} = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/profile", auth, getMyProfile);
router.put("/profile", auth, updateMyProfile);

module.exports = router;
