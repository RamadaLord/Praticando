import { Response,Request } from "express";
import { ListarUsuariosServices } from "../../services/users/Listar/ListarUsuarioServices";


class ListarUsuariosController {
    async handle(req:Request, res:Response){
        const listarUsuariosServices = new ListarUsuariosServices()
        const usuarios = await listarUsuariosServices.execute()

        return res.json(usuarios)
    }
}

export { ListarUsuariosController }