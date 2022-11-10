const express = require("express")
const router = express.Router()

router.get("/vagas", function (req, res) {
    res.render('vagas');
})

router.get("/anuncio", (req, res) => {
    res.render('anuncio');
})





module.exports = router