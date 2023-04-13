import { Link } from "react-router-dom";
import logoHeader from "../assets/logo_header.svg";

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
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/about"}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
