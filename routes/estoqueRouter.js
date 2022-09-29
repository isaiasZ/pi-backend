const e = require('express');
const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

const app = express();

router.get('/', estoqueController.listarEstoque );

router.get('/:id', estoqueController.listarEstoquesPorId);

router.post('/estoque', estoqueController.criarEstoque);

router.put('/estoque/:id', estoqueController.atualizarEstoques);

router.delete('/estoque/:id', estoqueController.removerEstoques);

module.exports = router;
