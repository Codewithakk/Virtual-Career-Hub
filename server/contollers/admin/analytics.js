// controllers/analyticsController.js

const TeamMember = require('../../models/TeamMember');
const User = require('../../models/user-model');

exports.getAnalyticsData = async (req, res) => {
  try {
    const studentsCount = await User.countDocuments({ role: 'student' });
    const teamMembersCount = await TeamMember.countDocuments();
    const companiesCount = await User.countDocuments({ role: 'company' });
    const adminCount = await User.countDocuments({ role: 'admin' });

    res.json({
      studentsCount,
      teamMembersCount,
      companiesCount,
      adminCount
    });
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
