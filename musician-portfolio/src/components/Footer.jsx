import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-section mt-5">
      <Container>
        <Row>
          <Col md={6} className="my-3">
            <h5>Musician Portfolio</h5>
            <p>Creating beautiful music since 2010</p>
          </Col>
          <Col md={6} className="my-3 text-md-end">
            <div className="social-icons">
              {/* Replace "#" with actual social media URLs or use buttons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Musician Portfolio. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;