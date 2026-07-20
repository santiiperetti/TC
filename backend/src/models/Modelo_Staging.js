const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Modelo_Staging', {
    id_modelo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id_marca: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Modelo_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
