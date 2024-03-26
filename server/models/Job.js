const mongoose = require('mongoose');

// Define the schema for the Job model
const jobSchema = new mongoose.Schema({
  title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: false
      },
      salary: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: true
      },
      requirements: {
        type: String,
        required: true
      },
      responsibilities: {
        type: String,
        required: true
      },
      skills: {
        type: String,
        required: true
      },
      deadline: {
        type: Date,
        required: true
      },
      email: {
          type: String,
          required: true
        },
      postedDate: {
        type: Date,
        default: Date.now
      },
      positionType: {
        type: String,
        enum: ['Full-time', 'Internship', 'Part-time'],
        required: true
      },
      duration: {
        type: String,
        required: false
      },
      linkedin: {
        type: String,
        required: false
      },
      website: {
        type: String,
        required: false
      },
      appliedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]  // students who have applied for this job
    });

// Create and export the Job model
module.exports = mongoose.model('Job', jobSchema);


// const mongoose = require('mongoose');

// // Define the schema for the Job model
// const jobSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   company: {
//     type: String,
//     required: true
//   },
//   location: {
//     type: String,
//     required: false
//   },
//   salary: {
//     type: String,
//     required: false
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   requirements: {
//     type: String,
//     required: true
//   },
//   responsibilities: {
//     type: String,
//     required: true
//   },
//   skills: {
//     type: String,
//     required: true
//   },
//   deadline: {
//     type: Date,
//     required: true
//   },
//   email: {
//       type: String,
//       required: true
//     },
//   postedDate: {
//     type: Date,
//     default: Date.now
//   },
//   positionType: {
//     type: String,
//     enum: ['Full-time', 'Internship', 'Part-time'],
//     required: true
//   },
//   duration: {
//     type: String,
//     required: false
//   },
//   linkedin: {
//     type: String,
//     required: false
//   },
//   website: {
//     type: String,
//     required: false
//   }
// });

// // Create and export the Job model
// module.exports = mongoose.model('Job', jobSchema);
