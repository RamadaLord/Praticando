import { Router } from 'express'
import { CriarUsuarioC } from './Controllers/usuarios/CriarUsuarioC'

const router = Router() 

router.post('/CriarUsuarios', new CriarUsuarioC().handle)

export { router }