import React, { useState } from 'react';
// Bootstrap
import { Button, Modal, Row, Col } from 'react-bootstrap';
// Materialize-UI Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import InfoIcon from '@material-ui/icons/Info';
// Components
import ProjectCarousel from './ProjectCarousel';
import CustomButton from './Button';

const styles = {
  linkIcons: {
    color: '#fff'
  }
}

const ProjectModal = ({hoverState, data}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    hoverState(false);
    setShow(false);
  }
  const handleShow = () => {
    hoverState(true);
    setShow(true);
  }
  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        <InfoIcon style={{fontSize: '1vw'}}/>
        <span className='ml-1' style={{fontSize: '1vw'}}>Learn more</span>
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        style={{color: '#121212'}}
        centered
      >
        <Modal.Body style={{background: '#181818', color: '#fff'}}>
          <Modal.Title>{data.name}</Modal.Title>
          <p>{data.description}</p>
          <Row>
            <Col xs={12} md={7} style={{height: '48vh'}}>
              <ProjectCarousel images={data.images}/>
            </Col>
            <Col xs={12} md={5} style={{height: '48vh', overflow: 'hidden'}}>
              <div style={{overflow:'auto', height: '100%'}}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </div>
            </Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer style={{background: '#121212'}}>
          <div class='mr-2 d-flex justify-content-center'>
            <LaunchIcon style={styles.linkIcons}/>
            <a
              href={data.links.deployed} target='_blank'
              style={{ color: '#fff' }}
              className='ml-1'>
              Website
            </a>
          </div>
          <div className='mr-auto d-flex justify-content-center'>
            <GitHubIcon style={styles.linkIcons}/>
            <a 
              href={data.links.github} target='_blank'
              style={{ color: '#fff' }}
              className='ml-1'>
              GitHub
            </a>
          </div>
          {/* <Button style={{background: '#40916C', border: '#40916C'}} onClick={handleClose}>
            Close
          </Button> */}
          <CustomButton title='Close' onClick={handleClose}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectModal;