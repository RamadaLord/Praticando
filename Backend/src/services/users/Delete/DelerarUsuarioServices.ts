import prismaClient from "../../../../prisma";

interface DeletarUsuario {
  id: string;
}

class DeletarUsuarioServices {
  async execute({ id }: DeletarUsuario) {
     await prismaClient.user.delete({
      where: {
        id: id,
      },
    });
    return {dados: 'Apagado com sucesso'};
  }
}

export { DeletarUsuarioServices };
