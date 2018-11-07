/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderEntreeSide', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OrderEntreeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SideID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'OrderEntreeSide'
  });
};
