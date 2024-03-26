// In your backend routes

const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// GET: /api/jobs/:id
router.get('/:id', async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        console.error('Error fetching job details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
