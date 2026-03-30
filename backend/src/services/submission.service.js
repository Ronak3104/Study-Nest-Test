const Submission = require("../models/Submission.model");
const { uploadToCloudinary } = require("./cloudinary.service");

const submitAssignment = async (studentId, assignmentId, file) => {
  const uploaded = await uploadToCloudinary(file);
  return await Submission.create({
    assignment: assignmentId,
    student: studentId,
    fileUrl: uploaded.secure_url,
  });
};

const getSubmissions = async (assignmentId) => {
  return await Submission.find({ assignment: assignmentId }).populate(
    "student",
    "name",
  );
};

module.exports = { submitAssignment, getSubmissions };
