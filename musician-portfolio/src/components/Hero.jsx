import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero-image.jpg'

function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold">Your Name</h1>
            <h2 className="h3 mb-4">Musician, Composer, Producer</h2>
            <p className="lead mb-4">
              Transforming emotions into melodies, creating soundscapes that resonate with the soul.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button as={Link} to="/music" variant="primary" size="lg" className="me-md-2">
                Listen Now
              </Button>
              <Button as={Link} to="/contact" variant="outline-secondary" size="lg">
                Get in Touch
              </Button>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0 text-center">
            <div className="hero-image">
                          {/* Display the imported image */}
                          <img
                           src={heroImage}  // Use the imported image here
                           alt="Your Profile"
                           className="img-fluid"  // Make the image responsive
                           style={{ maxWidth: '500px', height: 'auto' }}  // Set the max width and auto height
                          />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;