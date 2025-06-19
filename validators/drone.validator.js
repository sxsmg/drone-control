const { body } = require('express-validator');

exports.createDroneValidator = [
  body('name').notEmpty().withMessage('Drone name is required'),
  body('model').optional().isString(),
  body('status')
    .optional()
    .isIn(['idle', 'active', 'maintenance'])
    .withMessage('Invalid drone status')
];
