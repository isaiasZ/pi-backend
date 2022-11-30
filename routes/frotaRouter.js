const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const frotaController = require('../controllers/frotaController');


router.get('/', auth,  frotaController.listarFrota );

router.get('/:id', auth,  frotaController.listarFrotaPorId);

router.post('/', auth,  frotaController.criarFrota);

router.put('/:id', auth,  frotaController.atualizarFrota);

router.delete('/:id', auth,  frotaController.removerFrota);

module.exports = router;
