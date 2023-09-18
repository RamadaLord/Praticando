import { Request, Response } from "express";
import { AlteraClienteS } from "../../services/users/alterar/AlterarCLienteS";

class AlteraClienteC {
  async handle(req: Request, res: Response) {
    const {
      id,
      alteraNome,
      alteraCpf_Cnpj,
      alteraRg_Ie,
      alteraCel,
      alteraFixo,
      alteraRua,
      alteraComplemento,
      alteraBairro,
      alteraCidade,
      alteraEstado,
    } = req.body;
    console.log(  id,
        alteraNome,
        alteraCpf_Cnpj,
        alteraRg_Ie,
        alteraCel,
        alteraFixo,
        alteraRua,
        alteraComplemento,
        alteraBairro,
        alteraCidade,
        alteraEstado,)
    const alteraClienteC = new AlteraClienteS();
    const clientes = await alteraClienteC.execute({
      id,
      alteraNome,
      alteraCpf_Cnpj,
      alteraRg_Ie,
      alteraCel,
      alteraFixo,
      alteraRua,
      alteraComplemento,
      alteraBairro,
      alteraCidade,
      alteraEstado,
    });
    console.log(id,
        alteraNome,
        alteraCpf_Cnpj,
        alteraRg_Ie,
        alteraCel,
        alteraFixo,
        alteraRua,
        alteraComplemento,
        alteraBairro,
        alteraCidade,
        alteraEstado)
  }
}

export { AlteraClienteC}
