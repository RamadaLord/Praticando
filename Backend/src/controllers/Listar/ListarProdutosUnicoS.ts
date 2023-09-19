import { Request, Response } from "express";
import { ListarPUS } from "../../services/users/Listar/ListarProdutoUnicoS";

class ListarPUC {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const listarProdutoUnico = new ListarPUS();
    const resposta = await listarProdutoUnico.execute({
      id,
    });
    return res.json(resposta);
  }
}

export { ListarPUC };
