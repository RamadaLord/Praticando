import prismaClient from "../../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface AuthClientes {
  email: string;
  senha: string;
}

class AuthClientesS {
  async execute({ email, senha }: AuthClientes) {
    const clientes = await prismaClient.clientes.findFirst({
      where: {
        email: email,
      },
    });
    if(!clientes){
        throw new Error("Usuario/Senha Incorretos")
    }
    const autenticado = await compare(senha, clientes.senha)
    if(!autenticado){
        throw new Error("Usuario/Senha Incorretos")
    }
    if(!senha){
        throw new Error("Usuario/Senha Incorretos")
    }

    const token = sign(
        {
            id : clientes.id,
            email: clientes.email,
        },
        process.env.JWT_SECRET,
        {
            subject: clientes.id,
            expiresIn: 100000000
        }
    )

    return{
        id: clientes.id,
        email: clientes.email,
        token:token
    }

  }
}

export { AuthClientesS}
