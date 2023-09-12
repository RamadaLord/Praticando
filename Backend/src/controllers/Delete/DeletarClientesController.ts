import { DeletarClienteS } from '../../services/Delete/DeletarClientesS'
import { Request, Response } from 'express'


class DeletarClientesC{
    async handle(req: Request, res: Response){
        const {remover} = req.body
        const deletarClienteController = new DeletarClienteS()
        const apagar = await deletarClienteController.execute({
            remover
        })
        return res.json(apagar)
    }
}

export{ DeletarClientesC }