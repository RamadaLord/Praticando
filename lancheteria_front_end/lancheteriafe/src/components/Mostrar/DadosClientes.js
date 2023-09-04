import { useEffect, useState } from "react";
import apiBack from "../../services/api";
import { GiTrashCan } from 'react-icons/gi'

import { LuEdit } from 'react-icons/lu'
import '../../css/dados.css'
export default function ListarClientes() {
  const [clientes, setClientes] = useState([""]);

  useEffect(() => {
    async function listarCliente() {
      const resposta = await apiBack.get("/ListarClientes");
      setClientes(resposta.data);
    }
    listarCliente();
  }, []);
  console.log(clientes);

  async function excluirCliente(id){
    alert(id)
    console.log(id)
  }

  return (
    <div>
      
      <h1>Clientes:</h1>

      {clientes.map((cliente) => {
        return (
          <center>

          <article className="dados">
            <p>
              ID: {cliente.id}
              <br />
              Nome:{cliente.nome}
              <br />
              CPF:{cliente.cpf_cnpj}
              <br/>
              RG:{cliente.rg_ie}
              <br/>
              Celular:{cliente.tel_cel}
              <br/>
              Telefone:{cliente.tel_fixo}
              <br/>
              Rua:{cliente.rua}
              <br/>
              Complemento:{cliente.complemento}
              <br/>
              Bairro:{cliente.bairro}
              <br/>
              cidade:{cliente.cidade}
              <br/>
                estado:{cliente.estado}
                 <br/>
            <LuEdit  />
            <GiTrashCan onClick={()=>excluirCliente(cliente.id)}/>
            </p>
            <br/>
           
          </article>
          </center>
        );
      })}
    </div>
  );
}
