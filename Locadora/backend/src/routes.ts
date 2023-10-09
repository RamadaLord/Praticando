import { Router } from 'express'
import { CriarUsuarioC } from './Controllers/usuarios/CriarUsuarioC'
import { CriarFilmesC } from './Controllers/filmes/CriarFilmesC'
const router = Router() 

router.post('/CriarUsuarios', new CriarUsuarioC().handle)
router.post('/CriarFilmes', new CriarFilmesC().handle)

export { router }