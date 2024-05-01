import React from 'react';
import { useParams } from 'react-router-dom';

export default function ListeMatieres() {
  const { niveau } = useParams();

  return (
    <div>
      <h1>Liste des matières pour le niveau {niveau}</h1>
      <ul>
        <li>Math</li>
        <li>Physique</li>
        <li>Technique</li>
      </ul>
    </div>
  );
}
