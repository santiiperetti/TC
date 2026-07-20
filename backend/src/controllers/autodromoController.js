const sequelize = require('../db.js');
const initModels = require('../models/init-models.js');

const models = initModels(sequelize);

async function getAllAutodromos(req, res) {
  try {
    const autodromos = await models.Autodromo.findAll();
    res.json(autodromos);
  } catch (error) {
    console.error('Error al consultar autodromos:', error);
    res.status(500).json({ message: 'Error al consultar autodromos', error: error.message });
  }
}

async function getAutodromoById(req, res) {
  try {
    const parsedId = Number.parseInt(req.params.id, 10);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'El id debe ser un número entero' });
    }

    const autodromo = await models.Autodromo.findByPk(parsedId);

    if (!autodromo) {
      return res.status(404).json({ message: 'Autódromo no encontrado' });
    }

    return res.json(autodromo);
  } catch (error) {
    console.error('Error al obtener autodromo por id:', error);
    return res.status(500).json({ message: 'Error al obtener autodromo por id', error: error.message });
  }
}

async function createAutodromo(req, res) {
  try {
    const { id_autodromo, nombre, id_ubicacion } = req.body;

    if (!id_autodromo || !nombre || !id_ubicacion) {
      return res.status(400).json({ message: 'Faltan datos obligatorios: id_autodromo, nombre e id_ubicacion' });
    }

    const nuevoAutodromo = await models.Autodromo.create({
      id_autodromo,
      nombre,
      id_ubicacion,
    });

    return res.status(201).json(nuevoAutodromo);
  } catch (error) {
    console.error('Error al crear autodromo:', error);
    return res.status(500).json({ message: 'Error al crear autodromo', error: error.message });
  }
}

async function deleteAutodromo(req, res) {
  try {
    const parsedId = Number.parseInt(req.params.id, 10);

    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ message: 'El id debe ser un número entero' });
    }

    const autodromo = await models.Autodromo.findByPk(parsedId);

    if (!autodromo) {
      return res.status(404).json({ message: 'Autódromo no encontrado' });
    }

    await autodromo.destroy();
    return res.json({ message: 'Autódromo eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar autodromo:', error);
    return res.status(500).json({ message: 'Error al eliminar autodromo', error: error.message });
  }
}

module.exports = {
  getAllAutodromos,
  getAutodromoById,
  createAutodromo,
  deleteAutodromo,
};
