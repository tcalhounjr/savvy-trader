module.exports = function(sequelize, DataTypes) {
    var Offerings = sequelize.define("Offerings", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
    },
      trade_symbol: {
      type: DataTypes.STRING,
      allowNull: false     
    },
    
      purchase_price: {
      type: DataTypes.FLOAT,
      defaultValue: 0.00     
    },
  
      current_price: {
      type: DataTypes.FLOAT,
      defaultValue: 0.00     
    },
      complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false     
      }
    });
    return Offerings;
  };