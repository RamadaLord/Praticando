import prismaClient from "../../../../prisma";

interface alteraUsuarios {
  id: string;
  alteraNome: string;
  alteraEmail: string;
}

class AlteraUsuarioS {
  async execute({ id, alteraNome, alteraEmail }: alteraUsuarios) {
    await prismaClient.user.update({
      where: {
        id: id,
      },

      data: {
        nome: alteraNome,
        email: alteraEmail,
      },
    });
    return { dados: "Dados alterados com sucesso" };
  }
}

export { AlteraUsuarioS };
