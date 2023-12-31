import { useEffect, useState } from 'react';
import { GiTrashCan } from 'react-icons/gi';
import { LuFileEdit } from 'react-icons/lu';
import { toast } from "react-toastify";
import apiBack from '../../services/api';
import '../../css/dados.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-router-dom';

export default function ListarClientes() {
  const [clientes, setClientes] = useState(['']);

  useEffect(() => {
    async function listarCliente() {
      const resposta = await apiBack.get('/ListarClientes');
      setClientes(resposta.data);
    }
    listarCliente();
  }, [clientes]);
  console.log(clientes);

  async function excluirCliente(id) {
    await apiBack.delete('/DeletarClientes/', {
      data: {
        remover: id,
      },
    });
    toast.error('Dados Apagados!',{
      position: toast.POSITION.TOP_RIGHT,
      className:'toast-message'

    }
    )
  }

  return (
    <div><center>
      
      <h1>Clientes:</h1>
    </center>

      {clientes.map((resultado) => {
        return (
          <center>
            <article className='dados'>
              <p>
                {/* ID: {resultado.id}
                <br /> */}
                Nome:{resultado.nome}
                <br />
                CPF:{resultado.cpf_cnpj}
                <br />
                RG:{resultado.rg_ie}
                <br />
                Celular:{resultado.tel_cel}
                <br />
                Telefone:{resultado.tel_fixo}
                <br />
                CEP:{resultado.cep}
                <br />
                Rua:{resultado.rua}
                <br />
                Complemento:{resultado.complemento}
                <br />
                Bairro:{resultado.bairro}
                <br />
                cidade:{resultado.cidade}
                <br />
                estado:{resultado.estado}
                <br />
                <Link to={`/AlterarCliente/${resultado.id}`} ><LuFileEdit className='btn2' /></Link>
                <GiTrashCan className='btn2' color='red' onClick={() => excluirCliente(resultado.id)} />
              </p>
              <br />
            </article>
            <br/>
          </center>
        );
      })}
    </div>
  );
}
