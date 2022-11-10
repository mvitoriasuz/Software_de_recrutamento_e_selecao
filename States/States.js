const Sequelize = require("sequelize");
const connection = require ("../database/database");

const States = connection.define ('States',{

},{ freezeTableName: true });

States.sync({force: false})
    .then(()=> {
    console.log ("TABELA STATES CRIADA")
})

module.exports = States;