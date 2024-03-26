const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// POST: /api/jobs
router.post('/', async (req, res) => {
    try {
        const { title, description, requirements } = req.body;
        const job = new Job({ title, description, requirements });
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        console.error('Error posting job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
