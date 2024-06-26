const express = require('express');
const UsuarioCadastroModelo = require('../UsuarioCadastro/usuarioCadastroModelo');
const router = express.Router();

router.post('/usuario/login', async (req, res) => {

    const emailCadastroUsuario = req.body.emailCadastroUsuario;
    const senhaCadastroUsuario = req.body.senhaCadastroUsuario;

    const usuario = await UsuarioCadastroModelo.findOne({ where: { emailCadastroUsuario: emailCadastroUsuario } });

        if (usuario === null) {
            res.json({message: 'Email inválido!', autenticado: false});
        } 
            else {
                if (usuario.senhaCadastroUsuario === senhaCadastroUsuario){
                    res.json({autenticado: true});
                } 
                    else {
                        res.json({message: 'Senha inválida!', autenticado: false});
                    }
        }
});

module.exports = router;