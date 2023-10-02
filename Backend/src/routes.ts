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
const router = Router();
const upload = multer(uploadConfig.upload('./tmp'))
//-------Login-------//
router.post('/AuthLogIn', new AuthUsuarioController().handle)
//-------usuarios-------//
router.post('/CriarUsuarios', new CriarUsuarioController().handle);
router.get('/ListarUsuarios',new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id', new ListarUsuarioUC().handle)
router.put('/AlteraUsuario', new AlterarUsuarioC().handle)
router.delete('/DeletarUsuarios', new DeletarUsuarioController().handle);
//-------clientes-------//
router.post('/CriarClientes', new CriarClienteController().handle);
router.put('/AlteraCliente', new AlteraClienteC().handle)
router.delete('/DeletarClientes', new DeletarClientesC().handle)
router.get('/ListarClientes', new ListarClientesController().handle);
router.get('/ListarClienteUnico/:id', new ListarCUC().handle)
//-------Produtos-------//
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosController().handle)
router.put('/AlteraProduto', new AlteraProdutosC().handle)
router.delete('/DeletarProdutos', new DeletarProdutosC().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.get('/ListarProdutoUnico/:id', new ListarPUC().handle)
router.post('/CriarCategoria', new CategoriasC().handle)
router.get('/ListarCategorias', new ListarCategoriasC().handle)
//----------//

//-----Upload de arquivos-----//

export { router };
