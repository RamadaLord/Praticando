import prismaClient from "../../../../prisma";

interface ListarPU {
  id: string;
}

export class ListarPUS {
  async execute({ id }: ListarPU) {
    const resposta = await prismaClient.produtos.findUnique({
      where: { id: id },
      select: {
        id: true,
        nome: true,
        fabricante: true,
        quantidade: true,
        preco: true,
      },
    });
    return resposta;
  }
}
