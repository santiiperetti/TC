const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Marca', {
    id_marca: {
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
    tableName: 'Marca',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Marca__7E43E99E32E533EB",
        unique: true,
        fields: [
          { name: "id_marca" },
        ]
      },
    ]
  });
};
