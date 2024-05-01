import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GererEleves.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button,Dropdown, Modal, Form } from 'react-bootstrap';

function GererEleves() {
  const [eleves, setEleves] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eleveToDelete, setEleveToDelete] = useState(null);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [eleveToModify, setEleveToModify] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    nom: '',
    prenom: '',
    datenai: '',
    numero: '',
    gouvernorat: '',
    classe: ''
  });
  const [newEleveInfo, setNewEleveInfo] = useState({
    nom: '',
    prenom: '',
    photo: '',
    datenai: '',
    numero: '',
    gouvernorat: '',
    classe: '',
    email: '',
    password: '',
    matricule: ''
  });
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const fetchEleves = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllEleves');
        setEleves(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des élèves :', error);
      }
    };

    fetchEleves();
  }, []);

  const handleDelete = async (id) => {
    setEleveToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/deleteeleve/${eleveToDelete}`);
      setEleves(eleves.filter(eleve => eleve._id !== eleveToDelete));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'élève :', error);
    }
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleModify = (eleve) => {
    setEleveToModify(eleve);
    setShowModifyModal(true);
    setUpdatedInfo({
      nom: eleve.nom,
      prenom: eleve.prenom,
      datenai: eleve.datenai,
      numero: eleve.numero,
      gouvernorat: eleve.gouvernorat,
      classe: eleve.classe,
      matricule: eleve.matricule
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddModal = () => {
    setShowAddModal(true);
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewEleveInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/register/eleve', newEleveInfo);
      setShowAddModal(false);
      alert('Élève ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'élève :', error);
      alert('Une erreur s\'est produite lors de l\'ajout de l\'élève.');
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/updateProfileById/${eleveToModify._id}`, updatedInfo);
      console.log(response.data);
      alert('Profil mis à jour avec succès !');
      setShowModifyModal(false); // Fermer la modal après la soumission réussie
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil de l\'élève :', error);
      alert('Une erreur s\'est produite lors de la mise à jour du profil.');
    }
  };

  return (
    
      <div>
      <div className="Navbarr">
        <Navbar bg="dark" variant="dark" expand="lg" className="flex-column navbar-vertical">
          <Container>
            <Navbar.Brand as={Link} to="/Admin" style={{marginTop:'-7rem'}}>
              <i className="fa-solid fa-graduation-cap"></i> Digital Tunisia
            </Navbar.Brand>
          </Container>
          <Nav className="me-auto flex-column" style={{paddingLeft:'0.25rem'}}>
            <Button as={Link} style={{marginTop:'-4rem'}} to="/GererParent" variant="outline-light">Gerer Parent</Button>
            <Button as={Link} style={{marginTop:'2rem'}} to="/gerercours" variant="outline-light" >Gerer cours</Button>
            <Button as={Link} style={{marginTop:'2rem'}} to="/GererEnseignants" variant="outline-light" >Gerer enseignant</Button>
          </Nav>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle style={{marginTop:'6rem',marginLeft:'-1rem'}} variant="light" id="dropdown-basic">
                <div>
                  <h5>Bonjour Admin</h5>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">Déconnexion</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-42rem',marginLeft:'16rem' }}>
        <h1>Liste des élèves</h1>
        <button onClick={handleAddModal} style={{ backgroundColor: 'LimeGreen', padding: '1rem', borderRadius: '15px', marginRight: '3rem', color: 'white' }}>Ajouter un élève</button>
      </div>
      <div className="table-container" style={{width:'1248px',marginLeft:'15rem',marginRight:'-7rem'}}>
        <table className="table" style={{paddingRight:'-2rem'}}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Numéro</th>
              <th style={{width:'4px'}}>Matricule</th>
              <th>Gouvernorat</th>
              <th>Classe</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {eleves.map(eleve => (
              <tr key={eleve._id}>
                <td>{eleve.nom}</td>
                <td>{eleve.prenom}</td>
                <td>{eleve.email}</td>
                <td>{eleve.numero}</td>
                <td style={{width:'5px'}}>{eleve.matricule}</td>
                <td>{eleve.gouvernorat}</td>
                <td>{eleve.classe}</td>
                <td><img src={eleve.photo} alt="Profil" /></td>
                <td className="action-buttons">
                  <button style={{marginBottom:'1rem'}} className="delete-button" onClick={() => handleDelete(eleve._id)}>Supprimer</button>
                  <button className="modify-button" onClick={() => handleModify(eleve)}>Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer cet élève ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Annuler
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModifyModal} onHide={() => setShowModifyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier l'élève</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="nom" value={updatedInfo.nom} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" name="prenom" value={updatedInfo.prenom} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicdatenai">
              <Form.Label>Date de naissance </Form.Label>
              <Form.Control type="text" name="datenai" value={updatedInfo.datenai} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicnumero">
              <Form.Label>Numéro</Form.Label>
              <Form.Control type="text" name="numero" value={updatedInfo.numero} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicgouvernorat">
              <Form.Label>Gouvernorat</Form.Label>
              <Form.Control type="text" name="gouvernorat" value={updatedInfo.gouvernorat} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicclasse">
              <Form.Label>Classe</Form.Label>
              <Form.Control type="text" name="classe" value={updatedInfo.classe} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicmatricule">
              <Form.Label>matricule</Form.Label>
              <Form.Control type="number" name="matricule" value={updatedInfo.matricule} onChange={handleInputChange} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModifyModal(false)}>Annuler</Button>
          <Button variant="primary" onClick={handleSubmit}>Enregistrer</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un élève</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="nom" value={newEleveInfo.nom} onChange={handleNewInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" name="prenom" value={newEleveInfo.prenom} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPhoto">
              <Form.Label>photo</Form.Label>
              <Form.Control type="text" name="photo" value={newEleveInfo.photo} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicdatenai">
              <Form.Label>Date de naissance </Form.Label>
              <Form.Control type="date" name="datenai" value={newEleveInfo.datenai} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicnumero">
              <Form.Label>Numéro</Form.Label>
              <Form.Control type="text" name="numero" value={newEleveInfo.numero} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicgouvernorat">
              <Form.Label>Gouvernorat</Form.Label>
              <Form.Control type="text" name="gouvernorat" value={newEleveInfo.gouvernorat} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicclasse">
              <Form.Label>Classe</Form.Label>
              <Form.Control type="text" name="classe" value={newEleveInfo.classe} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={newEleveInfo.email} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" name="password" value={newEleveInfo.password} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicMatricule">
              <Form.Label>Matricule</Form.Label>
              <Form.Control type="text" name="matricule" value={newEleveInfo.matricule} onChange={handleNewInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>Annuler</Button>
          <Button variant="primary" onClick={handleAddSubmit}>Ajouter</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GererEleves;
