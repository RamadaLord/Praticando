import prismaClient from "../../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface AuthLogIn {
  email: string;
  password: string;
}

class AuthUsuarioServices {
  async execute({ email, password }: AuthLogIn) {
    const usuario = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!usuario) {
      throw new Error("Usuario/Senha incorretos");
    }
    const autenticado = await compare(password, usuario.senha);
    if (!autenticado) {
      throw new Error("Usuario/Senha Incorretos");
    }
    if (!password) {
      throw new Error("Usuario/Senha incorretos");
    }

    const token = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        subject: usuario.id,
        expiresIn: "1h",
      }
    );
    return {
      id: usuario.id,
      email: usuario.email,
      token: token,
    };
    
    console.log(autenticado);
    return { Dados: "Autenticação com sucesso" };
  }
}

export { AuthUsuarioServices };
