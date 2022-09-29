const express = require('express');
const router = express.Router();
const alugueController = require('../controllers/alugueController');

const app = express();

router.get('/', alugueController.listarAlugue );

router.get('/:id', alugueController.listarAluguePorId );

router.post('/alugue', alugueController.criarAlugue);

router.put('/alugue/:id', alugueController.atualizarAlugue);

router.delete('/alugue/:id', alugueController.removerAlugue);

module.exports = router;