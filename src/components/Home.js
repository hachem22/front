import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './home.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer/Footer';
import { motion } from "framer-motion";
import { Navbar, Nav, Container } from 'react-bootstrap';


function Home() {
 

  const cartess = [
   
      { titre: "programme du 7 éme Anneé", Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/7éme.jpg") },
      { titre: "programme du 8 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/8éme.jpg") },
      { titre: "programme du 9 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/9éme.jpg") },
      { titre: "programme du 1 éme Anneé", Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/1ere.jpg") },
      { titre: "programme du 2 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/2éme.jpg") },
      { titre: "programme du 3 éme Anneé",Button:"voir contenue" , contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
      { titre: "programme du 4 éme Anneé", Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
      { titre: "programme du 4 éme Anneé", Button:"voir contenue", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
       // Ajoutez plus de données de cartes selon vos besoins
  ];
  const cartes = [
   
    { titre: "programme du 7 éme Anneé", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/7éme.jpg") },
    { titre: "programme du 8 éme Anneé", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/8éme.jpg") },
    { titre: "programme du 9 éme Anneé", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/9éme.jpg") },
    { titre: "programme du 1 éme Anneé",contenu: "Entree pour parcourir le contenu du programme", image: require("../image/1ere.jpg") },
    { titre: "programme du 2 éme Anneé", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/2éme.jpg") },
    { titre: "programme du 3 éme Anneé", contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    { titre: "programme du 4 éme Anneé",contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
    { titre: "programme du 4 éme Anneé",contenu: "Entree pour parcourir le contenu du programme", image: require("../image/3éme.jpg") },
     // Ajoutez plus de données de cartes selon vos besoins
];
const avis = [
   
  { titre: "programme du 7 éme Anneé", contenu: "Entree pour parcourir le contenu du programme" },
  { titre: "programme du 8 éme Anneé", contenu: "Entree pour parcourir le contenu du programme" },
  { titre: "programme du 9 éme Anneé", contenu: "Entree pour parcourir le contenu du programme" },
  { titre: "programme du 1 éme Anneé",contenu: "Entree pour parcourir le contenu du programme" },
  { titre: "programme du 2 éme Anneé", contenu: "Entree pour parcourir le contenu du programme" },
  { titre: "programme du 3 éme Anneé", contenu: "Entree pour parcourir le contenu du programme" },
  { titre: "programme du 4 éme Anneé",contenu: "Entree pour parcourir le contenu du programme" },
  { titre: "programme du 4 éme Anneé",contenu: "Entree pour parcourir le contenu du programme" },
   // Ajoutez plus de données de cartes selon vos besoins
];
 
  

  // Diviser les données de cartes en groupes de trois
  const groupesDeTroiss = [];
  for (let i = 0; i < cartess.length; i += 4) {
    groupesDeTroiss.push(cartess.slice(i, i + 4));
  }
  const groupesDeTrois = [];
  for (let i = 0; i < cartes.length; i += 4) {
    groupesDeTrois.push(cartes.slice(i, i + 4));
  }

  const groupesDeTroise = [];
  for (let i = 0; i < avis.length; i += 4) {
    groupesDeTroise.push(avis.slice(i, i + 4));
  }
 

 
    return (
      <div>
        <div>
        
        <Navbar  bg="light" data-bs-theme="light" style={{height:'70px', borderRadius:'15px'}}>
      <Container>
         <Navbar.Brand to="/">
           <Nav.Link as={Link} to="/" ><i style={{color:''}} className="fa-solid fa-graduation-cap"></i>Digital Tunisia
        </Nav.Link>
          </Navbar.Brand>
          </Container>
          <Container>
        <Nav className="me-auto">

          
          <Nav.Link  as={Link} to="/Cour"style={{marginRight:'3rem', marginLeft:'-5rem'}}><i className="fa-solid fa-laptop" ></i>Notre Contenu</Nav.Link>
        
         
        </Nav>
        <Nav>
          <Button style={{borderRadius:'18px', padding:'0.25rem',width:'12rem',height:'4rem',marginTop:'0.25rem'}} as={Link} to ="/Choix_compte" variant="outline-primary" className="me-2" ><i className="fa-solid fa-user-plus"> </i>
          <h4 style={{fontSize:'24px',padding:'0.15'}} className="me-2"> S'inscrire</h4>
          </Button>
          <Button style={{borderRadius:'18px', padding:'0.25rem',width:'12rem',height:'4rem',marginTop:'0.25rem'}} as={Link} to ="/choix_Login" variant="primary" className="me-2"><i className="fa-solid fa-right-to-bracket"> </i>
          <h4 style={{fontSize:'24px',padding:'0.15'}} className="me-2"> Se connecter</h4>
          </Button>
        </Nav>
      </Container>
    </Navbar>
        </div>
      <section>
      
      <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Image style={{marginTop:'-2rem', width:'100%'}}src={require("../image/image (3).jpg")}  alt=" Card image" />
            <Card.ImgOverlay>
                <div className="login-page-mobile-img">
                    <img src={require("../image/17.png")} style={{ width: '37rem', height: '45rem',marginTop:'2rem', marginLeft:'2rem'}}alt="Mobile" />
                </div>
                <Card.Title style={{ marginTop:'-38rem',fontSize:'57px',marginLeft:'47rem' , fontFamily:'inherit'}} >Étudiez dur, travaillez intelligemment</Card.Title>
                <Card.Text  style={{ marginTop:'2rem',fontSize:'25px' , backgroundColor:'LemonChiffon',width:'38rem',borderRadius:'4px',marginLeft:'48rem', color:'black', height:'4rem', fontFamily:'cursive',paddingTop:'0.75rem'}}>
                    Chemin de défi et d'excellence éducatif en ligne
                </Card.Text>
                <Card.Text  style={{ marginTop:'2rem',fontSize:'22px' ,width:'29rem',borderRadius:'4px',marginLeft:'50rem', color:'black', height:'2.4rem'}}>
                    Bénéficiez dès maintenant de cours de soutien en ligne dans toutes les matières et à différents niveaux (primaire et secondaire), de la septième année du primaire au baccalauréat.
                </Card.Text>
                <Button  variant="outline-info" as={Link} to ="/choix_Login" style={{ borderRadius:'30px' , marginTop:'8rem',marginLeft:'52rem',fontSize:'22px',padding:'1.25rem'}}>Commencer</Button>     
            </Card.ImgOverlay>
        </motion.section>
      
      </section>
      <section>
    <h4 style={{marginTop:'4rem', marginLeft:' 40rem', fontFamily:'cursive'}}>Qu'est-ce que l'é-learning ?</h4>
    <Image className="image-rotation"  style={{width:'200px' , height:'150px' , marginLeft:'56rem'}} src={require("../image/3.png")}  alt=" Card image" />
    <Image className="image-rotationn"  style={{width:'200px' , height:'150px' , marginLeft:'30rem', marginTop:'-11rem'}} src={require("../image/4.png")}  alt=" Card image" />

    <div style={{position: 'relative', width: '640px', height: '360px', marginLeft:'30rem', marginTop:'6rem', borderRadius:'20px', overflow: 'hidden'}}>
        <video width="100%" height="100%" controls autoPlay loop muted style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => e.target.pause()}>
            <source src={require("../image/e-learning.mp4")} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de la vidéo.
        </video>
        <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{color: 'white', fontSize: '24px'}}></p>
        </div>
    </div>
</section>

      <section style={{backgroundColor:'AliceBlue', borderRadius:'14px' ,border: '2px dashed black' , marginTop:'8rem'}}>
        
        <center ><h4 style={{marginTop:'3rem', marginLeft:'2rem', fontSize:'30px', color:'Navy', marginBottom:'2rem', fontFamily:'cursive'}}> Programme Courses</h4></center>
        <center ><h4 style={{marginTop:'2rem', marginLeft:'-78rem', fontSize:'25px', color:'DeepSkyBlue', marginBottom:'1rem'}}> Niveau de base </h4></center>

    <Carousel>
      {groupesDeTroiss.map((groupe, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-between">
            {groupe.map((carte, idx) => (
              <Card key={idx} style={{ width:'40rem', height:'25rem', marginLeft:'1rem', marginRight:'1rem', marginTop:'2rem',borderRadius:'14px'}}>
                <Card.Img variant="top" style={{ width: '21.6rem', height:'15rem',borderRadius:'14px'}} src={carte.image} />
                <Card.Body>
                  <Card.Title style={{color:'DeepSkyBlue'}}>{carte.titre}</Card.Title>
                  <Card.Text style={{color:'MidnightBlue'}}>{carte.contenu}</Card.Text>
                  <Button  style={{ borderRadius:'14px',backgroundColor:'#38B6FF',}} variant="primary">{carte.Button}</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

    <center ><h6 style={{marginTop:'3rem', marginLeft:'-78rem', fontSize:'25px', color:'DeepSkyBlue', marginBottom:'-5rem'}}> Niveau secondaire </h6></center>

        <div style={{height:'100px',width:'100%'}}>
        <center ><h4 style={{ fontSize:'30px',padding:'1.5rem'}}> </h4></center>
        </div>
        <Carousel style={{paddingBottom:'2rem'}}>
      {groupesDeTroiss.map((groupe, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-between">
            {groupe.map((carte, idx) => (
              <Card key={idx} style={{ width:'40rem', height:'25rem', marginLeft:'1rem', marginRight:'1rem', marginTop:'2rem',borderRadius:'14px'}}>
                <Card.Img variant="top" style={{ width: '21.6rem', height:'15rem',borderRadius:'14px'}} src={carte.image} />
                <Card.Body>
                  <Card.Title style={{color:'DeepSkyBlue'}}>{carte.titre}</Card.Title>
                  <Card.Text style={{color:'MidnightBlue'}}>{carte.contenu}</Card.Text>
                  <Button  style={{ borderRadius:'14px',backgroundColor:'#38B6FF',}} variant="primary">{carte.Button}</Button>

                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </section>
    <section style={{height:'20px', backgroundColor:'white', borderRadius:'60%'}}>

    </section>
    <section style={{ background: 'AliceBlue', borderRadius: '14px', padding: '4rem', border: '2px dashed black' }}>
    <h4 style={{ marginLeft:' 27rem', fontFamily:'cursive',marginBottom:'4rem',color:'Navy',fontSize:'35px'}}>Statistique générale en chiffres</h4>

  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
    {/* Première carte: Nombre d'enseignants */}
    <div style={{ background: 'white', borderRadius: '10px', padding: '1rem', marginBottom: '2rem', width: '45%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', display: 'flex', alignItems: 'center' }}>
      <Image src={require("../image/enseignant.png")} alt="Photo de l'enseignant" style={{ width: '80px', height: '80px', marginRight: '1rem' }} />
      <div>
        <h4 style={{ fontSize: '20px', marginBottom: '1rem' }}>Nombre d'enseignants</h4>
        {/* Ajoutez le contenu ici, par exemple: */}
        <p style={{color:"DeepSkyBlue",fontSize:'25px'}}> + 50 enseignants</p>
      </div>
    </div>

    {/* Deuxième carte: Nombre de cours */}
    <div style={{ background: 'white', borderRadius: '10px', padding: '1rem', marginBottom: '2rem', width: '45%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', display: 'flex', alignItems: 'center' }}>
      <Image src={require("../image/programme.png")}  alt="Photo de l'enseignant" style={{ width: '80px', height: '80px', marginRight: '1rem' }} />
      <div>
        <h4 style={{ fontSize: '20px', marginBottom: '1rem' }}>Nombre de cours</h4>
        {/* Ajoutez le contenu ici, par exemple: */}
        <p style={{color:"DeepSkyBlue",fontSize:'25px'}}> + 500 cours </p>
      </div>
    </div>

    {/* Troisième carte: Nombre d'apprenants */}
    <div style={{ background: 'white', borderRadius: '10px', padding: '1rem', marginBottom: '2rem', width: '45%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', display: 'flex', alignItems: 'center' }}>
      <Image src={require("../image/eleve.png")} alt="Photo de l'enseignant" style={{ width: '80px', height: '80px', marginRight: '1rem' }} />
      <div>
        <h4 style={{ fontSize: '20px', marginBottom: '1rem' }}>élèves inscrits sur le site</h4>
        {/* Ajoutez le contenu ici, par exemple: */}
        <p style={{color:"DeepSkyBlue",fontSize:'25px'}}> + 200 eleves</p>
      </div>
    </div>

    {/* Quatrième carte: Nombre de parents */}
    <div style={{ background: 'white', borderRadius: '10px', padding: '1rem', marginBottom: '2rem', width: '45%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', display: 'flex', alignItems: 'center' }}>
      <Image src={require("../image/courvideo.png")} alt="Photo de l'enseignant" style={{ width: '80px', height: '80px', marginRight: '1rem' }} />
      <div>
        <h4 style={{ fontSize: '20px', marginBottom: '1rem' }}>Vidéo dans toutes les matières</h4>
        {/* Ajoutez le contenu ici, par exemple: */}
        <p style={{color:"DeepSkyBlue",fontSize:'25px'}}> + 300 videos</p>
      </div>
    </div>
  </div>
</section>


    <section style={{height:'20px', backgroundColor:'white', borderRadius:'60%'}}>

    </section>
    <section style={{background:'AliceBlue',borderRadius:'14px',padding:'4rem',border: '2px dashed black'}}>
    <div style={{background:'AliceBlue',height:'100px',width:'100%'}}>
        <h4 style={{ fontSize:'30px',padding:'1.5rem'}}> </h4>
        </div>
        <div style={{  borderRadius:'50%',height:'8rem',width:'50rem',marginLeft:'20rem',border:''}}>
        <center ><h4 style={{marginTop:'-5rem', marginLeft:'2rem', fontSize:'30px', color:'Navy', marginBottom:'4rem', fontFamily:'cursive',padding:'3rem'}}> Opinions et expériences de nos étudiants</h4></center>
        </div>
    <Carousel style={{}}>
      {groupesDeTroiss.map((groupe, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-between">
            {groupe.map((carte, idx) => (
              <Card key={idx} style={{ width:'40rem', height:'15rem', marginLeft:'1rem', marginRight:'1rem', marginTop:'2rem',borderRadius:'14px'}}>
                <Card.Body>
                  <Card.Title style={{color:'DeepSkyBlue'}}>{carte.titre}</Card.Title>
                  <Card.Text style={{color:'MidnightBlue'}}>{carte.contenu}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>



    </section>
      <section>
      <Footer/>
      </section>
      
      </div>
    );
  }
export default Home
