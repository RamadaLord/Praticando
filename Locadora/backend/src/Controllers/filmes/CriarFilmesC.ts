import { Request, Response } from "express";
import { CriarFilmesS } from "../../services/filmes/CriarFilmesS";

class CriarFilmesC{
    async handle(req: Request, res: Response){
        const { titulo, diretor,datadl, categoriaId } = req.body
        const criarFilmesServices = new CriarFilmesS()
        const filmes = await criarFilmesServices.execute({
            titulo,
            diretor,
            datadl,
            categoriaId,
        })
        console.log(titulo, diretor, datadl, categoriaId)
        return res.json(filmes)
    }
}

export { CriarFilmesC }