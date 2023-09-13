import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/formulario";
import FormularioClientes from "./components/Formulario_clientes";
import Header from "./components/header/header";
import ListarUsuarios from "./components/Mostrar/Dados";
import ListarClientes from "./components/Mostrar/DadosClientes";
import ListarProdutos from "./components/Mostrar/DadosProdutos";
import FormularioProdutos from "./components/Formulario_produtos";
import AlterarCliente from "./components/Alterar/AlterarC";
import Footer from "./components/footer/footer";
import AlterarProduto from "./components/Alterar/AlterarP";
import AlterarUsuario from "./components/Alterar/AlterarU";
function Rotas() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/Login" element={<Formulario />} />
        <Route path="/FormularioClientes" element={<FormularioClientes />} />
        <Route path="FormularioProdutos" element={<FormularioProdutos/>} />
        {/* Listar */}
        <Route path="/ListarUsuarios" element={< ListarUsuarios/>} />
        <Route path="/ListarClientes" element={< ListarClientes/>} />
        <Route path="/ListarProdutos" element={< ListarProdutos/>} />
        {/*Editar*/}
        <Route path='/AlterarCliente/:id' element={<AlterarCliente/>}/>
        <Route path='/AlterarProduto/:id' element={<AlterarProduto/>} />
        <Route path='/AlterarUsuario/:id' element={<AlterarUsuario/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Rotas