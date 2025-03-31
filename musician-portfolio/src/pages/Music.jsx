import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';
import AudioPlayer from '../components/AudioPlayer';
import '../styles/Music.css';

function Music() {
  // This would come from your backend API in a real application
  const musicData = {
    albums: [
      {
        id: 1,
        title: "First Light",
        year: 2014,
        coverPlaceholder: "Album 1 Cover",
        description: "My debut album exploring themes of beginnings and discovery.",
        tracks: [
          { id: 1, title: "Dawn", duration: "3:45", audioSrc: "#" },
          { id: 2, title: "Morning Dew", duration: "4:20", audioSrc: "#" },
          { id: 3, title: "Afternoon Sun", duration: "5:15", audioSrc: "#" },
          { id: 4, title: "Sunset Dreams", duration: "4:05", audioSrc: "#" }
        ]
      },
      {
        id: 2,
        title: "Ocean Depths",
        year: 2018,
        coverPlaceholder: "Album 2 Cover",
        description: "A journey through the mysteries and wonders beneath the waves.",
        tracks: [
          { id: 1, title: "Surface Ripples", duration: "3:30", audioSrc: "#" },
          { id: 2, title: "Descent", duration: "5:10", audioSrc: "#" },
          { id: 3, title: "Abyssal Plain", duration: "6:25", audioSrc: "#" },
          { id: 4, title: "Bioluminescence", duration: "4:45", audioSrc: "#" }
        ]
      },
      {
        id: 3,
        title: "Urban Echoes",
        year: 2022,
        coverPlaceholder: "Album 3 Cover",
        description: "Sounds inspired by city life and modern landscapes.",
        tracks: [
          { id: 1, title: "Morning Commute", duration: "3:55", audioSrc: "#" },
          { id: 2, title: "Coffee Shop Ambience", duration: "4:30", audioSrc: "#" },
          { id: 3, title: "Skyscraper Views", duration: "5:20", audioSrc: "#" },
          { id: 4, title: "Night Lights", duration: "4:15", audioSrc: "#" }
        ]
      }
    ],
    singles: [
      { id: 1, title: "Summer Breeze", year: 2015, coverPlaceholder: "Single 1", audioSrc: "#" },
      { id: 2, title: "Winter's Embrace", year: 2017, coverPlaceholder: "Single 2", audioSrc: "#" },
      { id: 3, title: "Autumn Leaves", year: 2019, coverPlaceholder: "Single 3", audioSrc: "#" },
      { id: 4, title: "Spring Awakening", year: 2021, coverPlaceholder: "Single 4", audioSrc: "#" }
    ]
  };

  const [selectedAlbum, setSelectedAlbum] = useState(musicData.albums[0]);

  return (
    <div className="music-page">
      <Container>
        <h1 className="text-center mb-5">My Music</h1>

        <Tab.Container defaultActiveKey="albums">
          <Nav variant="pills" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="albums">Albums</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="singles">Singles</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="albums">
              <Row>
                <Col md={4} className="mb-4">
                  <div className="albums-list">
                    {musicData.albums.map(album => (
                      <Card
                        key={album.id}
                        className={`album-card mb-3 ${selectedAlbum.id === album.id ? 'selected' : ''}`}
                        onClick={() => setSelectedAlbum(album)}
                      >
                        <Card.Body className="d-flex align-items-center">
                          <div className="album-thumbnail-container me-3">
                            <div className="album-thumbnail-placeholder">
                              <span>{album.title[0]}</span>
                            </div>
                          </div>
                          <div>
                            <Card.Title className="mb-0">{album.title}</Card.Title>
                            <Card.Subtitle className="text-muted">{album.year}</Card.Subtitle>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Col>
                <Col md={8}>
                  <div className="album-details">
                    <div className="album-header mb-4">
                      <div className="album-cover-placeholder">
                        <span>{selectedAlbum.title[0]}</span>
                      </div>
                      <div className="album-info">
                        <h2>{selectedAlbum.title}</h2>
                        <p className="text-muted">{selectedAlbum.year}</p>
                        <p>{selectedAlbum.description}</p>
                      </div>
                    </div>
                    <h4>Tracks</h4>
                    <div className="tracks-list">
                      {selectedAlbum.tracks.map(track => (
                        <AudioPlayer
                          key={track.id}
                          title={track.title}
                          audioSrc={track.audioSrc}
                        />
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="singles">
              <Row>
                {musicData.singles.map(single => (
                  <Col md={6} lg={3} key={single.id} className="mb-4">
                    <Card className="single-card h-100">
                      <div className="single-cover-placeholder">
                        <span>{single.title[0]}</span>
                      </div>
                      <Card.Body>
                        <Card.Title>{single.title}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{single.year}</Card.Subtitle>
                        <AudioPlayer
                          title={single.title}
                          audioSrc={single.audioSrc}
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Music;