import { Request, Response } from "express";
import { ListarFilmesS } from "../../services/listarS/ListarFilmeS";

class ListarFilmesC{
    async handle(req: Request, res: Response){
        const listarFilmesS = new ListarFilmesS()
        const filmes = await listarFilmesS.execute()

        return res.json(filmes)
    }
}

export { ListarFilmesC }