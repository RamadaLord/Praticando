import prismaClient from "../../../../prisma";

interface DeletarUsuario {
  remover: string;
}

class DeletarUsuarioServices {
  async execute({ remover }: DeletarUsuario) {
     await prismaClient.user.delete({
      where: {
        id: remover,
      },
    });
    return {dados: 'Apagado com sucesso'};
  }
}

export { DeletarUsuarioServices };
