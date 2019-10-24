const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.get('/tarefas', tarefasController.get);
router.get('/tarefas/:id', tarefasController.getTarefaById);
router.get('/tarefas/:nome', tarefasController.getByNomeColaborador);
router.get('//tarefas/concluidas', tarefasController.getConcluidas);

module.exports = router;