import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Container, Dropdown,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AddCours() {
  const [titre, setTitre] = useState('');
  const [niveau, setNiveau] = useState('');
  const [matiere, setMatiere] = useState('');
  const [numeroVideo, setNumeroVideo] = useState(0); // Changer le state et la valeur initiale à 0
  const [videoUrl, setVideoUrl] = useState('');

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const addCours = async (e) => {
    e.preventDefault();
    try {
      const coursData = {
        titre,
        niveau,
        matiere,
        numeroVideo, // Utiliser le numéro de vidéo fourni
        videoUrl,
      };
      const addCoursResponse = await axios.post('http://localhost:3000/AjouterCour', coursData);
      console.log('Réponse de l\'API "AddCours" :', addCoursResponse.data);
      // Vérifier si la réponse de l'API est réussie
      if (addCoursResponse.status === 200) {
        // Afficher un toast avec un message de succès
        toast.success('Le cours a été ajouté avec succès !');
      }
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API "AddCours" :', error);
    }
  };
  
  return (
    <div>
<div className="Navbar">
      <Navbar bg="light" data-bs-theme="light" style={{ borderRadius: '20px', color: 'Gray', height: '10%'  }}>
        <Container>
           <Navbar.Brand to="/">
             <Nav.Link as={Link} to="/Enseignant" ><i style={{color:''}} className="fa-solid fa-graduation-cap"></i>Digital Tunisia</Nav.Link>
            </Navbar.Brand>
        </Container>
        <Container>
          <Nav className="me-auto" style={{marginLeft:'-7rem'}}>
            <Nav.Link as={Link} style={{marginLeft:'-10rem'}} to="/Enseignant"><i className="fa-solid fa-house"></i>Home</Nav.Link>
            <Button style={{borderRadius:'14px', marginLeft:'3rem',paddingTop:'0.25rem',width:'200px',height:'60px', marginTop:'0.25rem'}} as={Link} to ="/transforme" variant="outline-primary" className="me-2" > transformer video mp4 to url </Button>
            <Button style={{borderRadius:'14px', marginLeft:'1rem',paddingTop:'1rem',width:'200px' ,height:'60px', marginTop:'0.25rem'}} as={Link} to ="/courpdf" variant="outline-primary" className="me-2" > Ajouter les cours pdf </Button>


          </Nav>
          <Nav>
            {/* Ajoutez ici la Dropdown dans le champ de profil */}
            <Dropdown style={{marginRight:'4rem'}}>
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
    </div>      <div style={{backgroundColor:'LightBlue',marginTop:'-4rem'}}>
        <h5 style={{marginLeft:'19rem',marginRight:'19rem',paddingTop:'5rem'}}>vous ne pouvez pas ajouter des videos au format mp4 .Vous devez convertir la video de    mp4 vers url a l'aid de button <Link style={{textDecoration: 'none',fontSize:'17px'}} to="/transforme">transformer video mp4 to url</Link> dans le barre denavigation</h5>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Form onSubmit={addCours} style={{ width: '40rem', height: '30rem', border: '2px dashed black', marginBottom: '4rem', marginLeft: '30rem', marginTop: '2rem', backgroundColor: 'LightYellow', padding: '2rem', borderRadius: '18px' }}>
            <h2 style={{ marginLeft: '5rem', marginBottom: '2rem', fontFamily: 'sans-serif', fontSize: '35px' }}>Ajouter un nouveau cours</h2>

            <div className='name-field'>
              <label className='form-label'>Titre </label>
              <input style={{ marginLeft: '3.25rem', borderRadius: '14px' }} type='text' className='form-control' placeholder='Créer votre titre de cours' value={titre} onChange={(e) => setTitre(e.target.value)} />
            </div>

            <div className='name-field' style={{ marginTop: '1rem' }}>
              <label className='form-label'>Niveau </label>
              <select style={{ marginLeft: '2rem', borderRadius: '14px' }} className='form-control' value={niveau} onChange={(e) => setNiveau(e.target.value)}>
              <option value="">Sélectionner le niveau</option>
        <option value="7éme">7éme</option>
        <option value="8éme">8éme</option>
        <option value="9éme">9éme</option>
        <option value="1ére">1ére</option>
        <option value="2éme">2éme sciense</option>
        <option value="2éme">2éme info</option>
        <option value="2éme">2éme technique</option>
        <option value="2éme">2éme economie</option>
        <option value="2éme">2éme lettre</option>
        <option value="3éme">3éme sciense</option>
        <option value="3éme">3éme info</option>
        <option value="3éme">3éme technique</option>
        <option value="3éme">3éme economie</option>
        <option value="3éme">3éme lettre</option>
        <option value="bac">bac sciense</option>
        <option value="bac">bac info</option>
        <option value="bac">bac technique</option>
        <option value="bac">bac economie</option>
        <option value="bac">bac lettre</option>              </select>
            </div>

            <div className='name-field' style={{ marginTop: '1rem' }}>
              <label className='form-label'>Matière</label>
              <select style={{ marginLeft: '1.75rem', borderRadius: '14px' }} className='form-control' value={matiere} onChange={(e) => setMatiere(e.target.value)}>
              <option value="">Sélectionner la matière</option>
    <option value="Math">Math</option>
    <option value="Physique">Physique</option>
    <option value="Technique">Technique</option>
    <option value="Informatique">Informatique</option>
    <option value="Francais">francais</option>
    <option value="Anglais">anglais</option>
    <option value="Arabe">arabe</option>

    <option value="Histoire">histoire/geo</option>              </select>
            </div>

            <div className='name-field' style={{ marginTop: '1rem' }}>
              <label className='form-label'>Numéro </label>
              <input style={{  marginLeft: '1.5rem', borderRadius: '14px',width:'480px',height:'40px' }} type='number' className='form-control' placeholder='Numéro de la vidéo' value={numeroVideo} onChange={(e) => setNumeroVideo(e.target.value)} />
            </div>

            <div className='name-field' style={{ marginTop: '1rem' }}>
              <label className='form-label'>URL </label>
              <input style={{ marginLeft: '4rem', borderRadius: '14px',width:'480px',height:'40px' }} type='text' className='form-control' placeholder="Entrez l\'URL de la vidéo" value={videoUrl} onChange={handleVideoUrlChange} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <button type='submit' className='btn btn-success' style={{ borderRadius: '14px', marginBottom:'3rem' }} >Ajouter</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
