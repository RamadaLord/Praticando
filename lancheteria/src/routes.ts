import { application, Router } from "express";
import { CriarUsuarioController } from "../src/controllers/users/CriarUsuarioController";
import { ListarClientesController } from "./controllers/Listar/ListarClientesController";
import { CriarProdutosController } from "./controllers/Produtos/CriarProdutosController";
import { CriarClienteController } from "./controllers/users/CriarClientesController";

const router = Router();
//Post
//usuarios
router.post("/CriarUsuarios", new CriarUsuarioController().handle);
//clientes
router.post("/CriarClientes", new CriarClienteController().handle);
//Produtos 
router.post("/CriarProdutos", new CriarProdutosController().handle);
//----------//
//Get
//Cleintes
router.get("/ListarClientes", new ListarClientesController().handle);

export { router };
