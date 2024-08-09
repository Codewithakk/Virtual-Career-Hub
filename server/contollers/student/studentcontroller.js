const Student = require('../../models/Studentmodel');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

// // Configure multer for file uploads
// const upload = multer({
//     dest: 'uploads/', // Directory to store uploaded files
//     limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
//     fileFilter: (req, file, cb) => {
//         // Accept only pdf, doc, and docx files
//         const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//         if (!allowedTypes.includes(file.mimetype)) {
//             return cb(new Error('Invalid file type'), false);
//         }
//         cb(null, true);
//     }
// });

// // Register a new student
// exports.registerStudent = async (req, res) => {
//     try {
//         // Handle file upload
//         if (req.file) {
//             req.body.resume = req.file.path;
//         }

//         const student = new Student(req.body);
//         await student.save();
//         res.status(201).json(student);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Get student by ID
// exports.getStudentById = async (req, res) => {
//     try {
//         const student = await Student.findById(req.params.id);
//         if (!student) {
//             return res.status(404).json({ message: 'Student not found' });
//         }
//         res.json(student);
//     } catch (error) {
//         res.status(404).json({ message: 'Student not found' });
//     }
// };

// // Update an existing student
// exports.updateStudent = async (req, res) => {
//     try {
//         // Handle file upload
//         if (req.file) {
//             req.body.resume = req.file.path;
//         }

//         const { id } = req.params;
//         const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });

//         if (!updatedStudent) {
//             return res.status(404).json({ message: 'Student not found' });
//         }
//         res.json(updatedStudent);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Middleware to handle file uploads
// exports.uploadFile = upload.single('resume');

// controllers/studentController.js

// controllers/studentController.js

// Generate a new unique studentID (This is a basic example; you might want a more robust solution)
const getNextStudentID = async () => {
  const lastStudent = await Student.findOne().sort({ studentID: -1 });
  return lastStudent ? lastStudent.studentID + 1 : 1;
};

exports.registerStudent = async (req, res) => {
  try {
    const nextStudentID = await getNextStudentID();
    const student = new Student({ ...req.body, studentID: nextStudentID });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({ studentID: Number(req.params.id) });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(404).json({ message: 'Student not found' });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate({ studentID: Number(req.params.id) }, req.body, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
