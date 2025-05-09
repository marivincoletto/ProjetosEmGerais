
class AuthController
{

    constructor(app)
    {
        app.get("/auth", (req,res) => 
        { 
            res.render("Auth/login")
        })
    }

}

module.exports = AuthController