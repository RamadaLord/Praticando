/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { LuEdit } from 'react-icons/lu'
import { GiTrashCan } from 'react-icons/gi'
import apiBack from "../../services/api";
import "../../css/dados.css";

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([""]);

  useEffect(() => {
    async function listarUsuario() {
      const resposta = await apiBack.get("/ListarUsuarios");
      setUsuarios(resposta.data);
    }
    listarUsuario();
  }, []);
  console.log(usuarios);

  async function excluirUsuario(id){

    // await apiBack.delete('/DeletarUsuario/')
      alert(id)
      console.log(id)

  }

  return (
    <div >
      <center>
        <h1>Listar Dados De Usuario</h1>
        </center>
      {usuarios.map((usuario) => {

        return(
          <center>

        <article  className="dados" key={usuario.id}>
          <p>
            ID : {usuario.id}
            <br/>
            Nome: {usuario.nome}
            <br/>
            E-mail: {usuario.email}
          <br/>
          <center>
          <LuEdit  />
            <GiTrashCan onClick={()=> excluirUsuario(usuario.id)}/>
            </center>
          <br/>
          </p>
        </article>
          </center>
        )
      })}
    </div>
  );

}
