const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TipoEvento', {
    id_tipo_evento: {
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
    tableName: 'TipoEvento',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TipoEven__E3566D796F628DC8",
        unique: true,
        fields: [
          { name: "id_tipo_evento" },
        ]
      },
    ]
  });
};
