/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Side', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LocationID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    VendorID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Calories: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ImgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'Side'
  });
};
