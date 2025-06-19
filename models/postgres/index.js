const sequelize = require('../../config/db.postgres');
const Drone = require('./drone.model')(sequelize);
const Mission = require('./mission.model')(sequelize);

Drone.hasMany(Mission, { foreignKey: 'droneId' });
Mission.belongsTo(Drone, { foreignKey: 'droneId' });

module.exports = { sequelize, Drone, Mission };
