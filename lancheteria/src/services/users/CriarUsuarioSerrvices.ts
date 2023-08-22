import prismaClient from "../../../prisma";
import { hash } from 'bcryptjs'
interface CriarUsuario {
  nome: string;
  email: string;
  senha: string;
}

class CriarUsuarioServices {
  async excecute({ nome, email, senha }: CriarUsuario) {
    if (!nome || !email || !senha) {
      throw new Error("Existem campos em braco, não sao permitidos");
    }
    const emailJaCadastrado = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (emailJaCadastrado) {
      throw new Error("E-mail ja cadastrado");
    }

    const senhaCrypt = await hash(senha,8)

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
        senha:true
      },
    });
    return { Dados: usuario };
  }
}

export { CriarUsuarioServices };
