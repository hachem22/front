import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Register.css';
import toast from 'react-hot-toast'; 
import CustomNavbar from './Navbar.js';

import { useNavigate } from 'react-router-dom';


export  function Register_parent () {


  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [matriculeeleve, setMatriculeeleve] = useState('');
  const [nomeleve, setNomeleve] = useState('');
  const [prenomeleve, setPrenomeleve] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!nom || !prenom || !numero || !matriculeeleve || !nomeleve || !prenomeleve || !email || !password) {
        toast.error('Veuillez remplir tous les champs.');
        return;
      }
    try {
        // Vérifier si l'email existe déjà en base de données pour un parent
        const existingEmailResponse = await fetch(`http://localhost:3000/verifierEmailParent/${email}`);
        const existingEmailData = await existingEmailResponse.json();
      
        if (existingEmailData.emailExists) {
          toast.error('Cette adresse e-mail existe déjà.');
          return;
        }
      
        // Si l'e-mail n'existe pas déjà, procéder à la création du compte parent
        const response = await fetch('http://localhost:3000/ajouter/parent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nom, prenom, numero, matriculeeleve, nomeleve, prenomeleve, email, password }),
        });
      
        const result = await response.json();
        console.log(result);
        toast.success('Compte parent créé avec succès!');
        navigate('/Login_parent');
      } catch (error) {
        console.error('Erreur lors de la requête:', error);
      }
  }


  return (
 <div>
   
    <CustomNavbar/>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="login-page-mobile-img">
        <img src={require("../image/bg.png")} 
        style={{ width: '35rem', height: '45rem', marginLeft: '2rem', marginTop: '-3rem' }}
      
    alt="Mobile" className="animated-image" />
      </div>

      <Form onSubmit={handleSubmit} style={{ width: '30rem', height: '30rem', marginLeft: '17rem' , marginTop:'-12rem',borderBlockStyle:'inherit'}}>
       <h2 style={{marginLeft:'2rem', marginBottom:'-1rem',fontFamily:'sans-serif', fontSize:'35px'}}>Créer un nouveau compte</h2>

    <div className='name-field'>
        <div className='row'>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop:'2rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Nom *</label>
                <input style={{width:'220px',borderRadius:'14px'}} type='text' className='form-control'placeholder='creer votre nom' value={nom} onChange={(e)=>setNom(e.target.value)}/>
            </div>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop:'2rem', borderRadius:'7px',marginLeft:'1rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Prénom</label>
                <input style={{width:'220px', marginLeft:'1rem',borderRadius:'14px'}} type='text' placeholder='creer votre prenom' className='form-control' value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
            </div>
        </div>
    </div>

    <div className='name-field'>
        <div className='row'>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop:'-2rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Numéro *</label>
                <input style={{width:'220px',borderRadius:'14px'}}type='number' placeholder='95 100 925' className='form-control' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
            </div>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop:'-1rem',marginLeft:'1rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Matricule Eleve</label>
                <input style={{borderRadius:'14px',marginLeft:'1rem',width:'220px'}}type='number' className='form-control' value={matriculeeleve} onChange={(e)=>setMatriculeeleve(e.target.value)}/>
            </div>
        </div>
    </div>

    <div className='name-field'>
        <div className='row'>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop:'-1rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Nom De L'eleve</label>
                <input style={{width:'220px',borderRadius:'14px'}} type='text' className='form-control'placeholder='creer votre nom' value={nomeleve} onChange={(e)=>setNomeleve(e.target.value)}/>
            </div>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{ marginTop:'-1rem', borderRadius:'7px',marginLeft:'1rem',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Prénom De l'eleve</label>
                <input style={{width:'220px', marginLeft:'1rem',borderRadius:'14px'}} type='text' placeholder='creer votre prenom' className='form-control' value={prenomeleve} onChange={(e)=>setPrenomeleve(e.target.value)}/>
            </div>
        </div>
    </div>

    <div className='name-field'>
        <div className='row'>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{width:'5px',fontFamily:'sans-serif',fontSize:'19px'}} className='form-label'>Email</label>
                <input  style={{width:'220px',borderRadius:'14px'}} type='email' className='form-control' placeholder='hachem@gmail.com'value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='col-md-6 mb-3 mt-3'>
                <label style={{marginLeft:'1rem',fontFamily:'sans-serif',fontSize:'19px'}}className='form-label'>Mot de passe</label>
                <input  style={{width:'220px',marginLeft:'1rem',borderRadius:'14px'}} type='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        </div>
    </div>

    <button style={{width:'500px',borderRadius:'14px',marginTop:'1rem'}} type='submit' className='btn btn-primary'>Créer un compte</button>

    <h6 style={{marginTop:'2rem',fontSize:'20px'}}>Avez-vous déjà un compte ? 
        <Link style={{fontSize:'20px', textDecoration: 'none'}}to="/Login_parent">Se connecter</Link>
    </h6>
</Form>

    </div>
    </div>
    
  );
};

export default Register_parent;
