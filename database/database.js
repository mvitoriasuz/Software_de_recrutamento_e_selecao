// caso erro SQL ALTER.USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'

const Sequelize = require("sequelize");

const connection = new Sequelize ("recrutafacil","root","",{
    host: 'localhost',
    dialect: 'mysql'
    
})

connection.authenticate()
.then(function(){
    console.log("conexão com o banco de dados realizada com sucesso!")
}).catch((msgErro) => {
    console.log(msgErro);
 })

module.exports = connection;
