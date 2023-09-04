import { useEffect, useState } from "react";
import { GiTrashCan } from 'react-icons/gi'
import { LuEdit } from 'react-icons/lu'
import apiBack from "../../services/api";

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState([""]);

  useEffect(() => {
    async function listarProdutos() {
      const repsosta = await apiBack.get("/ListarProdutos");
      setProdutos(repsosta.data);
    }
    listarProdutos();
  }, []);
  console.log(produtos);

  async function excluirProdutos(id){
    alert(id)
  }

  return (
    <div>
      <section>
        <center>

        <h1>Dados Dos Proutos:</h1>
        </center>
        {produtos.map((produto) => {
          return (
            <center>
                <article className="dados" key={produto.id}>
              <p>
                id:{produto.id}
                <br />
                Nome: {produto.nome}
                <br />
                Fabricante: {produto.fabricante}
                <br />
                Quantidae: {produto.quantidade}
                <br />
                Preço: {produto.preco}
              <center>
          <LuEdit  />
            <GiTrashCan onClick={()=> excluirProdutos(produto.id)}/>
            </center>
              </p>
              <br />
          <br/>
            </article>
                </center>
          );
        })}
      </section>
    </div>
  );
}
