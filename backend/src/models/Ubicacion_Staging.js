const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ubicacion_Staging', {
    id_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id_ubicacion_padre: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Ubicacion_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
