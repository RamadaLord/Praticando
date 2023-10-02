import prismaClient from "../../../prisma";

interface CriarProdutos {
  nome: string;
  fabricante: string;
  quantidade: string;
  banner: string;
  preco: string;
  categoriaId: string;
}

class CriarProdutosServices {
  async excecute({
    nome,
    fabricante,
    quantidade,
    banner,
    preco,
    categoriaId,
  }: CriarProdutos) {
    const produtos = await prismaClient.produtos.create({
      data: {
        nome: nome,
        fabricante: fabricante,
        quantidade: quantidade,
        banner: banner,
        preco: preco,
        categoriaId: categoriaId,
      },
      select: {
        id: true,
        nome: true,
        fabricante: true,
        quantidade: true,
        banner: true,
        preco: true,
        categoriaId: true,
      },
    });
    return { Dados: produtos };
  }
}
export { CriarProdutosServices };
