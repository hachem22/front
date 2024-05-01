import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Login.css'; // Importer les styles CSS pour le design

function ModifierMotDePasse() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            toast.error('Veuillez remplir tous les champs');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Les mots de passe ne correspondent pas');
            return;
        }

        try {
            const response = await axios.put(`http://localhost:3000/updatePasswordByEmail/${email}`, {
                password: password
            });

            alert(response.data); // Affiche le message de succès ou d'erreur
            window.location.href = '/Login_eleve'; // Redirige vers la page de connexion si la modification est réussie
        } catch (error) {
            console.error('Erreur lors de la modification du mot de passe :', error);
            alert('Une erreur s\'est produite lors de la modification du mot de passe');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="login-page-mobile-img">
                <img src={require("../image/bg.png")} style={{ width: '35rem', height: '45rem', marginLeft:'2rem' ,marginTop:'-3rem'}} alt="Mobile" />
            </div>            
             <div style={{ width: '30rem', height: '30rem', marginLeft: '20rem', marginTop:'-3rem '}} className="login-form-container">
                    <h2>Modifier le mot de passe</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email :</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Nouveau mot de passe :</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Confirmer le nouveau mot de passe :</label>
                            <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button style={{width:'30rem', marginTop:'1rem'}} type="submit" className="btn btn-primary">Modifier</button><br/>
                        <Link style={{width:'30rem', marginTop:'1rem'}} to="/Login_eleve" className="btn btn-outline-primary">Annuler</Link>
                    </form>
                </div>
            </div>
        
    );
}

export default ModifierMotDePasse;
