import prismaClient from "../../../prisma";

interface CriarCategorias {
  nome: string;
}

class CategoriasS {
  async excecute({ nome }: CriarCategorias) {
    const Categoria = await prismaClient.cateorias.create({
      data: {
        nome: nome,
      },
    //   select: {
    //     id:true,
    //     nome: true,
    //   },
    });
    // console.log(Categoria)
    return { Dados: Categoria };
  }
}

export { CategoriasS };
