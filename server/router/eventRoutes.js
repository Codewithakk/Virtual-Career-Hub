// server/routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const eventController = require('../contollers/eventController');

// Routes for handling CRUD operations
router.get('/events', eventController.getAllEvents);
router.post('/events', eventController.createEvent);
// Define other routes for update, delete, etc.

//Displaying events

// Sample list of events (replace this with your actual data)
// const events = [
//     { id: 1, title: 'Event 1', description: 'Description of Event 1' },
//     { id: 2, title: 'Event 2', description: 'Description of Event 2' },
//     { id: 3, title: 'Event 3', description: 'Description of Event 3' }
// ];

// // Route to fetch events
// router.get('/event', (req, res) => {
//     // Assuming events is your array of events
//     res.json(events);
// });

module.exports = router;