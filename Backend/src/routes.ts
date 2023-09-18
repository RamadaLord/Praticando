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
import { ListarUsuarioUC } from './controllers/Listar/ListarUsuarioUnicoC';
import { AlterarUsuarioC } from './controllers/Altera/AlteraController';
import { AlteraClienteC } from './controllers/Altera/AlteraClienteC';
import { AlteraProdutosC } from './controllers/Altera/AlteraProdutosC';
import { ListarPUC } from './controllers/Listar/ListarProdutosUnicoS';
const router = Router();
//Post
//usuarios
router.post('/CriarUsuarios', new CriarUsuarioController().handle);
router.get('/ListarUsuarios',new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id', new ListarUsuarioUC().handle)
router.put('/AlteraUsuario', new AlterarUsuarioC().handle)
router.delete('/DeletarUsuarios', new DeletarUsuarioController().handle);
//clientes
router.post('/CriarClientes', new CriarClienteController().handle);
router.put('/AlteraCliente', new AlteraClienteC().handle)
router.delete('/DeletarClientes', new DeletarClientesC().handle)
router.get('/ListarClientes', new ListarClientesController().handle);
router.get('/ListarClienteUnico/:id', new ListarUsuarioUC().handle)
//Produtos
router.post('/CriarProdutos', new CriarProdutosController().handle);
router.put('/AlteraProduto', new AlteraProdutosC().handle)
router.delete('/DeletarProdutos', new DeletarProdutosC().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.get('/ListarProdutoUnico/:id', new ListarPUC().handle)
//----------//


export { router };
