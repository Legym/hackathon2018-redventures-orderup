/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderDrink', {
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
    DrinkID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'OrderDrink'
  });
};
