import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function CourPdf() {
  const [titre, setTitre] = useState('');
  const [niveau, setNiveau] = useState('');
  const [matiere, setMatiere] = useState('');
  const [fichierPdf, setFichierPdf] = useState(null);

  const handleAjouterCours = async () => {
    try {
      const formData = new FormData();
      formData.append('titre', titre);
      formData.append('niveau', niveau);
      formData.append('matiere', matiere);
      formData.append('fichierPdf', fichierPdf);

      await axios.post('http://localhost:3000/ajouter/cours', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Cours ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du cours :', error);
      toast.error('Une erreur s\'est produite lors de l\'ajout du cours.');
    }
  };

  const handlePdfFileChange = (e) => {
    setFichierPdf(e.target.files[0]);
  };

  return (
    <div>
      <div className="Navbar">
        <Navbar bg="light" data-bs-theme="light" style={{ borderRadius: '20px', color: 'Gray', height: '10%' }}>
          <Container>
            <Navbar.Brand to="/">
              <Nav.Link as={Link} to="/Enseignant"><i style={{ color: '' }} className="fa-solid fa-graduation-cap"></i>Digital Tunisia</Nav.Link>
            </Navbar.Brand>
          </Container>
          <Container>
            <Nav className="me-auto" style={{ marginLeft: '-7rem' }}>
              <Nav.Link as={Link} style={{ marginLeft: '-10rem',  }} to="/Enseignant"><i className="fa-solid fa-house"></i>Home</Nav.Link>
              <Button style={{ borderRadius: '14px', marginLeft: '3rem', paddingTop: '0.25rem', width: '200px', height: '60px', marginTop: '0.5rem' }} as={Link} to="/transforme" variant="outline-primary" className="me-2">transformer video mp4 to url</Button>
              <Button style={{ borderRadius: '14px', marginLeft: '1rem', paddingTop: '0.25rem', width: '200px', height: '60px', marginTop: '0.5rem' }} as={Link} to="/AddCours" variant="outline-primary" className="me-2">Ajouter le cour video</Button>
            </Nav>
            <Nav>
              <Dropdown style={{ marginRight: '4rem' }}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Enseignant Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/AddCours"></Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Updateprofile">Update Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Login_eleve">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div style={{ backgroundColor: 'LightBlue', marginTop: '-12rem', height: '100%', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '15rem' }}>Ajouter un nouveau cours sous forme de PDF</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <form onSubmit={handleAjouterCours} style={{ width: '40rem', height: '30rem', border: '2px dashed black', marginBottom: '4rem', marginLeft: '4rem', marginTop: '2rem', backgroundColor: 'LightYellow', padding: '2rem', borderRadius: '18px' }}>
            <label style={{ marginLeft: '8rem', fontSize: '25px' }}>Ajouter Un Nouveau Cours</label>
            <div className='name-field' style={{ marginTop: '3rem' }}>
              <label className='form-label'>Titre</label>
              <input type='text' className='form-control' placeholder='Entrez le titre du cours' style={{ marginLeft: '3.3rem' }} value={titre} onChange={(e) => setTitre(e.target.value)} />
            </div>
            <div className='name-field' style={{ marginTop: '1rem' }}>
              <label className='form-label'>Niveau</label>
              <select className='form-control' value={niveau} style={{ marginLeft: '2rem' }} onChange={(e) => setNiveau(e.target.value)}>
                <option value="">Sélectionner le niveau</option>
                <option value="7éme">7éme</option>
                <option value="8éme">8éme</option>
                {/* Ajouter d'autres options ici */}
              </select>
            </div>
            <div className='name-field' style={{ marginTop: '1rem' }}>
              <label className='form-label'>Matière</label>
              <select className='form-control' value={matiere} style={{ marginLeft: '1.7rem' }} onChange={(e) => setMatiere(e.target.value)}>
                <option value="">Sélectionner la matière</option>
                <option value="Math">Math</option>
                <option value="Physique">Physique</option>
                {/* Ajouter d'autres options ici */}
              </select>
            </div>
            <div className='name-field' style={{ marginTop: '1rem' }}>
              <label className='form-label'>Fichier PDF</label>
              <input type='file' className='form-control' style={{ marginLeft: '1.1rem', height: '2.4rem' }} onChange={handlePdfFileChange} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <button type='submit' className='btn btn-success' style={{ borderRadius: '14px' }}>Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CourPdf;
