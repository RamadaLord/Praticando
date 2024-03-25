import { createContext, useState } from "react";
import apiLocal from "../api/appi";

export const Contexts = createContext();

export default function Autentica({ children }) {
  const [token, setToken] = useState(false);

  const autenticado = !!token;

  async function verificaToken() {
   const iToken = localStorage.getItem("@tktk24");
    if (!iToken) {
      setToken(false);
      return;
    }
    const { token } = JSON.parse(iToken);

    const resposta = await apiLocal("/", {
      headers: {
        Authorization: "Bearer" + `${token}`,
      },
    });

    if (resposta.data.id) {
      setToken(true);
    } else {
      setToken(false);
    }
  }

  async function handleLogar(email, password) {
    try {
      const resposta = await apiLocal.post("/", {
        email,
        password,
      });
      const data = resposta.data;
      localStorage.setItem("@tktk24", JSON.stringify(data));
      setToken(true);

      console.log(email, password);
    } catch (err) {
      error(err.response.data.error);
    }
  }

  return (
    <Contexts.Provider value={{ autenticado }}>{children}</Contexts.Provider>
  );
}
