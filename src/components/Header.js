import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiFoodMenu } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa"
import { BsShop } from "react-icons/bs"

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>

      <Navbar bg="red" expand="lg" sticky="top">
        <Container fluid >
          <div>
            <Link to="/">
              <div className="logo">
                <img src="https://i.imgur.com/D1GXxkt.png" className="imgLogo" />
              </div>
            </Link>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <center>
                <Link to="/Menu" className="linked">Menu <BiFoodMenu />
                </Link>
                <Link to="/Crear" className="linked">Crea tu pizza <FaPizzaSlice />  </Link>
                <Link to="/locales" className="linked">Sucursales <BsShop /></Link>
              </center>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
