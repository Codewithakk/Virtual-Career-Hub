// const express = require('express');
// const router = express.Router();
// const Student = require('../models/Student');

// // GET: /api/students
// router.get('/', async (req, res) => {
//     try {
//         const students = await Student.find();
//         res.json(students);
//     } catch (error) {
//         console.error('Error fetching students:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// module.exports = router;
// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../contollers/student/studentcontroller');

router.post('/register', studentController.registerStudent);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
// Add more routes as needed

module.exports = router;
