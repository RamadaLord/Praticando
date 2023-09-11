import prismaClient from "../../../prisma";
import { DeletarUsuarioServices } from "../../services/users/Delete/DelerarUsuarioServices";
import { Request, Response } from "express";

class DeletarUsuarioController {
  async handle(req: Request, res: Response) {
    const { remover } = req.body;
    const deletarUsuarioServices = new DeletarUsuarioServices();
    const apagar = await deletarUsuarioServices.execute({
      remover,
    });
    return res.json(apagar);
  }
}

export { DeletarUsuarioController };
