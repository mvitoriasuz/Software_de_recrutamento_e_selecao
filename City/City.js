const Sequelize = require("sequelize");
const connection = require ("../database/database");

const City = connection.define ('City',{
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false  
    }, 
    codigo_ibge: {
        type: Sequelize.CHAR(7),
        allowNull: false  
    }
},{ freezeTableName: true });

City.sync({force: false})
    .then(()=> {
    console.log ("TABELA CITY CRIADA")
})

module.exports = City;