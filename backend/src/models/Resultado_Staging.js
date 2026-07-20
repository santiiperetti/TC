const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Resultado_Staging', {
    id_resultado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_sesion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_piloto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_auto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    posicion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    puntos: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Resultado_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
