import React, { useState } from 'react';
// Bootstrap
import { Button, Modal, Row, Col } from 'react-bootstrap';
// Materialize-UI Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import InfoIcon from '@material-ui/icons/Info';
import YouTubeIcon from '@material-ui/icons/YouTube';
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
        <InfoIcon style={{fontSize: '16px'}}/>
        <span className='ml-1' style={{fontSize: '16px'}}>Learn more</span>
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
                <h3>Description</h3>
                <p>{data.long_description}</p>
                <h3>Contributions</h3>
                <ul>
                  {data.contributions.map(contribution => <>
                    <li>{contribution}</li>
                  </>)}
                </ul>
                <h3>Technologies</h3>
                <ul>
                  {data.technologies.map(tech => <>
                    <li>{tech}</li>
                  </>)}
                </ul>
              </div>
            </Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer style={{background: '#121212'}}>
          <div class='mr-2 d-flex justify-content-center'>
            {data.links.deployed && <>
              <LaunchIcon style={styles.linkIcons}/>
              <a
                href={data.links.deployed} target='_blank'
                style={{ color: '#fff' }}
                className='ml-1'>
                Website
              </a>
            </>}
            {data.links.youtube && <>
              <YouTubeIcon style={styles.linkIcons}/>
              <a
                href={data.links.deployed} target='_blank'
                style={{ color: '#fff' }}
                className='ml-1'>
                Demo
              </a>
            </>}
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