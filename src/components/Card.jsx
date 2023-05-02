// Composant Card présent dans la page home

// Importation du fichier Json contenant les infos nécessaires pour notre composant Card qui se trouve dans la page home
import apartments from "../data/apartmentsData.json";
// Importation du composant Link de notre bibliothèque React Router
import { Link } from "react-router-dom";
// Importation du fichier style
import "../styles/components/Card.css";

function Card() {
  return (
    <section className="cards">
      {/* Notre Json apartments contient un array qu'on va parcourir via la méthode map
          Cette méthode va retourner un lien (une balise <a>) pour chaque index en récupérant les propriétés id, title et cover 
          On définit l'url de la page apartment en passant l'id de l'apartment concerné par rapport à son index
          Les props title et cover sont utilisés dans les balises <img> et <p> pour afficher dans notre composant Card */}
      {apartments.map((apartment) => (
        <Link to={`/apartment/${apartment.id}`} key={apartment.id}>
          <article className="card-thumbnail">
            <img
              src={apartment.cover}
              alt={apartment.title}
              className="card-image"
            ></img>
            <p className="card-text">{apartment.title}</p>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Card;
