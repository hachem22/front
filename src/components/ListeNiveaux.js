import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav ,Dropdown} from 'react-bootstrap';


export default function ListeNiveaux() {
  // Supposons que vous ayez une liste de niveaux avec des détails comme suit
  const niveaux = [
    { id: 1, titre: 'Math',  image: require("../image/7éme.jpg"), lien: '/ListePlaylist' },
    { id: 2, titre: 'physique &chimie', image: require("../image/8éme.jpg"), lien: '/niveau/8eme' },
    { id: 3, titre: 'arabe',  image: require("../image/9éme.jpg"), lien: '/niveau/7eme' },
    { id: 4, titre: 'francais',  image: require("../image/1ere.jpg"), lien: '/niveau/8eme' },
    { id: 5, titre: 'anglais',  image: require("../image/2éme.jpg"), lien: '/niveau/7eme' },
    { id: 6, titre: 'informatique',  image: require("../image/3éme.jpg"), lien: '/niveau/8eme' },
    { id: 7, titre: 'histoire & geo',  image: require("../image/3éme.jpg"), lien: '/niveau/8eme' },
    { id: 7, titre: 'technique',  image: require("../image/3éme.jpg"), lien: '/niveau/8eme' },
 
  ];


  return (
    <>
    <div>
    <Navbar bg="light" data-bs-theme="light" style ={{borderRadius:'20px' , color:'Gray	', marginTop:'1rem',height:'5rem', marginLeft:'1rem',marginRight:'2rem'}}>
        <Container>
           
        </Container>
        <Container>
          <Nav style={{marginLeft:'-45rem'}} >
          <Nav.Link as={Link} to="/Eleve"  padding><i className="fa-solid fa-backward"></i>  retour à la page d'accueil </Nav.Link>

            <Nav.Link style={{marginLeft:'10rem'}} as={Link} to="/septiéme">7 éme</Nav.Link>
            <Nav.Link style={{marginLeft:'3rem'}}as={Link} to="/huitiéme">8 éme</Nav.Link>
            <Nav.Link style={{marginLeft:'3rem'}}as={Link} to="/neuviéme">9 éme</Nav.Link>
            <Nav.Link style={{marginLeft:'3rem'}}as={Link} to="/">1 ére</Nav.Link>
            <Dropdown style={{}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'3rem'}}>
               2 éme
              </Dropdown.Toggle>
  
              <Dropdown.Menu>

                <Dropdown.Item as={Link} to="/Updateprofile">2 éme science</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">2 éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">2 éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">2 éme economie</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">2 éme lettre</Dropdown.Item>



              </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'3rem'}}>
               3 éme
              </Dropdown.Toggle>
  
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/Updateprofile">3 éme science</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">3 éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">3 éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">3 éme economie</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">3 éme lettre</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'3rem'}}>
              baccalauréat
              </Dropdown.Toggle>
  
              <Dropdown.Menu>

              <Dropdown.Item as={Link} to="/Updateprofile">bac science</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">bac info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">bac technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">bac economie</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">bac lettre</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">bac math</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            
          </Nav>
      
        </Container>
      </Navbar>
    </div>
    <Container fluid>
      <h1 style={{marginBottom:'2rem',marginLeft:'6rem' , marginTop:'8rem'}}>Liste des matiere</h1>
      <Row xs={1} md={2} lg={3} xl={4}>
        {niveaux.map(niveau => (
          <Col key={niveau.id}>
            <Card style={{ width: '18rem',height:'17rem', marginBottom: '20px', marginLeft:'2rem' }}>
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
    </>
  );
}
