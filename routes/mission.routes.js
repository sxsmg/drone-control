const express = require('express');
const router = express.Router();
const missionController = require('../controllers/mission.controller');

router.post('/missions', missionController.scheduleMission);
router.get('/missions', missionController.getAllMissions);
router.get('/drones/:id/missions', missionController.getMissionsByDrone);

module.exports = (app) => app.use(router);
