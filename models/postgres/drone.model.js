const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Drone', {
    name: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING },
    status: {
      type: DataTypes.ENUM('idle', 'active', 'maintenance'),
      defaultValue: 'idle',
    },
  });
};
