import { useContext, useState } from "react"
import { Contexts } from "../context/context"

export default function Login(){

    // const {LogarContexto} = useContext()
    const [email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')


    async function handleLogar(){

    }


    return(
        <div>
            <h1>
                Login
            </h1>
        
        <form onSubmit={handleLogar} >
            <input
            type='text'
            placeholder=""
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type='text'
            placeholder=""
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" >Enviar</button>
        </form>
        
        </div>
    )
}