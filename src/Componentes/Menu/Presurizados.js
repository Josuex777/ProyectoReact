import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./Presurizados.css";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";
import img17 from "./img17.jpg";
import img10 from "./img10.jpg";

export default function Presurizados() {
  return (
    <div className="Contenedor">
      <Accordion defaultActiveKey="0" id="main-col">
        <Accordion.Item eventKey="0">
          <Accordion.Header>PRESURIZADOS</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="grupo">
              <ListGroup.Item className="Enlace">
                Espresso - 12bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Cappuccino - 18bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">Latte - 21bs</ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Macchiato - 14bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">
                Espresso Americano - 15bs
              </ListGroup.Item>
              <ListGroup.Item className="Enlace">Cortado - 15bs</ListGroup.Item>
            </ListGroup>
            <div className="imagenesx">
              <img className="menuimg" src={img15} alt="" />
              <img className="menuimg" src={img16} alt="" />
              <img className="menuimg" src={img17} alt="" />
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
