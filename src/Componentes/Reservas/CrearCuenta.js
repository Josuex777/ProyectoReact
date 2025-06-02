import React from "react";
import "./Reservas.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import img10 from "./img10.jpg";

export default function CrearCuenta() {
  return (
    <div className="Contenedor">
      <Form id="main-col">
        <h3>REGISTRO</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingresa un Nombre de Usuario:</Form.Label>
          <Form.Control type="text" placeholder="xyz123" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingresa tu Correo:</Form.Label>
          <Form.Control type="email" placeholder="xyz@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="*********" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Corfirma tu Password: </Form.Label>
          <Form.Control type="password" placeholder="*********" />
        </Form.Group>
        <Form.Group className="botones">
          <Link to="/Reserva">
            <Button variant="primary" type="submit">
              Crear Cuenta
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
