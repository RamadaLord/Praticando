import { Request, Response } from "express";
import { CriarClienteServices } from "../../services/users/CriarClienteServices";

class CriarClienteController {
  async handle(req: Request, res: Response) {
    const {
      nome,
      cpf_cnpj,
      rg_ie,
      tel_cel,
      tel_fixo,
      cep,
      rua,
      complemento,
      bairro,
      cidade,
      estado,
    } = req.body;
    console.log(
      nome,
      cpf_cnpj,
      rg_ie,
      tel_cel,
      tel_fixo,
      cep,
      rua,
      complemento,
      bairro,
      cidade,
      estado
    );
    const criarClienteServices = new CriarClienteServices();
    const clientes = await criarClienteServices.excecute({
      nome,
      cpf_cnpj,
      rg_ie,
      tel_cel,
      tel_fixo,
      cep,
      rua,
      complemento,
      bairro,
      cidade,
      estado,
    });
    return res.json(clientes);
    if (
      nome === "" ||
      cpf_cnpj === "" ||
      rg_ie === "" ||
      tel_cel === "" ||
      tel_fixo === "" ||
      cep === ""||
      rua === "" ||
      complemento === "" ||
      bairro === "" ||
      cidade === "" ||
      estado === ""
    ) {
      return res.json({ nome: nome });
    }

    console.log(
      nome,
      cpf_cnpj,
      rg_ie,
      tel_cel,
      tel_fixo,
      cep,
      rua,
      complemento,
      bairro,
      cidade,
      estado
    );
  }
}

export { CriarClienteController };
