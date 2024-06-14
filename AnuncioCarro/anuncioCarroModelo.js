const Sequelize = require('sequelize');
const conexao = require('../Conexao/conexao');

const AnuncioCarro = conexao.define('anuncioCarro', {
    codAnuncioCarro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    classificacaoCarro: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    modeloCarro: {
        type: Sequelize.STRING(65),
        allowNull: false
    },
    anoCarro: {
        type: Sequelize.INTEGER(4),
        allowNull: false
    },
    precoCarro: {
        type: Sequelize.FLOAT(8),
        allowNull: false
    },
    descricaoCarro: {
        type: Sequelize.STRING(300),
        allowNull: false
    }, 
    imagemCarro: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },

}, {
    timestamps: false
});

AnuncioCarro.sync({
    alter: true
});

module.exports = AnuncioCarro;