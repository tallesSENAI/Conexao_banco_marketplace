const express = require('express');
const LoginUsuario = require('./usuarioLoginModelo');
const router = express.Router();

router.get('/usuario', async (req, res) => {
    
    const usuariosCadastrados = await CadastroUsuario.findAll();
    res.json(usuariosCadastrados);
});