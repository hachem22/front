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
    fetch("http://localhost:3000/cours/8éme/Math")
      .then(response => response.json())
      .then(data => {
        // Organize videos by adding 'numeroVideo' property
        const organizedVideos = data.videos.map((video, index) => ({ ...video, numeroVideo: index + 1 }));
        setCours(organizedVideos);
        setSelectedVideo(organizedVideos[0]); // Set the first video as selected initially
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
    <h1 style={{ marginBottom: '-3rem' }}>Playlist des cours de mathématiques de 8ème année</h1>
      <div className="container">
        <div className="main-video-container">
          <video
            src={selectedVideo ? selectedVideo.videoUrl : ""}
            className="main-video"
            controls
          ></video>
          <h2>{selectedVideo ? selectedVideo.titre : ""}</h2>
        </div>
        <div className="video-list-container" style={{ width: '5px', height: '400px' }}>
          {cours && cours.map((video, index) => (
            <div key={index} className={selectedVideo === video ? "list active" : "list"} onClick={() => handleVideoClick(video)}>
              <video style={{ width: '150px' }} src={video.videoUrl} className="main-video" controls></video>
              <h3 className="list-title">{video.titre}</h3>
              <p className="numero-video" style={{fontSize:'40px',color:'white'}}> {video.numeroVideo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default huitiéme
