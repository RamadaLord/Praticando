import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiBack from "../services/api";
import { IMaskInput } from "react-imask";
import "../css/formulario.css";

export default function FormularioProdutos() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    function idProdutos() {
      setId(Math.round(Math.random() * 1000));
    }
    idProdutos();
  }, []);

  async function handleFormulario(e) {
    e.preventDefault();

    if (nome === "" || fabricante === "" || quantidade === "" || preco === "") {
      alert("Campos em Branco");
      return;
    }

    alert(`Produtos: ${id}
        \nNome:${nome} 
        \nfrabricante:${fabricante}
        \nquantidade:${quantidade}
        \npreco:${preco}`);

    await apiBack.post("/CriarProdutos", {
      id,
      nome,
      fabricante,
      quantidade,
      preco,
    });
    navigate("/ListarProdutos");
  }

  return (
    <div id="formulario">
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleFormulario}>
        <label>ID:</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="ID"
          disabled
          value={id}
          onchange={(e) => setId(Math.round(Math.flour()) * 1000)}
        />
        <br />
        <label>Nome:</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onchange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>Fabricante:</label>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Fabricante"
          value={fabricante}
          onchange={(e) => setFabricante(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <IMaskInput
          id="input"
          type="text"
          mask="000.00"
          placeholder="Quantidade"
          value={quantidade}
          onchange={(e) => setQuantidade(e.targe.value)}
        />
        <br />
        <label>Preço:</label>
        <IMaskInput
          id="input"
          type="text"
          mask="R$000,00"
          placeholder="Valor"
          value={preco}
          onchange={(e) => setPreco(e.target.value)}
        />
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
