import axios from "axios";

const apiBack = axios.create({
  baseURL: "http://localhost:2222/lancheteria"
 
});
export default apiBack;