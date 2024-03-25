import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/login";


export default function RotasDiretas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
