const Job = require('../../models/Job');
const Student = require('../../models/company/studentapply');

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('appliedStudents');
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching job details:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.applyForJob = async (req, res) => {
  const { jobId, name, email } = req.body;
  if (!jobId || !name || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const student = new Student({ name, email, jobId });
    await student.save();

    job.appliedStudents.push(student._id);
    await job.save();

    res.json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error('Error submitting application:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
