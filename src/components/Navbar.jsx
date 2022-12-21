import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';


function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant='dark'>
      <Container>

        <Nav activeKey="/home" className='d-flex justify-content-center'>

          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Store</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Navbar.Brand>
        <Button variant="outline-info" onClick={handleShow}>
          Cart <Badge bg="info">0</Badge>
        </Button>

      </Navbar.Brand>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Cart />
        </Offcanvas.Body>
      </Offcanvas>

    </Navbar>
  )
}

export default Navigation