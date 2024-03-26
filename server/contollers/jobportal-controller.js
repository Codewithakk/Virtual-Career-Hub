// controllers/jobportal-controller.js

// Import any necessary models or modules
const Job = require('../models/Job');

// Controller functions for Job Portal functionality

// Controller function to get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new job
const createJob = async (req, res) => {
  const job = new Job({
    title: req.body.title,
    company: req.body.company,
    location: req.body.location,
    salary: req.body.salary,
    description: req.body.description,
    requirements: req.body.requirements,
    responsibilities: req.body.responsibilities,
    skills: req.body.skills,
    deadline: req.body.deadline,
    
      //name: req.body.contact.name,
      email: req.body.email,
     // phone: req.body.contact.phone
    
    positionType: req.body.positionType,
    duration: req.body.duration,
    linkedin: req.body.linkedin,
    website: req.body.website
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a job by ID
const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update
const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updatedJob = req.body;

    const result = await Job.findByIdAndUpdate(jobId, updatedJob, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json(result);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllJobs,
  createJob,
  deleteJob,
  updateJob
};
