import React from "react";
import "./Reservas.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import img10 from "./img10.jpg";

export default function Procesado() {
  return (
    <div className="Contenedor">
      <br />
      <h3>Su pedido fue procesado correctamente</h3>
      <Link to="/">
        <br />
        <Button variant="primary" type="submit">
          Volver a Pagina Principal
        </Button>
        <br />
      </Link>
    </div>
  );
}
