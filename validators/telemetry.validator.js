const { body } = require('express-validator');

exports.createTelemetryValidator = [
  body('droneId').notEmpty().withMessage('droneId is required'),
  body('latitude').isFloat({ min: -90, max: 90 }).withMessage('Invalid latitude'),
  body('longitude').isFloat({ min: -180, max: 180 }).withMessage('Invalid longitude'),
  body('battery').isInt({ min: 0, max: 100 }).withMessage('Battery must be between 0-100'),
  body('timestamp').optional().isISO8601().toDate()
];
