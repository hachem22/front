import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MatieresPage() {
  const [niveau, setNiveau] = useState('');
  const [selectedMatiere, setSelectedMatiere] = useState('');
  const [videos, setVideos] = useState([]);

  const handleNiveauChange = (niveau) => {
    setNiveau(niveau);
  };

  const handleMatiereChange = (matiere) => {
    setSelectedMatiere(matiere);
  };

  useEffect(() => {
    if (niveau && selectedMatiere) {
      fetch(`http:/localhost:3000/cours/${niveau}/${selectedMatiere}`)
        .then(response => response.json())
        .then(data => {
          if (data.videos) {
            setVideos(data.videos);
          }
        })
        .catch(error => console.error('Erreur lors de la récupération des vidéos:', error));
    }
  }, [niveau, selectedMatiere]);

  const matieresParNiveau = {
    "7ème": ["Mathématiques", "Physique", "Technique", "Informatique"],
    "8ème": ["Mathématiques", "Physique", "Technique", "Informatique"],
    "9ème": ["Mathématiques", "Physique", "Technique", "Informatique"],
    "1ère": ["Mathématiques", "Physique", "Technique", "Informatique"],
    "2ème": ["Mathématiques", "Physique", "Technique", "Informatique"],
    "3ème": ["Mathématiques", "Physique", "Technique", "Informatique"]
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Object.keys(matieresParNiveau).map(niveau => (
                <Nav.Link key={niveau} onClick={() => handleNiveauChange(niveau)} as={Link} to="#">{niveau}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h2>Matieres pour {niveau}</h2>
        <Nav variant="pills" defaultActiveKey={selectedMatiere} onSelect={handleMatiereChange}>
          {matieresParNiveau[niveau] && matieresParNiveau[niveau].map(matiere => (
            <Nav.Item key={matiere}>
              <Nav.Link eventKey={matiere}>{matiere}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <h3>Vidéos pour {selectedMatiere}</h3>
        <ul>
          {videos.map((video, index) => (
            <li key={index}>{video.titre}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default MatieresPage;
