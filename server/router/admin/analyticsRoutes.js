// routes/analyticsRoutes.js

const express = require('express');
const router = express.Router();
const analyticsController = require('../../contollers/admin/analytics');

router.get('/', analyticsController.getAnalyticsData);

module.exports = router;
