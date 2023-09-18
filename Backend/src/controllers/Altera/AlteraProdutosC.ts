import { Request, Response } from "express";
import { AlteraProdutosS } from "../../services/users/alterar/AlterarProdutosS";

class AlteraProdutosC {
  async handle(req: Request, res: Response) {
    const { id, alteraNome, alteraFabricante, alteraQuantidade, alteraPreco } =
      req.body;
    console.log(
      id,
      alteraNome,
      alteraFabricante,
      alteraQuantidade,
      alteraPreco
    );
    const alteraProdutosC = new AlteraProdutosS()
    const produtos = await alteraProdutosC.execute({
        id,
alteraNome,
alteraFabricante,
alteraQuantidade,
alteraPreco
    })
    console.log(id,
        alteraNome,
        alteraFabricante,
        alteraQuantidade,
        alteraPreco)
  }
}

export { AlteraProdutosC}