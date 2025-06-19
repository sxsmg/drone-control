const { Drone } = require('../models/postgres');

exports.registerDrone = async (req, res) => {
  try {
    const drone = await Drone.create(req.body);
    res.status(201).json(drone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllDrones = async (_, res) => {
  const drones = await Drone.findAll();
  res.json(drones);
};

exports.getDroneById = async (req, res) => {
  const drone = await Drone.findByPk(req.params.id);
  drone ? res.json(drone) : res.status(404).json({ error: 'Not found' });
};
