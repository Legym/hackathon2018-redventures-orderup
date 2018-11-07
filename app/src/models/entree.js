/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Entree', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    VendorID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Calories: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumSides: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ImgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    tableName: 'Entree'
  });
};
