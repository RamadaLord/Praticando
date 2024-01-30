import { Request, Response } from "express";
import { AuthClientesS } from "../../services/login/AuthClientesS";

class AuthClientesC{
    async handle(req:Request, res:Response){
        const { email, senha } = req.body
        const authClientesS = new AuthClientesS()
        const resposta = await authClientesS.execute({
            email,
            senha
        })
        console.log(email, senha)
        return res.json(resposta)
    }       
}

export { AuthClientesC }