const mongoose = require('mongoose');

const telemetrySchema = new mongoose.Schema({
  droneId: { type: String, required: true }, // Store drone ID from PostgreSQL
  latitude: Number,
  longitude: Number,
  battery: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Telemetry', telemetrySchema);
