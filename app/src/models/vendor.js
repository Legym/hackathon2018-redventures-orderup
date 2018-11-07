/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vendor', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Vendor'
  });
};
