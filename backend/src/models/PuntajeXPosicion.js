const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PuntajeXPosicion', {
    posicion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TipoEvento',
        key: 'id_tipo_evento'
      }
    },
    puntaje: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PuntajeXPosicion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PuntajeX__19AFD76E37B702FF",
        unique: true,
        fields: [
          { name: "posicion" },
          { name: "id_tipo_evento" },
        ]
      },
    ]
  });
};
