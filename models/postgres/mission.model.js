const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Mission', {
    start_time: { type: DataTypes.DATE, allowNull: false },
    end_time: { type: DataTypes.DATE, allowNull: false },
    location: { type: DataTypes.STRING },
  });
};
