import React, { useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CustomNavbar from './Navbar.js';
import toast from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom';

const Login_Enseignant = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Veuillez remplir tous les champs.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/Login/Enseignant', { email, password });
            const responseData = response.data;
            
            if (responseData.message === "Connexion réussie!") {
                const { id } = responseData;
                sessionStorage.setItem('EnseignantId', id);
                console.log("Connexion réussie");
                toast.success('Connexion enseignant réussie !');
                navigate('/enseignant');
            } else {
                toast.error(responseData.error || 'Identifiants incorrects. Veuillez réessayer.');
            }
        } catch (error) {
            console.error(error);
            toast.error('Une erreur s\'est produite lors de la connexion.');
        }
    }

    return (
        <div>
            <CustomNavbar/>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="login-page-mobile-img">
                    <img src={require("../image/bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem',marginTop:'-3rem'}} alt="Mobile" />
                </div>
                <Form onSubmit={handleSubmit} style={{ width: '30rem', height: '30rem', marginLeft: '20rem' , marginTop:'-8rem',borderBlockStyle:'inherit'}}>
                    <h2 style={{marginLeft:'6rem', marginBottom:'2rem',fontFamily:'sans-serif', fontSize:'35px'}}>Se connecter</h2>
                    <div className="form-group">
                        <label style={{width:'5px',fontFamily:'sans-serif',fontSize:'19px',marginLeft:'1rem'}} className='form-label'> Email</label>
                        <input style={{width:'420px',borderRadius:'14px',marginLeft:'1rem'}} type='email' className='form-control' placeholder='hachem@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label style={{marginLeft:'1rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Mot de passe</label>
                        <input style={{width:'420px',marginLeft:'1rem',borderRadius:'14px'}} type='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <Link style={{fontSize:'17px', marginLeft:'1rem', textDecoration: 'none'}} to="/motoublier">Mot de passe oublié ?</Link>
                    <button style={{width:'420px',borderRadius:'14px',marginTop:'1rem', marginLeft:'1rem'}} type='submit' className='btn btn-primary'>Se connecter</button>
                    <h6 style={{marginTop:'2rem',fontSize:'17px', marginLeft:'1rem'}}>Vous n'avez pas de compte ? 
                        <Link style={{fontSize:'17px', marginLeft:'1rem', textDecoration: 'none'}}to="/Register_Enseignant">Créer un compte</Link>
                    </h6>
                </Form>
            </div>
        </div>
    );
};

export default Login_Enseignant;
