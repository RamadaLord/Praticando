import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiBack from "../../services/api";
import { toast } from "react-toastify";

export default function AlterarCliente() {
  const { id } = useParams();
  const [listarCliente, setListarCliente] = useState("");
  const [alteraNome, setAlteraNome] = useState("");
  const [alteraCpf_Cnpj, setAlteraCpf_Cnpj] = useState("");
  const [alteraRg_Ie, setAlteraRg_Ie] = useState("");
  const [alteraFixo, setAlteraFixo] = useState("");
  const [alteraCel, setAlteraCel] = useState("");
  const [alteraRua, setAlteraRua] = useState("");
  const [alteraComplemento, setAlteraComplemento] = useState("");
  const [alteraBairro, setAlteraBairro] = useState("");
  const [alteraCidade, setAlteraCidade] = useState("");
  const [alteraEstado, setAlteraEstado] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    async function ListarCliente() {
      const resposta = await apiBack.get(`/ListarClienteUnico/${id}`);
      setListarCliente(resposta.data);
    }
    ListarCliente();
  }, [id]);

  useEffect(() => {
    setAlteraNome(listarCliente.nome);
    setAlteraCpf_Cnpj(listarCliente.cpf_cnpj);
    setAlteraRg_Ie(listarCliente.rg_ie);
    setAlteraFixo(listarCliente.tel_fixo);
    setAlteraCel(listarCliente.tel_cel);
    setAlteraRua(listarCliente.rua);
    setAlteraComplemento(listarCliente.complemento);
    setAlteraBairro(listarCliente.bairro);
    setAlteraCidade(listarCliente.cidade);
    setAlteraEstado(listarCliente.estado);
  }, [listarCliente]);

  async function AlteraCliente(e) {
    e.preventDefault();
    toast.warning("Dados Alterados!")
    navigate('/ListarClientes')
    const resposta = await apiBack.put("/AlteraCliente", {
      id,
      alteraNome,
      alteraCpf_Cnpj,
      alteraRg_Ie,
      alteraFixo,
      alteraCel,
      alteraRua,
      alteraComplemento,
      alteraBairro,
      alteraCidade,
      alteraEstado,
    });
    console.log(resposta)

  }

  return (
    <div id="formulario">
      <center>
        <h1>Alterar Cliente</h1>
        <form onSubmit={AlteraCliente}>
          <label>Nome</label>
          <br />
          <input
            value={alteraNome}
            id='input'
            onChange={(e) => setAlteraNome(e.target.value)}
          />
          <br />
          <label>CPF/CNPJ</label>
          <br />
          <input
            value={alteraCpf_Cnpj}
            id='input'
            onChange={(e) => setAlteraCpf_Cnpj(e.target.value)}
          />
          <br />
          <label>RG/IE</label>
          <br />
          <input
            value={alteraRg_Ie}
            id='input'
            onChange={(e) => setAlteraRg_Ie(e.target.value)}
          />
          <br />
          <label>Telefone Fixo</label>
          <br />
          <input
            value={alteraFixo}
            id='input'
            onChange={(e) => setAlteraFixo(e.target.value)}
          />
          <br />
          <label>Celular</label>
          <br />
          <input
            value={alteraCel}
            id='input'
            onChange={(e) => setAlteraCel(e.target.value)}
          />
          <br />

          <label>Rua</label>
          <br />
          <input
            value={alteraRua}
            id='input'
            onChange={(e) => setAlteraRua(e.target.value)}
          />
          <br />
          <label>Bairro</label>
          <br />
          <input
            value={alteraBairro}
            id='input'
            onChange={(e) => setAlteraBairro(e.target.value)}
          />
          <br />
          <label>Complemento</label>
          <br />
          <input
            value={alteraComplemento}
            id='input'
            onChange={(e) => setAlteraComplemento(e.target.value)}
          />
          <br />
          <label>Cidade</label>
          <br />
          <input
            value={alteraCidade}
            id='input'
            onChange={(e) => setAlteraCidade(e.target.value)}
          />
          <br />
          <label>Estado</label>
          <br />
          <input
            value={alteraEstado}
            id='input'
            onChange={(e) => setAlteraEstado(e.target.value)}
          />

          <br />
          <br />
          <button className='btn' type="submit">Enviar</button>
          <br />
        </form>
        <br />
      </center>
    </div>
  );
}
