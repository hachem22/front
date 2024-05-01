import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Dropdown, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Parent() {
  const [parentInfo, setParentInfo] = useState(null);
  const [progressionInfo, setProgressionInfo] = useState(null);

  useEffect(() => {
    const parentId = sessionStorage.getItem('parentId');

    if (parentId) {
      const fetchParentAndEleveInfo = async () => {
        try {
          // Récupérer les informations du parent par son ID
          const responseParent = await axios.get(`http://localhost:3000/parentbyid/${parentId}`);
          setParentInfo(responseParent.data);
          
          const matricule = responseParent.data.matriculeeleve;
          
          // Récupérer les informations de l'élève par son matricule
          const responseProgression = await axios.get(`http://localhost:3000/progression/matricule/${matricule}`);
          setProgressionInfo(responseProgression.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des informations du parent ou de l\'élève :', error);
        }
      };
     
      fetchParentAndEleveInfo();
    }
  }, []);

  return (
    <div>
    <div className="Navbar">
      <Navbar bg="light" data-bs-theme="light" style={{ borderRadius: '20px', color: 'Gray', height: '10%'  }}>
        <Container>
           <Navbar.Brand to="/Parent">
             <Nav.Link as={Link} to="/Parent" ><i style={{color:''}} className="fa-solid fa-graduation-cap"></i>Digital Tunisia</Nav.Link>
            </Navbar.Brand>
        </Container>
        <Container>
          <Nav className="me-auto">

          </Nav>
          <Nav>
            {/* Ajoutez ici la Dropdown dans le champ de profil */}
            <Dropdown style={{marginRight:'4rem'}}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
              {parentInfo && (
        
                <div>
            <h5 style={{fontSize:'14px'}}>parent, {parentInfo.nom}  {parentInfo.prenom}   
 </h5>

          </div>
        )}           
              </Dropdown.Toggle>
              <Dropdown.Menu>
              
                <Dropdown.Item as={Link} to="/AddCours"></Dropdown.Item>
                <Dropdown.Item as={Link} to="/UpdateParent">Update Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_parent">Logout</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Login_parent">nouveau mot de pass</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
    <section style={{backgroundColor:'lightblue',width:'95rem',height:'49rem',marginTop:'-8rem'}}>
      <div style={{paddingTop:'10rem',marginLeft:'1rem',marginRight:'1rem'}}>
            

      {progressionInfo && (
        <div>
          <h1>table de progression de l'élève par matiere</h1>
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
                  <ProgressBar striped variant="info" animated now={progressionInfo.progressionmath} label={`${progressionInfo.progressionmath}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Physique</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated now={progressionInfo.progressionphysique} label={`${progressionInfo.progressionphysique}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}} >Technique</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated now={progressionInfo.progressiontechnique} label={`${progressionInfo.progressiontechnique}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Informatique</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated  now={progressionInfo.progressioninformatique} label={`${progressionInfo.progressioninformatique}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px" }} >Arabe</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar  striped variant="info" animated  now={progressionInfo.progressionarabe} label={`${progressionInfo.progressionarabe}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Francais</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated  now={progressionInfo.progressionfrancais} label={`${progressionInfo.progressionfrancais}%`} />
                </td>
              </tr>
              <tr>
                <td style={{fontFamily:'cursive',fontSize:'20px',borderRadius:"16px"}}>Anglais</td>
                <td style={{paddingTop:'1.2rem',borderRadius:"16px"}}>
                  <ProgressBar striped variant="info" animated  now={progressionInfo.progressionanglais} label={`${progressionInfo.progressionanglais}%`} />
                </td>
              </tr>
              {/* Ajoutez les autres matières si nécessaire */}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </section>
    </div>
  );
}

export default Parent;
