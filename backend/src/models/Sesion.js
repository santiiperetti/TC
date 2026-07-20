const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sesion', {
    id_sesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nro_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Carrera',
        key: 'nro_carrera'
      }
    },
    id_tipo_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TipoEvento',
        key: 'id_tipo_evento'
      }
    },
    nombre: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Sesion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Sesion__8D3F9DFEC861C64C",
        unique: true,
        fields: [
          { name: "id_sesion" },
        ]
      },
    ]
  });
};
