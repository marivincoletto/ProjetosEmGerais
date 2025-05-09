class AuthModel
{
    usuario
    senha


    constructor(usuario, senha)
    {
        this.usuario = usuario
        this.senha =  senha
    }

    login()
    {
        let existe =  false
        if(this.usuario === "Maria" && this.senha === "maria@2025")
        {
            existe = true
        }

        return existe
    }
}

module.exports = AuthModel