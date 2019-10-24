const express = require('express');
const app = express();
const router = require('./src/routes/tarefasRoute');
const port = 8080;

app.use(router);

app.listen(port, (err) => {
    if(err){
        console.log("Houve um erro ao iniciar o servidor");
    }else{
        console.log(`Servidor rodando na porta ${port}`);
    };
});