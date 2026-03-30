const connectDB = require("../config/db");
const Course = require("../models/Course.model");
const User = require("../models/User.model");

const seedCourses = async () => {
  try {
    await connectDB();
    const admin = await User.findOne({ role: "admin" });
    if (!admin) throw new Error("Admin not found. Run seedAdmin first.");

    await Course.deleteMany({}); // clear existing

    await Course.create([
      {
        title: "Full Stack Web Development",
        description: "Learn MERN stack from scratch",
        instructor: admin._id,
        price: 999,
        duration: "12 weeks",
        isPublished: true,
      },
      {
        title: "Machine Learning Basics",
        description: "Introduction to ML with Python",
        instructor: admin._id,
        price: 1499,
        duration: "8 weeks",
        isPublished: true,
      },
    ]);

    console.log("✅ Sample courses seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedCourses();
