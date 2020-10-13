import React from 'react';
import './style.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = {
  icon: {
    fontSize: 40,
    color: '#ffffff'
  },
  background: {
    background: '#121212',
    color: '#fff'
  }
}
export const Footer = () => {

  return (
    <footer className='footer' style={styles.background}>
      <Container fluid className="d-flex">
        <div className='mr-auto'>
          <div className='mt-2 mb-2'>2020 © Edward Reyes | All rights reserved.</div>
        </div>
        <div className='d-flex justify-content-end mr-3'>
          <a href='https://www.linkedin.com/in/edwardtreyes/' target='_blank'>
            <LinkedInIcon style={styles.icon} />
          </a>
        </div>
        <div className='d-flex justify-content-end'>
          <a href='https://github.com/edwardreyes29' target='_blank'>
            <GitHubIcon style={styles.icon} />
          </a>
        </div>
      </Container>
    </footer>
  )
}