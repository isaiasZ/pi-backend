const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const estoqueController = require('../controllers/estoqueController');


router.get('/estoque', auth,  estoqueController.listarEstoque );

router.get('/estoque/:id', auth,  estoqueController.listarEstoquesPorId);

router.post('/estoque', auth,  estoqueController.criarEstoque);

router.put('/estoque/:id', auth,  estoqueController.atualizarEstoques);

router.delete('/estoque/:id', auth,  estoqueController.removerEstoques);

module.exports = router;
