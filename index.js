const express = require("express");
const app = express();
const connection = require("./database/database");

/***********************************************************************************************
  Chamando a Tabela
************************************************************************************************/
const User = require("./User/User");
const City = require("./City/City");
const Office = require("./Office/Office");
const States = require("./States/States");
const Curriculum = require("./Cv/Curriculum");
const Formation = require("./Formation/Formation");
const Vacancies = require("./Vagas/Vacancies");
/***********************************************************************************************
  Chamando o controller
************************************************************************************************/
const userController = require("./User/UserController");
const cityController = require("./City/CityController");
const officeController = require("./Office/OfficeController");
const statesController = require("./States/StatesController");
const curriculumController = require("./Cv/CurriculumController");
const formationController = require("./Formation/FormationController");
const vacanciesController = require("./Vagas/VacanciesController");


/***********************************************************************************************
  Usar o controller
************************************************************************************************/
app.use("/", userController)
app.use("/", cityController)
app.use("/", officeController)
app.use("/", statesController)
app.use("/", curriculumController)
app.use("/",formationController)
app.use("/",vacanciesController)


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

/***********************************************************************************************
  Informa ao Express que irá utilizar o EJS
************************************************************************************************/
app.set('view engine', 'ejs');

/***********************************************************************************************
  Informando que iremos utilizar arquivos estáticos
************************************************************************************************/
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

    /***********************************************************************************************
 Serializando os dados enviados
************************************************************************************************/
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

/***********************************************************************************************
  Página principal
************************************************************************************************/
app.get("/", (req, res) =>{
    res.render('home');
})


// empresarial ainda não sei onde vai ficar
app.get("/empresarial", function (req, res) {
    res.render('empresarial');
})

/***********************************************************************************************
  Criando conexão
************************************************************************************************/
app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro ao iniciar o servidor!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})