import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiBack from '../services/api';
import { IMaskInput } from 'react-imask';

import '../css/formulario.css';
import { toast } from 'react-toastify';

export default function FormularioProdutos() {
  //Navegacao
  const navigate = useNavigate();
  //Cpnstantes de armazenamento
  const [categoriaId, setCategoriaId] = useState(['']);
  const [categoria, setCategoria] = useState('');
  const [nome, setNome] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [bannerImg, setBannerImg] = useState(null);
  //Constantes de localstorage
  const iToken = localStorage.getItem('@tklogin2023');
  const token = JSON.parse(iToken);

  useEffect(() => {
    async function mostrarCategoria() {
      const resposta = await apiBack.get('/ListarCategorias', {
        headers: {
          // eslint-disable-next-line no-useless-concat
          Authorization: 'Bearer ' + `${token}`
        },
      });
      // eslint-disable-next-line
      setCategoriaId(resposta.data);
    }

    mostrarCategoria();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriaId]);

  function handleImg(e) {
    if (!e.target.files) {
      toast.warning('Sem arquivo');
      return;
    }
    const img = e.target.files[0];
    if (img.type === 'image/png' || img.type === 'image/jpeg') {
      setBannerImg(img);
    }
  }

  async function handleFormulario(e) {
    try {
      e.preventDefault();

      const categoriaId = categoria;

      const data = new FormData();

      data.append('nome', nome);
      data.append('fabricante', fabricante);
      data.append('quantidade', quantidade);
      data.append('preco', preco);
      data.append('categoriaId', categoriaId);
      data.append('file', bannerImg);

      const resposta = await apiBack.post('/CriarProdutos', data);

      if (nome === '' || fabricante === '' || quantidade === '' || preco === '') {
        alert('Campos em Branco');
        return;
      }
      console.log(resposta);
    } catch (err) {
      console.log(err);
    }

    setNome('')
    setFabricante('')
    setQuantidade('')
    setPreco('')
    setBannerImg(null)


    // await apiBack.post('/CriarProdutos', {
    //   nome,
    //   fabricante,
    //   quantidade,
    //   preco,
    //   categoriaId,
    //   bannerImg
    // }); Bloco de codigos antes do envio de arquivos
    navigate('/ListarProdutos');

    toast.success('Produto Cadastrado com sucesso.', {
      position: toast.POSITION.TOP_LEFT,
    });
  }

  return (
    <div id='formulario'>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleFormulario}>
        <br />
        <center>
          <label>⇓Categorias⇓</label>
          <br />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            id='input'
          >
            <option> - </option>
            {categoriaId.map((retorno) => {
              return (
                <option value={retorno.id} key={retorno.id}>
                  {retorno.nome}
                </option>
              );
            })}
          </select>
          <br />
        </center>
        <br />
        <label>Nome:</label>
        <br />
        <IMaskInput
          id='input'
          type='text'
          placeholder='Nome do produto'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <label>Fabricante:</label>
        <br />
        <IMaskInput
          id='input'
          type='text'
          placeholder='Fabricante'
          value={fabricante}
          onChange={(e) => setFabricante(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <br />
        <IMaskInput
          id='input'
          type='text'
          mask='000.00'
          placeholder='Quantidade'
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <br />
        <label>Preço:</label>
        <br />
        <IMaskInput
          id='input'
          type='text'
          mask='R$00,00'
          placeholder='Valor'
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label className='drop-container' id='dropcontainer'>
          Imagem:
          <br />
          <input
            type='file'
            id='images'
            accept='image/jpeg, image/png'
            onChange={handleImg}
          />
          <br />
        </label>
        <center>
          <button className='btn' type='submit'>
            Enviar
          </button>
        </center>
      </form>
    </div>
  );
}
