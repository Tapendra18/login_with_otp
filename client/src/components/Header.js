import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gravity</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/register">Register</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header