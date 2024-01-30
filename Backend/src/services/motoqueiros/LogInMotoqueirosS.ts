import prismaClient from "../../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface LogInMotoqueiros{
    nusuario:string
    senha:string
}

class LoginMotoqueirosS{
    async execute({nusuario, senha} : LogInMotoqueiros){
        const usuario = await prismaClient.motoqueiro.findFirst({
            where:{
                nusuario: nusuario
            }
        })
        if(!usuario){
            throw new Error('Usuario/Senha incorretos')
        }
        const autenticado = await compare(senha, usuario.senha)
        if(!autenticado){
            throw new Error('Usuario/Senha incorretos')
        }
        const token = sign({
            id: usuario.id,
            nusuario: usuario.nusuario
        },  
        process.env.JWT_SECRET,
        {
            subject: usuario.id,
            expiresIn:100000
        }
        
        
        )
        return{
            id: usuario.id,
            nome: usuario.nome,
            token: token
        }
    }

}

export{ LoginMotoqueirosS }