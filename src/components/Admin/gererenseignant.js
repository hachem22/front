import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GererEnseignants.css'; // Assurez-vous d'avoir votre fichier de styles CSS
import { Navbar, Nav, Container,Dropdown, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GererEnseignants() {
  const [enseignants, setEnseignants] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [enseignantToDelete, setEnseignantToDelete] = useState(null);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [enseignantToModify, setEnseignantToModify] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    nom: '',
    prenom: '',
    numero: '',
    specialite: '',
    email: ''
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEnseignantInfo, setNewEnseignantInfo] = useState({
    nom: '',
    prenom: '',
    numero: '',
    specialite: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetchEnseignants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllEnseignants');
        setEnseignants(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des enseignants :', error);
      }
    };

    fetchEnseignants();
  }, []);

  const handleDelete = async (id) => {
    setEnseignantToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/deleteEnseignantById/${enseignantToDelete}`);
      setEnseignants(enseignants.filter(enseignant => enseignant._id !== enseignantToDelete));
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'enseignant :', error);
    }
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleModify = (enseignant) => {
    setEnseignantToModify(enseignant);
    setShowModifyModal(true);
    setUpdatedInfo({
      nom: enseignant.nom,
      prenom: enseignant.prenom,
      numero: enseignant.numero,
      specialite: enseignant.specialite,
      email: enseignant.email
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
    setNewEnseignantInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/ajouter/Enseignant', newEnseignantInfo);
      setShowAddModal(false);
      alert('Enseignant ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'enseignant :', error);
      alert('Une erreur s\'est produite lors de l\'ajout de l\'enseignant.');
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/updateEnseignantById/${enseignantToModify._id}`, updatedInfo);
      console.log(response.data);
      alert('Profil enseignant mis à jour avec succès !');
      setShowModifyModal(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil de l\'enseignant :', error);
      alert('Une erreur s\'est produite lors de la mise à jour du profil de l\'enseignant.');
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
            <Button as={Link} style={{marginTop:'-4rem',paddingLeft:'2rem', paddingRight:'2rem'}} to="/GererEleves" variant="outline-light" >Gerer élèves</Button>
            <Button as={Link} style={{marginTop:'2rem'}} to="/GererParent" variant="outline-light">Gerer Parent</Button>
            <Button as={Link} style={{marginTop:'2rem'}} to="/gerercours" variant="outline-light" >Gerer cours</Button>
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-42rem' ,marginLeft:'16rem'}}>
        <h1>Liste des enseignants</h1>
        <button onClick={handleAddModal} style={{ backgroundColor: 'LimeGreen', padding: '0.5rem', borderRadius: '15px', marginRight: '3rem', color: 'white' }}>Ajouter un enseignant</button>
      </div>
      <div className="table-container" style={{width:'1248px',marginLeft:'15rem',marginRight:'-4rem'}}>
        <table className="table" style={{paddingRight:'-2rem'}}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Numéro</th>
              <th>Spécialité</th>
              <th>Email</th>
              {/* Autres en-têtes de colonnes si nécessaire */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enseignants.map(enseignant => (
              <tr key={enseignant._id}>
                <td>{enseignant.nom}</td>
                <td>{enseignant.prenom}</td>
                <td>{enseignant.numero}</td>
                <td>{enseignant.specialite}</td>
                <td>{enseignant.email}</td>
                {/* Autres données des enseignants si nécessaire */}
                <td className="action-buttons">
                  <button className="delete-button" onClick={() => handleDelete(enseignant._id)}>Supprimer</button>
                  <button style={{marginLeft:'2rem'}} className="modify-button" onClick={() => handleModify(enseignant)}>Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* Modal de suppression */}
<Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
  <Modal.Header closeButton>
    <Modal.Title>Confirmation de suppression</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Êtes-vous sûr de vouloir supprimer cet enseignant ?
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

{/* Modal de modification */}
<Modal show={showModifyModal} onHide={() => setShowModifyModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Modifier l'enseignant</Modal.Title>
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
      
      <Form.Group controlId="formBasicNumero">
        <Form.Label>Numéro</Form.Label>
        <Form.Control type="text" name="numero" value={updatedInfo.numero} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="formBasicSpecialite">
        <Form.Label>Spécialité</Form.Label>
        <Form.Control type="text" name="specialite" value={updatedInfo.specialite} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={updatedInfo.email} onChange={handleInputChange} />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModifyModal(false)}>Annuler</Button>
    <Button variant="primary" onClick={handleSubmit}>Enregistrer</Button>
  </Modal.Footer>
</Modal>

{/* Modal d'ajout */}
<Modal show={showAddModal} onHide={handleCloseAddModal}>
  <Modal.Header closeButton>
    <Modal.Title>Ajouter un enseignant</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group controlId="formBasicNom">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" name="nom" value={newEnseignantInfo.nom} onChange={handleNewInputChange} />
      </Form.Group>

      <Form.Group controlId="formBasicPrenom">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="text" name="prenom" value={newEnseignantInfo.prenom} onChange={handleNewInputChange} />
      </Form.Group>
      
      <Form.Group controlId="formBasicNumero">
        <Form.Label>Numéro</Form.Label>
        <Form.Control type="text" name="numero" value={newEnseignantInfo.numero} onChange={handleNewInputChange} />
      </Form.Group>

      <Form.Group controlId="formBasicSpecialite">
        <Form.Label>Spécialité</Form.Label>
        <Form.Control type="text" name="specialite" value={newEnseignantInfo.specialite} onChange={handleNewInputChange} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={newEnseignantInfo.email} onChange={handleNewInputChange} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" name="password" value={newEnseignantInfo.password} onChange={handleNewInputChange} />
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

export default GererEnseignants;
