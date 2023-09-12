import prismaClient from "../../../prisma";

interface DeletarProdutos{
    remover: string
}

class DeletarProdutoS{
    async execute({remover}:DeletarProdutos){
        await prismaClient.produtos.delete({
            where:{
                id:remover
            }
        })
        return {dados: 'apagados com sucesso'}
    }
}

export { DeletarProdutoS}