import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast'; 
import { Link } from 'react-router-dom';

function RegisterAdmin() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/admin/register', { nom, prenom, email, password });
      toast.success('Inscription réussie !');
      window.location.href = '/LoginAdmin'; // Rediriger vers la page de l'élève

    } catch (error) {
      console.error('Erreur lors de l\'inscription de l\'administrateur :', error);
      toast.error('Une erreur s\'est produite lors de l\'inscription.');
    }
  };

  return (
    <div>
 <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="login-page-mobile-img">
          <img src={require("./bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem',marginTop:'-3rem'}}alt="Mobile" />
        </div>       
             <Form onSubmit={handleRegister} style={{ width: '30rem', height: '30rem', marginLeft: '15rem', marginTop: '-6rem', borderBlockStyle: 'inherit' }}>
        <div className='name-field'>
          <div className='row'>
            <div className='col-md-6 mb-3 mt-3'>
              <label style={{ marginTop: '2rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Nom *</label>
              <input style={{ width: '220px', borderRadius: '14px' }} type='text' className='form-control' placeholder='Saisissez votre nom' value={nom} onChange={(e) => setNom(e.target.value)} />
            </div>
            <div className='col-md-6 mb-3 mt-3'>
              <label style={{ marginTop: '2rem', borderRadius: '7px', marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Prénom *</label>
              <input style={{ width: '220px', marginLeft: '1rem', borderRadius: '14px' }} type='text' placeholder='Saisissez votre prénom' className='form-control' value={prenom} onChange={(e) =>
setPrenom(e.target.value)} />
            </div>
          </div>
        </div>
        <div className='name-field'>
          <div className='row'>
            <div className='col-md-6 mb-3 mt-3'>
              <label style={{ marginTop: '2rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Email *</label>
              <input style={{ width: '220px', borderRadius: '14px' }} type='text' className='form-control' placeholder='Saisissez votre email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='col-md-6 mb-3 mt-3'>
              <label style={{ marginTop: '2rem', borderRadius: '7px', marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Mot de passe *</label>
              <input style={{ width: '220px', marginLeft: '1rem', borderRadius: '14px' }} type='password' placeholder='Saisissez votre mot de passe' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
        </div>
        <button style={{ width: '500px', borderRadius: '14px', marginTop: '1rem' }} type='submit' className='btn btn-primary'>
          Créer un compte
        </button>
        <h6 style={{ marginTop: '2rem', fontSize: '20px' }}>Avez-vous déjà un compte ?
            <Link style={{ fontSize: '20px', textDecoration: 'none' }} to="/LoginAdmin">Se connecter</Link>
          </h6>
      </Form>
    </div>
    </div>
  );
}

export default RegisterAdmin;
