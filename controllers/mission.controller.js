const { Mission } = require('../models/postgres');
const { isConflict } = require('../services/mission.service');

exports.scheduleMission = async (req, res) => {
  const { droneId, start_time, end_time } = req.body;

  if (await isConflict(droneId, start_time, end_time)) {
    return res.status(409).json({ error: 'Mission conflict' });
  }

  const mission = await Mission.create(req.body);
  res.status(201).json(mission);
};

exports.getAllMissions = async (_, res) => {
  const missions = await Mission.findAll();
  res.json(missions);
};

exports.getMissionsByDrone = async (req, res) => {
  const missions = await Mission.findAll({ where: { droneId: req.params.id } });
  res.json(missions);
};
