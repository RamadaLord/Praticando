import { application, Router } from "express";  
import { CriarUsuarioController } from '../src/controllers/users/CriarUsuarioController';
import { CriarClienteController } from "./controllers/users/CriarClientesController";

const router = Router()

router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post('/CriarClientes', new CriarClienteController().handle)



export {router}