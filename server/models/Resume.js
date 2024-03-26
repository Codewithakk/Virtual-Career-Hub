const mongoose = require('mongoose');

// Define the schema for the resume model
const resumeSchema = new mongoose.Schema({
    personalInfo: Object,
    education: Array,
    workExperience: Array,
    skills: String,
    languages: String,
    certifications: String
});

// Create and export the Resume model
module.exports = mongoose.model('Resume', resumeSchema);
