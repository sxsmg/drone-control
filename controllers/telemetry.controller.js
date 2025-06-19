const { emptyQuery } = require("pg-protocol/dist/messages.js");
const Telemetry = require("../models/mongo/telemetry.model");
const { broadcastTelemetry } = require("../websocket/telemetry.ws");

exports.ingestTelemetry = async (req, res) => {
  try {
    const telemetry = await Telemetry.create(req.body);
    broadcastTelemetry(req.body.droneId, telemetry);
    res.status(201).json(telemetry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
