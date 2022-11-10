const Sequelize = require("sequelize");
const connection = require ("../database/database");

const Formation = connection.define ('Formation',{

    
},{ freezeTableName: true });

Formation.sync({force: false})
    .then(()=> {
    console.log ("TABELA Formation CRIADA")
})

module.exports = Formation;