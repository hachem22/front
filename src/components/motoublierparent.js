import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function motoublier() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <div className="login-page-mobile-img">
        <img src={require("./image/bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem' ,marginTop:'-3rem'}}alt="Mobile" />
    </div>
   
   
    <Form style={{ width: '30rem', height: '30rem', marginLeft: '20rem',marginTop:'-3rem '}}>

    <h2>Réinitialiser le mot de passe </h2>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Veuillez entrer votre email ou votre numéro de téléphone associé à votre compte* </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                Nous ne partagerons jamais votre email avec qui que ce soit.
            </Form.Text>
        </Form.Group>

       
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Se souvenir de moi" />
        </Form.Group>
      

        <Button variant="primary" type="submit"style={{ width: '30rem', height: '2.5rem'}}>
           Rénitialiser votre mot de passe
        </Button>
        <Button as={Link} to="/Login_parent" variant="outline-primary" type="submit"style={{ width: '30rem', height: '2.5rem', marginTop:'2rem'}}>
          Annuler
        </Button>
    </Form>
</div>
  );
}

export default motoublier;
