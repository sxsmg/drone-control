const Telemetry = require('../models/mongo/telemetry.model');

exports.ingestTelemetry = async (req, res) => {
  try {
    const telemetry = await Telemetry.create(req.body);
    res.status(201).json(telemetry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
