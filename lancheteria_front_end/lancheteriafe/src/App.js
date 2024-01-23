import Rotas from "./routes";
import React from "react";
import "../src/img/img.css";

import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AuthProvider from "./components/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <Rotas />
        <ToastContainer autoClose={2000} theme="dark" transition={Flip} />
      </div>
    </AuthProvider>
  );
}

export default App;
