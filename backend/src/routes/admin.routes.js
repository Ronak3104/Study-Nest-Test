const express = require('express');
const { getAdminDashboardData, toggleUserStatus } = require('../controllers/admin.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');

const router = express.Router();

router.get('/dashboard', protect, allowRoles('admin'), getAdminDashboardData);
router.patch('/users/:userId/toggle-status', protect, allowRoles('admin'), toggleUserStatus);

module.exports = router;