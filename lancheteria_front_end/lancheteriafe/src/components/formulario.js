import { IMaskInput } from "react-imask";
import React, { useEffect, useState } from "react";
import "../css/formulario.css";
import apiBack from "../services/api";
function Formulario() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  async function handleFormulario(e){
    e.preventDefault();

    await apiBack.post("/CriarClientes",{
      nome,
      email,
      senha
    })
  }
  return (
    <div id="formulario">
      <h1>Login: </h1>
      <br/>
      <form onSubmit={handleFormulario}>
        <label>Nome De Usuario:</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu Nome de usuario aqui"
          value={nome}
          onChange={(e)=> setNome(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu Email aqui"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Senha:</label>
        <IMaskInput
          id="input"
          type="password"
          placeholder="******"
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
        />
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
