const express = require ('express');
const cors = require ('cors');
const app = express();
const usuarios = require ('./Conexao/conexao');

//'cors' controla o acesso ao servidor

app.use(express.json());
app.use(cors());
//----------------------------------------------------------------------------------

//ROTAS USUÁRIOS
app.get('/usuarios', (req, res) => { //get
    res.json('Usuário selecionado');
});

app.post('/usuarios', (req, res) => { //post
    res.json('Usuário CADASTRADO com sucesso!');
});

app.delete('/usuarios', (req, res) => { //delete
    res.json('Usuário DELETADO com sucesso!');
});
//----------------------------------------------------------------------------------

//ROTAS ANUNCIOS
app.get('/anuncios', (req, res) => { //get
    res.json('Anúncio selecionado.');
});

app.post('/anuncios', (req, res) => { //post
    res.json('Anúncio POSTADO com sucesso!');
});

app.delete('/anuncios', (req, res) => { //delete
    res.json('Anúncio DELETADO com sucesso!');
});

//----------------------------------------------------------------------------------
app.listen(4300, () => {
    console.log('AA');
});