const AuthModel = require("../models/AuthModel")

class AuthController
{

    constructor(app)
    {
        app.get("/auth", (req,res) => 
        { 
            res.render("Auth/login")
        })
         
        app.post("/auth", (req, res) => {

            const usuario = req.body.usuario
            const senha = req.body.senha

            const auth =  new AuthModel(usuario, senha)

            if(auth.login())
                {
                res.render("Home/index")
                }
            
            else
            {
                res.json("Auth/login")
            }
                
        })

    }

}

module.exports = AuthController