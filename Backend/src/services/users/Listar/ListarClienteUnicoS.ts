import prismaClient from "../../../../prisma";

interface ListarCU {
  id: string;
}

export class ListarClienteUS {
  async execute({ id }: ListarCU) {
    const resposta = await prismaClient.clientes.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        cpf_cnpj: true,
        rg_ie: true,
        tel_cel: true,
        tel_fixo: true,
        rua: true,
        complemento: true,
        bairro: true,
        cidade: true,
        estado: true,
      },
    });
    return resposta;
  }
}
