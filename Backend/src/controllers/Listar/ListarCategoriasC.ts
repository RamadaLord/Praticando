import { Request, Response } from "express";
import { ListarCategoriasS } from "../../services/Produtos/Listar/ListarCategoriasS";

class ListarCategoriasC{
    async handle(req:Request, res: Response){
        const listarCategoriaController = new ListarCategoriasS()
        const Response = await listarCategoriaController.execute()
        return res.json(Response)
    }
}

export { ListarCategoriasC }