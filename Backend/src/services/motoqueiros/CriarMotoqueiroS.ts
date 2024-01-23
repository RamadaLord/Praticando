import prismaClient from "../../../prisma";
import { hash } from "bcryptjs";

interface CriarMotoqueiros {
  nome: string;
  usuario: string;
  senha: string;
}

class CriarMotoqueirosS {
    
    
    async excecute({ nome, usuario, senha }: CriarMotoqueiros) {
        const senhaCrypt = await hash(senha,8)
        const Motoqueiros = await prismaClient.motoqueiro.create({
            data: {
                nome:nome,
                nusuario:usuario,
                senha:senhaCrypt,
            },
            select:{
                id:true,
                nome:true,
                nusuario:true,
                senha:true
            }
    });
    return { Dados: Motoqueiros }
  }
}

export { CriarMotoqueirosS }