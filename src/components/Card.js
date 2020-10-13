import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
// Components
import Modal from './Modal';
import abstract from '../assets/images/jumbotron-wallpaper.jpg';

// Materialize-UI Icons
import LaunchIcon from '@material-ui/icons/Launch';
import YouTubeIcon from '@material-ui/icons/YouTube';

const ProjectCard = ({ data }) => {
  const [hover, setHover] = useState(false);
  const [close, setClose] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    if (close) {
      setClose(false);
      setHover(false);
    }
  }, [close])

  const hoverTrue = () => {
    setHover(true);
  }

  const hoverFalse = () => {
    setHover(false);
  }

  const toggleClose = () => {
    setHover(false)
    setClose(true);
  }

  let cardStyle;
  if (hover) {
    cardStyle = {
      opacity: 1,
      background: 'rgba(0,0,0,0.8)',
      transition: `${hover ? '0.5s' : '0.5s;'}`
    }
  } else {
    cardStyle = {
      opacity: 0,
      background: 'rgba(0,0,0,0)',
      transition: `${hover ? '0.5s' : '0.5s;'}`,
      alignItems: 'center',
    }
  }

  return (
    <Card className="text-white">
      <Card.Img src={data.images[0]} alt="Card image" />
      <Card.ImgOverlay className='image-overlay'
        style={cardStyle}
        onMouseEnter={hoverTrue} onMouseLeave={hoverFalse}
      >
          <Card.Title style={{fontSize: '1.4vw'}}>{data.name}</Card.Title>
          <Card.Text style={{fontSize: '1vw'}}>{data.description}</Card.Text>
          <Row className='mb-2'>
            <Col>
              <Modal 
                hoverState={toggleClose} 
                data={data}
              />
            </Col>
            <Col>
              {data.links.deployed && (
                <Button variant='outline-light'>
                  <LaunchIcon style={{fontSize: '1vw'}}/>
                  <a
                    href={data.links.deployed} target='_blank'
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '1vw'}}
                    className='ml-1'>
                    Website
                  </a>
                </Button>
              )}
              {data.links.youtube && (
                <Button variant='outline-light'>
                  <YouTubeIcon style={{fontSize: '1vw'}}/>
                  <a
                    href={data.links.youtube} target='_blank'
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '1vw'}}
                    className='ml-1'>
                    Demo
                  </a>
                </Button>
              )}
            </Col>
          </Row>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;