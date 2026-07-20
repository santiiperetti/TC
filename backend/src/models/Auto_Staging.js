const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Auto_Staging', {
    id_auto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_modelo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    temporada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url_foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    numeracion: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Auto_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
