import { useState } from "react";
import '../src/styles/styleapp.css'
import Modal from "react-modal";
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleForms(){
    alert('Pronto')
  }

  return (
    <div>
      <h1>
        <p>Teste modal</p>
      </h1>
      <input type='text'
      placeholder="Digite seu nome"
      />
      <button onClick={handleForms} >Enviar</button>


      <button onClick={openModal}>Abrir Modal</button>
      <Modal isOpen={modalOpen} onRequestClose={closeModal}
      
      >
        <h2>Modal Aberto</h2>
        <form onSubmit={handleForms} >
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Telefone" />
          <input type="text" placeholder="Endereço" />
          <input type="text" placeholder="Senha" />
          <button type="submit" >Send</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
