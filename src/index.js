import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// Créez un root ReactDOM pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Utilisez le mode strict de React pour des vérifications supplémentaires
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Rapport sur les performances de l'application Web
reportWebVitals();
