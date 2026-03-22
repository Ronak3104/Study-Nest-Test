const express = require('express');
const {
  getMyProfile,
  updateMyProfile,
  getAllUsers,
  changeUserRole
} = require('../controllers/user.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');
const validate = require('../middlewares/validate.middleware');
const { updateProfileSchema, changeRoleSchema } = require('../validations/user.validation');

const router = express.Router();

router.get('/me', protect, getMyProfile);
router.patch('/me', protect, validate(updateProfileSchema), updateMyProfile);

// admin
router.get('/', protect, allowRoles('admin'), getAllUsers);
router.patch('/:userId/role', protect, allowRoles('admin'), validate(changeRoleSchema), changeUserRole);

module.exports = router;