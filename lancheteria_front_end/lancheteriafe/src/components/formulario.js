import { IMaskInput } from "react-imask";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/formulario.css";
import apiBack from "../services/api";
import { toast } from "react-toastify";
function Formulario() {
  const [emailInput, setEmailInput] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaC, setSenhaC] = useState("");
  const [nomeInput, setNomeInput] = useState("");

  const navigate = useNavigate();
  let regex =
    /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

  async function handleFormulario(e) {
    try {
      e.preventDefault();

      if (!nomeInput || !emailInput || !senha) {
        toast.warn(`Campos em branco`);
        return;
      }
      const nome = nomeInput.toUpperCase();
      const email = emailInput.toLowerCase();
      await apiBack.post("/CriarUsuarios", {
        nome,
        email,
        senha,
      });
      if (!regex.exec(senha)) {
        toast.info(
          "A senha deve conter no mínimo 1 caractere em maiúsculo,1 caractere em minusculo, 1 número e 1 caractere especial!"
        );
        return;
      }

      if (senha.length < 6) {
        toast.info("A senha deve conter no minimo 6 caracteres");
        return;
      }
      // if (senha === senhaC) {
      //   toast.success("Cadastro Efetuado Com Sucesso", {
      //     position: toast.POSITION.TOP_LEFT,
      //   });
      //   navigate("/ListarUsuarios");
      // } else {
      //   toast.warn("Senhas nao batem");
      // }
    } catch (err) {
      toast.warn("Erro");
    }
  }

  return (
    <div id="formulario">
      <h1>Cadastro De Usuario Novo: </h1>
      <br />
      <form onSubmit={handleFormulario}>
        <label>Nome De Usuario:</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu Nome de usuario aqui"
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <br />
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu Email aqui"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <br />
        <br />
        <label>Senha:</label>
        <br />
        <IMaskInput
          id="input"
          type="password"
          placeholder="******"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <label>Senha:</label>
        <IMaskInput
          id="input"
          type="password"
          placeholder="******"
          value={senhaC}
          onChange={(e) => setSenhaC(e.target.value)}
        />
        <center>
          <button className="btn" type="submit">
            Enviar
          </button>
        </center>
      </form>
    </div>
  );
}

export default Formulario;
