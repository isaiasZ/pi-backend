const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const estoqueController = require('../controllers/estoqueController');


router.get('/', auth,  estoqueController.listarEstoque );

router.get('/:id', auth,  estoqueController.listarEstoquesPorId);

router.post('/', auth,  estoqueController.criarEstoque);

router.put('/:id', auth,  estoqueController.atualizarEstoques);

router.delete('/:id', auth,  estoqueController.removerEstoques);

module.exports = router;
