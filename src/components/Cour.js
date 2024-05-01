import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Cour() {
  const cartes = [
    { titre: "programme du 7 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/7éme.jpg") },
    { titre: "programme du 8 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/8éme.jpg") },
    { titre: "programme du 9 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/9éme.jpg") },
    { titre: "programme du 1 éme Anneé",Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/1ere.jpg") },
    { titre: "programme du 2 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/2éme.jpg") },
    { titre: "programme du 3 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    { titre: "programme du 4 éme Anneé",Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    { titre: "programme du 4 éme Anneé",Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    // Ajoutez plus de données de cartes selon vos besoins
  ];
  const cartess = [
    { titre: "programme du 7 éme Anneé", Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/7éme.jpg") },
    { titre: "programme du 8 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/8éme.jpg") },
    { titre: "programme du 9 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/9éme.jpg") },
    { titre: "programme du 1 éme Anneé", Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/1ere.jpg") },
    { titre: "programme du 2 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/2éme.jpg") },
    { titre: "programme du 3 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    { titre: "programme du 4 éme Anneé", Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    { titre: "programme du 4 éme Anneé", Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    // Ajoutez plus de données de cartes selon vos besoins
  ];
  

  // Diviser les données de cartes en groupes de trois
  const groupesDeTrois = [];
  for (let i = 0; i < cartes.length; i += 4) {
    groupesDeTrois.push(cartes.slice(i, i + 4));
  }
  const groupesDeTroiss = [];
  for (let i = 0; i < cartess.length; i += 4) {
    groupesDeTroiss.push(cartess.slice(i, i + 4));
  }


  return (
    <>
    <di>
    <Navbar  bg="light" data-bs-theme="light" style={{height:'70px', borderRadius:'15px'}}>
      <Container>
         <Navbar.Brand to="/">
           <Nav.Link as={Link} to="/" ><i style={{color:''}} className="fa-solid fa-graduation-cap"></i>Digital Tunisia
</Nav.Link>
          </Navbar.Brand>
          </Container>
          <Container>
        <Nav className="me-auto">

          <Nav.Link as={Link} to="/" ><i className="fa-solid fa-house"></i>Home</Nav.Link>
          <Nav.Link  as={Link} to="/Cour"><i className="fa-solid fa-laptop"></i>Cours</Nav.Link>
        
         
        </Nav>
        <Nav>
          <Button style={{borderRadius:'18px', padding:'0.25rem',width:'12rem',height:'4rem',marginTop:'0.25rem'}} as={Link} to ="/Choix_compte" variant="outline-primary" className="me-2" ><i className="fa-solid fa-user-plus"> </i>
          <h4 style={{fontSize:'24px',padding:'0.15'}} className="me-2"> S'inscrire</h4>
          </Button>
          <Button style={{borderRadius:'18px', padding:'0.25rem',width:'12rem',height:'4rem',marginTop:'0.25rem'}} as={Link} to ="/choix_Login" variant="primary" className="me-2"><i className="fa-solid fa-right-to-bracket"> </i>
          <h4 style={{fontSize:'24px',padding:'0.15'}} className="me-2"> Se connecter</h4>
          </Button>
        </Nav>
      </Container>
    </Navbar>
    </di>
    <center style={{color:'DeepSkyBlue', marginTop:'3rem'}}><h5 style={{ marginTop:'6rem', fontSize:'35px'}}>Notre contenu

</h5></center>
    <center style={{ marginTop:'1rem', fontSize:'80px'}}><h5 style={{ marginTop:'1rem', fontSize:'40px'}}> contenu précieux et riche
 </h5></center>
 <div style={{ borderRadius:'14px' ,border: '2px dashed black', marginTop:'2rem', backgroundColor:'AliceBlue',paddingTop:'2rem', paddingBottom:'2rem'}}>
<h6 style={{marginTop:'3rem', marginLeft:'2rem', fontSize:'30px', color:'Navy', marginBottom:'2rem', fontFamily:'cursive',}}> Niveau de base</h6>
     <Carousel >
      {groupesDeTrois.map((groupe, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-between">
            {groupe.map((carte, idx) => (
              <Card key={idx} style={{ width: '40rem', height:'25rem', marginLeft:'1rem', marginRight:'1rem', marginTop:'2rem',borderRadius:'14px'}}>
                <Card.Img variant="top" style={{ width: '21.6rem', height:'15rem',borderRadius:'14px'}} src={carte.image} />
                <Card.Body>
                  <Card.Title style={{color:'DeepSkyBlue'}}>{carte.titre}</Card.Title>
                  <Card.Text style={{color:'MidnightBlue'}}>{carte.contenu}</Card.Text>
                  <Button  style={{ borderRadius:'14px',backgroundColor:'#38B6FF',}} variant="primary">{carte.Button}</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    <div style={{ borderRadius:'14px' ,border: '2px dashed black', marginTop:'rem',marginBottom:'2rem' , backgroundColor:'AliceBlue',paddingTop:'2rem', paddingBottom:'2rem'}}>
    <h4 style={{marginTop:'3rem', marginLeft:'2rem', fontSize:'30px', color:'Navy', marginBottom:'2rem', fontFamily:'cursive'}}> Niveau secondaire</h4>
    <Carousel>
      {groupesDeTrois.map((groupe, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-between">
            {groupe.map((carte, idx) => (
              <Card key={idx} style={{ width: '40rem', height:'25rem', marginLeft:'1rem', marginRight:'1rem', marginTop:'2rem',borderRadius:'14px'}}>
                <Card.Img variant="top" style={{ width: '21.6rem', height:'15rem',borderRadius:'14px'}} src={carte.image} />
                <Card.Body>
                  <Card.Title style={{color:'DeepSkyBlue'}}>{carte.titre}</Card.Title>
                  <Card.Text style={{color:'MidnightBlue'}}>{carte.contenu}</Card.Text>
                  <Button  style={{ borderRadius:'14px',backgroundColor:'#38B6FF',}} variant="primary">{carte.Button}</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    </>
  );
}
      
 

export default Cour;
