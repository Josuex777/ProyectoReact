import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Footer from "./Componentes/Footer/Footer";
import NavBar from "./Componentes/NavBar/NavBar.js";
import Home from "./Componentes/Home/Home.js";
import Equipos from "./Componentes/Equipos/Equipos.js";
import Login from "./Componentes/Reservas/Login.js";
import Presurizados from "./Componentes/Menu/Presurizados.js";
import SinCafe from "./Componentes/Menu/SinCafe.js";
import Postres from "./Componentes/Menu/Postres.js";
import Mentas from "./Componentes/Menu/Mentas.js";
import Reserva from "./Componentes/Reservas/Reserva.js";
import CrearCuenta from "./Componentes/Reservas/CrearCuenta.js";
import Procesado from "./Componentes/Reservas/Procesado.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Equipos" element={<Equipos />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reserva" element={<Reserva />} />
          <Route path="/CrearCuenta" element={<CrearCuenta />} />
          <Route path="/Procesado" element={<Procesado />} />
          <Route path="/Presurizados" element={<Presurizados />} />
          <Route path="/SinCafe" element={<SinCafe />} />
          <Route path="/Postres" element={<Postres />} />
          <Route path="/Mentas" element={<Mentas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
