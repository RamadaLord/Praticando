import prismaClient from "../../../prisma";

interface CriarClientes {
  nome: string;
  email: string;
  senha: string;
  cpf_cnpj: string;
  rg_ie: string;
  tel_cel: string;
  tel_fixo: string;
  cep: string;
  rua: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class CriarClienteServices {
  async excecute({
    nome,
    email,
    senha,
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
  }: CriarClientes) {
    if (
      !nome ||
      !email ||
      !senha ||
      !cpf_cnpj ||
      !rg_ie ||
      !tel_cel ||
      !cep ||
      !rua ||
      !bairro ||
      !cidade ||
      !estado
    ) {
      throw new Error("Campos em branco");
    }
    const cpfJaCadastrado = await prismaClient.clientes.findFirst({
      where: {
        OR: [
          {
            cpf_cnpj: cpf_cnpj,
          },
          {
            rg_ie: rg_ie,
          },
        ],
      },
      select: {
        rg_ie: true,
        cpf_cnpj: true,
      },
    });
    if (cpfJaCadastrado) {
      throw new Error("CPF ou CNPJ ja cadastrado");
    }
    const clientes = await prismaClient.clientes.create({
      data: {
        nome: nome,
        email: email,
        senha: senha,
        cpf_cnpj: cpf_cnpj,
        rg_ie: rg_ie,
        tel_cel: tel_cel,
        tel_fixo: tel_fixo,
        cep: cep,
        rua: rua,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: true,
        cpf_cnpj: true,
        rg_ie: true,
        tel_cel: true,
        tel_fixo: true,
        cep: true,
        rua: true,
        complemento: true,
        bairro: true,
        cidade: true,
        estado: true,
      },
    });
    return { Dados: clientes };
  }
}
export { CriarClienteServices };
