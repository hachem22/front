import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import CustomNavbar from '../Navbar.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; 

export default function Register_Enseignant() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom || !prenom || !numero || !specialite || !email || !password) {
      toast.error('Veuillez remplir tous les champs.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/verifierEmailEnseignant/${email}`);
      const existingEmailData = await response.json();

      if (existingEmailData.emailExists) {
        toast.error('Cette adresse e-mail existe déjà.');
        navigate('/Register_Enseignant');
        return;
      }

      const ajoutResponse = await fetch('http://localhost:3000/ajouter/Enseignant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom, prenom, numero, specialite, email, password }),
      });

      const result = await ajoutResponse.json();
      console.log(result);
      toast.success('Compte créé avec succès!');
   
      navigate('/Login_Enseignant');
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="login-page-mobile-img">
        <img src={require("./bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem',marginTop:'-3rem'}}alt="Mobile" />
    </div>
        <Form onSubmit={handleSubmit} style={{ width: '30rem', height: '30rem', marginLeft: '15rem', marginTop: '-6rem', borderBlockStyle: 'inherit' }}>
          <h2 style={{ marginLeft: '2rem', marginBottom: '-1rem', fontFamily: 'sans-serif', fontSize: '35px' }}>Créer un nouveau compte</h2>

          <div className='name-field'>
            <div className='row'>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop: '2rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Nom *</label>
                <input style={{ width: '220px', borderRadius: '14px' }} type='text' className='form-control' placeholder='créer votre nom' value={nom} onChange={(e) => setNom(e.target.value)} />
              </div>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop: '2rem', borderRadius: '7px', marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Prénom</label>
                <input style={{ width: '220px', marginLeft: '1rem', borderRadius: '14px' }} type='text' placeholder='créer votre prénom' className='form-control' value={prenom} onChange={(e) => setPrenom(e.target.value)} />
              </div>
            </div>
          </div>

          <div className='name-field'>
            <div className='row'>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop: '-2rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Numéro *</label>
                <input style={{ width: '220px', borderRadius: '14px' }} type='number' placeholder='95 100 925' className='form-control' value={numero} onChange={(e) => setNumero(e.target.value)} />
              </div>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }}>Spécialité</label><br />
                <select
                  style={{ borderRadius: '14px', marginLeft: '1rem', width: '220px' }}
                  className='form-control'
                  value={specialite}
                  onChange={(e) => setSpecialite(e.target.value)}
                >
                  <option value="">Sélectionnez votre spécialité </option>
                  <option value="math">Mathématiques</option>
                  <option value="physique">Physique</option>
                  <option value="informatique">Informatique</option>
                  <option value="francais">Français</option>
                </select>
              </div>
            </div>
          </div>

          <div className='name-field'>
            <div className='row'>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ width: '5px', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Email</label>
                <input style={{ width: '220px', borderRadius: '14px' }} type='email' className='form-control' placeholder='hachem@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }} className='form-label'>Mot de passe</label>
                <input style={{ width: '220px', marginLeft: '1rem', borderRadius: '14px' }} type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </div>
          

          <button style={{ width: '500px', borderRadius: '14px', marginTop: '1rem' }} type='submit' className='btn btn-primary'>Créer un compte</button>

          <h6 style={{ marginTop: '2rem', fontSize: '20px' }}>Avez-vous déjà un compte ?
            <Link style={{ fontSize: '20px', textDecoration: 'none' }} to="/Login_Enseignant">Se connecter</Link>
          </h6>
        </Form>
      </div>
    </div>
  );
};
