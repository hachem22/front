import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import MessengerIcon from '../MessengerIcon';

function Enseignant() {
  const [EnseignantInfo, setEnseignantInfo] = useState(null);

  const niveaux = [
    { id: 1, titre: 'programme 7eme',  image: require("./photo/7éme.jpg"), lien: '/sept_math' },
    { id: 2, titre: 'programme 8eme',  image: require("./photo/8éme.jpg"), lien: '/huit_math' },
    { id: 3, titre: 'programme 9eme',  image: require("./photo/9éme.jpg"), lien: '/sept_math' },
    { id: 4, titre: 'programme 1ere',  image: require("./photo/1ere.jpg"), lien: '/sept_math' },
    { id: 5, titre: 'programme 2eme',  image: require("./photo/2éme.jpg"), lien: '/niveau/7eme' },
    { id: 6, titre: 'programme 3eme',  image: require("./photo/3éme.jpg"), lien: '/niveau/8eme' },
    { id: 7, titre: 'programme 4eme',  image: require("./photo/3éme.jpg"), lien: '/niveau/8eme' },
    { id: 8, titre: 'programme 4eme',  image: require("./photo/3éme.jpg"), lien: '/niveau/8eme' },
  ];


  useEffect(() => {
      const fetchEnseignantInfo = async () => {
        try { 
          const EnseignantId = sessionStorage.getItem('EnseignantId');
          console.log(EnseignantId);
          if(EnseignantId){
          const EnseignantInfoResponse = await axios.get(`http://localhost:3000/getenseignantparId/${EnseignantId}`);
          const EnseignantInfo = EnseignantInfoResponse.data;
          setEnseignantInfo(EnseignantInfo);
          }else{
            setEnseignantInfo(null);
          }
        } catch (error) {
          console.error("Erreur lors de la récupération des informations de l'enseignant :", error);
        }
      };

      fetchEnseignantInfo();
    
  }, []);

  return (
    <>
      <div className="Navbar">
        <Navbar bg="light" data-bs-theme="light" style={{ borderRadius: '20px', color: 'Gray', height: '10%' }}>
          <Container>
            <Navbar.Brand to="/">
              <Nav.Link as={Link} to="/Enseignant" ><i  className="fa-solid fa-graduation-cap"></i>Digital Tunisia</Nav.Link>
            </Navbar.Brand>
          </Container>
          <Container>
            <Nav className="me-auto" style={{ marginLeft: '-25rem' }}>
              <Button style={{ borderRadius: '14px', marginLeft: '2rem', paddingTop: '0.95rem', height: '60px', marginTop: '0.25rem' }} as={Link} to="/AddCours" variant="outline-primary" className="me-2" > Ajouter le cour video </Button>
              <Button style={{ borderRadius: '14px', marginLeft: '1rem', paddingTop: '0.95rem', width: '200px', height: '60px', marginTop: '0.25rem' }} as={Link} to="/courpdf" variant="outline-primary" className="me-2" > Ajouter les cours pdf </Button>
              <Button style={{ borderRadius: '14px', marginLeft: '1rem', paddingTop: '0.25rem', width: '200px', height: '60px', marginTop: '0.25rem' }} as={Link} to="/transforme" variant="outline-primary" className="me-2" > transform video mp4 to url </Button>
            </Nav>
            <Nav>
              <Dropdown style={{ marginRight: '4rem' }}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                   {EnseignantInfo && (
                     <div>
                       <h5 style={{fontSize:'14px'}}>Enseignant , {EnseignantInfo.nom} {EnseignantInfo.prenom}</h5>
                     </div>
                   )}
              </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/AddCours"></Dropdown.Item>
                  <Dropdown.Item as={Link} to="/update_enseignant">Update Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Login_Enseignant">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <MessengerIcon/>

      <div style={{ backgroundColor: '', marginTop: '5rem' }}>
        <Container fluid>
          <h1 style={{ marginBottom: '2rem', marginLeft: '6rem', marginTop: '-4rem' }}>Liste des matiere</h1>
          <Row xs={1} md={2} lg={3} xl={4}>
            {niveaux.map(niveau => (
              <Col key={niveau.id}>
                <Card style={{ width: '18rem', height: '17rem', marginBottom: '20px', marginLeft: '2rem' }}>
                  <Card.Img variant="top" src={niveau.image} />
                  <Card.Body>
                    <Card.Title>{niveau.titre}</Card.Title>
                    <Link to={niveau.lien} className="btn btn-primary">Voir détails</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Enseignant;
