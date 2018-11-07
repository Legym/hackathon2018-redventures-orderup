/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderSide', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SideID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'OrderSide'
  });
};
