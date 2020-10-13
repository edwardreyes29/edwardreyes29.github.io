import React from 'react';
// Bootstrap
import { Container } from 'react-bootstrap';
// Material-UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Components
import ContactForm from '../components/ContactForm';


const styles = {
  textStyle: {
    fontFamily: 'Roboto Condensed, sans-serif',
    textAlign: 'center',
  },
  expandMoreIcon: {
    color: '#40916C',
    fontSize: 60,
  },
}

const Contact = () => {

  return <>
    <Container style={styles.textStyle}>
      <ExpandMoreIcon style={styles.expandMoreIcon}/>
      <h2>Please feel free to get in touch, and I will respond as soon as possible.</h2>
      <div className='d-flex justify-content-center'>
        <ContactForm />
      </div>
    </Container>
  </>
}

export default Contact;