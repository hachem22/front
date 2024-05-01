import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import CustomNavbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function RegisterEleve() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [numero, setNumero] = useState('');
  const [datenai, setDatenai] = useState('');
  const [gouvernorat, setGouvernorat] = useState('');
  const [classe, setClasse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [matricule, setMatricule] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom || !prenom || !photoUrl || !numero || !datenai || !gouvernorat || !classe || !email || !password || !matricule) {
      toast.error('Veuillez remplir tous les champs.');
      return;
    }
    try {
      setSubmitting(true);

      const formData = {
        nom,
        prenom,
        photo: photoUrl,
        numero,
        datenai,
        gouvernorat,
        classe,
        email,
        password,
        matricule,
      };

      const ajoutResponse = await axios.post('http://localhost:3000/register/eleve', formData);

      const result = ajoutResponse.data;
      console.log(result);
      toast.success('Compte créé avec succès!');
      navigate('/Login_eleve');
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      toast.error('Une erreur s\'est produite lors de la création du compte. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="login-page-mobile-img">
          <img src={require("../image/bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem',marginTop:'-3rem'}} alt="Mobile" />
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
                <label style={{ marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }}>Date de naissance</label><br />
                <input style={{ width: '220px', borderRadius: '14px' }} type='date'  className='form-control' value={datenai} onChange={(e) => setDatenai(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='name-field'>
            <div className='row'>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }}>Gouvernorat</label><br />
                <select
                  style={{ borderRadius: '14px', marginLeft: '1rem', width: '220px' }}
                  className='form-control'
                  value={gouvernorat}
                  onChange={(e) => setGouvernorat(e.target.value)}
                >
                  <option value="">Sélectionnez votre gouvernorat </option>
                  <option value="manouba">Manouba</option>
                  <option value="tunis">Tunis</option>
                </select>
              </div>
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }}>Classe</label><br />
                <select
                  style={{ borderRadius: '14px', marginLeft: '1rem', width: '220px' }}
                  className='form-control'
                  value={classe}
                  onChange={(e) => setClasse(e.target.value)}
                >
                  <option value="">Sélectionnez votre classe </option>
                  <option value="7eme">7eme</option>
                  <option value="8eme">8eme</option>
                  <option value="9eme">9eme</option>
                  <option value="1ere">1ere</option>
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
          <div className='name-field'>
            <div className='row'>
              <label style={{ marginLeft: '1rem', fontFamily: 'sans-serif', fontSize: '19px' }}>Matricule</label><br />
              <input
                style={{ width: '220px', marginLeft: '1rem', borderRadius: '14px',height:'30px' }}
                type='number'
                className='form-control'
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
              />
            
              <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginLeft: '2rem', fontFamily: 'sans-serif', fontSize: '19px' }}>Photo de profil (URL)</label><br />
                <input style={{ width: '220px', borderRadius: '14px',height:'30px' }} type='text' className='form-control' placeholder='URL de votre photo' value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
              </div>
            </div>
          </div>
          <button style={{ width: '500px', borderRadius: '14px', marginTop: '1rem' }} type='submit' className='btn btn-primary' disabled={submitting}>
            Créer un compte
          </button>
          <h6 style={{ marginTop: '2rem', fontSize: '20px' }}>Avez-vous déjà un compte ?
            <Link style={{ fontSize: '20px', textDecoration: 'none' }} to="/Login_eleve">Se connecter</Link>
          </h6>
        </Form>
      </div>
    </div>
  );
}
