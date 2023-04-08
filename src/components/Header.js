import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_header.svg";

const header = () => {
  return (
    <div className="header">
      <header>
        <div>
          <img src={Logo} alt="Kasa, location d'appartement"></img>
        </div>
        <nav className="navBar">
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
};

export default header;
