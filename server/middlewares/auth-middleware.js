// const jwt = require("jsonwebtoken");
// const User = require("../models/user-model");

// const authMiddleware = async (req, res, next) => {
//     const token = req.header("Authorization");

//     if (!token) {
//         return res.status(401).json({ message: "Unauthorized. Token not provided" });
//     }

//     const jwtToken = token.replace("Bearer ", "").trim(); // Correctly parse token
//     try {
//         const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
//         const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });

//         if (!userData) {
//             return res.status(401).json({ message: "Unauthorized. User not found" });
//         }

//         req.user = userData;
//         req.token = token;
//         req.userID = userData._id;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: "Unauthorized. Invalid token" });
//     }
// };

// module.exports = authMiddleware;

const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized. Token not provided" });
    }

    try {
        const jwtToken = token.replace("Bearer ", "").trim();
        const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await User.findOne({ _id: decodedToken.userId }).select({ password: 0 });

        if (!userData) {
            return res.status(401).json({ message: "Unauthorized. User not found" });
        }

        req.user = userData;
        req.token = jwtToken;
        req.userId = decodedToken.userId;
        req.userRole = decodedToken.role;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized. Invalid token" });
    }
};

module.exports = authMiddleware;
