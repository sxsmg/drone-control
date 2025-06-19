const express = require('express');
const router = express.Router();
const droneController = require('../controllers/drone.controller');
const { createDroneValidator } = require('../validators/drone.validator');
const validate = require('../middlewares/validate');

router.post('/drones', createDroneValidator, validate, droneController.registerDrone);
router.get('/drones', droneController.getAllDrones);
router.get('/drones/:id', droneController.getDroneById);

module.exports = (app) => app.use(router);
