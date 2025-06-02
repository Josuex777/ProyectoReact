import React from "react";
import "./Reservas.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import img10 from "./img10.jpg";

export default function Reserva() {
  return (
    <div className="Contenedor">
      <Form id="main-col">
        <h3>DATOS PARA SU RESERVA</h3>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Cantidad de Personas</Form.Label>
          <Form.Control type="number" placeholder="Introduzca el número" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Hora de Reserva: </Form.Label>
          <Form.Control type="time" placeholder="Apartment, studio, or floor" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Fecha de Reserva:</Form.Label>
          <Form.Control type="date" placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Group controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Mesa 1</option>
            <option>Mesa 2</option>
            <option>Mesa 3</option>
            <option>Mesa 4</option>
            <option>Mesa 5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="botones">
          <Link to="/Procesado">
            <Button variant="primary" type="submit">
              Reservar
            </Button>
          </Link>
        </Form.Group>
      </Form>
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
