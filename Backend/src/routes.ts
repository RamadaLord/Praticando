import { application, Router } from 'express';
import { ListarClientesController } from './controllers/Listar/ListarClientesController';
import { CriarProdutosController } from './controllers/Produtos/CriarProdutosController';
import { CriarClienteController } from './controllers/users/CriarClientesController';

import { DeletarUsuarioController } from './controllers/Delete/DeleteUserController';
import { CriarUsuarioController } from './controllers/users/CriarUsuarioController';
import { ListarUsuariosController } from './controllers/Listar/ListarusuariosController';
import { ListarProdutosController } from './controllers/Produtos/ListarProdutosController';
import { DeletarProdutosC } from './controllers/Delete/DeletarProdutosController';
import { DeletarClientesC } from './controllers/Delete/DeletarClientesController';
const router = Router();
//Post
//usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle);
router.delete('/DeletarUsuarios', new DeletarUsuarioController().handle);
router.get('/ListarUsuarios',new ListarUsuariosController().handle)
//clientes
router.post('/CriarClientes', new CriarClienteController().handle);
router.delete('/DeletarClientes', new DeletarClientesC().handle)
router.get('/ListarClientes', new ListarClientesController().handle);
//Produtos
router.post('/CriarProdutos', new CriarProdutosController().handle);
router.delete('/DeletarProdutos', new DeletarProdutosC().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
//----------//


export { router };
