import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container,  Button,Dropdown, Modal, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GererCours() {

    const [cours, setCours] = useState([]);
    const [error, setError] = useState(null);
   
    const [showAddModal, setShowAddModal] = useState(false);
    const [showModifyModal, setShowModifyModal] = useState(false);
    const [newCourse, setNewCourse] = useState({
        titre: '',
        niveau: '',
        matiere: '',
        numeroVideo:'',
        videoUrl: '',
    });
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [updatedCourse, setUpdatedCourse] = useState({
        titre: '',
        niveau: '',
        matiere: '',
        numeroVideo:'',
        videoUrl: '',
    });

    useEffect(() => {
        fetchAllCours();
    }, []);

    const fetchAllCours = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getAllCours');
            setCours(response.data.cours);
        } catch (error) {
            setError(error);
        }
    };

    

    const handleAddModal = () => {
        setShowAddModal(true);
    };

    const handleModifyModal = (course) => {
        setSelectedCourse(course);
        setUpdatedCourse({
            titre: course.titre,
            niveau: course.niveau,
            matiere: course.matiere,
            numeroVideo: course.numeroVideo,
            videoUrl: course.videoUrl,
        });
        setShowModifyModal(true);
    };

    const handleNewInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdatedInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddSubmit = async () => {
        try {
            await axios.post('http://localhost:3000/AjouterCour', newCourse);
            setShowAddModal(false);
            alert('Cours ajouté avec succès !');
            fetchAllCours(); // Rafraîchir la liste des cours après l'ajout
        } catch (error) {
            console.error('Erreur lors de l\'ajout du cours :', error);
            alert('Une erreur s\'est produite lors de l\'ajout du cours.');
        }
    };

    const handleModifySubmit = async () => {
        try {
            await axios.put(`http://localhost:3000/updateCoursById/${selectedCourse._id}`, updatedCourse);
            setShowModifyModal(false);
            alert('Cours modifié avec succès !');
            fetchAllCours(); // Rafraîchir la liste des cours après la modification
        } catch (error) {
            console.error('Erreur lors de la modification du cours :', error);
            alert('Une erreur s\'est produite lors de la modification du cours.');
        }
    };

    const handleDelete = async (course) => {
        try {
            await axios.delete(`http://localhost:3000/deleteCours`, { data: course });
            alert('Cours supprimé avec succès !');
            fetchAllCours(); // Rafraîchir la liste des cours après la suppression
        } catch (error) {
            console.error('Erreur lors de la suppression du cours :', error);
            alert('Une erreur s\'est produite lors de la suppression du cours.');
        }
    };

    if (error) {
        return <div>Erreur lors de la récupération des cours : {error.message}</div>;
    }

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
            <Button as={Link} style={{marginTop:'-4rem',paddingLeft:'rem'}} to="/GererEleves" variant="outline-light" >Gerer élèves</Button>
            <Button as={Link} style={{marginTop:'2rem'}} to="/GererParent" variant="outline-light">Gerer Parent</Button>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-47rem',marginLeft:'16rem' }}>
        <h1>Liste des cours</h1>
        <button onClick={handleAddModal} style={{ backgroundColor: 'LimeGreen', padding: '1rem', borderRadius: '15px', marginRight: '3rem', color: 'white' }}>Ajouter un cour</button>
      </div>   
               <Container fluid style={{width:'1234px',marginLeft:'15rem',marginRight:'-4rem'}}>
                <Table striped bordered hover style={{paddingRight:'-2rem'}}>
                    <thead>
                        <tr>
                            <th>Video</th>
                            <th>Titre</th>
                            <th>Niveau</th>
                            <th>Matière</th>
                            <th>Numéro Video</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cours.map((course, index) => (
                            <tr key={index}>
                                <td>
                                    <video style={{ width: '15rem',marginLeft:'0.5rem',marginRight:'-3rem' }} src={course.videoUrl} className="main-video" controls></video>
                                </td>
                                <td style={{paddingTop:'4rem',width:'40px'}}>{course.titre}</td>
                                <td style={{paddingTop:'4rem'}}>{course.niveau}</td>
                                <td style={{paddingTop:'4rem'}}>{course.matiere}</td>
                                <td style={{paddingTop:'4rem'}}>{course.numeroVideo}</td>
                                <td>
                                    <Button variant="danger" style={{ marginRight: '2rem',marginLeft:'4rem',fontSize:'20px',marginTop:'3rem' }} onClick={() => handleDelete(course)}>Supprimer</Button>
                                    <Button variant="warning" style={{fontSize:'20px',marginTop:'3rem'}} onClick={() => handleModifyModal(course)}>Modifier</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un cours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitre">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" name="titre" value={newCourse.titre} onChange={handleNewInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicNiveau">
                            <Form.Label>Niveau</Form.Label>
                            <Form.Control type="text" name="niveau" value={newCourse.niveau} onChange={handleNewInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicMatiere">
                            <Form.Label>Matière</Form.Label>
                            <Form.Control type="text" name="matiere" value={newCourse.matiere} onChange={handleNewInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicNumeroVideo">
                            <Form.Label>Numéro de la vidéo</Form.Label>
                            <Form.Control type="text" name="numeroVideo" value={newCourse.numeroVideo} onChange={handleNewInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicVideoUrl">
                            <Form.Label>URL de la vidéo</Form.Label>
                            <Form.Control type="text" name="videoUrl" value={newCourse.videoUrl} onChange={handleNewInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>Fermer</Button>
                    <Button variant="primary" onClick={handleAddSubmit}>Ajouter</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModifyModal} onHide={() => setShowModifyModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier un cours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitre">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" name="titre" value={updatedCourse.titre} onChange={handleUpdatedInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicNiveau">
                            <Form.Label>Niveau</Form.Label>
                            <Form.Control type="text" name="niveau" value={updatedCourse.niveau} onChange={handleUpdatedInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicMatiere">
                            <Form.Label>Matière</Form.Label>
                            <Form.Control type="text" name="matiere" value={updatedCourse.matiere} onChange={handleUpdatedInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicNumeroVideo">
                            <Form.Label>Numéro de la vidéo</Form.Label>
                            <Form.Control type="text" name="numeroVideo" value={updatedCourse.numeroVideo} onChange={handleUpdatedInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicVideoUrl">
                            <Form.Label>URL de la vidéo</Form.Label>
                            <Form.Control type="text" name="videoUrl" value={updatedCourse.videoUrl} onChange={handleUpdatedInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModifyModal(false)}>Fermer</Button>
                    <Button variant="primary" onClick={handleModifySubmit}>Modifier</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default GererCours;
