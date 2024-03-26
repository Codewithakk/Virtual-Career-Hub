const express = require('express');
const router = express.Router();
const resumeController = require('../contollers/resumeController');

// Route to handle resume building
router.post('/build', resumeController.buildResume);

module.exports = router;
// const express = require('express');
// const router = express.Router();

// // Routes
// router.get('/resume-maker', resumeController.getHome);

// router.get('/resume-maker/:theme', resumeController.getResumeMaker);

// router.post('/resume-maker', resumeController.postResumeMaker);

// router.get('/pdf-static-resume', resumeController.getPdfStaticResume);

// router.get('/download-pdf', resumeController.downloadPdf);

// module.exports = router;
