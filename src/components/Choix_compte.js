import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Register.css';
import CustomNavbar from './Navbar.js';
function Choix_compte() {
  return (
    <div>
      <CustomNavbar/>

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="login-page-mobile-img">
        <img src={require("../image/bg.png")} 
        style={{ width: '35rem', height: '45rem', marginLeft: '2rem', marginTop: '-3rem' }}
      
    alt="Mobile" className="animated-image" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{marginLeft:'6rem', marginBottom:'1rem',marginTop:'-4rem'}}>S'inscrire</h2>
      <h5 style={{marginLeft:'6rem', marginBottom:'2rem'}}>Vous avez le choix entre un compte parent ou eleve.</h5>
   <div style={{display:'flex', marginTop:'1rem', marginLeft:'8rem'}}>
   
   <Card border="info" style={{ width: '13rem', backgroundColor:'#0CC0DF' }}>
   <Figure>
   <Link as={Link} to="/Register_parent">
      <Figure.Image
      style={{marginLeft:'1rem', marginTop:'1rem'}}
        as={Link} to="/"
        width={171}
        height={180}
        alt="171x180"
        src={require("../image/parent.png")}
      /><br/>
      <Button variant="light" style={{backgroundColor:'White', marginLeft:'4rem',marginTop:'2rem', color:'#0CC0DF'}} >Parent</Button>
      </Link>
      <Card.Text style={{color:'white',marginLeft:'1rem' , textDecoration: 'none', marginTop:'1rem'}}>
      Le compte parental vous permet de contrôler les progrès scolaires de l'enfant 
      </Card.Text>
    </Figure>
    </Card>
    <Card border="info" style={{ width: '13rem', backgroundColor:'#0CC0DF', marginLeft:'2rem' }}>
    <Figure>
        <Link as={Link} to="/Register_eleve">
      <Figure.Image
      style={{marginLeft:'1rem', marginTop:'1rem'}}
        width={171}
        height={180}
        alt="171x180"
        src={require("../image/eleve2.png")}
      /><br/>
      
      <Button  variant="light" style={{backgroundColor:'White', marginLeft:'4rem',marginTop:'2rem', color:'#0CC0DF'}} >Eleve</Button>

      </Link>
      <Card.Text style={{color:'white',marginLeft:'1rem' , textDecoration: 'none', marginTop:'1rem'}}>
      Le compte éleve  permet aux étudiants de suivre des cours quotidiens, tels que des vidéos explicatives  .
      </Card.Text>
    </Figure>
    </Card>
    <Card border="info" style={{ width: '13rem', backgroundColor:'#0CC0DF', marginLeft:'2rem' }}>
    <Figure>
        <Link as={Link} to="/Register_Enseignant">
      <Figure.Image
      style={{marginLeft:'1rem', marginTop:'1rem'}}
        width={171}
        height={180}
        alt="171x180"
        src={require("../image/eleve2.png")}
      /><br/>
      
      <Button  variant="light" style={{backgroundColor:'White', marginLeft:'3.5rem',marginTop:'2rem', color:'#0CC0DF'}} >Enseignant</Button>

      </Link>
      <Card.Text style={{color:'white',marginLeft:'1rem' , textDecoration: 'none', marginTop:'1rem'}}>
      Le compte éleve  permet aux étudiants de suivre des cours quotidiens, tels que des vidéos explicatives  .
      </Card.Text>
    </Figure>
    </Card>
    </div>
   </div>
</div>
    </div>
  );
}

export default Choix_compte
