// Fichier d'entrée qui permet d'initialiser notre app React

// Importation des bibliothèques et modules nécessaires pour le fonctionnement du site
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importation du fichier style
import "./styles/index.css";

// Création de la racine de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* StrictMode permet de détecter les problèmes potentiels d'une application. 
  Il active des vérifications et avertissements supplémentaires pour ses descendants durant le développement */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
