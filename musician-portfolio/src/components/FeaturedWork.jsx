import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/FeaturedWork.css';

function FeaturedWork() {
  const featuredItems = [
    {
      id: 1,
      title: "Latest Album",
      description: "My most recent collection of original compositions exploring themes of nature and time.",
      imagePlaceholder: "Album Cover"
    },
    {
      id: 2,
      title: "Live Performance",
      description: "Highlights from my recent concert at the Grand Hall featuring collaborations with renowned artists.",
      imagePlaceholder: "Concert Photo"
    },
    {
      id: 3,
      title: "Music Video",
      description: "The official music video for 'Echoes', shot in stunning locations across the country.",
      imagePlaceholder: "Video Thumbnail"
    }
  ];

  return (
    <section className="featured-work">
      <Container>
        <h2 className="text-center mb-5">Featured Work</h2>
        <Row>
          {featuredItems.map(item => (
            <Col md={4} key={item.id} className="mb-4">
              <Card className="h-100 featured-card">
                <div className="card-img-placeholder">
                  <div className="placeholder-text">{item.imagePlaceholder}</div>
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeaturedWork;