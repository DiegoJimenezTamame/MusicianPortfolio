import React from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedWork />
      <Container className="py-5">
        <h2 className="text-center mb-4">About My Music</h2>
        <p className="lead text-center mb-5" style={{ fontStyle: 'italic' }}>
          My musical journey blends classical training with contemporary influences,
          creating a unique sound that bridges multiple genres and emotions.
        </p>
        <div className="text-center">
          <p style={{ fontStyle: 'italic' }}>
            Through my compositions, I aim to create immersive experiences that transport
            listeners to different emotional landscapes. Each piece tells a story, weaving
            melodies and harmonies into tapestries of sound that resonate with audiences worldwide.
          </p>
          <p style={{ fontStyle: 'italic' }}>
            Whether performing live or recording in the studio, I bring the same level of
            passion and dedication to my craft, seeking to create moments of beauty and connection.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Home;