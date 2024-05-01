import React, { useState, useEffect } from 'react';
import './huitiéme.css'; // Importez le fichier CSS
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function huitiéme() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cours, setCours] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedVideo, setSelectedVideo] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
      // Fetch data from your API
      fetch("http://localhost:3000/cours/8éme/Francais")
          .then(response => response.json())
          .then(data => {
              setCours(data.cours);
              setSelectedVideo(data.cours[0]); // Set the first video as selected initially
          })
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleVideoClick = (video) => {
      setSelectedVideo(video);
  };

  return (
   
      <div>
    <div className="Navbarr">
        <Navbar bg="light" data-bs-theme="light" style={{height:'70px', borderRadius:'15px'}}>
            <Container>
            <Nav>
                    <Button style={{borderRadius:'14px', padding:'0.75rem'}} as={Link} to ="/Eleve" variant="outline-primary" className="me-2" >
                        <h4 className="me-2" > retour a la page d'acceil</h4>
                    </Button>
                </Nav>
            </Container>
            <Container>
                <Nav className="me-auto" style={{marginLeft:'-10rem'}}>
                <Nav.Link as={Link} to="/huitiéme_math" >math</Nav.Link>
                    <Nav.Link as={Link} to="/huitiéme_physique">physique</Nav.Link>
                    <Nav.Link as={Link} to="/huitiéme_technique">technique</Nav.Link>
                    <Nav.Link as={Link} to="/huitiéme_informatique">informatique</Nav.Link>
                    <Nav.Link as={Link} to="/huitiéme_francais">francais</Nav.Link>
                    <Nav.Link as={Link} to="/huitiéme_anglais">anglais</Nav.Link>
                    <Nav.Link as={Link} to="/huitiéme_arabe">arabe</Nav.Link>
                </Nav>
               
            </Container>
        </Navbar>
    </div>
    <h1 style={{marginBottom:'-3rem'}}>Playlist des cours de francais de 8ème année</h1>
    <div className="container">
        <div className="main-video-container">
            <video
                src={selectedVideo ? selectedVideo.video : ""}
                className="main-video"
                controls
            ></video>
            <h3 className="main-vid-title">{selectedVideo ? selectedVideo.titre : ""}</h3>
        </div>
        <div className="video-list-container">
        {cours && cours.map((coursItem, index) => (
    <div key={index} className={selectedVideo === coursItem ? "list active" : "list"} onClick={() => handleVideoClick(coursItem)}>
        <video src={coursItem.video} className="list-video"></video>
        <h3 className="list-title">{coursItem.titre}</h3>
    </div>
))}
        </div>
    </div>
    </div>
  )
}

export default huitiéme
