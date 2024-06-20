const express = require('express');
const cors = require ('cors');
const bodyParser = require('body-parser');
const meuServidor = express();

meuServidor.use(express.json());
meuServidor.use(cors());

meuServidor.use(bodyParser.json({ limit: '50mb' }));
meuServidor.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
//------------------------------------------------------------
const rotasCadastroUsuario = require('./Usuario/UsuarioCadastro/usuarioCadastroControlador');
meuServidor.use(rotasCadastroUsuario);

// const rotasLoginUsuario = require('./Usuario/UsuarioLogin/usuarioLoginControlador');
// meuServidor.use(rotasLoginUsuario);

const rotasAnuncioCarro = require('./AnuncioCarro/anuncioCarroControlador');
meuServidor.use(rotasAnuncioCarro);

const rotasAnuncioPeca = require('./AnuncioPeca/anuncioPecaControlador');
const { application } = require('express');
meuServidor.use(rotasAnuncioPeca);

// const rotasLoginUsuario = require('./Usuario/UsuarioLogin/usuarioLoginControlador');
// app.use(rotasLoginUsuario); (EM ANÁLISE PARA VER SE REALMENTE UMA ROTA PARA LOGIN É PRECISO)








//----------------------------------------------------------------------------------
// //'cors' controla o acesso ao servidor

// app.use(express.json());
// 
// //----------------------------------------------------------------------------------

// //ROTAS USUÁRIOS
// app.get('/usuarios', (req, res) => { //get
//     res.json('Usuário selecionado');
// });

// app.post('/usuarios', (req, res) => { //post
//     res.json('Usuário CADASTRADO com sucesso!');
// });

// app.delete('/usuarios', (req, res) => { //delete
//     res.json('Usuário DELETADO com sucesso!');
// });
// //----------------------------------------------------------------------------------

// //ROTAS ANUNCIOS
// app.get('/anuncios', (req, res) => { //get
//     res.json('Anúncio selecionado.');
// });

// app.post('/anuncios', (req, res) => { //post
//     res.json('Anúncio POSTADO com sucesso!');
// });

// app.delete('/anuncios', (req, res) => { //delete
//     res.json('Anúncio DELETADO com sucesso!');
// });

// //----------------------------------------------------------------------------------
meuServidor.listen(4300, () => {
    console.log('Conexão com arquivo INDEX bem sucedida!');
});