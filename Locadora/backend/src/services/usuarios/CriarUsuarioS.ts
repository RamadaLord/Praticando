import prismaClient from "../../prisma"

interface CriarUsuario{
    nome: string
    email: string
    password: string
}

class CriarUsuarioS{
    async execute({nome,email,password}:CriarUsuario){
        const usuario = await prismaClient
    //     if(!nome||email!||!password){
    //         throw new Error("Campos em branco")
    //     }
    //     const emailJaCadastrado = await prismaClient..findFirst({
    //         where:{
    //             email:email
    //         }
    //     })
    //     if(emailJaCadastrado){
    //         throw new Error ("Email ja cadastrado")
    //     }
    //     console.log(nome, email, password)
     }
}

export { CriarUsuarioS}