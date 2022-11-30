const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const alugueController = require('../controllers/aluguelController');

const app = express();

router.get('/', auth, alugueController.listarAluguel );

router.get('/:id', auth,  alugueController.listarAluguelPorId);

router.post('/', auth,  alugueController.criarAluguel);

router.put('/:id', auth,  alugueController.atualizarAluguel);
        
router.delete('/:id', auth,  alugueController.removerAluguel);

module.exports = router;