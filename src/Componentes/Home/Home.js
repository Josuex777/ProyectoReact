import "./Home.css";
import Carrusel from "./Carrusel/Carrusel";
import { Link } from "react-router-dom";
import img4 from "./Imagenes/img4.jpg";
import img5 from "./Imagenes/img5.jpg";
import img6 from "./Imagenes/img6.jpg";
import img11 from "./Imagenes/img11.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Home = () => {
  return (
    <div className="Home">
      <Carrusel />
      <div class="sect">
        <h1 class="cont">Cafeteria Menta</h1>
        <p class="cont">Estamos locos por el café</p>
      </div>
      <section id="cajas">
        <div className="contenedor">
          <div className="caja">
            <img src={img4} alt="" />
            <p></p>
            <DropdownButton id="dropdown-basic-button" title="ENVIDIA">
              <Dropdown.Item href="#/action-1">
                <p>CAFICULTOR: Lucia Mendoza y Josue Casilla.</p>
                <p>REGIÓN: Caranavi.</p>
                <p>ALTURA: 1500 MSNM.</p>
                <p>
                  NOTAS: Caramelo y frutos rojos. Cuerpo jugoso. Acidez
                  pronunciada.
                </p>
                <p>TOSTADO: Medio.</p>
              </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
          </div>
          <div className="caja">
            <img src={img5} alt="" />
            <p></p>
            <DropdownButton id="dropdown-basic-button" title="GALLINAZO">
              <Dropdown.Item href="#/action-1">
                <p>REGIÓN: Caranavi.</p>
                <p>VARIEDAD: Blend de Temporada.</p>
                <p>ALTURA: 1500 MSNM.</p>
                <p>
                  NOTAS: Chocolate amargo y pasas. Suave acidez cítrica. Resabio
                  largo.
                </p>
                <p>TOSTADO: Medio.</p>
              </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
          </div>
          <div className="caja">
            <img src={img6} alt="" />
            <p></p>
            <DropdownButton id="dropdown-basic-button" title="EL PUEBLO">
              <Dropdown.Item href="#/action-1">
                <p>CAFICULTOR: Lucia Mendoza López.</p>
                <p>REGIÓN: Caranavi.</p>
                <p>VARIEDAD: Catuaí (Blend).</p>
                <p>ALTURA: 1500 MSNM.</p>
                <p>
                  NOTAS: Nueces y chocolate. Cuerpo untuoso. Acidez a naranja.
                </p>
                <p>TOSTADO: Medio.</p>
              </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
          </div>
          <div className="caja">
            <img src={img11} alt="" />
            <p></p>
            <DropdownButton id="dropdown-basic-button" title="DEBOTOS JAVA">
              <Dropdown.Item href="#/action-1">
                <p>ORIGEN: Carrasco Caranavi.</p>
                <p>VARIEDAD: Java.</p>
                <p>ALTURA: 1770 MSNM.</p>
                <p>NOTAS: Jazmín, piña, mandarina y melón. Cuerpo cremoso.</p>
                <p>TOSTADO: Medio.</p>
              </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
