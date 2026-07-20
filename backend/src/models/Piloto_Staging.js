const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Piloto_Staging', {
    id_piloto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fecha_nac: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_localidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    url_foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Piloto_Staging',
    schema: 'dbo',
    timestamps: false
  });
};
