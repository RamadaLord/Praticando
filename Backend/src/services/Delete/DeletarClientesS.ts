import prismaClient from "../../../prisma";

interface DeletarCliente{

    remover: string;
}

class DeletarClienteS{
    async execute({remover}:DeletarCliente){
        await prismaClient.clientes.delete({
            where:{
                id:remover
            }
        })
        return {dados: 'Apagados com sucesso'}
    }
}

export { DeletarClienteS }