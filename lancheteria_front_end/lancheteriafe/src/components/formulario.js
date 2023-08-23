import { IMaskInput } from "react-imask";
import React, { useEffect, useState } from "react";
import "../css/formulario.css";
function Formulario() {
  const [cod_cliente, setCod_cliente] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div id="formulario">
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu Email aqui"
          value={email}
        />
        <br />
        <label>Senha</label>
        <IMaskInput
          id="input"
          type="password"
          placeholder="******"
          value={senha}
        />
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
