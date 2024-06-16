const Sequelize = require('sequelize');
const conexao = require('../../Conexao/conexao');

const Usuario = conexao.define('anuncioPeca', {
    codAnuncioPeca: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    descricaoPeca: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    precoPeca: {
        type: Sequelize.FLOAT(8),
        allowNull: false
    },
    imagemPeca: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
 
}, {
    timestamps: false
});

AnuncioPeca.sync({
    alter: true
});

module.exports = AnuncioPeca;