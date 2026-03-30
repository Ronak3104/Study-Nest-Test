const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../services/course.service");

const addCourse = async (req, res) => {
  try {
    const course = await createCourse(req.body, req.user.id);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const fetchCourses = async (req, res) => {
  try {
    const courses = await getAllCourses(req.query);
    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const fetchCourse = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const editCourse = async (req, res) => {
  try {
    const course = await updateCourse(req.params.id, req.body);
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const removeCourse = async (req, res) => {
  try {
    await deleteCourse(req.params.id);
    res.json({ success: true, message: "Course deleted" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  addCourse,
  fetchCourses,
  fetchCourse,
  editCourse,
  removeCourse,
};
