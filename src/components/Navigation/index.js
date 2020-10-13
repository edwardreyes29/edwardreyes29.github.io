import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge, Image } from 'react-bootstrap';
import logoWhite from '../../assets/svg/logo-white.svg';
import logo from '../../assets/svg/logo.svg';
import './style.css';

const styles = {
  brand: {
    fontSize: '36px'
  },
  links: {
    fontSize: '20px',
  },
  background: {
    background: '#121212'
  }
}

export const Navigation = () => {
  return (
    <Navbar variant='dark' expand="md" style={styles.background}>
      <Navbar.Brand className='brand-name' style={styles.brand}>
        <Link to='/' style={{textDecoration: 'none', color: '#fff'}}>
          <Image src={logoWhite} style={{width: '45px', fill: 'red'}} className='mb-1'/>
        </Link>
      </Navbar.Brand>
      {/* <Navbar.Brand className='brand-name' style={styles.brand}>
        <Link to='/' style={{textDecoration: 'none', color: '#fff'}}>Edward Reyes</Link>
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto navigation-links' style={{textTransform: 'uppercase'}}>
          <Nav.Link style={styles.links}>
            <Link to='/' style={{ color: '#fff'}}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link style={styles.links}>
            <Link to='/portfolio' style={{ color: '#fff'}}>
              Portfolio
            </Link>
          </Nav.Link>
          <Nav.Link style={styles.links}>
            <Link to='/contact' style={{ color: '#fff'}}>
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}