import { Request, Response } from 'express'
import { LoginMotoqueirosS } from '../../services/motoqueiros/LogInMotoqueirosS'
class LoginMotoqueirosController{
    async handle(req: Request, res: Response){
        const { nusuario, senha } = req.body

        const loginMotoqueirosServices = new LoginMotoqueirosS()
        const resposta = await loginMotoqueirosServices.execute({
            nusuario,
            senha
        })
        return res.json(resposta)
    }
}

export { LoginMotoqueirosController }