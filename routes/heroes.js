const express = require('express');
const { creditos } = require('../controllers/heroesController');
const router = express.Router();

const heroesController = require ('../controllers/heroesController')


//rutas
router.get('/', heroesController.listaHeroes);
router.get('/detalle/:id', heroesController.detalle);
router.get('/bio/:id:ok?', heroesController.detalleYBio);


module.exports = router;