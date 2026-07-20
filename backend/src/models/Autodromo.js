const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Autodromo', {
    id_autodromo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_ubicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ubicacion',
        key: 'id_ubicacion'
      }
    }
  }, {
    sequelize,
    tableName: 'Autodromo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Autodrom__5A4898E81FDA8465",
        unique: true,
        fields: [
          { name: "id_autodromo" },
        ]
      },
    ]
  });
};
