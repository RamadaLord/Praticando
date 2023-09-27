import { useEffect, useState } from "react";
import { GiTrashCan } from "react-icons/gi";
import { LuEdit } from "react-icons/lu";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import apiBack from "../../services/api";

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState([""]);

  useEffect(() => {
    async function listarProdutos() {
      const repsosta = await apiBack.get("/ListarProdutos");
      setProdutos(repsosta.data);
    }
    listarProdutos();
  }, [produtos]);
  console.log(produtos);

  async function excluirProdutos(id) {
    await apiBack.delete("/DeletarProdutos/", {
      data: {
        remover: id,
      },
    });
    toast.error('Dados Apagados!',{
      position: toast.POSITION.TOP_RIGHT
    })
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
                  {/* id:{produto.id} */}
                  Nome: {produto.nome}
                  <br />
                  <img className="img2"
                  src={`http://localhost:3333/files/${produto.banner}`}
                  alt={produto.banner}/>
                  {/* <br/> */}
                  <br />
                  Fabricante: {produto.fabricante}
                  <br />
                  Quantidae: {produto.quantidade}
                  <br />
                  Preço: {produto.preco}
                  <center>
                    <Link to={`/AlterarProduto/${produto.id}`} ><LuEdit className="btn2" /></Link>
                    <GiTrashCan className="btn2" color="red" onClick={() => excluirProdutos(produto.id)} />
                  </center>
                </p>
                <br />
                <br />
              </article>
              <br/>
            </center>
          );
        })}
      </section>
    </div>
  );
}
