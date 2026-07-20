const sequelize = require('../db.js');

async function getGanadoresPorAnio(req, res) {
  try {
    const anio = Number.parseInt(req.params.anio, 10);

    if (Number.isNaN(anio)) {
      return res.status(400).json({ message: 'El año debe ser un número entero' });
    }

    const resultados = await sequelize.query(
      `SELECT
         c.nro_carrera_temporada AS nro_carrera,
         CONCAT(p.apellido, ', ', p.nombre) AS piloto,
         ad.nombre AS autodromo,
         u.nombre AS ubicacion_autodromo
       FROM dbo.Resultado r
       INNER JOIN dbo.Sesion s ON s.id_sesion = r.id_sesion
       INNER JOIN dbo.Carrera c ON c.nro_carrera = s.nro_carrera
       LEFT JOIN dbo.Piloto p ON p.id_piloto = r.id_piloto
       LEFT JOIN dbo.Autodromo ad ON ad.id_autodromo = c.id_autodromo
       LEFT JOIN dbo.Ubicacion u ON u.id_ubicacion = ad.id_ubicacion
       WHERE c.temporada = :anio
         AND s.id_tipo_evento = 1
         AND r.posicion = 1
       ORDER BY c.nro_carrera_temporada ASC`,
      {
        replacements: { anio },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    return res.json(resultados);
  } catch (error) {
    console.error('Error al consultar ganadores:', error);
    return res.status(500).json({ message: 'Error al consultar ganadores', error: error.message });
  }
}

module.exports = {
  getGanadoresPorAnio,
};
