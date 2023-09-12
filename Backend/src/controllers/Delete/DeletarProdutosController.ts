import { DeletarProdutoS } from "../../services/Delete/DeletarProdutosS";
import { Request, Response } from "express";

class DeletarProdutosC{
    async handle(req:Request, res: Response){
        const {remover} = req.body 
        const deletarProdutosServices = new DeletarProdutoS()
        const apagar = await deletarProdutosServices.execute({
            remover
        })
        return res.json(apagar)
    }
}

export { DeletarProdutosC }