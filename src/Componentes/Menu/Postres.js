import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./Presurizados.css";
import img22 from "./img22.jpg";
import img23 from "./img23.jpg";
import img24 from "./img24.jpg";
import img10 from "./img10.jpg";

export default function Presurizados() {
  return (
    <div className="Contenedor">
      <Accordion defaultActiveKey="0" id="main-col">
        <Accordion.Item eventKey="0">
          <Accordion.Header>POSTRES</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="grupo">
              <ListGroup.Item className="Enlace">
                Cheesecake de temporada - 28bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Cheesecake de maracuyá - 27bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Torta de zanahoria - 25bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Crepes de dulce de leche con fruta - 25bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">Brownie - 18bs</ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Apple crumble - 25bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Tostadas francesas al cubo - 27bs
              </ListGroup.Item>
            </ListGroup>
            <div className="imagenesx">
              <img className="menuimg" src={img22} alt="" />
              <img className="menuimg" src={img23} alt="" />
              <img className="menuimg" src={img24} alt="" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <aside id="lateral">
        <div className="oscuro">
          <h3>Tour Locos Del Cafe</h3>
          <p>
            Taller Intensivo de Cafe: Barismo, Cata y Tueste para Cafeterias
          </p>
          <h3>Objetivo del Taller:</h3>
          <p>
            El Taller Intensivo de Cafe está diseñado especificamente para
            dueños y trabajadores de cafeterias, así como para cualquier persona
            interesada en profundizar su conocimiento sobre el mundo del cafe.
          </p>
          <p>
            A lo largo de este taller, los participantes adquiriran habilidades
            avanzadas de barismo, técnicas de catacion y comprenderan los
            fundamentos del tueste para mejorar la calidad de los productos que
            ofrecen en sus cafeterias.
          </p>
          <img src={img10} alt="" />
        </div>
      </aside>
    </div>
  );
}
