import { Request,Response } from "express";
import { LogInS } from "../../services/login/LogInS";

class LogInC{
    async handle(req:Request, res: Response){
        
       const { email, password } = req.body
       const authS = new LogInS()
       const resposta = await authS.execute({
           email, password
       })
       console.log(email, password)
       return res.json(resposta)
    }
    
}

export { LogInC }