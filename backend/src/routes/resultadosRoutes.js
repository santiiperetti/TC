const express = require('express');
const { getGanadoresPorAnio } = require('../controllers/resultadoController.js');

const router = express.Router();

router.get('/:anio', getGanadoresPorAnio);

module.exports = router;
