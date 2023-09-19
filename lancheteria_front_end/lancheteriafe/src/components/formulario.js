import { IMaskInput } from 'react-imask';
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/formulario.css';
import apiBack from '../services/api';
import { toast } from 'react-toastify';
function Formulario() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const navigate = useNavigate()

  async function handleFormulario(e){
    e.preventDefault();

    await apiBack.post('/CriarUsuarios',{
      nome,
      email,
      senha
    })

    navigate('/ListarUsuarios')

    toast.success('Login Bem Succedido',{
      position:toast.POSITION.TOP_LEFT
    })

  }
  return (
    <div id='formulario'>
      <h1>Cadastro De Usuario Novo: </h1>
      <br/>
      <form onSubmit={handleFormulario}>
        <label>Nome De Usuario:</label>
        <IMaskInput
          id='input'
          type='text'
          placeholder='Seu Nome de usuario aqui'
          value={nome}
          onChange={(e)=> setNome(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <br/>
        <IMaskInput
          id='input'
          type='text'
          placeholder='Seu Email aqui'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Senha:</label>
        <br/>
        <IMaskInput
          id='input'
          type='password'
          placeholder='******'
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
        />
        <button className='btn' type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
