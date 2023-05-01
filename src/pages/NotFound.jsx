// Importation du composant NavLink de notre bibliothèque React Router
import { NavLink } from "react-router-dom";
// Importation des composants nécessaires pour la page 404
import Header from "../components/Header";
import Footer from "../components/Footer";
// Importation du fichier style
import "../styles/NotFound.css";

// Fonction NotFound renvoie toutes les composants englobés dans un div
function NotFound() {
  return (
    <div className="not-found">
      <Header />
      <div className="not-found-info">
        <h1 className="not-found-title">404</h1>
        <div className="not-found-container">
          <p className="not-found-paragraph">Oups! La page que&nbsp;</p>
          <p className="not-found-paragraph">vous demandez n'existe pas.</p>
        </div>
        <NavLink className="not-found-link" to="/">
          Retourner sur la page d'accueil
        </NavLink>
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
