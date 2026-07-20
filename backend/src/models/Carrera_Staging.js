const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Carrera_Staging', {
    nro_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    temporada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nro_carrera_temporada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_domingo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_autodromo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Carrera_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
