/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { LuEdit } from 'react-icons/lu'
import { GiTrashCan } from 'react-icons/gi'
import apiBack from '../../services/api';
import {toast } from 'react-toastify';
import '../../css/dados.css';
import 'react-toastify/dist/ReactToastify.min.css';


export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState(['']);

  useEffect(() => {
    async function listarUsuario() {
      const resposta = await apiBack.get('/ListarUsuarios');
      setUsuarios(resposta.data);
    }
    listarUsuario();
  }, [usuarios]);
  console.log(usuarios);

  async function editarUsuario(id){

    toast.info(id,{
      position:toast.POSITION.TOP_CENTER
    })
   
  }

  async function excluirUsuario(id){

    await apiBack.delete('/DeletarUsuarios/',{
      data:{
        remover:id
      }
    })
    toast.warning('Dados Apagados',{
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast-message',
      icon: "♲",
    }
    )

  }

  return (
    <div >
      <center>
        <h1>Listar Dados De Usuario</h1>
        </center>
      {usuarios.map((resultado) => {

        return(
          <center>

        <article  className='dados' key={resultado.id}>
          <p>
            ID : {resultado.id}
            <br/>
            Nome: {resultado.nome}
            <br/>
            E-mail: {resultado.email}
          <br/>
          Senha Criptografada: {resultado.senha}
            <h3>
          <center>

          <LuEdit color='blue' onClick={()=> editarUsuario(resultado.id)} />
            <GiTrashCan color='red' onClick={()=> excluirUsuario(resultado.id)}/>
            </center>
          </h3>
          <br/>
          </p>
        </article>
          </center>
        )
      })}
    </div>
  );

}
