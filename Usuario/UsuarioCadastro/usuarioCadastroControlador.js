const express = require('express');
const CadastroUsuario = require('./usuarioCadastroModelo');
const router = express.Router();

router.get('/cadastroUsuario', async (req, res) => {
    
    const usuariosCadastrados = await CadastroUsuario.findAll();
    resposta.send(usuariosCadastrados);
});

router.post('/cadastroUsuario', (req, res) => {

    const nomeCadastroUsuario = requisicao.body.nomeCadastroUsuario;
    const emailCadastroUsuario = requisicao.body.emailCadastroUsuario;
    const telefoneCadastroUsuario = requisicao.body.telefoneCadastroUsuario;
    const senhaCadastroUsuario = requisicao.body.senhaCadastroUsuario;

    CadastroUsuario.create({ 

        nomeCadastroUsuario: nomeCadastroUsuario,
        emailCadastroUsuario: emailCadastroUsuario,
        telefoneCadastroUsuario: telefoneCadastroUsuario,
        senhaCadastroUsuario: senhaCadastroUsuario,

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/cadastroUsuario/:cadastroUsuarioId', (req, res) => {

    const nomeCadastroUsuario = requisicao.body.nomeCadastroUsuario;
    const emailCadastroUsuario = requisicao.body.emailCadastroUsuario;
    const telefoneCadastroUsuario = requisicao.body.telefoneCadastroUsuario;
    const senhaCadastroUsuario = requisicao.body.senhaCadastroUsuario;
    
    const codigoLoginUsuario = requisicao.params.cadastroUsuarioId;

    CadastroUsuario.update({ 

        nomeCadastroUsuario: nomeCadastroUsuario,
        emailCadastroUsuario: emailCadastroUsuario,
        telefoneCadastroUsuario: telefoneCadastroUsuario,
        senhaCadastroUsuario: senhaCadastroUsuario,
        cadastroUsuarioId: codigoLoginUsuario,
    },
        { where:
            {
                codigo: codigoLoginUsuario
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/cadastroUsuario/:cadastroUsuarioId', (req, res) => {

    const codigoLoginUsuario = requisicao.params.cadastroUsuarioId;

    CadastroUsuario.destroy({ where: { codigo: codigoLoginUsuario } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/cadastroUsuario/:cadastroUsuarioId', async (req, res) => {

    const codigoLoginUsuario = requisicao.params.cadastroUsuarioId;

    resposta.json(await CadastroUsuario.findByPk(codigoLoginUsuario));
});

module.exports = router;