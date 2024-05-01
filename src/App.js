import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar.js';

import './App.css';
import {Toaster} from 'react-hot-toast';
import Home from './components/Home.js';
import Cour from './components/Cour.js';
import Register_eleve from './components/Register_eleve.js';
import Register_parent from './components/Register_parent.js';
import motoublier from './components/motoubliereleve.js'
import Choix_compte from './components/Choix_compte.js';
import Login_parent from   './components/Login_parent.js';
import Login_eleve from   './components/Login_eleve.js';
import choix_Login from './components/choix_Login.js';
import Eleve from './components/Eleve/Eleve.js';
import Parent from './components/Parent/Parent.js';
import Footer from './components/Footer/Footer.js';
import MessengerIcon from './components/MessengerIcon.js';
import MyCourse from './components/MyCourse.js';
import Login_Enseignant from './components/Login_Enseignant.js';
import Enseignant from './components/Enseignant/Enseignant.js';
import AddCours from './components/Enseignant/AddCours.js';
import Register_Enseignant from './components/Enseignant/Register_Enseignant.js';
import ListeNiveaux from './components/ListeNiveaux.js';
import ListeMatieres from  './components/ListeMatieres';
import ListePlaylist from './components/ListePlaylist.js';
import septiéme_physique from './components/cours/7éme/septiéme_physique.js';
import septiéme_math from './components/cours/7éme/septiéme_math.js';
import septiéme_technique from './components/cours/7éme/septiéme_technique.js';
import septiéme_informatique from './components/cours/7éme/septiéme_informatique.js';
import septiéme_francais from './components/cours/7éme/septiéme_francais.js';
import septiéme_anglais from './components/cours/7éme/septiéme_anglais.js';
import septiéme_arabe from './components/cours/7éme/septiéme_arabe.js';
import huitiéme from './components/cours/8éme/huitiéme.js';
import huitiéme_math from './components/cours/8éme/huitiéme_math.js';
import huitiéme_physique from './components/cours/8éme/huitiéme_physique.js';
import huitiéme_technique from './components/cours/8éme/huitiéme_technique.js';
import huitiéme_francais from './components/cours/8éme/huitiéme_francais.js';
import huitiéme_arabe from './components/cours/8éme/huitiéme_arabe.js';
import huitiéme_anglais from './components/cours/8éme/huitiéme_anglais.js';
import huitiéme_informatique from './components/cours/8éme/huitiéme_informatique.js';
import neuviéme from "./components/cours/9éme/neuvième.js";
import neuvième_anglais from "./components/cours/9éme/neuvième_anglais.js";
import neuvième_arabe from "./components/cours/9éme/neuvième_arabe.js";
import neuvième_francais from "./components/cours/9éme/neuvième_francais.js";
import neuvième_informatique from "./components/cours/9éme/neuvième_informatique.js";
import neuvième_math from "./components/cours/9éme/neuvième_math.js";
import neuvième_technique from "./components/cours/9éme/neuvième_technique.js";
import neuvième_physique from "./components/cours/9éme/neuvième_physique.js";
import transforme from "./components/Enseignant/transforme.js";
import courpdf from "./components/Enseignant/courpdf.js";
import UpdateProfilePage from "./components/Eleve/updateeleve.js";
import Admin from './components/Admin/Admin.js';
import gerercours from './components/Admin/gerercours.js';
import ModifierCours from './components/Admin/modifiercour.js';
import GererEleves from './components/Admin/gerereleves.js';
import moudifier_pawwsord_eleve from './components/moudifier_pawwsord_eleve.js';
import UpdateParent from './components/updateparent.js';
import GererParent from './components/Admin/gererparent.js';
import sept_math from './components/Enseignant/courlist/niveau7/sept_math.js';
import sept_phy from './components/Enseignant/courlist/niveau7/sept_phy.js';
import Navbarsept from './components/cours/7éme/navbarsept.js';
import huit_math from './components/Enseignant/courlist/niveau8/huit_math.js';
import GererEnseignants from './components/Admin/gererenseignant.js';
import update_enseignant from './components/Enseignant/update_enseignant.js';
import exercicecorriger from './components/Eleve/exercicescorriger.js';
import bibliothèque from './components/Eleve/bibliothèque.js';
import RegisterAdmin from './components/Admin/RegisterAdmin.js';
import LoginAdmin from './components/Admin/LoginAdmin.js';
import ListeCour from './components/ListeCours.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
      <Router>
        <div>
          <Toaster position='top-center'toastOptions={{duration: 5000}} />
          <div className="content">
        <Routes>
           <Route path="/" element={<Home/>} />
          <Route path="/Cour" element={<Cour/>} />
          <Route path="/CustomNavbar" element={<CustomNavbar/>} />
          <Route path="/MessengerIcon" Component={MessengerIcon} />

          <Route path="/Register_eleve" Component={Register_eleve} />
          <Route path="/Register_parent" Component={Register_parent} />
          <Route path="/Register_Enseignant" Component={Register_Enseignant} />
          <Route path="/motoublier" Component={motoublier} />
          <Route path="/Choix_compte" Component={Choix_compte} />
          <Route path="/Login_parent" Component={Login_parent} />
          <Route path="/Login_eleve" Component={Login_eleve} />
          <Route path="/Login_Enseignant" Component={Login_Enseignant} />
          <Route path="/choix_Login" Component={choix_Login} />
          <Route path="/Eleve" Component={Eleve} />
          <Route path="/Parent" Component={Parent} />
          <Route path="/Footer" Component={Footer} />
          <Route path="/Enseignant" Component={Enseignant} />
          <Route path="/AddCours" Component={AddCours} />
          <Route path="/MyCourse" Component={MyCourse} />
          <Route path="/ListeNiveaux" Component={ListeNiveaux} />
          <Route path="/ListeMatieres" Component={ListeMatieres} />
          <Route path="/ListePlaylist" Component={ListePlaylist} />
          <Route path="/septiéme_physique" Component={septiéme_physique}/>
          <Route path="/septiéme_math" Component={septiéme_math}/>
          <Route path="/septiéme_technique" Component={septiéme_technique}/>
          <Route path="/septiéme_informatique" Component={septiéme_informatique}/>
          <Route path="/septiéme_francais" Component={septiéme_francais}/>
          <Route path="/septiéme_anglais" Component={septiéme_anglais}/>
          <Route path="/septiéme_arabe" Component={septiéme_arabe}/>
          <Route path="/huitiéme" Component={huitiéme}/>
          <Route path="/huitiéme_math" Component={huitiéme_math}/>
          <Route path="/huitiéme_physique" Component={huitiéme_physique}/>
          <Route path="/huitiéme_technique" Component={huitiéme_technique}/>
          <Route path="/huitiéme_francais" Component={huitiéme_francais}/>
          <Route path="/huitiéme_arabe" Component={huitiéme_arabe}/>
          <Route path="/huitiéme_anglais" Component={huitiéme_anglais}/>
          <Route path="/huitiéme_informatique" Component={huitiéme_informatique}/>
          <Route path="/neuviéme" Component={neuviéme}/>
          <Route path="/neuvième_arabe" Component={neuvième_arabe}/>
          <Route path="/neuvième_francais" Component={neuvième_francais}/>
          <Route path="/neuvième_math" Component={neuvième_math}/>
          <Route path="/neuvième_informatique" Component={neuvième_informatique}/>
          <Route path="/neuvième_anglais" Component={neuvième_anglais}/>
          <Route path="/neuvième_technique" Component={neuvième_technique}/>
          <Route path="/neuvième_physique" Component={neuvième_physique}/>
          <Route path="/transforme" Component={transforme}/>
          <Route path="/courpdf" Component={courpdf}/>
          <Route path="/UpdateProfilePage" Component={UpdateProfilePage}/>
          <Route path="/gerercours" Component={gerercours}/>
          <Route path="/Admin" Component={Admin}/>
          <Route path="/ModifierCours" Component={ModifierCours}/>
          <Route path="/GererEleves" Component={GererEleves}/>
          <Route path="/moudifier_pawwsord_eleve" Component={moudifier_pawwsord_eleve}/>
          <Route path="/UpdateParent" Component={UpdateParent}/>
          <Route path="/GererParent" Component={GererParent}/>
          <Route path="/sept_math" Component={sept_math}/>
          <Route path="/sept_phy" Component={sept_phy}/>
          <Route path="/Navbarsept" element={<Navbarsept/>}/>
          <Route path="/huit_math" Component={huit_math}/>
          <Route path="/update_enseignant" Component={update_enseignant}/>

          <Route path="/GererEnseignants" Component={GererEnseignants}/>
          <Route path="/exercicecorriger" Component={exercicecorriger}/>
          <Route path="/bibliothèque" Component={bibliothèque}/>
          <Route path="/RegisterAdmin" Component={RegisterAdmin}/>
          <Route path="/LoginAdmin" Component={LoginAdmin}/>
          <Route path="/ListeCour" Component={ListeCour}/>

          
          
        </Routes>
        </div>
        </div>
      </Router>
  );
}

export default App;
