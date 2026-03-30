const express = require("express");
const router = express.Router();
const {
  issueCertificate,
  getMyCertificates,
} = require("../controllers/certificate.controller");
const auth = require("../middlewares/auth.middleware");
const hasRole = require("../middlewares/role.middleware");

router.post("/issue", auth, hasRole("teacher", "admin"), issueCertificate);
router.get("/my", auth, getMyCertificates);

module.exports = router;
