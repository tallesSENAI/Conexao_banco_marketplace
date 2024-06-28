const express = require('express');
const CadastroUsuario = require('./usuarioCadastroModelo');
const router = express.Router();

router.get('/usuario', async (req, res) => {
    
    const usuariosCadastrados = await CadastroUsuario.findAll();
    res.json(usuariosCadastrados);
});

router.post('/usuario', (req, res) => {

    const nomeCadastroUsuario = req.body.nomeCadastroUsuario;
    const emailCadastroUsuario = req.body.emailCadastroUsuario;
    const telefoneCadastroUsuario = req.body.telefoneCadastroUsuario;
    const senhaCadastroUsuario = req.body.senhaCadastroUsuario;

    CadastroUsuario.create({ 

        nomeCadastroUsuario: nomeCadastroUsuario,
        emailCadastroUsuario: emailCadastroUsuario,
        telefoneCadastroUsuario: telefoneCadastroUsuario,
        senhaCadastroUsuario: senhaCadastroUsuario,

    }).then(() => {
        res.json({sucesso: true});
    }).catch((erro) => {
        res.json({message: 'Ocorreu um erro' +erro, sucesso: false});
    });
});

router.put('/usuario/:usuarioId', (req, res) => {

    const nomeCadastroUsuario = req.body.nomeCadastroUsuario;
    const emailCadastroUsuario = req.body.emailCadastroUsuario;
    const telefoneCadastroUsuario = req.body.telefoneCadastroUsuario;
    const senhaCadastroUsuario = req.body.senhaCadastroUsuario;
    
    const codigoLoginUsuario = req.params.cadastroUsuarioId;

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
        res.json('Atualizado com sucesso.');
    }).catch((erro) => {
        res.json({message: 'Ocorreu um erro' +erro});
    });
});

router.delete('/usuario/:usuarioId', (req, res) => {

    const codigoLoginUsuario = req.params.cadastroUsuarioId;

    CadastroUsuario.destroy({ where: { codigo: codigoLoginUsuario } }).then(() => {
        res.json('Removido com sucesso.');
    }).catch((erro) => {
        res.json('Ocorreu um erro: ' + erro);
    });
});

router.get('/usuario/:usuarioId', async (req, res) => {

    const codigoLoginUsuario = req.params.cadastroUsuarioId;

    res.json(await CadastroUsuario.findByPk(codigoLoginUsuario));
});

module.exports = router;