const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentapplySchema = new Schema({
  name: String,
  email: String,
  jobId: { type: Schema.Types.ObjectId, ref: 'Job' } // Reference to the job applied for
});

module.exports = mongoose.model('Studentapply', studentapplySchema);
