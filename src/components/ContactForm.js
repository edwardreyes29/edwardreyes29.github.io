import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// Components
import CustomButton from '../components/Button';

const handleSubmit = () => {
  console.log('working on form')
}

const ContactForm = () => {
  return <>
    <Form style={{textAlign: 'left'}} >
      <Row>
        <Col>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <CustomButton title='Submit' onClick={handleSubmit} />
    </Form>
  </>
}

export default ContactForm