const Sequelize = require('sequelize'); //chama o sequelize e seus pacotes

                //nome do banco //usuário // senha
                //'{}' objeto JavaScript
const conexao = new Sequelize('conexao_marketplace', 'root', 'root', {
    host: 'localhost', //127.0.0.1
    port: '3306',
    dialect: 'mysql'

});

conexao.authenticate().then(()=>{
    console.log('Conexao estabelecida!');
})
.catch(error =>{
    console.log('Deu erro: ', error);
});

module.exports = conexao;