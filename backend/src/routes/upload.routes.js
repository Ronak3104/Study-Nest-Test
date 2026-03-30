const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");
const { uploadFile } = require("../controllers/upload.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, upload.single("file"), uploadFile);

module.exports = router;
