const express = require('express');
const AnuncioCarro = require('./anuncioCarroModelo');
const router = express.Router();

router.get('/anuncioCarro', async (req, res) => {

    const carros = await AnuncioCarro.findAll();
    res.send(carros);
});

router.post('/anuncioCarro', (req, res) => {

    const classificacaoCarro = req.body.classificacaoCarro;
    const modeloCarro = req.body.modeloCarro;
    const anoCarro = req.body.anoCarro;
    const precoCarro = req.body.precoCarro;
    const descricaoCarro = req.body.descricaoCarro;
    const imagem = req.body.imagemCarro;
    
    AnuncioCarro.create({ 

        classificacaoCarro: classificacaoCarro,
        modeloCarro: modeloCarro,
        anoCarro: anoCarro,
        precoCarro: precoCarro,
        descricaoCarro: descricaoCarro,
        imagemCarro: imagem

    }).then(() => {
        res.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/anuncioCarro/:anuncioCarroId', (req, res) => {
    const codigoAnuncioCarro = req.params.anuncioCarroId;

    const classificacaoCarro = req.body.classificacaoCarro;
    const modeloCarro = req.body.modeloCarro;
    const anoCarro = req.body.anoCarro;
    const precoCarro = req.body.precoCarro;
    const descricaoCarro = req.body.descricaoCarro;
    const imagem = req.body.imagemCarro;

    AnuncioCarro.update({ 

        classificacaoCarro: classificacaoCarro,
        modeloCarro: modeloCarro,
        anoCarro: anoCarro,
        precoCarro: precoCarro,
        descricaoCarro: descricaoCarro,
        imagemCarro: imagem,
    },
        { where:
            {
                codigo: codigoAnuncioCarro
            }
        }).then(() => {
        res.send('Atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/anuncioCarro/:anuncioCarroId', (req, res) => {

    const codigoAnuncioCarro = req.params.anuncioCarroId;

    AnuncioCarro.destroy({ where: { codigo: codigoAnuncioCarro } }).then(() => {
        res.send('Removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/anuncioCarro/:anuncioCarroId', async (req, res) => {

    const codigoAnuncioCarro = req.params.anuncioCarroId;
    
    res.json(await AnuncioCarro.findByPk(codigoAnuncioCarro));
});

module.exports = router;