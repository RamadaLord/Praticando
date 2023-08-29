import axios from "axios";

const apiBack = axios.create({
  baseURL: "mysql://root@localhost:3306/lancheteria/CriarUsuario/"
 
});
export default apiBack;