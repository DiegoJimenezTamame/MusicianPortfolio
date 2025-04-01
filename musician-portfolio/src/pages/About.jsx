import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

// Import the actual image
import profileImage from '../assets/images/about-image.jpg'; // Adjust the path based on where you place the image

function About() {
  const skills = [
    { name: "Piano", level: 90 },
    { name: "Guitar", level: 75 },
    { name: "Vocals", level: 85 },
    { name: "Music Production", level: 80 },
    { name: "Composition", level: 85 }
  ];

  return (
    <div className="about-page">
      <Container>
        <h1 className="text-center mb-5">About Me</h1>

        <Row className="mb-5 align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image-placeholder">
              {/* Replace placeholder with the actual image */}
              <img
                src={profileImage} // Use the imported image
                alt="Your Name"    // Alt text for accessibility
                className="about-image" // Optional class for custom styling
              />
            </div>
          </Col>
          <Col lg={6}>
            <h2>Your Name</h2>
            <h4 className="text-muted mb-4">Musician & Composer</h4>
            <p>
              I am a passionate musician with over 10 years of experience performing and
              creating music across various genres. My musical journey began at the age of 7
              when I first started learning piano, and it has evolved into a lifelong pursuit
              of musical excellence.
            </p>
            <p>
              With a formal education in Music Composition from the University of Music Arts,
              I've developed a unique style that blends classical techniques with contemporary
              influences. My work has been featured in various concerts, independent films,
              and collaborative projects with artists from around the world.
            </p>
          </Col>
        </Row>

        <h2 className="text-center mb-4">My Skills</h2>
        <Row className="mb-5">
          {skills.map((skill, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="skill-card h-100">
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <Card.Text className="text-end">{skill.level}%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="text-center mb-4">My Journey</h2>
        <div className="timeline-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Started formal music education at the University of Music Arts</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2014</h3>
                <p>Released debut album "First Light" to critical acclaim</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2016</h3>
                <p>Performed at International Music Festival, opening for renowned artists</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <p>Composed soundtrack for award-winning independent film "Echoes"</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022</h3>
                <p>Established own recording studio and started producing for other artists</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Present</h3>
                <p>Working on new album and collaborative projects with artists worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
