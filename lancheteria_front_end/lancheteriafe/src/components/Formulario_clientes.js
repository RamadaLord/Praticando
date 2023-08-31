import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiBack from "../services/api";
import "../css/formulario.css";


function FormularioClientes() {

  const navigate = useNavigate()

  const [cod_cliente, setCod_cliente] = useState("");
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf] = useState("");
  const [rg_ie, setRg] = useState("");
  const [tel_fixo, setTel_fixo] = useState("");
  const [tel_cel, setTel_cel] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComp] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setUf] = useState("");

  useEffect(() => {
    function codigoCliente() {
      setCod_cliente(Math.round(Math.random() * 10000));
    }

    codigoCliente();
  }, []);

  async function handleFormulario(e) {
    e.preventDefault();

    if (nome === "" || tel_cel === "" || cpf_cnpj === "") {
      alert("!!CAMPOS EM BRANCO!!");
      return;
    }

    alert(`Cliente: ${cod_cliente}
        \nNome: ${nome}
        \nTelefone Fixo: ${tel_fixo}
        \nTelefone Celular: ${tel_cel}
        \nRua: ${rua}
        \nComplemento: ${complemento}
        \nCEP: ${cep}
        \nBairro: ${bairro}
        \nCidade: ${cidade}
        \nEstado: ${estado}`);

    await apiBack.post("/CriarClientes", {
      nome,
      cpf_cnpj,
      rg_ie,
      tel_cel,
      tel_fixo,
      rua,
      complemento,
      bairro,
      cidade,
      estado,
    });

    navigate("/ListarClientes")

  }
  return (
    <div id="formulario">
      <h1>Cadastro</h1>
      <form onSubmit={handleFormulario}>
        <label>Cod</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="ID"
          disabled
          value={cod_cliente}
          onChange={(e) => setCod_cliente(Math.round(Math.flour()) * 1000)}
        />
        <br />

        <label>Nome</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu nome aqui"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <label>CPF</label>
        <IMaskInput
          id="input"
          mask="000.000.000-00"
          placeholder="Seu CPF aqui"
          value={cpf_cnpj}
          onChange={(e) => setCpf(e.target.value)}
        />
        <br />

        <label>RG</label>
        <IMaskInput
          id="input"
          mask="00.000.00-00"
          placeholder="Seu RG aqui"
          value={rg_ie}
          onChange={(e) => setRg(e.target.value)}
        />
        <br />
        <label>Telefone Fixo</label>
        <IMaskInput
          id="input"
          mask="(00)0000-0000"
          placeholder="(14)3232-3232"
          value={tel_fixo}
          onChange={(e) => setTel_fixo(e.target.value)}
        />
        <br />
        <label>Telefone Celular</label>
        <IMaskInput
          id="input"
          mask="(00)00000-0000"
          placeholder="(14)99999-9999"
          value={tel_cel}
          onChange={(e) => setTel_cel(e.target.value)}
        />
        <br />

        <label>CEP</label>
        <IMaskInput
          id="input"
          mask="00000-000"
          placeholder="xxxxx-xxxx"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <br />

        <label>Rua</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Digite sua Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <br />
        <label>Complemento</label>
        <IMaskInput
          id="input"
          placeholder="Digite o complemento"
          value={complemento}
          onChange={(e) => setComp(e.target.value)}
        />
        <br />
        <label>Bairro</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Digite seu bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <br />
        <label>Cidade</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Digite sua cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <br />
        <label>Estado</label>
        <IMaskInput
          id="input"
          mask=""
          placeholder="Digite seu estado"
          value={estado}
          onChange={(e) => setUf(e.target.value)}
        />
        <br />
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormularioClientes;
