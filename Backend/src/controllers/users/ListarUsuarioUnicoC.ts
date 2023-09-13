import { Request, Response } from "express";
import { ListarUsuarioUS } from "../../services/users/ListarUsuarioUS";

class ListarUsuarioUC {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const listarUsuarioUnico = new ListarUsuarioUS();
    const resposta = await listarUsuarioUnico.execute({
      id,
    });
    return res.json(resposta);
  }
}

export { ListarUsuarioUC };
