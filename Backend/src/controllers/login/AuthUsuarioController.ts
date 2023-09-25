import { Request, Response } from "express";
import { AuthUsuarioServices } from "../../services/login/AuthUsuarioServices";

class AuthUsuarioController{
    async handle(req: Request, res:Response){
        const { email, password} = req.body
        const authUsuarioServices = new AuthUsuarioServices()
        const resposta = await authUsuarioServices.execute({
            email,
            password
        })
        console.log(email, password)
        return res.json(resposta)
    }
}

export { AuthUsuarioController }