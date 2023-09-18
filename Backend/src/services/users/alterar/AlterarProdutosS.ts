import prismaClient from "../../../../prisma";

interface alteraProdutos{
    id:string
    alteraNome:string
    alteraFabricante:string
    alteraQuantidade:string
    alteraPreco:string
}

class AlteraProdutosS{
    async execute ({
        id,
alteraNome,
alteraFabricante,
alteraQuantidade,
alteraPreco
    }: alteraProdutos){
        await prismaClient.produtos.update({
            where:{
                id:id
            },
            data:{
                nome:alteraNome,
                fabricante:alteraFabricante,
                quantidade:alteraQuantidade,
                preco:alteraPreco
            }
        })
        return {dados:"Dados alterados com sucesso"}
    }
}

export { AlteraProdutosS}