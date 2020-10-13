import React, { useState } from 'react';
// Bootstrap
import { Button, Modal } from 'react-bootstrap';
// Materialize-UI Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import InfoIcon from '@material-ui/icons/Info';
// Components
import ProjectCarousel from './ProjectCarousel';
import CustomButton from './Button';

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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        style={{color: '#fff'}}
        centered
      >
        <Modal.Body style={{background: '#121212'}}>
          <Modal.Title>{data.name}</Modal.Title>
          <p>{data.description}</p>
          <ProjectCarousel images={data.images}/>
        </Modal.Body>
        <Modal.Footer style={{background: '#121212'}}>
          <div class='mr-2 d-flex justify-content-center'>
            <LaunchIcon />
            <a
              href={data.links.deployed} target='_blank'
              style={{ color: '#fff' }}
              className='ml-1'>
              Website
            </a>
          </div>
          <div className='mr-auto d-flex justify-content-center'>
            <GitHubIcon/>
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