import { useEffect, useState } from 'react';
import { GiTrashCan } from 'react-icons/gi';
import { LuEdit } from 'react-icons/lu';
import { toast } from "react-toastify";
import apiBack from '../../services/api';
import '../../css/dados.css';
import 'react-toastify/dist/ReactToastify.min.css';

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
      position: toast.POSITION.TOP_LEFT,
      className:'toast-message'

    }
    )
  }

  return (
    <div>
      <h1>Clientes:</h1>

      {clientes.map((resultado) => {
        return (
          <center>
            <article className='dados'>
              <p>
                ID: {resultado.id}
                <br />
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
                <LuEdit className='btn2' />
                <GiTrashCan className='btn2' color='red' onClick={() => excluirCliente(resultado.id)} />
              </p>
              <br />
            </article>
          </center>
        );
      })}
    </div>
  );
}
