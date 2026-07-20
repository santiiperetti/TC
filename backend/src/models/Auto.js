const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Auto', {
    id_auto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_modelo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Modelo',
        key: 'id_modelo'
      }
    },
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Equipo',
        key: 'id_equipo'
      }
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
    tableName: 'Auto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Auto__B191F5E668AF79A0",
        unique: true,
        fields: [
          { name: "id_auto" },
        ]
      },
    ]
  });
};
