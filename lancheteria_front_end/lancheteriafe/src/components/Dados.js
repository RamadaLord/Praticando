/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import apiBack from "../services/api";
import "../css/dados.css";

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
      alert(id)
      console.log(id)
  }

  return (
    <div className="dados">
      <h1>Listar Dados De Usuario</h1>
      {usuarios.map((usuario) => {

        return(

        <article key={usuario.id}>
          <p>
            ID : {usuario.id}
            <br/>
            Nome: {usuario.nome}
          <button Color='red' onClick={()=> excluirUsuario(usuario.id)}>p</button>
          </p>
        </article>
        )
      })}
    </div>
  );

}
