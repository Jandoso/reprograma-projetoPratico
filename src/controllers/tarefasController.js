const tarefas = require('../model/tarefas.json');

exports.get = (req, res) => {
    console.log(req, url);
    res.status(200).send(tarefas);
};

exports.getTarefas = (req, res) => {
    res.status(200).send(tarefas);
};

exports.getTarefaById = (req, res) => {
    const id = req.params.id;
    if (id > tarefas.length || id <= 0){
        res.redirect(301, '/');
    }else{
        res.status(200).send(tarefas.find(tarefa => tarefa.id == id));
    };
};

exports.getConcluidas = (req, res) => {
    const concluidas = tarefas.filter(tarefa => tarefa.concluido == true);
    res.status(200).send(concluidas);
};

exports.getByNomeColaborador = (req, res) => {
    const nome = req.params.nome;
    const nomeColaborador = tarefas.filter(tarefa => tarefa.nomeColaborador == nome);
    res.status(200).send(nomeColaborador);
};