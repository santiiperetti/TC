const express = require('express');
const {
  createPiloto,
  deletePiloto,
  getAllPilotos,
  getPilotoById,
  searchPilotos,
} = require('../controllers/pilotoController.js');

const router = express.Router();

router.get('/:id', getPilotoById);
router.get('/', getAllPilotos);
router.post('/', createPiloto);
router.delete('/:id', deletePiloto);

module.exports = router;
