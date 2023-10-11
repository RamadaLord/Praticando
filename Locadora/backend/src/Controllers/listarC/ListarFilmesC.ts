import { Request, Response } from "express";
import { ListarFilmesS } from '../../services/ListarS/ListarFilmeS';

class ListarFilmesC{
    async handle(req: Request, res: Response){
        const listarFilmesS = new ListarFilmesS()
        const filmes = await listarFilmesS.execute()

        console.log(filmes)
        return res.json(filmes)
    }
}

export { ListarFilmesC }