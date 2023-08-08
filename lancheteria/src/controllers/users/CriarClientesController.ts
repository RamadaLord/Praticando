import { Request, Response } from "express";

class CriarClienteController {
    async handle(req:Request, res: Response){
        const {nome,tel_cel, tel_fixo, rua, complemento,bairro, cidade, estado} = req.body
        console.log(nome,tel_cel, tel_fixo, rua, complemento,bairro, cidade, estado)
    }
}

export { CriarClienteController };