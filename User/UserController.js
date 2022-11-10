const express = require("express")
const router = express.Router()

/***********************************************************************************************
Realizar o cadastro
************************************************************************************************/


router.get("/cadastre", (req, res)=> {
    res.render('cadastre');
})

router.post("/salvarcadastro", (req,res) =>{
    var email = req.body.email;
    var nome = req.body.nome;
    var senha = req.body.senha;
    
    User.create({
        email_fisica: email,
        nome: nome,
        senha: senha
    }).then(()=>{
      res.redirect("/cadastre");
    })
})

/***********************************************************************************************
Login
************************************************************************************************/
router.get("/login", (req, res) => {
    res.render('login');
})
/***********************************************************************************************
Realizar Validação de  Login
************************************************************************************************/



module.exports = router