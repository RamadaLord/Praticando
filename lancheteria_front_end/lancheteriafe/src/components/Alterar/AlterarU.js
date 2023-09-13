import React, { useEffect, useState } from 'react';
import apiBack from '../../services/api';
import { useParams } from 'react-router-dom';

export default function AlterarUsuario() {
  const { id } = useParams();
  const [listaUsuario, setListaUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    async function ListaUsuario() {
      const resposta = await apiBack.get(`/ListarUsuarioUnico/${id}`);
      setListaUsuario(resposta.data);
    }
    ListaUsuario();
  }, []);

  useEffect(()=>{
    setNome(listaUsuario.nome)
    setEmail(listaUsuario.email)
  },[listaUsuario])

  return (
    <div className='formulario'>
      <h1>Alterar Usuario</h1>
      <center>
        <form>
          <label>Nome</label>
          <br />
          <input
           placeholder={listaUsuario.nome}
            value={nome}
            onChange={(e)=> setNome(e.target.nome)}
           />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input
           placeholder={listaUsuario.email}
            value={email}
            onChange={(e)=> setEmail(e.target.email)}

           />
          <br />
        </form>
        <br />
        <button type='submit'>Enviar</button>
        <br/>
      </center>
      <br/>
    </div>
  );
}
