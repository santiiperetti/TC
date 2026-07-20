const sequelize = require('../db.js');
const initModels = require('../models/init-models.js');

const models = initModels(sequelize);

function serializePilotoWithUbicacion(piloto) {
  const data = piloto?.toJSON ? piloto.toJSON() : piloto;

  return {
    ...data,
    id_localidad: data.id_localidad_Ubicacion?.nombre || data.id_localidad || null,
    ubicacion: data.id_localidad_Ubicacion?.nombre || data.id_localidad || null,
  };
}

async function getAllPilotos(req, res) {
  try {
    const pilotos = await models.Piloto.findAll({
      include: [
        {
          model: models.Ubicacion,
          as: 'id_localidad_Ubicacion',
          attributes: ['nombre'],
        },
      ],
      order: [['apellido', 'ASC'], ['nombre', 'ASC']],
    });

    const resultado = pilotos.map((piloto) => serializePilotoWithUbicacion(piloto));

    res.json(resultado);
  } catch (error) {
    console.error('Error al consultar pilotos:', error);
    res.status(500).json({ message: 'Error al consultar pilotos', error: error.message });
  }
}

async function getPilotoById(req, res) {
  try {
    const parsedId = Number.parseInt(req.params.id, 10);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'El id debe ser un número entero' });
    }

    const piloto = await models.Piloto.findByPk(parsedId, {
      include: [
        {
          model: models.Ubicacion,
          as: 'id_localidad_Ubicacion',
          attributes: ['nombre'],
        },
      ],
    });

    if (!piloto) {
      return res.status(404).json({ message: 'Piloto no encontrado' });
    }

    const resultado = serializePilotoWithUbicacion(piloto);

    return res.json(resultado);
  } catch (error) {
    console.error('Error al obtener piloto por id:', error);
    return res.status(500).json({ message: 'Error al obtener piloto por id', error: error.message });
  }
}

async function createPiloto(req, res) {
  try {
    const { id_piloto, nombre, apellido, fecha_nac, id_localidad, url_foto } = req.body;

    if (!id_piloto || !nombre || !apellido) {
      return res.status(400).json({ message: 'Faltan datos obligatorios: id_piloto, nombre y apellido' });
    }

    const nuevoPiloto = await models.Piloto.create({
      id_piloto,
      nombre,
      apellido,
      fecha_nac: fecha_nac || null,
      id_localidad: id_localidad || null,
      url_foto: url_foto || null,
    });

    const pilotoCreado = await models.Piloto.findByPk(id_piloto, {
      include: [
        {
          model: models.Ubicacion,
          as: 'id_localidad_Ubicacion',
          attributes: ['nombre'],
        },
      ],
    });

    return res.status(201).json(serializePilotoWithUbicacion(pilotoCreado));
  } catch (error) {
    console.error('Error al crear piloto:', error);
    return res.status(500).json({ message: 'Error al crear piloto', error: error.message });
  }
}

async function deletePiloto(req, res) {
  try {
    const parsedId = Number.parseInt(req.params.id, 10);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'El id debe ser un número entero' });
    }

    const piloto = await models.Piloto.findByPk(parsedId);

    if (!piloto) {
      return res.status(404).json({ message: 'Piloto no encontrado' });
    }

    await piloto.destroy();
    return res.json({ message: 'Piloto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar piloto:', error);
    return res.status(500).json({ message: 'Error al eliminar piloto', error: error.message });
  }
}

async function searchPilotos(req, res) {
  try {
    const { nombre, apellido, texto } = req.query;

    const searchText = (texto || nombre || apellido || '').toString().trim();

    if (!searchText) {
      return res.status(400).json({ message: 'Debe enviar un texto para buscar' });
    }

    const pilotos = await sequelize.query(
      `SELECT p.*, u.nombre AS ubicacion_nombre
       FROM dbo.Piloto p
       LEFT JOIN dbo.Ubicacion u ON p.id_localidad = u.id_ubicacion
       WHERE LOWER(p.nombre) LIKE :searchText
          OR LOWER(p.apellido) LIKE :searchText
       ORDER BY p.apellido ASC, p.nombre ASC`,
      {
        replacements: { searchText: `%${searchText.toLowerCase()}%` },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    const resultado = pilotos.map((piloto) => ({
      ...piloto,
      ubicacion: piloto.ubicacion_nombre || null,
      id_localidad: piloto.ubicacion_nombre || null,
    }));

    return res.json(resultado);
  } catch (error) {
    console.error('Error al buscar pilotos:', error);
    return res.status(500).json({ message: 'Error al buscar pilotos', error: error.message });
  }
}

module.exports = {
  getAllPilotos,
  getPilotoById,
  createPiloto,
  deletePiloto,
  searchPilotos,
};
