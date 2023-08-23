import { IMaskInput } from "react-imask";
import React, { useEffect, useState } from "react";
import "../css/formulario.css";
function FormularioClientes() {
  const [cod_cliente, setCod_cliente] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [tel_fixo, setTel_fixo] = useState("");
  const [tel_cel, setTel_cel] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [comp, setComp] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  useEffect(() => {
    function codigoCliente() {
      setCod_cliente(Math.round(Math.random() * 10000));
    }

    codigoCliente();
  }, []);

  async function handleFormulario(e) {
    e.preventDefault();

    if (nome === "" || tel_cel === "" || cpf === "") {
      alert("!!CAMPOS EM BRANCO!!");
      return;
    }

    // alert(`Cliente: ${cod_cliente}
    //     \nNome: ${nome}
    //     \nTelefone Fixo: ${telefone_Fixo}
    //     \nTelefone Celular: ${telefone_Celular}
    //     \nRua: ${buscaCep.logradouro}
    //     \nComplemento: ${buscaCep.complemento}
    //     \nCEP: ${cep}
    //     \nBairro: ${buscaCep.bairro}
    //     \nCidade: ${buscaCep.localidade}
    //     \nEstado: ${buscaCep.uf}`);
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
          onChange={(e)=> setNome(e.target.value)}
        />
        <br />

        <label>CPF</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu CPF aqui"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <br />

        <label>RG</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Seu RG aqui"
          value={rg}
          onChange={(e) => setRg(e.target.value)}
        />
        <br />
        <label>Telefone Fixo</label>
        <IMaskInput
          id="input"
          mask="(00)0000-0000"
          placeholder="(14)3232-3232"
          value={tel_fixo}
          onChange={(e)=>setTel_fixo(e.target.value)}
        />
        <br />
        <label>Telefone Celular</label>
        <IMaskInput
          id="input"
          mask="(00)00000-0000"
          placeholder="(14)99999-9999"
          value={tel_cel}
          onChange={(e)=> setTel_cel(e.target.value)}
        />
        <br />

        <label>CEP</label>
        <IMaskInput
          id="input"
          mask="00000-000"
          placeholder="xxxxx-xxxx"
          value={cep}
          onChange={(e)=> setCep(e.target.value)}
        />
        <br />

        <label>Rua</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Digite sua Rua"
          value={rua}
          onChange={(e)=>setRua(e.target.value)}
        />
        <br />
        <label>Complemento</label>
        <IMaskInput
          id="input"
          placeholder="Digite o complemento"
          value={comp}
          onChange={(e)=>setComp(e.target.value)}
        />
        <br />
        <label>Bairro</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Digite seu bairro"
          value={bairro}
          onChange={(e)=> setBairro(e.target.value)}
        />
        <br />
        <label>Cidade</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Digite sua cidade"
          value={cidade}
          onChange={(e)=> setCidade(e.target.value)}
        />
        <br />
        <label>Estado</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Digite seu estado"
          value={uf}
          onChange={(e)=>setUf(e.target.value)}
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
