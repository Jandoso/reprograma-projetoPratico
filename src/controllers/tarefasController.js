const tarefas = require('../model/tarefas.json');

function tempoConclusao(dataInclusao, dataConclusao){
    const inclusao = new Date(tarefas.dataInclusao);
    const conclusao = new Date(tarefas.concluidoEm);
    const tempoParaConcluir = conclusao - inclusao;
    return tempoParaConcluir
}

exports.get = (req, res) => {
    tarefas.sort((a, b) => {
        if(new Date(a.dataInclusao) < new Date(b.dataInclusao)){
            return 1;
        } if (new Date(a.dataInclusao) > new Date(b.dataInclusao)){
            return -1;
        } return 0;
    });
    const tempoTarefa = tarefas.forEach(tempoConclusao);
    tarefas.tempoConclusao = tempoTarefa;
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