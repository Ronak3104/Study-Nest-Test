const express = require("express");
const router = express.Router();
const {
  fetchAllUsers,
  updateRole,
  fetchAllCertificates,
  removeUser,
} = require("../controllers/admin.controller");
const auth = require("../middlewares/auth.middleware");
const hasRole = require("../middlewares/role.middleware");

router.get("/users", auth, hasRole("admin"), fetchAllUsers);
router.put("/users/:userId/role", auth, hasRole("admin"), updateRole);
router.get("/certificates", auth, hasRole("admin"), fetchAllCertificates);
router.delete("/users/:userId", auth, hasRole("admin"), removeUser);

module.exports = router;
