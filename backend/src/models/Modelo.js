const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Modelo', {
    id_modelo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id_marca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Marca',
        key: 'id_marca'
      }
    }
  }, {
    sequelize,
    tableName: 'Modelo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Modelo__B3BFCFF12A9485FC",
        unique: true,
        fields: [
          { name: "id_modelo" },
        ]
      },
    ]
  });
};
