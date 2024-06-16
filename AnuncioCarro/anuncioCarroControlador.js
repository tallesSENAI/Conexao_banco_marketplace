const express = require('express');
const AnuncioCarro = require('./anuncioCarroModelo');
const router = express.Router();

router.get('/anuncioCarro', async (req, res) => {

    const carros = await AnuncioCarro.findAll();
    resposta.send(carros);
});

router.post('/anuncioCarro', (req, res) => {

    const classificacaoCarro = requisicao.body.classificacaoCarro;
    const modeloCarro = requisicao.body.modeloCarro;
    const anoCarro = requisicao.body.anoCarro;
    const precoCarro = requisicao.body.precoCarro;
    const descricaoCarro = requisicao.body.descricaoCarro;
    const imagem = requisicao.body.imagem;
    
    AnuncioCarro.create({ 

        classificacaoCarro: classificacaoCarro,
        modeloCarro: modeloCarro,
        anoCarro: anoCarro,
        precoCarro: precoCarro,
        descricaoCarro: descricaoCarro,
        imagem: imagem,

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/anuncioCarro/:anuncioCarroId', (req, res) => {
    const codigoAnuncioCarro = requisicao.params.anuncioCarroId;

    const classificacaoCarro = requisicao.body.classificacaoCarro;
    const modeloCarro = requisicao.body.modeloCarro;
    const anoCarro = requisicao.body.anoCarro;
    const precoCarro = requisicao.body.precoCarro;
    const descricaoCarro = requisicao.body.descricaoCarro;
    const imagem = requisicao.body.imagem;

    AnuncioCarro.update({ 

        classificacaoCarro: classificacaoCarro,
        modeloCarro: modeloCarro,
        anoCarro: anoCarro,
        precoCarro: precoCarro,
        descricaoCarro: descricaoCarro,
        imagem: imagem,
    },
        { where:
            {
                codigo: codigoAnuncioCarro
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/anuncioCarro/:anuncioCarroId', (req, res) => {

    const codigoAnuncioCarro = requisicao.params.anuncioCarroId;

    AnuncioCarro.destroy({ where: { codigo: codigoAnuncioCarro } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/anuncioCarro/:anuncioCarroId', async (req, res) => {

    const codigoAnuncioCarro = requisicao.params.anuncioCarroId;
    
    resposta.json(await AnuncioCarro.findByPk(codigoAnuncioCarro));
});

module.exports = router;