import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/FeaturedWork.css';

// Import images
import latestAlbumImage from '../assets/images/latest-album.jpg';
import livePerformanceImage from '../assets/images/live-performance.jpg';
import musicVideoImage from '../assets/images/music-video.jpg';

function FeaturedWork() {
  const featuredItems = [
    {
      id: 1,
      title: "Latest Album",
      description: "My most recent collection of original compositions exploring themes of nature and time.",
      image: latestAlbumImage, // Use the imported image
    },
    {
      id: 2,
      title: "Live Performance",
      description: "Highlights from my recent concert at the Grand Hall featuring collaborations with renowned artists.",
      image: livePerformanceImage, // Use the imported image
    },
    {
      id: 3,
      title: "Music Video",
      description: "The official music video for 'Echoes', shot in stunning locations across the country.",
      image: musicVideoImage, // Use the imported image
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
                  <img
                    src={item.image}  // Display the image
                    alt={item.title}  // Set alt text for accessibility
                    className="card-img-top"  // Optional: Add Bootstrap styling for image size
                  />
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
