import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const NavbarLayout = () => {
  return (
    <Col>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>React Hook News</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to='/about'
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to='/profile'
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                Profile
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Col>
  )
}

export default NavbarLayout
