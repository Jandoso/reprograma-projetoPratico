const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.get('/', tarefasController.get);
router.get('/:nome', tarefasController.getByNomeColaborador);
router.get('/concluidas', tarefasController.getConcluidas);
router.get('/listaTarefas', tarefasController.getTarefas);
router.get('/listaTarefas/:id', tarefasController.getTarefaById);

module.exports = router;