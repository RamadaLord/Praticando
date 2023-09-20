import prismaClient from "../../../prisma";
import { hash,compare } from "bcryptjs";

interface DadosLogin{
    email: string
    senha: string
}

class DadosDeUsuarioS{
    async execute({
        email, senha
    }:DadosLogin){

        const usuario = await prismaClient.user.findFirst({
            where:{
                email:email,
                senha:senha
            }
        })

        if (!usuario){
            throw new Error('Usuario/Senha incorretos')
        } 

        const autenticado = await compare(senha, usuario.senha)
        if(autenticado){
            throw new Error('Usuario/Senha Incorretos')
        }

        if(!senha){
            throw new Error('Usuario/Senha incorretos')
        }


        console.log(autenticado)
        return ({ Dados : 'Autenticação com sucesso'})
    }
}

export { DadosDeUsuarioS }