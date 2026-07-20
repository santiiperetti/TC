const express = require('express');
const {
  createAutodromo,
  deleteAutodromo,
  getAllAutodromos,
  getAutodromoById,
} = require('../controllers/autodromoController.js');

const router = express.Router();

router.get('/', getAllAutodromos);
router.get('/:id', getAutodromoById);
router.post('/', createAutodromo);
router.delete('/:id', deleteAutodromo);

module.exports = router;
