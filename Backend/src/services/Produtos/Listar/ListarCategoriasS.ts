import prismaClient from "../../../../prisma";  

class ListarCategoriasS{
    async execute(){
        const resposta = await prismaClient.cateorias.findMany({})
        return (resposta)
    }
}

export { ListarCategoriasS }