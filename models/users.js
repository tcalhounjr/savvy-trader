  module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
    },
    
      risk_affinity: {
      type: DataTypes.INTEGER,
      defaultValue: 5     
    },
  
      age: {
      type: DataTypes.INTEGER,
      defaultValue: 21     
    },
      complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false     
      }
    });
    return User;
  };

