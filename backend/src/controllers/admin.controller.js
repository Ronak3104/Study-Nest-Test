const {
  getAllUsers,
  changeUserRole,
  getAllCertificatesAdmin,
  deleteUser,
} = require("../services/admin.service");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const user = await changeUserRole(req.params.userId, req.body.role);
    res.json({ success: true, message: "Role updated", data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const fetchAllCertificates = async (req, res) => {
  try {
    const certs = await getAllCertificatesAdmin();
    res.json({ success: true, data: certs });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    await deleteUser(req.params.userId);
    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  fetchAllUsers,
  updateRole,
  fetchAllCertificates,
  removeUser,
};
