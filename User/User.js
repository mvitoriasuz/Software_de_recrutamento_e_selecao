const Sequelize = require("sequelize");
const connection = require ("../database/database");

const User = connection.define ('User',{        
    senha:{
        type: Sequelize.CHAR(8),
        allowNull: false
    },    
    nome:{
        type: Sequelize.STRING(50),
        allowNull: false
    },    
    cnpj:{
        type: Sequelize.CHAR(14),
        allowNull: true
    },    
    razao:{
        type: Sequelize.STRING(50),
        allowNull: true
    },    
    email_juri:{
        type: Sequelize.STRING(50),
        allowNull: true
    },    
    email_fisica:{
        type: Sequelize.STRING(50),
        allowNull: false
    },    
    nascimento_fisica:{
        type: Sequelize.DATE,
        allowNull: true
    },    
    deficiencia_fisica:{
        type: Sequelize.STRING(50),
        allowNull: true
    },    
    bairro:{
        type: Sequelize.STRING(30),
        allowNull: true
    },    
    numero:{
        type: Sequelize.STRING(4),
        allowNull: true
    },    
    cidade_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },    
    telefone:{
        type: Sequelize.STRING(14),
        allowNull: true
    },    
    tipo:{
        type: Sequelize.CHAR,
        allowNull: true
    },
    sexo:{
        type: Sequelize.CHAR,
        allowNull: true
    }
    

}, 
{ freezeTableName: true });

User.sync({force: false})
    .then(()=> {
    console.log ("TABLE USER CREATE")
})

module.exports = User;