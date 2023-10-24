import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiBack from "../services/api";
import { IMaskInput } from "react-imask";

import "../css/formulario.css";
import { toast } from "react-toastify";

export default function FormularioProdutos() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [categoriaId, setCategoriaId] = useState([""]);
  const [banner, setBanner] = useState("");

  useEffect(() => {
    async function mostrarCategoria() {
      const resposta = await apiBack.get("/ListarCategorias");
      setCategoriaId(resposta.data);
    }
    mostrarCategoria();
  }, [categoriaId]);

  async function handleFormulario(e) {
    e.preventDefault();

    if (nome === "" || fabricante === "" || quantidade === "" || preco === "") {
      alert("Campos em Branco");
      return;
    }

    await apiBack.post("/CriarProdutos", {
      nome,
      fabricante,
      quantidade,
      preco,
      categoriaId,
    });
    navigate("/ListarProdutos");

    toast.success("Produto Cadastrado com sucesso.", {
      position: toast.POSITION.TOP_LEFT,
    });
  }

  return (
    <div id="formulario">
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleFormulario}>
        <br />
        <center>
          <label>⇓Categorias⇓</label>
          <br />
          <select id="input">
            {categoriaId.map((retorno) => {
              return (
                <option value={retorno.id} key={retorno.id}>
                  {retorno.nome}
                </option>
              );
            })}
          </select>
          <br />
        </center>
        <br />
        <label>Nome:</label>
        <br />
        <IMaskInput
          id="input"
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>Fabricante:</label>
        <br />
        <IMaskInput
          id="input"
          type="text"
          placeholder="Fabricante"
          value={fabricante}
          onChange={(e) => setFabricante(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <br />
        <IMaskInput
          id="input"
          type="text"
          mask="000.00"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <br />
        <label>Preço:</label>
        <br />
        <IMaskInput
          id="input"
          type="text"
          mask="R$00,00"
          placeholder="Valor"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label for="images" className="drop-container" id="dropcontainer">
          Imagem:
          <br />
          <input
            type="file"
            id="images"
            accept="image/*"
            required
            onChange={(e) => setBanner(e.target.files[0])}
          />
          <br />
        </label>
        <center>
          <button className="btn" type="submit">
            Enviar
          </button>
        </center>
      </form>
    </div>
  );
}
