const express = require('express');
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addLesson
} = require('../controllers/course.controller');

const { protect } = require('../middlewares/auth.middleware');
const allowRoles = require('../middlewares/role.middleware');
const validate = require('../middlewares/validate.middleware');
const { createCourseSchema, updateCourseSchema, addLessonSchema } = require('../validations/course.validation');

const router = express.Router();

// public
router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);

// instructor/admin
router.post('/', protect, allowRoles('instructor', 'admin'), validate(createCourseSchema), createCourse);
router.patch('/:courseId', protect, allowRoles('instructor', 'admin'), validate(updateCourseSchema), updateCourse);
router.delete('/:courseId', protect, allowRoles('instructor', 'admin'), deleteCourse);

// lessons
router.post('/:courseId/lessons', protect, allowRoles('instructor', 'admin'), validate(addLessonSchema), addLesson);

module.exports = router;