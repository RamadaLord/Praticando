import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../DashBoard/dashboard";

export default function AuthRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
