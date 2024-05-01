import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function ModifierCours() {
    const { id } = useParams();
    const [cours, setCours] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCours = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getCoursById/${id}`);
                setCours(response.data.cours);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération du cours : ', error);
            }
        };
        
        fetchCours(); // Inclure fetchCours dans le tableau des dépendances résout le problème

    }, [id]); // Inclure id dans le tableau des dépendances pour déclencher useEffect lorsque id change

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCours(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/updateCours/${id}`, cours);
            console.log('Cours modifié avec succès !');
            // Rediriger vers la page précédente ou la page de liste des cours
        } catch (error) {
            console.error('Erreur lors de la modification du cours : ', error);
        }
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <h1>Modifier le cours</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="titre">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control type="text" name="titre" value={cours.titre} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="niveau">
                    <Form.Label>Niveau</Form.Label>
                    <Form.Control type="text" name="niveau" value={cours.niveau} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="matiere">
                    <Form.Label>Matière</Form.Label>
                    <Form.Control type="text" name="matiere" value={cours.matiere} onChange={handleChange} />
                </Form.Group>
                {/* Ajoutez d'autres champs selon les besoins */}
                <Button variant="primary" type="submit">Modifier</Button>
            </Form>
        </div>
    );
}

export default ModifierCours;
