import { useContext } from "react"
import { Contexts } from '../context/context'
import RotasDiretas from "./routes"
import AuthRotas from "./auth.routes"
export default function Rotas(){
    
    const {autenticado} = useContext(Contexts)
    
    
    return(
        autenticado === true? <AuthRotas/> : <RotasDiretas/>
    )
}