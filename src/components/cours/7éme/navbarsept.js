import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Navbarsept() {
  return (
    <div className="Navbarr">
    <Navbar bg="light" data-bs-theme="light" style={{height:'70px', borderRadius:'15px'}}>
        <Container>
        <Nav>
        <Button style={{borderRadius:'18px', padding:'0.5rem',paddingTop:'0.7rem'}} as={Link} to ="/Eleve" variant="outline-primary" className="me-2" >
                    <h4 className="me-2" style={{fontSize:'16px'}} > retour a la page d'acceil</h4>
                </Button>
            </Nav>
        </Container>
        <Container>
            <Nav className="me-auto" style={{marginLeft:'-10rem'}}>
            <Nav.Link as={Link} to="/septiéme_math" >math</Nav.Link>
        <Nav.Link as={Link} to="/septiéme_physique">physique</Nav.Link>
        <Nav.Link as={Link} to="/septiéme_technique">technique</Nav.Link>
        <Nav.Link as={Link} to="/septiéme_informatique">informatique</Nav.Link>
        <Nav.Link as={Link} to="/septiéme_francais">francais</Nav.Link>
        <Nav.Link as={Link} to="/septiéme_anglais">anglais</Nav.Link>
        <Nav.Link as={Link} to="/septiéme_arabe">arabe</Nav.Link>
            </Nav>
           
        </Container>
    </Navbar>
</div>  )
}

export default Navbarsept