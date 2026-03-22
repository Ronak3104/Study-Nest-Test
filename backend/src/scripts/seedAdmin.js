const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const User = require('../models/user.model');

const seedAdmin = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing in .env');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for admin seeding');

    const existingAdmin = await User.findOne({ email: 'admin@studynest.com' });

    if (existingAdmin) {
      console.log('Admin already exists');
      await mongoose.connection.close();
      process.exit(0);
    }

    const admin = new User({
      name: 'StudyNest Admin',
      email: 'admin@studynest.com',
      password: 'Admin@123',
      role: 'admin',
      gender: 'prefer_not_to_say',
      country: 'India',
      isActive: true
    });

    await admin.save();

    console.log('Admin created successfully');
    console.log('Login credentials:');
    console.log({
      email: 'admin@studynest.com',
      password: 'Admin@123'
    });

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedAdmin();