const express = require('express');
const AnuncioPeca = require('./anuncioPecaModelo');
const router = express.Router();

router.get('/anuncioPeca', async (req, res) => {

    const anuncioPeca = await AnuncioPeca.findAll();
    resposta.send(anuncioPeca);
});

router.post('/anuncioPeca', (req, res) => {

    const descricaoPeca = requisicao.body.descricaoPeca;
    const precoPeca = requisicao.body.precoPeca;
    const imagemPeca = requisicao.body.imagemPeca;
    
    AnuncioPeca.create({ 

        descricaoPeca: descricaoPeca,
        precoPeca: precoPeca,
        imagemPeca: imagemPeca,

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/anuncioPeca/:anuncioPecaId', (req, res) => {

    const descricaoPeca = requisicao.body.descricaoPeca;
    const precoPeca = requisicao.body.precoPeca;
    const imagemPeca = requisicao.body.imagemPeca;
    const codigoAnuncioPeca = requisicao.params.anuncioPecaId;

    AnuncioPeca.update({ 

        descricaoPeca: descricaoPeca,
        precoPeca: precoPeca,
        imagemPeca: imagemPeca,
        codigoAnuncioPeca: codigoAnuncioPeca,
    },
        { where:
            {
                codigo: codigoAnuncioPeca
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/anuncioPeca/:anuncioPecaId', (req, res) => {

    const codigoAnuncioPeca = requisicao.params.anuncioPecaId;

    AnuncioPeca.destroy({ where: { codigo: codigoAnuncioPeca } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/anuncioPeca/:anuncioPecaId', async (req, res) => {

    const codAnuncioPeca = requisicao.params.anuncioPecaId;
    resposta.json(await AnuncioPeca.findByPk(codAnuncioPeca));
});

module.exports = router;