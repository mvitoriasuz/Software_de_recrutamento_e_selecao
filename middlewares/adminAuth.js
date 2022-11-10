//NEXT - 3º parâmetro que eu informo a continuidade
//Se eu não chamo esse parâmetro,o sistema não prossegue

function adminAuth(req,res,next){
    if(req.session.user != undefined){
        next();
    }else{
        res.redirect("/login");
    }
};