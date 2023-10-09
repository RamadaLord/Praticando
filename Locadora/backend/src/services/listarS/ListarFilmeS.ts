import prismaClient from "../../../prisma";

class ListarFilmesS{
    async execute(){
        const filmes = await prismaClient.movies.findMany({})
        return(filmes)
    }
}

export { ListarFilmesS }