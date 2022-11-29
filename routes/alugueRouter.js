const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const alugueController = require('../controllers/alugueController');

const app = express();

router.get('/', auth, alugueController.listarAlugue );

router.get('/:id', auth,  alugueController.listarAluguePorId );

router.post('/', auth,  alugueController.criarAlugue);

router.put('/:id', auth,  alugueController.atualizarAlugue);
        
router.delete('/:id', auth,  alugueController.removerAlugue);

module.exports = router;