const { body } = require('express-validator');

exports.createMissionValidator = [
  body('droneId').isInt().withMessage('droneId must be an integer'),
  body('start_time').isISO8601().toDate().withMessage('Invalid start_time'),
  body('end_time').isISO8601().toDate().withMessage('Invalid end_time'),
  body('location').optional().isString()
];
