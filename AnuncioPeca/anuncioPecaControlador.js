const express = require('express');
const AnuncioPeca = require('./anuncioPecaModelo');
const router = express.Router();

router.get('/anuncioPeca', async (req, res) => {

    const anuncioPeca = await AnuncioPeca.findAll();
    res.send(anuncioPeca);
});

router.post('/anuncioPeca', (req, res) => {

    const descricaoPeca = req.body.descricaoPeca;
    const precoPeca = req.body.precoPeca;
    const tituloPeca = req.body.tituloPeca;
    
    AnuncioPeca.create({ 

        descricaoPeca: descricaoPeca,
        precoPeca: precoPeca,
        tituloPeca: tituloPeca,

    }).then(() => {
        res.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/anuncioPeca/:anuncioPecaId', (req, res) => {

    const descricaoPeca = req.body.descricaoPeca;
    const precoPeca = req.body.precoPeca;
    const tituloPeca = req.body.tituloPeca;
    const codigoAnuncioPeca = req.params.anuncioPecaId;

    AnuncioPeca.update({ 

        descricaoPeca: descricaoPeca,
        precoPeca: precoPeca,
        tituloPeca: tituloPeca,
        codigoAnuncioPeca: codigoAnuncioPeca,
    },
        { where:
            {
                codigo: codigoAnuncioPeca
            }
        }).then(() => {
        res.send('Atualizado com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/anuncioPeca/:anuncioPecaId', (req, res) => {

    const codigoAnuncioPeca = req.params.anuncioPecaId;

    AnuncioPeca.destroy({ where: { codigo: codigoAnuncioPeca } }).then(() => {
        res.send('Removido com sucesso.');
    }).catch((erro) => {
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/anuncioPeca/:anuncioPecaId', async (req, res) => {

    const codAnuncioPeca = req.params.anuncioPecaId;
    res.json(await AnuncioPeca.findByPk(codAnuncioPeca));
});

module.exports = router;