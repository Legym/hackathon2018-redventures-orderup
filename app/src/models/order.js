/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Order', {
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
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LocationID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TotalCost: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Completed: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    tableName: 'Order'
  });
};
