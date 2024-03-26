// jobPostingsMiddleware.js

const { isAdmin } = require('./authMiddleware');

// Middleware function to check if the user is allowed to perform job posting operations
const canManageJobPostings = (req, res, next) => {
    // Check if the user is an admin
    if (req.userRole !== 'admin') {
        return res.status(403).json({ message: 'Forbidden. Admin access required' });
    }
    next();
};

module.exports = { canManageJobPostings };
