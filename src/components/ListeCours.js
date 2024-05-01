import React from 'react';
import axios from 'axios';

function ListeCour() {
  // Fonction pour télécharger un fichier PDF
  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:3000/cour_pdf/${filename}`, {
        responseType: 'blob', // Indique que la réponse est un blob (fichier)
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier PDF :', error);
    }
  };

  // Fonction pour ouvrir un fichier PDF dans le navigateur
  const handleOpenInBrowser = (filename) => {
    window.open(`http://localhost:3000/cour_pdf/${filename}`, '_blank');
  };

  // Liste des cours avec leurs liens de téléchargement et d'ouverture dans le navigateur
  return (
    <div>
      <h1>Liste Des Cours</h1>
      <div>
        <p>Niveau: 7éme</p>
        <p>Matière: Physique</p>
        <button onClick={() => handleDownload('cours_physique.pdf')}>Télécharger Le PDF</button>
        <button onClick={() => handleOpenInBrowser('cours_physique.pdf')}>Ouvrir dans le navigateur</button>
      </div>
      {/* Ajoutez d'autres cours avec leurs liens de téléchargement et d'ouverture ici */}
    </div>
  );
}

export default ListeCour;
