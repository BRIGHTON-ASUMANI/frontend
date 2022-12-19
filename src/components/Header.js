import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ControlledCarousel from './HomeCarousel'

function Header() {
  return (
    <>
    <header>
    <Navbar variant="dark"  className="navbar navbar-dark navbar-expand-md py-0 fixed-top" collapseOnSelect>
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand className='navbar-brand' href="/">Cake</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <LinkContainer to="/cart">
            <Nav.Link href="#action1"><i className='fas fa-home'/> Cart</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
          <Nav.Link href="#action2"><i className='fas fa-user'/> Link</Nav.Link>
          </LinkContainer>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
  <ControlledCarousel />
  </>
  )
}

export default Header
