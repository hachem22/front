import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './nav.css';

import { Link } from 'react-router-dom';

 // Importez uniquement Link de react-router-dom

function CustomNavbar() {

  return (
    <>
    <div className="Navbar">
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
  </div>
 
  <div>
  

</div>
</>
);
}


export default CustomNavbar;
