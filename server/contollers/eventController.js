// server/controllers/eventController.js

const Event = require('../models/Event');

// Controller functions for handling CRUD operations
module.exports = {
    getAllEvents: async (req, res) => {
        try {
            const events = await Event.find();
            res.json(events);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createEvent: async (req, res) => {
        const event = new Event({
            title: req.body.title,
            description: req.body.description,
            start: req.body.start,
            end: req.body.end
        });

        try {
            const newEvent = await event.save();
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Implement updateEvent, deleteEvent, and other controller functions as needed
};
