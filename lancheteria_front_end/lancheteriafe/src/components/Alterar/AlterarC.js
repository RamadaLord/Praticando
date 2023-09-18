import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import apiBack from "../../services/api"

export default function AlterarCliente(){
    const {id} = useParams()
    const [listarCliente, setListarCliente] = useState('')
    const [alteraNome, setAlteraNome] = useState('')
    
    useEffect(()=>{
        async function ListarCliente(){
            const resposta = await apiBack.get(`/ListarClienteUnico/${id}`)
            setListarCliente(resposta.data)
        }
        ListarCliente()
    },[])

    useEffect(()=>{
        setAlteraNome(listarCliente.nome)        
    },[listarCliente])


    
    return(
        <div>
            <h1>
                Alterar Cliente
            </h1>
            <center>
            <form>
            <label>
                Nome
            </label>
            <input
            />
            <br/>
            <br/>
            <button type="submit" >Enviar</button>
            <br/>
            </form>
            <br/>
            </center>
        </div>

    )
}