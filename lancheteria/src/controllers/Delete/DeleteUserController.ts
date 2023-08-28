import prismaClient from "../../../prisma";
import { DeletarUsuarioServices } from "../../services/users/Delete/DelerarUsuarioServices";
import { Request, Response } from "express";

class DeletarUsuarioController {
  async handle(req: Request, res: Response) {
    const { remove } = req.body;
    const deletarUsuarioServices = new DeletarUsuarioServices();
    const apaga = await deletarUsuarioServices.execute({
      remove,
    });
    return res.json(apaga);
  }
}

export { DeletarUsuarioController };
