import prismaClient from "../../../../prisma";

interface DeletarUsuario {
  remover: string;
}

class DeletarUsuarioServices {
  async execute({ remover }: DeletarUsuario) {
    const deleteUser = await prismaClient.user.delete({
      where: {
        id: remover,
      },
    });
    console.log(deleteUser);
    return deleteUser;
  }
}

export { DeletarUsuarioServices };
