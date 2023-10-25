import { Link } from "react-router-dom"
import './header.css'
import img from "../../img/no_i.jpg"


export default function Header (){

    return(
        <div className="header">
      <img src={img} alt={img} className="img" />
      <br/>
      <h1>

      <Link to='/Login' >LogIn</Link>
      </h1>
        <h1 className="h1" >
        
        <Link to="/CadastroUsuario"> Usuario /</Link>
        <Link to="/FormularioClientes"> Cliente </Link>
        {/* <Link to="/FormularioUsuario"> Usuario </Link> */}
        <Link to="/FormularioProdutos">/ Produtos </Link>
        </h1>
        <h2 className="h2" >
          <Link to="/ListarUsuarios">Dados Usuarios/</Link> 
          <Link to='/ListarClientes'>Dados Clientes/</Link>
          <Link to='/ListarProdutos'>Dados Produtos</Link>
        </h2>
        </div>
    )
}