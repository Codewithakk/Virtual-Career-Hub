const user = require("../models/user-model");

const isAdmin = (req, res, next) => {
    // Assuming you have a property like req.user.role to determine the user's role
    if (req.user && req.user.isAdmin === 'admin') {
        next(); // User is an admin, proceed to the next middleware
    } else {
        return res.status(403).json({ message: "Forbidden. Access denied." });
    }
};

module.exports = isAdmin;
