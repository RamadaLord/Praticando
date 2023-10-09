import { Router } from 'express'
import { CriarUsuarioC } from './Controllers/usuarios/CriarUsuarioC'
import { CriarFilmesC } from './Controllers/filmes/CriarFilmesC'
import { CategoriasC } from './Controllers/categorias/CategoriasC'
//
//Constantes
const router = Router() 
//
//
//Usuarios
router.post('/CriarUsuarios', new CriarUsuarioC().handle)
//Filmes
router.post('/CriarFilmes', new CriarFilmesC().handle)
//Categorias
router.post('/CriarCategoria', new CategoriasC().handle)
//
export { router }