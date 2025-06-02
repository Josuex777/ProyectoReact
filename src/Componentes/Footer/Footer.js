import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div>
        <p>CONTÁCTANOS</p>
      </div>
      <div class="redes">
        <div>
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="icono" icon={faFacebook} />
          </a>
          <p class="linea">Cafeteria Menta</p>
        </div>
        <div>
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="icono" icon={faInstagram} />
          </a>
          <p class="linea">cafeteria_menta</p>
        </div>
        <div>
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="icono" icon={faWhatsapp} />
          </a>
          <p class="linea">78751542</p>
        </div>
        <div>
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="icono" icon={faEnvelope} />
          </a>
          <p class="linea">contacto@menta.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
