import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiBack from "../services/api";
import { IMaskInput } from "react-imask";

import "../css/formulario.css";
import { toast } from "react-toastify";

export default function FormularioProdutos() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [banner, setBanner] = useState('')

  useEffect(() => {
    function idProdutos() {
      setId(Math.round(Math.random() * 1000));
    }
    idProdutos();
  }, []);

  async function handleFormulario(e) {
    e.preventDefault();

    // if (nome === "" || fabricante === "" || quantidade === "" || preco === "") {
    //   alert("Campos em Branco");
    //   return;
    // }

    // alert(`Produtos: ${id}
    //     \nNome:${nome} 
    //     \nfabricante:${fabricante}
    //     \nquantidade:${quantidade}
    //     \npreco:${preco}`);

    await apiBack.post("/CriarProdutos", {
      id,
      nome,
      fabricante,
      quantidade,
      banner,
      preco,
    });
    navigate("/ListarProdutos");

    toast.success('Produto Cadastrado com sucesso.',{
      position: toast.POSITION.TOP_LEFT
    })
    console.log(banner)
  }

  return (
    <div id="formulario">
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleFormulario}>
        <br/>
        <label>ID:</label>
        <br/>
        <IMaskInput
          id="input"
          type="text"
          placeholder="ID"
          disabled
          value={id}
          onChange={(e) => setId(Math.round(Math.flour()) * 1000)}
        />
        <br />
        <label>Nome:</label>
        <br/>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>Fabricante:</label>
        <br/>
        <IMaskInput
          id="input"
          type="text"
          placeholder="Fabricante"
          value={fabricante}
          onChange={(e) => setFabricante(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <br/>
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
        <br/>
        <IMaskInput
          id="input"
          type="text"
          mask="R$00,00"
          placeholder="Valor"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <br/>
        <label>
                imagem:
            </label>
            <br/>
            <input 
            type='file'
             onChange={(e)=>setBanner(e.target.files[0])}/>
            <br/>
        <center>

        <button className="btn" type="submit">
          Enviar
        </button>
        </center>
      </form>
    </div>
  );
}
