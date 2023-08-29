/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import apiBack from "../services/api";
import '../css/dados.css'

export default function ListarUsuarios (){
    const [usuarios, setUsuarios] = useState([''])

    useEffect (()=>{
        async function listarUsuario(){
            const resposta = await apiBack.get('/ListarUsuarios')
            setUsuarios(resposta.data)
        }
        listarUsuario()
    },[usuarios])

    async function excluirUsuario(id){
        alert(id)
    }

    return (
        <div className="id">
            <h1>
                Listar Dados De Usuario
            </h1>
            {usuarios.map((usuario)=>{
                <div>
                    <p key={usuario.id}>{usuario.id} - {usuario.nome}</p>
                    <button Color='red' onClick={()=> excluirUsuario(usuario.id)}>p</button>
                </div>
            })}
        </div>
    )



}