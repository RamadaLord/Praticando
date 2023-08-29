import { application, Router } from "express";
import { CriarUsuarioController } from "./controllers/users/CriarUsuarioController";
import { ListarClientesController } from "./controllers/Listar/ListarClientesController";
import { CriarProdutosController } from "./controllers/Produtos/CriarProdutosController";
import { CriarClienteController } from "./controllers/users/CriarClientesController";
import { DeletarUsuarioController } from "./controllers/Delete/DeleteUserController";
const router = Router();
//Post
//usuarios
router.post("/CriarUsuarios", new CriarUsuarioController().handle);
router.delete("/DeletarUsuario", new DeletarUsuarioController().handle);
//clientes
router.post("/CriarClientes", new CriarClienteController().handle);
//Produtos
router.post("/CriarProdutos", new CriarProdutosController().handle);
//----------//
//Get
//Cleintes
router.get("/ListarClientes", new ListarClientesController().handle);

export { router };
