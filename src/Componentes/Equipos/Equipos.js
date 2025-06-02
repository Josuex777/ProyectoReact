import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import img8 from "./img8.jpeg";
import img12 from "./img12.jpg";
import img13 from "./img13.jpg";
import img10 from "./img10.jpg";
import "./Equipos.css";

export default function Equipos() {
  return (
    <section className="Contenedor">
      <Accordion defaultActiveKey="0" id="main-col">
        <Accordion.Item eventKey="0">
          <Accordion.Header>ASCASO</Accordion.Header>
          <Accordion.Body>
            <p>
              En 1950, J. Ascaso empieza a trabajar para un proveedor de
              componentes de máquinas espresso, cromando piezas. De 1952 a 1962
              J. Ascaso trabajó en la línea producción Gaggia, en la manufactura
              de componentes para las máquinas de café de la marca en todo el
              mundo. Otros fabricantes de cafeteras llegan al mercado. El parque
              de máquinas espresso instaladas es cada vez mayor y precisa de
              mantenimiento y reparación. J. Ascaso decide fabricar componentes
              de todas las máquinas de café que existían en ese momento en el
              mercado. En 1962 Jesús Ascaso empezó su propio negocio para
              producir y distribuir recambios para máquinas de café espresso.
              Actualmente, Ascaso vende sus productos en más de 95 países y
              continua su expansión, creando nuevas divisiones de negocio como
              la fabricación de cafeteras espresso. JL. Ascaso, hijo del
              fundador, es el autor de la diversificación de Ascaso Factory en
              los últimos años. Se embarcó en la fabricación de máquinas de café
              espresso para unir los conocimientos técnicos con la cultura del
              espresso. La filosofía “for coffee lovers” había nacido.
            </p>
            <img className="menuimg" src={img8} alt="" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>EUREKA</Accordion.Header>
          <Accordion.Body>
            <p>
              Eureka es una marca Italiana con alta tradición en la fabricación
              de molinos con cualidades bastante específicas, se caracterizan
              por ser molinos con un aspecto un tanto industrial, pero que cada
              vez desarrollan con una estética más colorida generando una
              identidad bastante fácil de reconocer. Todo este aspecto
              semi-industrial lo usan para mostrar una de sus mayores
              características, Eureka siempre desarrolla molinos que duren en el
              tiempo, motores acorde a las exigencias de uso y muelas
              endurecidas, de modo que se pueda trabajar tranquilo sabiendo que
              las especificaciones que ofrecen las cumplirá.
            </p>
            <img className="menuimg" src={img12} alt="" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>MOCCAMASTER</Accordion.Header>
          <Accordion.Body>
            <p>
              Technivorm es el fabricante de las cafeteras y molinillos de café
              Moccamaster. Las cafeteras de filtro Moccamaster son el resultado
              de la dedicación de Technivorm al desarrollo de productos, la
              investigación y una combinación de calidad artesanal y tecnología
              precisa, produciendo la mejor taza de café desde 1968. Solo se
              utilizan materiales reciclables de alta calidad y se procesan para
              crear una máquina de café confiable. Moccamaster tiene un diseño
              modular, lo que hace que las piezas individuales sean fáciles de
              reemplazar y reparar. Además, Moccamaster es energéticamente
              eficiente y tiene una larga vida útil.
            </p>
            <img className="menuimg" src={img13} alt="" />
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
    </section>
  );
}
