const mongoose = require('mongoose');
const slugify = require('slugify');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Course title is required'],
      trim: true
    },
    slug: {
      type: String,
      unique: true,
      sparse: true
    },
    description: {
      type: String,
      required: [true, 'Course description is required']
    },
    category: {
      type: String,
      trim: true,
      default: 'General'
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    thumbnail: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0,
      min: 0
    },
    duration: {
      type: String,
      default: ''
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner'
    },
    tags: [
      {
        type: String,
        trim: true
      }
    ],
    isPublished: {
      type: Boolean,
      default: false
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    totalEnrollments: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

courseSchema.pre('save', function () {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;