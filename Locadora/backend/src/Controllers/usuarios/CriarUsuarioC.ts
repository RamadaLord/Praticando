import { Request, Response } from 'express'
import { CriarUsuarioS } from '../../services/usuarios/CriarUsuarioS'

class CriarUsuarioC{
    async handle(req: Request, res: Response){
        const criarUsuarioServices = new CriarUsuarioS()
        const {nome, email, senha} = req.body
        const usuarios = await criarUsuarioServices.execute({
            nome,
            email,
            senha
        })
        console.log( nome, email, senha)
        if(nome === "" || email === ""|| senha=== ""){
            return res.json({nome:nome})
        }

        return res.json(usuarios)
    }
}

export { CriarUsuarioC }