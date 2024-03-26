const express = require('express');
const router = express.Router();

// Import your Job Portal controller or functionality
const jobPortalController = require('../contollers/jobportal-controller');

const jobController = require('../contollers/company/studentapplycontroller');

// Define routes for Job Portal
router.get('/jobs', jobPortalController.getAllJobs);
router.post('/jobs', jobPortalController.createJob);
router.delete('/jobs/:id', jobPortalController.deleteJob);
router.put('/jobs/:id', jobPortalController.updateJob);

router.get('/jobs', jobController.getAllJobs);
router.post('/apply', jobController.applyForJob);


module.exports = router;
