import { application, Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/multer'

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
import { ListarCUC } from './controllers/Listar/ListarClienteUnicoC';
import { AuthUsuarioController } from './controllers/login/AuthUsuarioController';
import { CategoriasC } from './controllers/categorias/CategoriaController';
import { ListarCategoriasC } from './controllers/Listar/ListarCategoriasC';

//-------Constantes-------//
import { ItsAuth } from './middleware/ItsAuth';
const router = Router();
const upload = multer(uploadConfig.upload('./tmp'))
//-------Login-------//
router.post('/AuthLogIn', new AuthUsuarioController().handle)

//-------usuarios-------//
router.post('/CriarUsuarios', new CriarUsuarioController().handle);
router.get('/ListarUsuarios',ItsAuth, new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id',ItsAuth,  new ListarUsuarioUC().handle)
router.put('/AlteraUsuario',ItsAuth,  new AlterarUsuarioC().handle)
router.delete('/DeletarUsuarios',ItsAuth,  new DeletarUsuarioController().handle);
//-------clientes-------//
router.post('/CriarClientes', new CriarClienteController().handle);
router.put('/AlteraCliente',ItsAuth,  new AlteraClienteC().handle)
router.delete('/DeletarClientes',ItsAuth,  new DeletarClientesC().handle)
router.get('/ListarClientes',ItsAuth,  new ListarClientesController().handle);
router.get('/ListarClienteUnico/:id',ItsAuth,  new ListarCUC().handle)
//-------Produtos-------//
router.post('/CriarProdutos',ItsAuth,  upload.single('file'), new CriarProdutosController().handle)
router.put('/AlteraProduto',ItsAuth,  new AlteraProdutosC().handle)
router.delete('/DeletarProdutos',ItsAuth,  new DeletarProdutosC().handle)
router.get('/ListarProdutos',ItsAuth,  new ListarProdutosController().handle)
router.get('/ListarProdutoUnico/:id',ItsAuth,  new ListarPUC().handle)
router.post('/CriarCategoria',ItsAuth,  new CategoriasC().handle)
router.get('/ListarCategorias',ItsAuth,  new ListarCategoriasC().handle)
//----------//

//-----Upload de arquivos-----//

export { router };
