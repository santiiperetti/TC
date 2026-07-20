const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Piloto', {
    id_piloto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fecha_nac: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_localidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Ubicacion',
        key: 'id_ubicacion'
      }
    },
    url_foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Piloto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Piloto__93ED5235E5406D61",
        unique: true,
        fields: [
          { name: "id_piloto" },
        ]
      },
    ]
  });
};
