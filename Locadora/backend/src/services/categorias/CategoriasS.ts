import prismaClient from "../../../prisma";

interface CriarCategoria{
    nome:string
}

class CategoriasS{
    async excecute({nome}:CriarCategoria){
        const Categoria = await prismaClient.categorias.create({
            data:{
                nome:nome
            },
            select:{
                id:true,
                nome:true
            }
        })
        return {Dados: Categoria}
    }
}

export { CategoriasS}