import { Request, Response } from "express";
import { CriarProdutosServices } from "../../services/Produtos/CriarProdutosServices";

class CriarProdutosController {
  async handle(req: Request, res: Response) {
    const { nome, fabricante, quantidade, preco } = req.body;
    console.log(nome, fabricante, quantidade, preco);
    if (!req.file) {
      throw new Error("Imgem com problema");
    } else {
      const { originalname, filename: banner } = req.body;

      const criarProdutosServices = new CriarProdutosServices();
      const produtos = await criarProdutosServices.excecute({
        nome,
        fabricante,
        quantidade,
        banner,
        preco,
      });
      return res.json(produtos);
    }
  }
}

export { CriarProdutosController };
