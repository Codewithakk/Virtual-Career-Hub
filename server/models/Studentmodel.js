// models/Studentmodel.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentID: { type: Number, unique: true },
    fullName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String },
    caste: { type: String },
    address: { type: String },
    city: { type: String },
    stateProvince: { type: String },
    country: { type: String },
    postalCode: { type: String },
    currentInstitution: { type: String },
    degreePursuing: { type: String },
    yearOfStudy: { type: String },
    fieldOfStudy: { type: String },
    cgpaOrPercentage: { type: String },
    resume: { type: String },
    technicalSkills: { type: String },
    softSkills: { type: String },
    workExperience: { type: String },
    linkedInProfile: { type: String }
});

module.exports = mongoose.model('Student', studentSchema);
