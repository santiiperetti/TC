const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Carrera', {
    nro_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      allowNull: true,
      references: {
        model: 'Autodromo',
        key: 'id_autodromo'
      }
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Estado',
        key: 'id_estado'
      }
    }
  }, {
    sequelize,
    tableName: 'Carrera',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Carrera__FFD77B9DDCBA28B7",
        unique: true,
        fields: [
          { name: "nro_carrera" },
        ]
      },
    ]
  });
};
