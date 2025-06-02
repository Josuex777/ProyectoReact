import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" className="colornav">
      <Container className="cabeza">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <h1>Menta</h1>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="enlaces">
            <Link class="nav-link" to={"/"}>
              INICIO
            </Link>
            <Link class="nav-link" to={"/Equipos"}>
              EQUIPOS
            </Link>
            <Link class="nav-link" to={"/Login"}>
              RESERVAS
            </Link>
            <NavDropdown title="MENU" id="collasible-nav-dropdown">
              <Link to="/Presurizados" class="dropdown-item">
                Presurizados
              </Link>
              <Link to="/SinCafe" class="dropdown-item">
                Sin Cafe
              </Link>
              <Link to={"/Postres"} class="dropdown-item">
                Postres
              </Link>
              <Link to={"/Mentas"} class="dropdown-item">
                Mentas Coctails
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
