// routes/teamMembersRoutes.js
const express = require('express');
const router = express.Router();
const teamMembersController = require('../../contollers/admin/team_member');

// Get all team members
router.get('/team-members', teamMembersController.getTeamMembers);

// Add a new team member
router.post('/team-members', teamMembersController.addTeamMember);
router.put('/team-members/:id', teamMembersController.updateTeamMember);

// Delete a team member
router.delete('/team-members/:id', teamMembersController.deleteTeamMember);

module.exports = router;