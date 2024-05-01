import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateParent.css'; // Importez le fichier CSS pour le style du formulaire
import toast from 'react-hot-toast'; 
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UpdateParent() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [matriculeeleve, setMatriculeeleve] = useState('');
  const [nomeleve, setNomeleve] = useState('');
  const [prenomeleve, setPrenomeleve] = useState('');

  useEffect(() => {
    const parentId = sessionStorage.getItem('parentId');
    if (parentId) {
      const fetchParentInfo = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/parentbyid/${parentId}`);
          const parentData = response.data;
          setNom(parentData.nom);
          setPrenom(parentData.prenom);
          setNumero(parentData.numero);
          setMatriculeeleve(parentData.matriculeeleve);
          setNomeleve(parentData.nomeleve);
          setPrenomeleve(parentData.prenomeleve);
        } catch (error) {
          console.error('Erreur lors de la récupération des informations du parent :', error);
        }
      };
      fetchParentInfo();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parentId = sessionStorage.getItem('parentId');
    if (parentId) {
      try {
        await axios.put(`http://localhost:3000/updateparent/${parentId}`, {
          nom,
          prenom,
          numero,
          matriculeeleve,
          nomeleve,
          prenomeleve,
        });

        console.log('Informations du parent mises à jour avec succès !');
        toast.success('Informations du parent mises à jour avec succès !');

        // Optionnel : Redirection vers une autre page après la mise à jour
      } catch (error) {
        console.error('Erreur lors de la mise à jour des informations du parent :', error);
      }
    }
  };

  return (
    <div>
    <div className="Navbar">
      <Navbar bg="light" data-bs-theme="light" style={{ borderRadius: '20px', color: 'Gray', height: '10%'  }}>
        <Container>
           <Navbar.Brand to="/">
             <Nav.Link as={Link} to="/" ><i style={{color:''}} className="fa-solid fa-graduation-cap"></i>Digital Tunisia</Nav.Link>
            </Navbar.Brand>
        </Container>
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{marginLeft:'-10rem'}} to="/Parent"><i className="fa-solid fa-house"></i>Home</Nav.Link>
            <Nav.Link as={Link} to="/Formation"><i className="fa-solid fa-book"></i>Formation</Nav.Link>

          </Nav>
          <Nav>
            {/* Ajoutez ici la Dropdown dans le champ de profil */}
            <Dropdown style={{marginRight:'4rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
              
        
                <div>
            <h5 style={{fontSize:'14px'}}> {nom}  {prenom}   
 </h5>

            {/* ... (autres informations de l'élève à afficher) ... */}
          </div>
             
              </Dropdown.Toggle>
              <Dropdown.Menu>
              
                <Dropdown.Item as={Link} to="/Login_parent">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div style={{ backgroundColor: 'LightBlue',width:'95rem',height:'50rem',paddingTop:'4rem',marginTop:'-7rem',marginBottom:'-3rem'}}>

    <div className="update-parent-container" style={{ backgroundColor: 'LightYellow',height:'560px',marginLeft:'30rem',borderRadius:'15px', border: '2px dashed black'}}>
      <h1>Mise à jour des informations du parent</h1>
      <form onSubmit={handleSubmit} className="update-parent-form">
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="numero">Numéro :</label>
          <input type="number" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="matriculeeleve">Matricule de l'élève :</label>
          <input type="text" id="matriculeeleve" value={matriculeeleve} onChange={(e) => setMatriculeeleve(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="nomeleve">Nom de l'élève :</label>
          <input type="text" id="nomeleve" value={nomeleve} onChange={(e) => setNomeleve(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="prenomeleve">Prénom de l'élève :</label>
          <input type="text" id="prenomeleve" value={prenomeleve} onChange={(e) => setPrenomeleve(e.target.value)} />
        </div>
        
        <button type="submit" className="btn-update">Mettre à jour</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default UpdateParent;
