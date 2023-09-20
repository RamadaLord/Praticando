import { Request, Response } from "express";
import { DadosDeUsuarioS } from "../../services/login/LogInServices";

class DadosDeUsuarioC{
    async handle(req: Request, res:Response){
        const { email, senha} = req.body
        const dadosLogin = new DadosDeUsuarioS()
        const resposta = await dadosLogin.execute({
            email,
            senha
        })
        console.log(email, senha)
        return res.json(resposta)
    }
}

export { DadosDeUsuarioC }