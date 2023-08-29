import { Request, Response } from "express";
import { ListarProdutosServices } from "../../services/Produtos/Listar/ListarProdutosServices";


class ListarProdutosController{
    async handle(req: Request, res: Response){
        const listarProdutosController = new ListarProdutosServices()
        const produtos = await listarProdutosController.execute()
        return res.json(produtos)
    }
}

export { ListarProdutosController }