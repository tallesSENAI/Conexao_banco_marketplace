const Sequelize = require('sequelize');
const conexao = require('../../Conexao/conexao');

const UsuarioCadastro = conexao.define('usuarioCadastro', {
    codCadastroUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    nomeCadastroUsuario: { //primeiro e segundo nome apenas
        type: Sequelize.STRING(100),
        allowNull: false
    },
    emailCadastroUsuario: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
    },
    telefoneCadastroUsuario: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    senhaCadastroUsuario: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    
}, {
    timestamps: false
});

UsuarioCadastro.sync({
    alter: true
});

module.exports = UsuarioCadastro;