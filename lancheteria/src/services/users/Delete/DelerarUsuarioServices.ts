import prismaClient from "../../../../prisma";

interface DeletarUsuario {
  remove: string;
}

class DeletarUsuarioServices {
  async execute({ remove }: DeletarUsuario) {
    const deleteUser = await prismaClient.user.delete({
      where: {
        id: remove,
      },
    });
    console.log(deleteUser);
    return deleteUser;
  }
}

export { DeletarUsuarioServices };
