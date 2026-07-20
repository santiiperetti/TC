var DataTypes = require("sequelize").DataTypes;
var _Auto = require("./Auto");
var _Auto_Staging = require("./Auto_Staging");
var _Autodromo = require("./Autodromo");
var _Autodromo_Staging = require("./Autodromo_Staging");
var _Carrera = require("./Carrera");
var _Carrera_Staging = require("./Carrera_Staging");
var _Equipo = require("./Equipo");
var _Equipo_Staging = require("./Equipo_Staging");
var _Estado = require("./Estado");
var _Marca = require("./Marca");
var _Marca_Staging = require("./Marca_Staging");
var _Modelo = require("./Modelo");
var _Modelo_Staging = require("./Modelo_Staging");
var _Piloto = require("./Piloto");
var _Piloto_Staging = require("./Piloto_Staging");
var _PuntajeXPosicion = require("./PuntajeXPosicion");
var _Resultado = require("./Resultado");
var _Resultado_Staging = require("./Resultado_Staging");
var _Sesion = require("./Sesion");
var _Sesion_Staging = require("./Sesion_Staging");
var _TipoEvento = require("./TipoEvento");
var _Ubicacion = require("./Ubicacion");
var _Ubicacion_Staging = require("./Ubicacion_Staging");

function initModels(sequelize) {
  var Auto = _Auto(sequelize, DataTypes);
  var Auto_Staging = _Auto_Staging(sequelize, DataTypes);
  var Autodromo = _Autodromo(sequelize, DataTypes);
  var Autodromo_Staging = _Autodromo_Staging(sequelize, DataTypes);
  var Carrera = _Carrera(sequelize, DataTypes);
  var Carrera_Staging = _Carrera_Staging(sequelize, DataTypes);
  var Equipo = _Equipo(sequelize, DataTypes);
  var Equipo_Staging = _Equipo_Staging(sequelize, DataTypes);
  var Estado = _Estado(sequelize, DataTypes);
  var Marca = _Marca(sequelize, DataTypes);
  var Marca_Staging = _Marca_Staging(sequelize, DataTypes);
  var Modelo = _Modelo(sequelize, DataTypes);
  var Modelo_Staging = _Modelo_Staging(sequelize, DataTypes);
  var Piloto = _Piloto(sequelize, DataTypes);
  var Piloto_Staging = _Piloto_Staging(sequelize, DataTypes);
  var PuntajeXPosicion = _PuntajeXPosicion(sequelize, DataTypes);
  var Resultado = _Resultado(sequelize, DataTypes);
  var Resultado_Staging = _Resultado_Staging(sequelize, DataTypes);
  var Sesion = _Sesion(sequelize, DataTypes);
  var Sesion_Staging = _Sesion_Staging(sequelize, DataTypes);
  var TipoEvento = _TipoEvento(sequelize, DataTypes);
  var Ubicacion = _Ubicacion(sequelize, DataTypes);
  var Ubicacion_Staging = _Ubicacion_Staging(sequelize, DataTypes);

  Resultado.belongsTo(Auto, { as: "id_auto_Auto", foreignKey: "id_auto"});
  Auto.hasMany(Resultado, { as: "Resultados", foreignKey: "id_auto"});
  Carrera.belongsTo(Autodromo, { as: "id_autodromo_Autodromo", foreignKey: "id_autodromo"});
  Autodromo.hasMany(Carrera, { as: "Carreras", foreignKey: "id_autodromo"});
  Sesion.belongsTo(Carrera, { as: "nro_carrera_Carrera", foreignKey: "nro_carrera"});
  Carrera.hasMany(Sesion, { as: "Sesions", foreignKey: "nro_carrera"});
  Auto.belongsTo(Equipo, { as: "id_equipo_Equipo", foreignKey: "id_equipo"});
  Equipo.hasMany(Auto, { as: "Autos", foreignKey: "id_equipo"});
  Resultado.belongsTo(Equipo, { as: "id_equipo_Equipo", foreignKey: "id_equipo"});
  Equipo.hasMany(Resultado, { as: "Resultados", foreignKey: "id_equipo"});
  Carrera.belongsTo(Estado, { as: "id_estado_Estado", foreignKey: "id_estado"});
  Estado.hasMany(Carrera, { as: "Carreras", foreignKey: "id_estado"});
  Modelo.belongsTo(Marca, { as: "id_marca_Marca", foreignKey: "id_marca"});
  Marca.hasMany(Modelo, { as: "Modelos", foreignKey: "id_marca"});
  Auto.belongsTo(Modelo, { as: "id_modelo_Modelo", foreignKey: "id_modelo"});
  Modelo.hasMany(Auto, { as: "Autos", foreignKey: "id_modelo"});
  Resultado.belongsTo(Piloto, { as: "id_piloto_Piloto", foreignKey: "id_piloto"});
  Piloto.hasMany(Resultado, { as: "Resultados", foreignKey: "id_piloto"});
  Resultado.belongsTo(Sesion, { as: "id_sesion_Sesion", foreignKey: "id_sesion"});
  Sesion.hasMany(Resultado, { as: "Resultados", foreignKey: "id_sesion"});
  PuntajeXPosicion.belongsTo(TipoEvento, { as: "id_tipo_evento_TipoEvento", foreignKey: "id_tipo_evento"});
  TipoEvento.hasMany(PuntajeXPosicion, { as: "PuntajeXPosicions", foreignKey: "id_tipo_evento"});
  Sesion.belongsTo(TipoEvento, { as: "id_tipo_evento_TipoEvento", foreignKey: "id_tipo_evento"});
  TipoEvento.hasMany(Sesion, { as: "Sesions", foreignKey: "id_tipo_evento"});
  Autodromo.belongsTo(Ubicacion, { as: "id_ubicacion_Ubicacion", foreignKey: "id_ubicacion"});
  Ubicacion.hasMany(Autodromo, { as: "Autodromos", foreignKey: "id_ubicacion"});
  Piloto.belongsTo(Ubicacion, { as: "id_localidad_Ubicacion", foreignKey: "id_localidad"});
  Ubicacion.hasMany(Piloto, { as: "Pilotos", foreignKey: "id_localidad"});
  Ubicacion.belongsTo(Ubicacion, { as: "id_ubicacion_padre_Ubicacion", foreignKey: "id_ubicacion_padre"});
  Ubicacion.hasMany(Ubicacion, { as: "Ubicacions", foreignKey: "id_ubicacion_padre"});

  return {
    Auto,
    Auto_Staging,
    Autodromo,
    Autodromo_Staging,
    Carrera,
    Carrera_Staging,
    Equipo,
    Equipo_Staging,
    Estado,
    Marca,
    Marca_Staging,
    Modelo,
    Modelo_Staging,
    Piloto,
    Piloto_Staging,
    PuntajeXPosicion,
    Resultado,
    Resultado_Staging,
    Sesion,
    Sesion_Staging,
    TipoEvento,
    Ubicacion,
    Ubicacion_Staging,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
