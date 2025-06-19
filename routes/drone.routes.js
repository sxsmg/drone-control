const express = require('express');
const router = express.Router();
const droneController = require('../controllers/drone.controller');

router.post('/drones', droneController.registerDrone);
router.get('/drones', droneController.getAllDrones);
router.get('/drones/:id', droneController.getDroneById);

module.exports = (app) => app.use(router);
