import { Request, Response } from 'express'

class CriarUsuarioC{
    async handle(req: Request, res: Response){
        const {nome, email, senha} = req.body
        console.log( nome, email, senha)
    }
}

export { CriarUsuarioC }