import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import image from "../assets/images/cover.jpeg";

import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const state = useSelector((state) => state.addItem);
  console.log(state);
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent">
      <Container fluid>
        <Link to="/" className="navbrand text-primary ">
          <img src={image} alt="icon" style={{width: '300px', height: '100px'}}></img>
        </Link>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="electronics" className="m-3 navLink text-primary">
              ELECTRONIC
            </Link>
            <Link to="mens" className="m-3 text-primary navLink">
              MALE ATTIRE
            </Link>
            <Link to="womens" className="m-3 text-primary navLink">
              FEMALE ATTIRE
            </Link>
            <Link to="jewelery" className="m-3 text-primary navLink">
              ACCESSORIES
            </Link>
          </Nav>

          <Login />
          <Signup />

          <Link to="cart" className="btn btn-primary">
            <span className="badge badge-info">
              Cart {state.length === 0 ? "" : state.length}
            </span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
