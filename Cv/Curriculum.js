const Sequelize = require("sequelize");
const connection = require ("../database/database");

const Curriculum = connection.define ('Curriculum',{

},{ freezeTableName: true });

Curriculum.sync({force: false})
    .then(()=> {
    console.log ("TABELA STATES CRIADA")
})

module.exports = Curriculum;