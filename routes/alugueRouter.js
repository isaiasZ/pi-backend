const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const alugueController = require('../controllers/alugueController');

const app = express();

router.get('/alugue', auth, alugueController.listarAlugue );

router.get('/alugue/:id', auth,  alugueController.listarAluguePorId );

router.post('/alugue', auth,  alugueController.criarAlugue);

router.put('/alugue/:id', auth,  alugueController.atualizarAlugue);
        
router.delete('/alugue/:id', auth,  alugueController.removerAlugue);

module.exports = router;