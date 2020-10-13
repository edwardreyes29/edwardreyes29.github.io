import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// Bootstrap
import { Container, Jumbotron, Row, Col, Card, Image, Badge, Button } from 'react-bootstrap';
// Marterial-UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SchoolIcon from '@material-ui/icons/School';
import { CodeOutlined } from '@material-ui/icons';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FaceIcon from '@material-ui/icons/Face';
// Assets
import jumbotronWallpaper from '../assets/images/jumbotron-wallpaper.jpg';
import csunLogo from '../assets/svg/csun-logo.svg';

// Components
import ProjectCard from '../components/Card';
import CustomButton from '../components/Button';
// Data
import projects from '../projects.json';

// import './style.css';

const styles = {
  textStyle: {
    fontFamily: 'Roboto Condensed, sans-serif',
    textAlign: 'center'
  },
  jumbotronText: {
    fontSize: '18px',
    // textTransform: 'uppercase'
  },
  expandMore: {
    color: '#40916C',
    fontSize: 60,
  },
  icon: {
    fontSize: 60
  },
  skills: {
    color: '#40916C',
    fontSize: 80,
  },
  heading4: {
    fontSize: '18px'
  },
  headingIcon: {
    color: '#40916C',
    fontSize: 100
  },
  jumbotron: {
    backgroundColor: '#40916C',
    // backgroundImage: `url(${jumbotronWallpaper})`,
    // backgroundAttachment: 'fixed',
    color: '#fff',
    fontFamily: 'Roboto Condensed, sans-serif',
    textAlign: 'center'
  },
  sectionHeading: {
    textTransform: 'uppercase'
  }
}

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (<>
    <Jumbotron fluid style={styles.jumbotron}>
      <Container className='mt-2'>
        <h1 style={{ textTransform: 'uppercase' }}>Hello, my name is Edward Reyes</h1>
        <p style={styles.jumbotronText}>Software Developer & Full-Stack Web Developer</p>
        <Row>
          <Col>
            <LaptopMacIcon style={styles.icon} />
          </Col>
          <Col>
            <WebIcon style={styles.icon} />
          </Col>
          <Col>
            <CodeIcon style={styles.icon} />
          </Col>
          <Col>
            <DeveloperModeIcon style={styles.icon} />
          </Col>
          <Col>
            <StorageIcon style={styles.icon} />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container style={styles.textStyle}>
      <section id='about-section' className='mb-3'>
        <div className='about-container'>
          <ExpandMoreIcon style={styles.expandMore} />
          {/* <FaceIcon style={styles.laptop} /> */}
          <h2 style={styles.sectionHeading}>About Me</h2>
          <p className='text-left'>
            I am a Full-Stack Web Developer with a Bachelor’s in Computer Science
            from California State University, Northridge (CSUN). I am an experienced problem-solver in Software
            Development and Web Development.Values ethics, integrity, and good communication from working
            as a Computer Science Tutor in CSUN’s College of Engineering & Computer Science. I have extensive
            software development experience, critical thinking, communication and excellent development
            workflow as a student in Computer Science, working as a Web developer in CSUN’s Career Center.
            My main goal is to contribute to a team while continuously improving software development skills.
            Seeks to improve the lives of both teammates and clients.
          </p>
        </div>
      </section>

      <section className='mb-3'>
        <Row xs={1} md={2} className='pl-4 pr-4'>
          <Col className='text-center'>
            <SchoolIcon style={styles.skills} />
            <h2>Education</h2>
            <div className='text-left ml-5'>
              <p className='mb-0'>B.S. Computer Science & Software Development</p>
              <p>California State University, Northridge | 2019</p>
              <p className='mb-0'>A.S. Computer Science & Software Development</p>
              <p>Antelope Valley College, Lancaster | 2017</p>
            </div>
          </Col>
          <Col className='text-center border-left'>
            <CodeOutlined style={styles.headingIcon} />
            <h3>Skills</h3>
            <h4 className='mb-0 font-weight-bold' style={styles.heading4}>
              Languages
              </h4>
            <p>Java 11, HTML, CSS, JavaScript, Python, MySQL, MongoDB</p>

            <h4 className='mb-0 font-weight-bold' style={styles.heading4}>
              Frameworks
              </h4>
            <p>Bootstrap, Materialize-UI, jQuery, Node.js, Express.js, React.js, Apache Spark, Mongoose</p>

            <h4 className='mb-0 font-weight-bold' style={styles.heading4}>
              Development tools
              </h4>
            <p>Visual Studios, PyCharm, Intellij, Git, Adobe XD, MySQL Workbench, Robo 3T, Postman, Anaconda</p>

            <h4 className='mb-0 font-weight-bold' style={styles.heading4}>
              UI/UX Design
              </h4>
            <p>Wireframing & UI Prototyping, visual communication, & interaction design</p>
          </Col>
        </Row>
      </section>

      <section className='mb-3 border-top'>
        <LaptopMacIcon style={styles.headingIcon} />
        <h2 style={styles.sectionHeading}>Work Experience</h2>
        <Row xs={1} md={2} className='text-left'>
          <Col className='d-flex justify-content-center'>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Computer Science Tutor</Card.Title>
                <Card.Subtitle className='mb-2' style={{color: '#2d6a4f'}}>
                  California State University, Northridge | CECS Tutorial Center
                </Card.Subtitle>
                <Card.Subtitle className='mb-2' style={{color: '#2d6a4f'}}>
                  Feb 2018 - Dec 2018
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Guided students to understand different subjects in Computer Science
                  </p>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Communicated core concepts to students to help them find their own
                    solution to their projects and assignments
                  </p>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Coordinated study sessions, study schedules, and study methods for students
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Web Developer</Card.Title>
                <Card.Subtitle className='mb-2' style={{color: '#2d6a4f'}}>
                  California State University, Northridge | Career Center
                </Card.Subtitle>
                <Card.Subtitle className='mb-2' style={{color: '#2d6a4f'}}>
                  Feb 2019 - Dec 2019
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Assembled a web page using HTML, CSS, JavaScript, and SVG assets to make an
                    interactive Self-Exploration page.
                  </p>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Used HTML to display the information from a Self-Exploration written script
                    and also to add links to other Career Center resources
                  </p>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Used CSS for creating animations like hover effects, color shifts, and
                    static animations.
                  </p>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Used JavaScript to create onclick events to add classes to specific HTML
                    elements in order to trigger certain animations.
                  </p>
                  <p>
                    <span style={{ color: '#40916C' }}>✓</span>
                    Used Adobe XD to create several prototypes for the design of the Self-Exploration page and to edit or
                    create new SVG elements to add to the design of the web page.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <div className='d-flex justify-content-center mt-3'>
          <Badge pill style={{ backgroundColor: '#40916C', borderColor: '#40916C' }}>
            <a className='m-2' href='https://www.linkedin.com/in/edwardtreyes/' target='_blank'
              style={{ color: '#fff', fontSize: '20px' }}>
              Visit me on LinkedIn
            </a>
          </Badge>
        </div> */}
        <div className='mt-4 mb-4'>
          <CustomButton title='Visit me on LinkedIn' link='https://www.linkedin.com/in/edwardtreyes/'/>
        </div>
      </section>

      <section className='mb-3 border-top'>
        <WebIcon style={styles.headingIcon} />
        <h2 style={styles.sectionHeading}>My recent work</h2>
        <Row xs={1} md={3}>
          {projects.slice(0, 6).map(project =>
            (<Col className='mb-3'><ProjectCard data={project} /></Col>)
          )}
        </Row>
        <h3>
          Here are a few design projects I've worked on recently. 
          <span style={{color: '#2d6a4f'}}>Want to see more?</span>
        </h3>
        {/* <div className='d-flex justify-content-center mt-3'>
          <Badge pill style={{ backgroundColor: '#40916C', borderColor: '#40916C' }}>
            <Link to='/portfolio' className='m-2'
              style={{ color: '#fff', fontSize: '20px' }}>
              Visit my portfolio
            </Link>
          </Badge>
        </div> */}
        <div className='mt-4 mb-4'>
          <CustomButton title='Visit my portfolio' path='/portfolio'/>
        </div>
      </section>

      <section className='mb-3 mt-3 border-top'>
        <h3 className='mt-3'>I am proud to have worked and studied at CSUN.</h3>
        <Row>
          <Col>
            <Image src={csunLogo} style={{ width: '300px' }} />
          </Col>
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

export default Home;