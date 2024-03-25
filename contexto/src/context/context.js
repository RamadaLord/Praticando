import { createContext, useState } from "react";

export const Contexts = createContext();

export default function Autentica({ children }) {
  const autenticado = false;
    
  async function handleLogar(email, password){
    console.log(email, password )
  }
  
  return (
    <Contexts.Provider value={{ autenticado }}>{children}</Contexts.Provider>
  );
}
