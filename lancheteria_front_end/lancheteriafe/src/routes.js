import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/formulario";
import FormularioClientes from "./components/Formulario_clientes";
import Header from "./components/header/header";
import ListarUsuarios from "./components/Dados";
function Rotas() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/Login" element={<Formulario />} />
        <Route path="/FormularioClientes" element={<FormularioClientes />} />
        <Route path="/ListarUsuarios" element={< ListarUsuarios/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas