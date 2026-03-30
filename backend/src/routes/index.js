const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const courseRoutes = require("./course.routes");
const enrollmentRoutes = require("./enrollment.routes");
const assignmentRoutes = require("./assignment.routes");
const submissionRoutes = require("./submission.routes");
const quizRoutes = require("./quiz.routes");
const resultRoutes = require("./result.routes");
const attendanceRoutes = require("./attendance.routes");
const progressRoutes = require("./progress.routes");
const certificateRoutes = require("./certificate.routes");
const reviewRoutes = require("./review.routes");
const analyticsRoutes = require("./analytics.routes");
const adminRoutes = require("./admin.routes");
const uploadRoutes = require("./upload.routes");
const paymentRoutes = require("./payment.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/assignments", assignmentRoutes);
router.use("/submissions", submissionRoutes);
router.use("/quizzes", quizRoutes);
router.use("/results", resultRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/progress", progressRoutes);
router.use("/certificates", certificateRoutes);
router.use("/reviews", reviewRoutes);
router.use("/analytics", analyticsRoutes);
router.use("/admin", adminRoutes);
router.use("/upload", uploadRoutes);
router.use("/payment", paymentRoutes);

module.exports = router;
