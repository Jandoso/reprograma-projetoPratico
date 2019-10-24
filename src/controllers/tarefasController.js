const tarefas = require('../model/tarefas.json');

function transformarConclusaoEmDate(fim){
    const conclusaoSplitada = fim.split('/');
    const conclusao = new Date(conclusaoSplitada[2], conclusaoSplitada[1] - 1, conclusaoSplitada[0]);
    return conclusao;
};

function transformarInclusaoEmDate(inicio){
    const inclusaoSplitada = inicio.split('/');
    const inclusao = new Date(inclusaoSplitada[2], inclusaoSplitada[1] - 1, inclusaoSplitada[0]);
    return inclusao;
};

function tempoParaConclusaoEmDias(conclusao, inclusao) {
    const diasEmMilissegundos = 86400000;
    return (conclusao - inclusao) / diasEmMilissegundos;
};

exports.get = (req, res) => {
    tarefas.forEach(item => item.concluidoEm = transformarConclusaoEmDate(item.concluidoEm));
    tarefas.forEach(item => item.dataInclusao = transformarInclusaoEmDate(item.dataInclusao))

    tarefas.forEach(item => item.tempoConclusao = tempoParaConclusaoEmDias(item.concluidoEm, item.dataInclusao));
    
    tarefas.sort((a,b) => {
        return (a.dataInclusao < b.dataInclusao) ? 1 : (a.dataInclusao > b.dataInclusao) ? -1 : 0
    });
    
    res.status(200).send(tarefas);
};

exports.getTarefaById = (req, res) => {
    const id = req.params.id;
    if (id > tarefas.length || id <= 0) {
        res.redirect(301, '/');
    } else {
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