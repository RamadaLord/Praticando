import { createContext, useState } from "react";
import { toast } from "react-toastify";
import apiBack from "../../services/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setuser] = useState("");
  const [token, setToken] = useState("");

  const isAutenthicated = !!user;

  async function signIn({ email, password }) {
    try {
      const resposta = await apiBack.post("/AuthLogIn", {
        email,
        password,
      });
      return resposta;
    } catch (err) {
      toast.error("Erro ao Fazer Login");
    }
  }
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
