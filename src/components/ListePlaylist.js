import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ListePlaylist() {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    async function fetchCours() {
      try {
        const response = await fetch('http://localhost:3000/allCours');
        const data = await response.json();
        setCours(data.cours);
      } catch (error) {
        console.error('Erreur lors de la récupération des cours :', error);
      }
    }

    fetchCours();
  }, []);

  return (
    <Container fluid>
      <h1>Playlist des Cours</h1>
      {cours.map(cours => (
        <Card key={cours.id} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Body>
            <Card.Title>{cours.titre}</Card.Title>
            <Card.Text>{cours.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><a href={cours.lien}>Voir le cours</a></ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </Container>
  );
}
