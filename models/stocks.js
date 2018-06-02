module.exports = function(sequelize, DataTypes) {
    var Stock = sequelize.define("Stock", {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Stock;
  };