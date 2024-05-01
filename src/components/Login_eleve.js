import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import CustomNavbar from './Navbar.js';
import toast from 'react-hot-toast'; 

const Login_eleve = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login/eleve', { email, password });
      const { id, matricule } = response.data;

      sessionStorage.setItem('eleveId', id); 
      sessionStorage.setItem('matricule', matricule);// Stocker l'ID de l'élève dans le stockage de session
      // Stocker l'ID de l'élève dans le stockage de session
      const eleveInfoResponse = await axios.get(`http://localhost:3000/getInfoById/${id}`); // Appeler l'API pour récupérer les informations de l'élève
      const eleveInfo = eleveInfoResponse.data; // Informations de l'élève récupérées depuis l'API
      toast.success(`Connexion réussie! Bienvenue, ${eleveInfo.nom} !`);
      window.location.href = '/eleve'; // Rediriger vers la page de l'élève
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      toast.error('Identifiants incorrects.');
    }
  };
  
  return (
    <div>
      <CustomNavbar/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="login-page-mobile-img">
          <img src={require("../image/bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem',marginTop:'-3rem'}}alt="Mobile" />
        </div>
        <Form onSubmit={handleSubmit} style={{ width: '30rem', height: '30rem', marginLeft: '20rem' , marginTop:'-8rem',borderBlockStyle:'inherit'}}>
          <h2 style={{marginLeft:'6rem', marginBottom:'2rem',fontFamily:'sans-serif', fontSize:'35px'}}>Se connecter</h2>
          <div className='col-md-6 mb-3 mt-3'>
            <label style={{width:'5px',fontFamily:'sans-serif',fontSize:'19px',marginLeft:'1rem'}} className='form-label'> Email</label>
            <input  style={{width:'420px',borderRadius:'14px',marginLeft:'1rem'}} type='email' className='form-control' placeholder='hachem@gmail.com'value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='col-md-6 mb-3 mt-3'>
            <label style={{marginLeft:'1rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Mot de passe</label>
            <input  style={{width:'420px',marginLeft:'1rem',borderRadius:'14px'}} type='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <Link style={{fontSize:'17px', marginLeft:'1rem', textDecoration: 'none'}}to="/motoublier">Mot de passe oublié ?</Link>
          <button style={{width:'420px',borderRadius:'14px',marginTop:'1rem', marginLeft:'1rem'}} type='submit' className='btn btn-primary'>Se connecter</button>
          <h6 style={{marginTop:'2rem',fontSize:'17px', marginLeft:'1rem'}}>Vous n'avez pas de compte ? 
            <Link style={{fontSize:'17px', marginLeft:'1rem', textDecoration: 'none'}}to="/Register_eleve">Créer un compte</Link>
          </h6>
        </Form>
      </div>
    </div>
  );
};

export default Login_eleve;
