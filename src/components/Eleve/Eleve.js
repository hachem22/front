import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown, Offcanvas,ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Eleve.css';
import axios from 'axios';
import MessengerIcon from '../MessengerIcon';
function ProfilePage({ history }) {

  const [showSidebar, setShowSidebar] = useState(false);
  const [eleveInfo, setEleveInfo] = useState(null);
  const [progressions, setProgressions] = useState(null);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    const fetchEleveInfo = async () => {
      try {
        const eleveId = sessionStorage.getItem('eleveId');
        if (eleveId) {
          const eleveInfoResponse = await axios.get(`http://localhost:3000/getInfoById/${eleveId}`);
          const eleveInfo = eleveInfoResponse.data;
          setEleveInfo(eleveInfo);
          // Récupérer les progressions de l'élève pour chaque matière
          const progressionsResponse = await axios.get(`http://localhost:3000/progression/${eleveId}`);
          const progressions = progressionsResponse.data;
          setProgressions(progressions);
        } else {
          setEleveInfo(null);
          setProgressions(null);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'élève :', error);
      }
    };

    fetchEleveInfo();
  }, []);

  return (
    <>
      <div className="Navbarr" >
        <Navbar bg="light" data-bs-theme="light" style={{ borderRadius: '20px', color: 'Gray', height: '10%'  }}>
          <Container>
            {/* Ajouter le bouton à trois barres à gauche */}
            <button className="btn btn-outline-dark" onClick={toggleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <Navbar.Brand to="/Eleve">
              <Nav.Link as={Link} to="/Eleve">
                <i style={{marginLeft:'-35rem' }} className="fa-solid fa-graduation-cap"><h4 style={{fontSize:'30px',fontFamily:'cursive'}}>Digital Tunisian Learning </h4> </i>
              </Nav.Link>
            </Navbar.Brand>
            {/* Ajouter la barre de recherche à droite */}
           
          </Container>
          <Container>
            <Nav className="me-auto"style={{marginLeft:'8rem'}}>
              {/* Ajouter ici les éléments de votre barre de navigation horizontale */}
            
              <Nav.Link as={Link} to="/ListeNiveaux"><i className="fa-brands fa-youtube"></i> videos</Nav.Link>
              <Nav.Link  style={{}}as={Link} to="/exercicecorriger"><i className="fa-solid fa-file"></i>Exercices</Nav.Link>
              <Nav.Link  style={{marginRight:'-55rem'}}as={Link} to="/bibliothèque"><i className="fa-solid fa-book"></i>bibliothèque</Nav.Link>

              
            </Nav>
            <Nav>
              {/* Ajouter ici le champ de profil */}
              <Dropdown style={{ marginRight: '4rem' }}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                {eleveInfo && (
          <div>
            <h5 style={{fontSize:'14px'}}><img src={eleveInfo.photo} alt="Profil" style={{ width: '50px', height: '50px', borderRadius: '50%', marginLeft: 'rem', marginRight: '1rem' ,marginTop:'-5rem',marginBottom:'-7rem'}} /> {eleveInfo.nom}  {eleveInfo.prenom}   
 </h5>

            {/* ... (autres informations de l'élève à afficher) ... */}
          </div>
        )}                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/UpdateProfilePage">Mettre à jour le profil</Dropdown.Item>
                  <Dropdown.Item variant="outline-dark" as={Link} to="/Login_eleve">Modifier Mot de pass</Dropdown.Item>
                  <Dropdown.Item variant="outline-dark" as={Link} to="/Login_eleve">Déconnexion</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* Barre de navigation latérale (offcanvas) */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} style={{width:'20%'}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          {/* Ajouter ici les éléments de votre barre de navigation latérale */}
          <Nav className="flex-column">
            <h4><i className="fa-brands fa-youtube"></i> Vidéos éducatives</h4>
            <Dropdown style={{marginTop:'1rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'1rem',width:'80%'}}>
              Niveau praimaire
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/septiéme_math">7éme</Dropdown.Item>
                <Dropdown.Item as={Link} to="/huitiéme">8éme</Dropdown.Item>
                <Dropdown.Item as={Link} to="/neuviéme">9éme</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{marginTop:'1rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'1rem',width:'80%'}}>
              Niveau secondaire
              </Dropdown.Toggle>
            
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/MatieresPage">1ére</Dropdown.Item>
              
              <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              2éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>       
            <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              3éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>            
            <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              4éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>      
              </Dropdown.Menu>
            </Dropdown>
            <h4 style={{marginTop:'2rem'}}><i className="fa-solid fa-file"></i> Documents</h4>
            <Dropdown style={{marginTop:'1rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'1rem',width:'80%'}}>
              Niveau praimaire
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/ListeCours">7éme</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">8éme</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">9éme</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{marginTop:'1rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'1rem',width:'80%'}}>
              Niveau secondaire
              </Dropdown.Toggle>
            
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/MatieresPage">1ére</Dropdown.Item>
              
              <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              2éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>       
            <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              3éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>            
            <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              4éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>      
              </Dropdown.Menu>
            </Dropdown>
            <h4 style={{marginTop:'2rem'}}><i className="fa-solid fa-book"></i> Des livres scolaire</h4>
           <Dropdown style={{marginTop:'1rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'1rem',width:'80%'}}>
              Niveau praimaire
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/Updateprofile">7éme</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">8éme</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_eleve">9éme</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{marginTop:'1rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'1rem',width:'80%'}}>
              Niveau secondaire
              </Dropdown.Toggle>
            
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/MatieresPage">1ére</Dropdown.Item>
              
              <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              2éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">2éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>       
            <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              3éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">3éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>            
            <Dropdown style={{marginTop:'0.5rem',width:'14rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'rem',width:'80%'}}>
              4éme anneé
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme sciense</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme math</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme info</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme technique</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MatieresPage">4éme eco</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>      
              </Dropdown.Menu>
            </Dropdown>

            
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <MessengerIcon/>

    <section style={{backgroundColor:'AliceBlue',width:'95rem',height:'47rem',marginTop:'-60rem'}}>
      <div style={{marginTop:'13rem',marginLeft:'1rem',marginRight:'1rem'}}>
      

      {progressions && (
        <div>
          <h1 style={{fontSize:'30px',color:'DarkBlue', marginTop:'4rem',paddingTop:'8rem'}}>Mes Progressions par matiere</h1>
          <table className="table" style={{borderRadius:"16px", borderCollapse: "separate", borderSpacing: "0"}}>
            <thead>
              <tr>
                <th style={{borderRadius:"16px"}}>Matière</th>
                <th style={{borderRadius:"16px"}}>Progression</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{fontSize:'20px',textShadow:'revert-layer',borderRadius:"16px"}}>Math</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                <ProgressBar striped variant="info" animated now={progressions.progressionmath} label={`${progressions.progressionmath}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Physique</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated now={progressions.progressionphysique} label={`${progressions.progressionphysique}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}} >Technique</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated now={progressions.progressiontechnique} label={`${progressions.progressiontechnique}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Informatique</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated  now={progressions.progressioninformatique} label={`${progressions.progressioninformatique}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px" }} >Arabe</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar  striped variant="info" animated  now={progressions.progressionarabe} label={`${progressions.progressionarabe}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Francais</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated  now={progressions.progressionfrancais} label={`${progressions.progressionfrancais}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Anglais</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated  now={progressions.progressionanglais} label={`${progressions.progressionanglais}%`} />
                </td>
              </tr>
              {/* Ajoutez les autres matières si nécessaire */}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </section>
    </>
  );
}

export default ProfilePage