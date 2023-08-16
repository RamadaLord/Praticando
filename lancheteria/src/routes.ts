import { application, Router } from "express";
import { CriarUsuarioController } from "../src/controllers/users/CriarUsuarioController";
import { ListarClientesController } from "./controllers/Listar/ListarClientesController";
import { CriarClienteController } from "./controllers/users/CriarClientesController";


const router = Router();
//usuarios
router.post("/CriarUsuarios", new CriarUsuarioController().handle);

//clientes
router.post("/CriarClientes", new CriarClienteController().handle);

router.get('/ListarClientes', new ListarClientesController().handle)

export { router };
