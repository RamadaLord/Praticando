import prismaClient from "../../../prisma";

interface CriarFilmes {
  titulo: string;
  diretor: string;
  datadl: string;
  categoriaId: string
}

class CriarFilmesS {
  async execute({ titulo, diretor, datadl,categoriaId }: CriarFilmes) {
    const filmes = await prismaClient.movies.create({
      data: {
        titulo: titulo,
        diretor: diretor,
        datadl: datadl,
        categoriaId:categoriaId,
      },
      select: {
        id: true,
        titulo: true,
        diretor: true,
        datadl: true,
        categoriaId:true
      },
    });
    console.log(filmes)
    return { Dados: filmes };
  }
}

export { CriarFilmesS };
