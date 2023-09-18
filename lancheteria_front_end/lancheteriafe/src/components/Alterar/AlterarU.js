import React, { useEffect, useState } from 'react';
import apiBack from '../../services/api';
import { useParams } from 'react-router-dom';

export default function AlterarUsuario() {
  const { id } = useParams();
  const [listaUsuario, setListaUsuario] = useState('');
  const [alteraNome, setAlteraNome] = useState('');
  const [alteraEmail, setAlteraEmail] = useState('');


  useEffect(() => {
    async function ListaUsuario() {
      const resposta = await apiBack.get(`/ListarUsuarioUnico/${id}`);
      setListaUsuario(resposta.data);
    }
    ListaUsuario();
  }, []);

  useEffect(()=>{
    setAlteraNome(listaUsuario.nome)
    setAlteraEmail(listaUsuario.email)
  },[listaUsuario])

  async function AlteraUsuario(e){
    e.preventDefault()
    const resposta = await apiBack.put('/AlteraUsuario',{
      id,
      alteraNome,
      alteraEmail
    })
    console.log(resposta)
  }

  return (
    <div className='formulario'>
      <h1>Alterar Usuario</h1>
      <center>
        <form onSubmit={AlteraUsuario} >
          <label>Nome</label>
          <br />
          <input
            value={alteraNome}
            onChange={(e)=> setAlteraNome(e.target.alteraNome)}
           />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
            value={alteraEmail}
            onChange={(e)=> setAlteraEmail(e.target.alteraEmail)}

           />
          <br />
      <br/>
        <button type='submit'>Enviar</button>
        <br />
        </form>
        <br/>
      </center>
    </div>
  );
}
