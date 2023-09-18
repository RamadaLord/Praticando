import { Request, Response } from "express";
import { AlteraUsuarioS } from "../../services/users/alterar/AlteraUsuarioS";

class AlterarUsuarioC {
  async handle(req: Request, res: Response) {
    const { id, alteraNome, alteraEmail } = req.body;
    console.log(id,alteraNome, alteraEmail);
    const alteraUsuariosC = new AlteraUsuarioS()
    const usuarios = await alteraUsuariosC.execute({
        id,
        alteraNome,
        alteraEmail,
    })
    console.log(id, alteraNome, alteraEmail)
  }
}

export { AlterarUsuarioC };
