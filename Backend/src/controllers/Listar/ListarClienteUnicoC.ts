import { Request, Response } from "express";
import { ListarClienteUS } from "../../services/users/Listar/ListarClienteUnicoS";

class ListarCUC{
    async handle(req: Request, res: Response){
        const { id } = req.params
        const listarClienteU = new ListarClienteUS()
        const resposta = await listarClienteU.execute({
            id
        })
        return res.json
    }
}

export { ListarCUC }