import prismaClient from "../../../prisma";

interface CriarProdutos {
  nome: string;
  fabricante: string;
  quantidade: string;
  banner: string
  preco: string;
}

class CriarProdutosServices {
  async excecute({ nome, fabricante, quantidade, banner, preco }: CriarProdutos) {
    const produtos = await prismaClient.produtos.create({
      data: {
        nome: nome,
        fabricante: fabricante,
        quantidade: quantidade,
        banner: banner,
        preco: preco,
      },
      select: {
        id: true,
        nome: true,
        fabricante: true,
        quantidade: true,
        banner:true,
        preco: true,
      },
    });
    return { Dados: produtos };
  }
}
export { CriarProdutosServices };
