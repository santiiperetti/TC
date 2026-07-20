const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sesion_Staging', {
    id_sesion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nro_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_tipo_evento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Sesion_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
