const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Autodromo_Staging', {
    id_autodromo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Autodromo_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
