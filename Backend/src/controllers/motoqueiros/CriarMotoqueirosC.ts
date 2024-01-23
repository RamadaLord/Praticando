import { Request, Response } from "express";
import { CriarMotoqueirosS } from "../../services/motoqueiros/CriarMotoqueiroS";

class CriarMotoqueiroC{
    async handle(req:Request, res: Response){
        const{
            nome,
            usuario,
            senha
        } = req.body;
        const CriarMotoqueiroServices = new CriarMotoqueirosS()
        const motoqueiro = await CriarMotoqueiroServices.excecute({
            nome,
            usuario,
            senha
        })
        return res.json(motoqueiro)
    }
}

export { CriarMotoqueiroC}