import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function sept_math() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cours, setCours] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Fetch data from your API
      fetch("http://localhost:3000/cours/7éme/Math")
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
          <Navbar bg="light" data-bs-theme="light" style={{ height: '70px', borderRadius: '15px' }}>
            <Container>
              <Nav>
              <Button style={{borderRadius:'18px', padding:'0.5rem',paddingTop:'0.7rem'}} as={Link} to ="/Enseignant" variant="outline-primary" className="me-2" >
                 <h4 className="me-2" style={{fontSize:'16px'}} > retour a la page d'acceil</h4>
              </Button>
              </Nav>
            </Container>
            <Container>
              <Nav className="me-auto" style={{ marginLeft: '-10rem' }}>
                <Nav.Link as={Link} to="/sept_math">Math</Nav.Link>
                <Nav.Link as={Link} to="/sept_phy">Physique</Nav.Link>
                <Nav.Link as={Link} to="/septiéme_technique">Technique</Nav.Link>
                <Nav.Link as={Link} to="/septiéme_informatique">Informatique</Nav.Link>
                <Nav.Link as={Link} to="/septiéme_francais">Français</Nav.Link>
                <Nav.Link as={Link} to="/septiéme_anglais">Anglais</Nav.Link>
                <Nav.Link as={Link} to="/septiéme_arabe">Arabe</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <h1 style={{ marginBottom: '-4rem',marginTop:'6rem' }}>Playlist des cours de mathématiques de 7ème année</h1>
        <div className="container">
          <div className="main-video-container" >
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
      </div>  )
}

export default sept_math