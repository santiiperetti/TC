const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ubicacion', {
    id_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id_ubicacion_padre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Ubicacion',
        key: 'id_ubicacion'
      }
    }
  }, {
    sequelize,
    tableName: 'Ubicacion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Ubicacio__81BAA591828F6B1C",
        unique: true,
        fields: [
          { name: "id_ubicacion" },
        ]
      },
    ]
  });
};
