const Sequelize = require("sequelize");
const connection = require("../database/database");

const Vacancies = connection.define('Vacancies', {


}, { freezeTableName: true });

Vacancies.sync({ force: false })
    .then(() => {
        console.log("TABELA STATES CRIADA")
    })

module.exports = Vacancies;