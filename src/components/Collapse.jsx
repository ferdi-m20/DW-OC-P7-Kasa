// Composant Collapse présent dans les pages about et apartment

// Importation du useState de notre bibliothèque React
import { useState } from "react";
// Importation de l'image flèche
import arrow from "../assets/arrow_down.svg";
// Importation du fichier style
import "../styles/Collapse.css";

/* Fonction Collapse qui reçoit les props "title" et "content" 
   permettant de créer un composant réutilisable pour les pages "about" et "apartment" */
function Collapse({ title, content }) {
  /* Le hook useState gère l'état de "toggle" de notre composant Collapse permettant de
     vérifier si la section est dépliéé ou non */
  const [toggle, setToggle] = useState(false);

  return (
    <div className="wrapper">
      <div className="accordion">
        {/* Au clic on va changer l'état de toggle avec setToggle */}
        <div
          onClick={() => setToggle(!toggle)}
          className="toggle-handler-container"
        >
          <div className="title-container">
            {/* La prop "title" est utlisé pour afficher le titre dans la balise <h2> */}
            <h2 className="title">{title}</h2>
            <span>
              {/* Si toggle = true => on applique la classe "active" pour la balise <img> qui change la flèche vers le haut 
                  sinon on applique la classe "inactive" qui garde la flèche vers le bas (état par défaut) */}
              {toggle ? (
                <img src={arrow} alt="fléche" className="active"></img>
              ) : (
                <img src={arrow} alt="fléche" className="inactive"></img>
              )}
            </span>
          </div>
          {/* Si toogle = true => on applique les classes "content" et "show" qui affiche le contenu
              sinon on applique que la classe "content" qui masque le contenu */}
          <div className={toggle ? `content show ` : `content `}>
            {/* La prop "content" est utilisé pour afficher le contenu dans la balise <p> */}
            <p className="content-paragraph">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
