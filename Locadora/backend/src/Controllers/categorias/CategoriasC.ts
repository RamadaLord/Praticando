import { Request, Response } from "express";
import { CategoriasS } from "../../services/categorias/CategoriasS";

class CategoriasC{
    async handle(req: Request, res: Response){
        const { nome } = req.body
        const criarCategoriasS = new CategoriasS();
        const resposta = await criarCategoriasS.excecute({
            nome,
        })
        return res.json(resposta)
    }
    
}

export { CategoriasC }