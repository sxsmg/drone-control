const express = require('express');
const router = express.Router();
const telemetryController = require('../controllers/telemetry.controller');
const { createTelemetryValidator } = require('../validators/telemetry.validator');
const validate = require('../middlewares/validate');

router.post('/telemetry', createTelemetryValidator, validate, telemetryController.ingestTelemetry);

module.exports = (app) => app.use(router);
