import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GererParents.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button,Dropdown, Modal, Form } from 'react-bootstrap';

function GererParents() {
  const [parents, setParents] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [parentToDelete, setParentToDelete] = useState(null);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [parentToModify, setParentToModify] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    nom: '',
    prenom: '',
    numero: '',
    matriculeeleve: '',
    nomeleve: '',
    prenomeleve: '',
    email: '',
    // Ajoutez d'autres champs nécessaires pour la modification
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newParentInfo, setNewParentInfo] = useState({
    nom: '',
    prenom: '',
    numero: '',
    matriculeeleve: '',
    nomeleve: '',
    prenomeleve: '',
    email: '',
    password: '',

    // Ajoutez d'autres champs nécessaires pour l'ajout
  });

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllParents');
        setParents(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des parents :', error);
      }
    };

    fetchParents();
  }, []);

  const handleDelete = async (id) => {
    setParentToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/deleteParentById/${parentToDelete}`);
      setParents(parents.filter(parent => parent._id !== parentToDelete));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Erreur lors de la suppression du parent :', error);
    }
  };
  

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleModify = (parent) => {
    setParentToModify(parent);
    setShowModifyModal(true);
    setUpdatedInfo({
      nom: parent.nom,
      prenom: parent.prenom,
      numero: parent.numero,
      matriculeeleve: parent.matriculeeleve,
      nomeleve: parent.nomeleve,
      prenomeleve: parent.prenomeleve,
      email: parent.email,
      
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
    setNewParentInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/ajouter/parent', newParentInfo);
      setShowAddModal(false);
      alert('Parent ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du parent :', error);
      alert('Une erreur s\'est produite lors de l\'ajout du parent.');
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/updateParentById/${parentToModify._id}`, updatedInfo);
      console.log(response.data);
      alert('Profil mis à jour avec succès !');
      setShowModifyModal(false); // Fermer la modal après la soumission réussie
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil du parent :', error);
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
          <Nav className="me-auto flex-column" style={{paddingLeft:'0.75rem'}}>
            <Button as={Link} style={{marginTop:'-4rem',paddingLeft:'rem'}} to="/GererEleves" variant="outline-light" >Gerer élèves</Button>
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
        <h1>Liste des parents</h1>
        <button onClick={handleAddModal} style={{ backgroundColor: 'LimeGreen', padding: '1rem', borderRadius: '15px', marginRight: '3rem', color: 'white' }}>Ajouter un parent</button>
      </div>
      <div className="table-container" style={{width:'1234px',marginLeft:'15rem',marginRight:'-4rem'}}>
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>numero</th>
              <th>matriculeeleve</th>
              <th>nomeleve</th>
              <th>prenomeleve</th>
              <th>Email</th>
             <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parents.map(parent => (
              <tr key={parent._id}>
                <td>{parent.nom}</td>
                <td>{parent.prenom}</td>
                <td>{parent.numero}</td>
                <td>{parent.matriculeeleve}</td>
                <td>{parent.nomeleve}</td>
                <td>{parent.prenomeleve}</td>
                <td>{parent.email}</td>
                {/* Affichez d'autres données des parents si nécessaire */}
                <td className="action-buttons">
                  <button className="delete-button" onClick={() => handleDelete(parent._id)}>Supprimer</button>
                  <button className="modify-button" onClick={() => handleModify(parent)}>Modifier</button>
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
          Êtes-vous sûr de vouloir supprimer ce parent ?
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
          <Modal.Title>Modifier le parent</Modal.Title>
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
            <Form.Group controlId="formBasicnumero">
              <Form.Label>numero</Form.Label>
              <Form.Control type="number" name="numero" value={updatedInfo.numero} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicmatriculeeleve">
              <Form.Label>matriculeeleve</Form.Label>
              <Form.Control type="text" name="matriculeeleve" value={updatedInfo.matriculeeleve} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicnomeleve">
              <Form.Label>nomeleve</Form.Label>
              <Form.Control type="text" name="nomeleve" value={updatedInfo.nomeleve} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicprenomeleve">
              <Form.Label>prenomeleve</Form.Label>
              <Form.Control type="text" name="prenomeleve" value={updatedInfo.prenomeleve} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={updatedInfo.email} onChange={handleInputChange} />
            </Form.Group>

            {/* Ajoutez d'autres champs pour la modification si nécessaire */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModifyModal(false)}>Annuler</Button>
          <Button variant="primary" onClick={handleSubmit}>Enregistrer</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un parent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="nom" value={newParentInfo.nom} onChange={handleNewInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPrenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" name="prenom" value={newParentInfo.prenom} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicnumero">
              <Form.Label>numero</Form.Label>
              <Form.Control type="number" name="numero" value={newParentInfo.numero} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicmatriculeeleve">
              <Form.Label>matriculeeleve</Form.Label>
              <Form.Control type="text" name="matriculeeleve" value={newParentInfo.matriculeeleve} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicnomeleve">
              <Form.Label>nomeleve</Form.Label>
              <Form.Control type="text" name="nomeleve" value={newParentInfo.nomeleve} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicprenomeleve">
              <Form.Label>prenomeleve</Form.Label>
              <Form.Control type="text" name="prenomeleve" value={newParentInfo.prenomeleve} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={newParentInfo.email} onChange={handleNewInputChange} />
            </Form.Group>
            <Form.Group controlId="formBasicpassword">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" name="password" value={newParentInfo.password} onChange={handleNewInputChange} />
            </Form.Group>
           
            {/* Ajoutez d'autres champs pour l'ajout si nécessaire */}
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

export default GererParents;
