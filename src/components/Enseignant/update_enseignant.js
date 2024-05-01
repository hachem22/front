import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UpdateEnseignantPage() {
  const [enseignantInfo, setEnseignantInfo] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    nom: '',
    prenom: '',
    datenai: '',
    numero: '',
    specialite: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const EnseignantId = sessionStorage.getItem('EnseignantId');
        if (EnseignantId) {
          const response = await axios.get(`http://localhost:3000/getenseignantparId/${EnseignantId}`);
          setEnseignantInfo(response.data);
          setUpdatedInfo(response.data);
        } else {
          setEnseignantInfo(null);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'enseignant:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const EnseignantId = sessionStorage.getItem('EnseignantId');
    try {
      const response = await axios.put(`http://localhost:3000/updateEnseignantbyId/${EnseignantId}`, updatedInfo);
      console.log(response.data);
      alert('Profil mis à jour avec succès !');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil de l\'enseignant :', error);
      alert('Une erreur s\'est produite lors de la mise à jour du profil.');
    }
  };

  return (
    <div>
      {/* Code de la barre de navigation */}
      <div className="Navbarr">
        <Navbar bg="light" data-bs-theme="light" style={{ borderRadius: '20px', color: 'Gray', height: '10%' }}>
          <Container>
            <Navbar.Brand to="/">
              <Nav.Link as={Link} to="/">
                <i style={{ marginLeft: '3rem' }} className="fa-solid fa-graduation-cap"></i>Digital Tunisia
              </Nav.Link>
            </Navbar.Brand>
          </Container>
          <Container>
            <Nav className="me-auto" style={{ marginLeft: '8rem' }}>
              <Nav.Link as={Link} style={{ marginLeft: '-10rem' }} to="/Enseignant"><i className="fa-solid fa-house"></i>Home</Nav.Link>
              <Nav.Link as={Link} to="/ListeNiveaux"><i className="fa-brands fa-youtube"></i> videos</Nav.Link>
              <Nav.Link style={{}} as={Link} to="/Formation"><i className="fa-solid fa-file"></i>Document</Nav.Link>
              <Nav.Link style={{ marginRight: '-55rem' }} as={Link} to="/Formation"><i className="fa-solid fa-book"></i>livres</Nav.Link>
            </Nav>
            <Nav>
              <Dropdown style={{ marginRight: '4rem' }}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {enseignantInfo && (
                    <div>
                      <h5 style={{ fontSize: '15px' }}> {enseignantInfo.nom} {enseignantInfo.prenom}</h5>
                    </div>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Login_enseignant">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div style={{ backgroundColor: 'LightBlue', width: '95rem', height: '47rem', paddingTop: '4rem', marginTop: '-7rem', marginBottom: '-3rem' }}>
        <div style={{ backgroundColor: 'LightYellow', width: '540px', height: '600px', marginLeft: '30rem', borderRadius: '15px', border: '2px dashed black', marginTop: '5rem' }}>

         
          {enseignantInfo && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Form style={{ marginLeft: '4rem', marginTop: '2rem' }}>
              <h5 style={{marginBottom:'6rem'}}>Mise à jour des informations du enseignant</h5>

                <div className='name-field'>
                  <label style={{ borderRadius: '14px' }}>Nom: </label>
                  <input className='form-control' style={{ borderRadius: '14px', marginLeft: '9rem', padding: '0.5rem', marginBottom: '1rem',width:'15rem' }} type="text" name="nom" value={updatedInfo.nom} onChange={handleInputChange} />
                </div>
                <div className='name-field'>
                  <label>Prénom: </label>
                  <input className='form-control' style={{ borderRadius: '14px', marginLeft: '7.5rem', padding: '0.5rem', marginBottom: '1rem',width:'15rem' }} type="text" name="prenom" value={updatedInfo.prenom} onChange={handleInputChange} />
                </div>
                <div className='name-field'>
                  <label>Spécialité :</label>
                  <input className='form-control' style={{ borderRadius: '14px', marginLeft: '6.3rem', padding: '0.5rem', marginBottom: '1rem', width: '15rem' }} type="text" name="specialite" value={updatedInfo.specialite} onChange={handleInputChange} />
                </div>
                <div className='name-field'>
                  <label>Numéro:</label>
                  <input className='form-control' style={{ borderRadius: '14px', marginLeft: '7.5rem', padding: '0.5rem', marginBottom: '1rem',width:'15rem' }} type="text" name="numero" value={updatedInfo.numero} onChange={handleInputChange} />
                </div>
                <div className='name-field'>
                  <label>email:</label>
                  <input className='form-control' style={{ borderRadius: '14px', marginLeft: '8.8rem', padding: '0.5rem', marginBottom: '1rem',width:'15rem' }} type="email" name="email" value={updatedInfo.email} onChange={handleInputChange} />
                </div>
                <button style={{ marginLeft: '6rem', marginTop: '2rem', padding: '0.8rem', borderRadius: '15px', backgroundColor: 'DeepSkyBlue' }} type="button" onClick={handleSubmit}>Mettre à jour le profil</button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpdateEnseignantPage;
