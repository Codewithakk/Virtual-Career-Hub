// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },

//     // Add further details as needed
// });

// const Student = mongoose.model('Student', studentSchema);

// module.exports = Student;

// models/Student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

  fullName: { type: String, required: true },
  // img: { data: Buffer, contentType: String },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  caste: { type: String },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  currentInstitution: { type: String, required: true },
  degreePursuing: { type: String, required: true },
  yearOfStudy: { type: Number, required: true },
  fieldOfStudy: { type: String, required: true },
  cgpaOrPercentage: { type: Number, required: true },
  resume: { type: String }, 
  technicalSkills: { type: [String] },
  softSkills: { type: [String] },
  workExperience: { type: String },
  linkedInProfile: { type: String },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
