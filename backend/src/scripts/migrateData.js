const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const User = require('../models/user.model');
const Course = require('../models/Course.model');
const Certificate = require('../models/Certificate.model');

const migrateData = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing in .env');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for migration');

    const userResult = await User.updateMany(
      { isActive: { $exists: false } },
      { $set: { isActive: true } }
    );

    const courseResult = await Course.updateMany(
      { isPublished: { $exists: false } },
      { $set: { isPublished: false } }
    );

    const certificateResult = await Certificate.updateMany(
      { status: { $exists: false } },
      { $set: { status: 'issued' } }
    );

    console.log('Migration completed successfully');
    console.log({
      usersUpdated: userResult.modifiedCount,
      coursesUpdated: courseResult.modifiedCount,
      certificatesUpdated: certificateResult.modifiedCount
    });

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

migrateData();