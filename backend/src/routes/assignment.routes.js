const express = require('express');
const {
  createAssignment,
  getAssignmentsByCourse,
  getAssignmentById
} = require('../controllers/assignment.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');
const validate = require('../middlewares/validate.middleware');
const { createAssignmentSchema } = require('../validations/assignment.validation');

const router = express.Router();

// instructor/admin create
router.post('/', protect, allowRoles('instructor', 'admin'), validate(createAssignmentSchema), createAssignment);

// course assignments
router.get('/course/:courseId', protect, getAssignmentsByCourse);

// single
router.get('/:assignmentId', protect, getAssignmentById);

module.exports = router;