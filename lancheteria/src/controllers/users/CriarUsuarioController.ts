import { Request, Response } from "express";
import { CriarUsuarioServices } from "../../services/users/CriarUsuarioSerrvices";
class CriarUsuarioController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    const criarUsuarioSerrvices = new CriarUsuarioServices()
    const usuarios = await criarUsuarioSerrvices.excecute({
        nome,
        email,
        senha
    })
    return res.json(usuarios);
    if (nome === "" || email === "" || senha === "") {
      return res.json({ nome: nome });
    }
    
    console.log(nome, email, senha);
  }
}

export { CriarUsuarioController };
