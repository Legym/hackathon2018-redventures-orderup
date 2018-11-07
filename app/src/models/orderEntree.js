/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderEntree', {
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
    EntreeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'OrderEntree'
  });
};
