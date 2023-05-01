// Composant Header présent dans toutes les pages

// Importation du composant NavLink de notre bibliothèque React Router
import { NavLink } from "react-router-dom";
// Importation du logo Kasa
import logoHeader from "../assets/logo_header.svg";
// Importation du fichier style
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <header>
        <div>
          <img src={logoHeader} alt="Kasa, location d'appartement" />
        </div>
        <nav className="navbar">
          <ul>
            <li>
              {/* Composant NavLink créé un lien qui permet de naviguer vers la page "home" */}
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li>
              {/* Composant NavLink créé un lien qui permet de naviguer vers la page "about" */}
              <NavLink to={"/about"}>A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
