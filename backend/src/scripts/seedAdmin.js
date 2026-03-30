const connectDB = require("../config/db");
const User = require("../models/User.model");

const seedAdmin = async () => {
  try {
    await connectDB();
    const existing = await User.findOne({ email: "admin@studynest.com" });
    if (existing) {
      console.log("✅ Admin already exists");
      process.exit(0);
    }

    await User.create({
      name: "Pranjali Patil",
      email: "admin@studynest.com",
      password: "Admin@123",
      role: "admin",
    });

    console.log("✅ Admin user seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();
