const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Resultado', {
    id_resultado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_sesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sesion',
        key: 'id_sesion'
      }
    },
    id_piloto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Piloto',
        key: 'id_piloto'
      }
    },
    id_auto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Auto',
        key: 'id_auto'
      }
    },
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Equipo',
        key: 'id_equipo'
      }
    },
    posicion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    puntos: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Resultado',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Resultad__33A42B309541F7DC",
        unique: true,
        fields: [
          { name: "id_resultado" },
        ]
      },
    ]
  });
};
