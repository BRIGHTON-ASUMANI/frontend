import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1"><i className='fas fa-home'/>Home</Nav.Link>
          <Nav.Link href="#action2"><i className='fas fa-user'/>Link</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
  )
}

export default Header
