import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/formulario";
import FormularioClientes from "./components/Formulario_clientes";
import Header from "./components/header/header";
function Rotas() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/Login" element={<Formulario />} />
        <Route path="/FormularioClientes" element={<FormularioClientes />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas