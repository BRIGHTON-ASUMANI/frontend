import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import ControlledCarousel from './HomeCarousel'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const logoutHandler = () =>{
    dispatch(logout)
    
  }

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
          {userInfo ?(
            <NavDropdown title={userInfo.name} id="username">
              <LinkContainer to='profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
          ): (
            <LinkContainer to="/login">
            <Nav.Link><i className='fas fa-user'/> Login</Nav.Link>
            </LinkContainer>
          )}
         
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
