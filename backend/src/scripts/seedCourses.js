const mongoose = require('mongoose');
const dotenv = require('dotenv');
const slugify = require('slugify');

dotenv.config();

const User = require('../models/user.model');
const Course = require('../models/Course.model');
const Lesson = require('../models/Lesson.model');

const seedCourses = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing in .env');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for course seeding');

    let instructor = await User.findOne({ email: 'instructor@studynest.com' });

    if (!instructor) {
      instructor = new User({
        name: 'Demo Instructor',
        email: 'instructor@studynest.com',
        password: 'Instructor@123',
        role: 'instructor',
        gender: 'prefer_not_to_say',
        country: 'India',
        isActive: true
      });

      await instructor.save();
      console.log('Demo instructor created');
    }

    await Lesson.deleteMany({});
    await Course.deleteMany({});

    const courseData = [
      {
        title: 'React for Beginners',
        slug: slugify('React for Beginners', { lower: true, strict: true }),
        description:
          'Learn the fundamentals of React including components, props, state, hooks, and routing.',
        category: 'Web Development',
        instructor: instructor._id,
        price: 0,
        duration: '6 weeks',
        level: 'beginner',
        tags: ['react', 'javascript', 'frontend'],
        isPublished: true
      },
      {
        title: 'Node.js and Express Masterclass',
        slug: slugify('Node.js and Express Masterclass', {
          lower: true,
          strict: true
        }),
        description:
          'Build REST APIs using Node.js, Express, MongoDB, authentication, and deployment.',
        category: 'Backend Development',
        instructor: instructor._id,
        price: 499,
        duration: '8 weeks',
        level: 'intermediate',
        tags: ['nodejs', 'express', 'mongodb'],
        isPublished: true
      },
      {
        title: 'MongoDB Atlas Complete Guide',
        slug: slugify('MongoDB Atlas Complete Guide', {
          lower: true,
          strict: true
        }),
        description:
          'Understand NoSQL databases, MongoDB Atlas, schema design, indexing, and aggregation.',
        category: 'Database',
        instructor: instructor._id,
        price: 299,
        duration: '4 weeks',
        level: 'beginner',
        tags: ['mongodb', 'atlas', 'database'],
        isPublished: true
      }
    ];

    const courses = await Course.insertMany(courseData);

    const lessons = [
      {
        courseId: courses[0]._id,
        title: 'Introduction to React',
        description: 'Overview of React and component-based architecture.',
        youtubeUrl: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
        order: 1,
        duration: '15 min',
        isPreview: true
      },
      {
        courseId: courses[0]._id,
        title: 'React Components and Props',
        description: 'Learn about reusable components and props.',
        youtubeUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        order: 2,
        duration: '20 min',
        isPreview: false
      },
      {
        courseId: courses[1]._id,
        title: 'Getting Started with Node.js',
        description: 'Node.js basics and runtime environment.',
        youtubeUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
        order: 1,
        duration: '18 min',
        isPreview: true
      },
      {
        courseId: courses[1]._id,
        title: 'Building APIs with Express',
        description: 'Introduction to Express.js and routing.',
        youtubeUrl: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
        order: 2,
        duration: '22 min',
        isPreview: false
      },
      {
        courseId: courses[2]._id,
        title: 'Introduction to MongoDB Atlas',
        description: 'Learn how to use MongoDB Atlas cloud database.',
        youtubeUrl: 'https://www.youtube.com/watch?v=ofme2o29ngU',
        order: 1,
        duration: '16 min',
        isPreview: true
      }
    ];

    await Lesson.insertMany(lessons);

    console.log('Courses and lessons seeded successfully');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding courses:', error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

seedCourses();