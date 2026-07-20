const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Estado', {
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Estado',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Estado__86989FB2D129E62A",
        unique: true,
        fields: [
          { name: "id_estado" },
        ]
      },
    ]
  });
};
