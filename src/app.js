const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const tarefas = require('./routes/tarefasRoute');

app.all('*', (req, res, next) => {
    console.log("API Funcionando!")/
    next();
});

app.use('/', index);
app.use('/tarefas', tarefas);

module.exports = app;