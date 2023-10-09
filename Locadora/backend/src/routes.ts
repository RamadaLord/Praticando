import { Router } from 'express'
import { CriarUsuarioC } from './Controllers/usuarios/CriarUsuarioC'
import { CriarFilmesC } from './Controllers/filmes/CriarFilmesC'
import { CategoriasC } from './Controllers/categorias/CategoriasC'
import { ListarFilmesC } from './Controllers/listarC/ListarFilmesC'
//
//Constantes
const router = Router() 
//
//Autentica
import { ItsAuth } from './middlewares/ItsAuth'
import { LogInC } from './Controllers/login/LogInC'
//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioC().handle)
router.post('/Login', new LogInC().handle)
//Filmes
router.post('/CriarFilmes', ItsAuth, new CriarFilmesC().handle)
router.get('/ListarFilmes', ItsAuth, new ListarFilmesC().handle)
//Categorias
router.post('/CriarCategoria', ItsAuth, new CategoriasC().handle)
//
export { router }