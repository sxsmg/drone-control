const express = require('express');
const router = express.Router();
const missionController = require('../controllers/mission.controller');
const { createMissionValidator } = require('../validators/mission.validator');
const validate = require('../middlewares/validate');

router.post('/missions', createMissionValidator, validate, missionController.scheduleMission);
router.get('/missions', missionController.getAllMissions);
router.get('/drones/:id/missions', missionController.getMissionsByDrone);

module.exports = (app) => app.use(router);
