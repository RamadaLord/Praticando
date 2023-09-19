import React,{useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiBack from "../../services/api"
import { toast } from "react-toastify";

export default function AlterarProduto(){
    const navigate = useNavigate()
    const { id } = useParams()
    const [listarProduto, setListarProduto] = useState('')
    const [alteraNome, setAlteraNome] = useState('')
    const [alteraFabricante, setAlteraFabricante] = useState('')
    const [alteraQuantidade, setAlteraQuantidade] = useState('')
    const [alteraPreco, setAlteraPreco] = useState('')

   useEffect(()=>{
        async function ListarProdutos(){
            const resposta = await apiBack.get(`/ListarProdutoUnico/${id}`)
            setListarProduto(resposta.data)
        }
        ListarProdutos()
   },[id]) 

   useEffect(()=>{
        setAlteraNome(listarProduto.nome)
        setAlteraFabricante(listarProduto.fabricante)
        setAlteraQuantidade(listarProduto.quantidade)
        setAlteraPreco(listarProduto.preco)
   },[listarProduto])

   async function AlteraProduto(e){
    e.preventDefault()
    toast.warning("Dados alterados")
    navigate("/listarProdutos")
    const resposta = await apiBack.put('/AlteraProduto',{
        id,
        alteraNome,
        alteraFabricante,
        alteraQuantidade,
        alteraPreco
    })
    console.log(resposta)
}
   
    return(
        <div id="formulario">
            <h1>
                Alterar Produtos
            </h1>
            <center>
                <form onSubmit={AlteraProduto} >
                    <label>Nome:</label>
                    <br/>
                    <input 
                    value={alteraNome}
                    id="input"
                    onChange={(e)=> setAlteraNome(e.target.value)}
                    />
                    <br/>
                    <label>
                        Fabricante
                    </label>
                    <br/>
                    <input
                    value={alteraFabricante}
                    id="input"
                    onChange={(e)=> setAlteraFabricante(e.target.value)}
                    />
                    <br/>
                    <label>
                        Quantidade
                    </label>
                    <br/>
                    <input
                    value={alteraQuantidade}
                    id="input"
                    onChange={(e)=> setAlteraQuantidade(e.target.value)}
                    />
                    <br/>
                    <label>
                        Preco
                    </label>
                    <br/>
                    <input
                    value={alteraPreco}
                    id="input"
                    onChange={(e)=> setAlteraPreco(e.target.value)}
                    />
                    <br/>
                    <button className="btn" type="submit">Enviar</button>
                </form>
            </center>
        </div>
    )
}