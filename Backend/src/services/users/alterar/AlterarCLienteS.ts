import prismaClient from "../../../../prisma";

interface alteraClientes {
  id: string;
  alteraNome: string;
  alteraCpf_Cnpj: string;
  alteraRg_Ie: string;
  alteraFixo: string;
  alteraCel: string;
  alteraRua: string;
  alteraComplemento: string;
  alteraBairro: string;
  alteraCidade: string;
  alteraEstado: string;
}

class AlteraClienteS {
  async execute({
    id,
    alteraNome,
    alteraCpf_Cnpj,
    alteraRg_Ie,
    alteraFixo,
    alteraCel,
    alteraRua,
    alteraComplemento,
    alteraBairro,
    alteraCidade,
    alteraEstado,
  }: alteraClientes) {
    await prismaClient.clientes.update({
      where: {
        id: id,
      },
      data: {
        nome: alteraNome,
        cpf_cnpj: alteraCpf_Cnpj,
        rg_ie: alteraRg_Ie,
        tel_cel: alteraCel,
        tel_fixo: alteraFixo,
        rua: alteraRua,
        complemento: alteraComplemento,
        bairro: alteraBairro,
        cidade: alteraCidade,
        estado: alteraEstado,
      },
    });
    console.log(id,
        alteraNome,
        alteraCpf_Cnpj,
        alteraRg_Ie,
        alteraFixo,
        alteraCel,
        alteraRua,
        alteraComplemento,
        alteraBairro,
        alteraCidade,
        alteraEstado,)
    return { dados: "Dados alterados com sucesso" };
  }
}

export { AlteraClienteS };
