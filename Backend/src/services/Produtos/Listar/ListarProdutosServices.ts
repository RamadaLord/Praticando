import prismaClient from "../../../../prisma";


class ListarProdutosServices{
    async execute(){
        const produtos = await prismaClient.produtos.findMany({})
        return (produtos)
    }
}

export { ListarProdutosServices }