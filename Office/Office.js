const Sequelize = require("sequelize");
const connection = require ("../database/database");

const Office = connection.define ('Office',{
    nome_cargo: {
        type: Sequelize.STRING(50),
        allowNull: false  
    }
},{ freezeTableName: true });

Office.sync({force: false})
    .then(()=> {
    console.log ("TABELA Office CRIADA")
})

module.exports = Office;