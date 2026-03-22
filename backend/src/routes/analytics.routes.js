const express = require('express');
const { getOverview, getDemographics } = require('../controllers/analytics.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');

const router = express.Router();

// admin only
router.get('/overview', protect, allowRoles('admin'), getOverview);
router.get('/demographics', protect, allowRoles('admin'), getDemographics);

module.exports = router;