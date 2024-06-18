const Sequelize = require('sequelize');
const conexao = require('../../Conexao/conexao');

const UsuarioLogin = conexao.define('usuarioLogin', {
    email: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    precoPeca: {
        type: Sequelize.FLOAT(8),
        allowNull: false
    },

}, {
    timestamps: false
});

UsuarioLogin.sync({
    alter: true
});

module.exports = UsuarioLogin;