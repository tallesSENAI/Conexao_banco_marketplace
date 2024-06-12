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
    
    const codigoAnuncioCarro = requisicao.body.codAnuncioCarro;
    
    AnuncioCarro.create({ 

        classificacaoCarro: classificacaoCarro,
        modeloCarro: modeloCarro,
        anoCarro: anoCarro,
        precoCarro: precoCarro,
        descricaoCarro: descricaoCarro,
        imagem: imagem,
        codigoAnuncioCarro: codigoAnuncioCarro

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/anuncioCarro/:anuncioCarroId', (req, res) => {
    const codigoAnuncioCarro = requisicao.params.codAnuncioCarro;

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
        codigoAnuncioCarro: codigoAnuncioCarro
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

    const codigoAnuncioCarro = requisicao.params.codAnuncioCarro;

    AnuncioCarro.destroy({ where: { codigo: codigoAnuncioCarro } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/anuncioCarro/:anuncioCarroId', async (req, res) => {

    const codigoAnuncioCarro = requisicao.params.codAnuncioCarro;
    resposta.json(await AnuncioCarro.findByPk(codAnuncioCarro));
});

module.exports = router;