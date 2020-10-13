import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
// Bootstrap
import { Container, Jumbotron, Row, Col, Image, Badge, Button} from 'react-bootstrap';
// Material-UI Icons
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Components
import Card from '../components/Card';
// Data
import projects from '../projects.json';


const styles = {
  sectionStyle: {
    fontFamily: 'Roboto Condensed, sans-serif',
    textAlign: 'center'
  },
  jumbotronText: {
    fontSize: '18px',
    // textTransform: 'uppercase'
  },
  jumbotron: {
    backgroundColor: '#40916C',
    // backgroundImage: `url(${jumbotronWallpaper})`,
    // backgroundAttachment: 'fixed',
    color: '#fff',
    fontFamily: 'Roboto Condensed, sans-serif',
    textAlign: 'center'
  },
  headingIcon: {
    color: '#40916C',
    fontSize: 100
  },
  expandMoreIcon: {
    color: '#40916C',
    fontSize: 60,
  },
  sectionHeading: {
    textTransform: 'uppercase'
  }
}
const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (<>
    {/* {console.log(projects)} */}
    {/* <Jumbotron fluid className='text-center' style={styles.jumbotron}>
      <Container className='mt-2'>
        <h1>Projects</h1>
      </Container>
    </Jumbotron> */}
    <Container>
      <section style={styles.sectionStyle}>
        <ExpandMoreIcon style={styles.expandMoreIcon}/>
        <h2 style={styles.sectionHeading}>Projects</h2>
        <Row xs={1} md={3}>
          {projects.map(project => 
            (<Col className='mb-3'><Card data={project} /></Col>) 
          )}
        </Row>
      </section>
    </Container>
    <Jumbotron fluid style={styles.jumbotron} className='mb-0'>
      <Container className='mt-2'>
      <section className='mt-5'>
        <h2>Have a question or interested in collaborating?</h2>
        <h3>I’m always open to discussing new project ideas or partnership opportunities.</h3>
        <Link to='/contact'>
          <Button variant='outline-light'>
            <span className='pl-2 pr-2 pt-3 pb-3' style={{fontSize: '18px'}}>
              Start a conversation
            </span>
          </Button>
        </Link>
      </section>
      </Container>
    </Jumbotron>
  </>)
}

export default Portfolio;