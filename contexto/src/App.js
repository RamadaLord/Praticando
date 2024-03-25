import "./index.css";
import Rotas from "./routes/rotas";
import { ToastContainer } from "react-toastify";
import Autentica from "./context/context";
function App() {
  return (
    <div>
      <Autentica>

      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      <Rotas />
      </Autentica>
    </div>
  );
}

export default App;
