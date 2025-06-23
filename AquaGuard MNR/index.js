const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html/index.html'));
})
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.status(404).send('<h1>Erro 404</h1><br><h2>Não encontramos a página :(</h2>');
})

app.listen(8080, () => {
    console.log("Servidor Node rodando na porta 8080");
})