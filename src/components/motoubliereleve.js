import React, { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function MotDePasseOublie() {
    const [email, setEmail] = useState('');

    const handleSendPassword = async () => {
        if (!email) {
            toast.error('Veuillez entrer votre adresse email.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/sendPasswordByEmail', { email: email.toLowerCase() });

            if (response.data === "EmailSent") {
                toast.success('Vérifiez votre boite email');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du mot de passe par email :', error);
            toast.error('Une erreur s\'est produite lors de l\'envoi du mot de passe par email.');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="login-page-mobile-img">
                <img src={require("../image/bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem' ,marginTop:'-3rem'}} alt="Mobile" />
            </div>
           
           
            <Form style={{ width: '30rem', height: '30rem', marginLeft: '20rem', marginTop:'-3rem '}}>
                <h2>Réinitialiser le mot de passe </h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Veuillez entrer votre email ou votre numéro de téléphone associé à votre compte* </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Nous ne partagerons jamais votre email avec qui que ce soit.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Se souvenir de moi" />
                </Form.Group>

                <Button variant="success" style={{ width: '30rem', height: '2.5rem', marginTop:'1rem' }} onClick={handleSendPassword}>
                      Rénitialiser votre mot de passe
                </Button>
                <Button as={Link} to="/Login_eleve" variant="outline-primary" type="submit" style={{ width: '30rem', height: '2.5rem', marginTop:'1rem' }}>
                    Annuler
                </Button>
            </Form>
            <Link style={{fontSize:'15px', marginLeft:'-22rem', marginTop:'18rem', textDecoration: 'none'}} to="/">retour a la page principale</Link>
        </div>
    );
}

export default MotDePasseOublie;
