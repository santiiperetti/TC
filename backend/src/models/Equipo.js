const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Equipo', {
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Equipo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Equipo__EE01F88AD6457E73",
        unique: true,
        fields: [
          { name: "id_equipo" },
        ]
      },
    ]
  });
};
