import { Request, Response } from "express";

class CriarUsuarioController {
    async handle(req:Request, res: Response){
        const {nome, email, senha} = req.body
        if(nome===''|| email===''|| senha==='' ){
            return(
                alert("Campos vazios")
            )
        }
        console.log(nome, email, senha)
    }
}

export { CriarUsuarioController };
