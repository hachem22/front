import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'; 


const Transforme = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', videoFile);
        formData.append('upload_preset', 'videos');
    
        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/ddaouadrk/upload', formData, {
                onUploadProgress: progressEvent => {
                    const percentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                    setUploadPercentage(percentage);
                }
            });
    
            const newVideoUrl = response.data.secure_url;
            setVideoUrl(newVideoUrl);
            console.log('URL de la vidéo sur Cloudinary :', newVideoUrl);
        } catch (error) {
            console.error('Erreur lors de l\'upload vers Cloudinary :', error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(videoUrl);
        toast.success('Lien copié !');
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
          <Nav className="me-auto" style={{marginLeft:'-7rem'}}>
            <Nav.Link as={Link} style={{marginLeft:'-10rem'}} to="/Enseignant"><i className="fa-solid fa-house"></i>Home</Nav.Link>
            <Button style={{borderRadius:'14px', marginLeft:'3rem',paddingTop:'0.5rem',width:'200px' ,height:'60px', marginTop:'0.16rem'}} as={Link} to ="/AddCours" variant="outline-primary" className="me-2" > Ajouter les Cours videos  </Button>
            <Button style={{borderRadius:'14px', marginLeft:'1rem',paddingTop:'1rem',width:'200px' ,height:'60px', marginTop:'0.16rem'}} as={Link} to ="/courpdf" variant="outline-primary" className="me-2" > Ajouter les cours pdf </Button>


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
    </div>
        <div style={{backgroundColor:'LightBlue',marginTop:'-1.5rem',height:'100%',width:'100%'}}>
        <h5 style={{marginLeft:'32rem',marginRight:'29rem',paddingTop:'4rem'}}>transformer le video de mp4 vers  URL et utiliser cette URL qui donne a cette page pour  <Link style={{textDecoration: 'none',fontSize:'17px'}} to="/AddCours">ajouter le cour  </Link></h5>

<div style={{ display: 'flex', alignItems: 'center' }}>
<div  style={{ width: '40rem', height: '32rem', border: '2px dashed black', marginBottom: '4rem', marginLeft: '30rem', marginTop: '1rem', backgroundColor: 'LightYellow', padding: '2rem', borderRadius: '18px' }}>
                <label style={{marginTop:'2rem',marginLeft:'8rem'}}>Choisir votre vidéo à transformer en URL :</label><br/>
                <input style={{marginLeft:'5rem',width:'30rem',marginTop:'1rem'}}type='file' onChange={(e) => setVideoFile(e.target.files[0])} className='form-control' accept=".mp4" /><br/>
                <br/>
                <button style={{marginLeft:'15rem',padding:'1rem',borderRadius:'15px',backgroundColor:'skyblue', marginTop:'-1rem'}}onClick={handleUpload}>Upload</button>
                {/* Afficher la barre de progression */}
                {uploadPercentage > 0 && <div style={{marginTop: '1rem'}}>Progression : {uploadPercentage}%</div>}
                {/* Afficher l'URL de la vidéo */}
                <h6 style={{marginTop:'4rem',marginBottom:'4rem', marginLeft:'1rem',fontSize:'12px'}}>voici l'URL :  {videoUrl}</h6>
                {/* Afficher le bouton "Copier" lorsque l'URL est disponible */}
                {videoUrl && <button style={{marginLeft:'1rem',marginBottom:'1rem',marginRight:'-2rem',padding:'0.25rem',borderRadius:'14px'}} onClick={copyToClipboard}>Copier</button>}
                <Button style={{marginTop:'2rem',marginLeft:'10rem'}} as={Link} to ="/AddCours" variant="outline-primary" className="me-2" > Ajouter les Cours videos  </Button>

            </div>
            </div>
            </div>
        </div>
    );
}
export default Transforme;