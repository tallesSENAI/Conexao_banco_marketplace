const Sequelize = require('sequelize');
const conexao = require('../Conexao/conexao');

const AnuncioCarro = conexao.define('anuncioCarro', {
    codAnuncioCarro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    tipoAnuncio: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING(65),
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    CEP: {
        type: Sequelize.CHAR(8),
        allowNull: false,
        unique: true
    }
    
}, {
    timestamps: false
});

Endereco.sync({
    alter: true
});

module.exports = Endereco;