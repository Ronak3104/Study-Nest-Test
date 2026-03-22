const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    certificateNumber: {
      type: String,
      required: true,
      unique: true
    },
    issuedAt: {
      type: Date,
      default: Date.now
    },
    certificateUrl: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['issued', 'revoked'],
      default: 'issued'
    }
  },
  {
    timestamps: true
  }
);

certificateSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate;