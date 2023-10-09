import prismaClient from "../../../prisma";
import { hash } from "bcryptjs";

interface CriarUsuario {
  nome: string;
  email: string;
  senha: string;
}

class CriarUsuarioS {
  async execute({ nome, email, senha }: CriarUsuario) {
    if (!nome || !email || !senha) {
      throw new Error("Campos em branco");
    }
    const emailJaCadastrado = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (emailJaCadastrado) {
      throw new Error("Email ja cadastrado");
    }
    console.log(nome, email, senha);

    const senhaCrypt = await hash(senha, 8);

    const usuario = await prismaClient.user.create({
      data: {
        nome: nome,
        email: email,
        senha: senhaCrypt,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: true,
      },
    });
    return { Dados: usuario };
  }
}

export { CriarUsuarioS };
