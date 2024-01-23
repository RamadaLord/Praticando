import prismaClient from "../../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface AuthLogInMotoqueiros {
  nusuario: string;
  senha: string;
}

class AuthMotoqueirosS {
  async excecute({ nusuario, senha }: AuthLogInMotoqueiros) {
    const motoqueiro = await prismaClient.motoqueiro.findFirst({
      where: {
        nusuario: nusuario,
      },
    });
    if (!motoqueiro) {
      throw new Error("Usuario/Senha Incorretos");
    }
    const autenticado = await compare(senha, motoqueiro.senha);
    if (!autenticado) {
      throw new Error("Usuario/Senha Incorretos");
    }
    if (!senha) {
      throw new Error("Usuario/Senha Incorretos");
    }

    const token = sign(
      {
        id: motoqueiro.id,
        usuario: motoqueiro.nusuario,
      },
      process.env.JWT_SECRET,
      {
        subject: motoqueiro.id,
        expiresIn: "10m",
      }
    );
    return {
      id: motoqueiro.id,
      usuario: motoqueiro.nusuario,
      token: token,
    };
  }
}

export { AuthMotoqueirosS };
