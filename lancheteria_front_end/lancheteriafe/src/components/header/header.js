import { Link } from "react-router-dom"
import './header.css'
import img from "../../img/no_i.jpg"


export default function Header (){

    return(
        <div className="header">
      <img src={img} alt={img} className="img" />
        <h1 className="header">
        
        <Link to="/Login"> Login </Link>/
        <Link to="/FormularioClientes"> Cliente </Link>/
        <Link to="/FormularioUsuario"> Usuario </Link>
        <Link to="/FormularioProdutos">/ Produtos </Link>
        </h1>
        <h2>
          <Link to="/ListarUsuarios">Dados</Link>
        </h2>
        </div>
    )
}