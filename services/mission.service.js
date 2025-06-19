const { Mission } = require('../models/postgres');
const { Op } = require('sequelize');

exports.isConflict = async (droneId, start, end) => {
  return await Mission.findOne({
    where: {
      droneId,
      [Op.or]: [
        { start_time: { [Op.lt]: end, [Op.gte]: start } },
        { end_time: { [Op.gt]: start, [Op.lte]: end } },
        { start_time: { [Op.lte]: start }, end_time: { [Op.gte]: end } }
      ]
    }
  });
};
