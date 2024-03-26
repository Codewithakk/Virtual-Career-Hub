const TeamMember = require("../../models/TeamMember");

// Get all team members
exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new team member
exports.addTeamMember = async (req, res) => {
  const { name, position, bio } = req.body;
  try {
    const newMember = new TeamMember({
      name,
      position,
      bio
    });
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a team member
exports.updateTeamMember = async (req, res) => {
  const memberId = req.params.id;
  const { name, position, bio} = req.body;
  try {
    const updatedMember = await TeamMember.findByIdAndUpdate(memberId, {
      name,
      position,
      bio
    }, { new: true });
    res.json(updatedMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a team member
exports.deleteTeamMember = async (req, res) => {
  const memberId = req.params.id;
  try {
    await TeamMember.findByIdAndDelete(memberId);
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
