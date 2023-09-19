import React, { useEffect, useState } from "react";
import apiBack from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AlterarUsuario() {
  const { id } = useParams();
  const [listaUsuario, setListaUsuario] = useState("");
  const [alteraNome, setAlteraNome] = useState("");
  const [alteraEmail, setAlteraEmail] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    async function ListaUsuario() {
      const resposta = await apiBack.get(`/ListarUsuarioUnico/${id}`);
      setListaUsuario(resposta.data);
    }
    ListaUsuario();
  }, [id]);

  useEffect(() => {
    setAlteraNome(listaUsuario.nome);
    setAlteraEmail(listaUsuario.email);
  }, [listaUsuario]);

  async function AlteraUsuario(e) {
    e.preventDefault();
    navigation("/ListarUsuarios");
    toast.warning("Dados alterados com sucesso");
    const resposta = await apiBack.put("/AlteraUsuario", {
      id,
      alteraNome,
      alteraEmail,
    });
    console.log(resposta)

  }

  return (
    <div className="formulario">
      <h1>Alterar Usuario</h1>
      <center>
        <form onSubmit={AlteraUsuario}>
          <label>Nome</label>
          <br />
          <input
            value={alteraNome}
            onChange={(e) => setAlteraNome(e.target.value)}
          />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            value={alteraEmail}
            onChange={(e) => setAlteraEmail(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" >Enviar</button>
          <br />
        </form>
        <br />
      </center>
    </div>
  );
}
