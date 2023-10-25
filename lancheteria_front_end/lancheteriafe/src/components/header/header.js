import { Link } from "react-router-dom"
import './header.css'
import img from "../../img/no_i.jpg"


export default function Header (){

    return(
        <div className="header">
      <img src={img} alt={img} className="img" />
      <br/>
      <h1>
      <Link className="h1" to='/Login' >LogIn</Link>

      </h1>
        <h2 className="h1" >
        
        <Link className="h1" to="/CadastroUsuario"> Usuario /</Link>
        <Link className="h1" to="/FormularioClientes"> Cliente </Link>
        <Link className="h1" to="/FormularioProdutos">/ Produtos </Link>
        </h2>
        <h2 className="h2" >
          <Link className="h1" to="/ListarUsuarios">Dados Usuarios/</Link> 
          <Link className="h1" to='/ListarClientes'>Dados Clientes/</Link>
          <Link className="h1" to='/ListarProdutos'>Dados Produtos</Link>
        </h2>
        </div>
    )
}