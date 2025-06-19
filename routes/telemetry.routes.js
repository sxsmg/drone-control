const express = require('express');
const router = express.Router();
const telemetryController = require('../controllers/telemetry.controller');

router.post('/telemetry', telemetryController.ingestTelemetry);
// router.get('/drones/:id/telemetry', telemetryController.getTelemetryByDrone);

module.exports = (app) => app.use(router);
