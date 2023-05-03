// Importation des hooks useEffect et useState de notre bibliothèque React
import { useEffect, useState } from "react";
// Importation du hook useParams et composant Navigate de notre bibliothèque React Router
import { useParams, Navigate } from "react-router-dom";
// Importation du fichier Json contenant les infos nécessaires pour notre page apartment et les composants Slideshow et Collapse
import apartments from "../data/apartmentsData.json";
// Importations des composants nécessaires pour la page apartment
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Collpase from "../components/Collapse";
import Footer from "../components/Footer";
// Importation de l'image étoile rouge et gris
import redStar from "../assets/red_star.svg";
import greyStar from "../assets/grey_star.svg";
// Importation du fichier style
import "../styles/pages/Apartment.css";

export default function ApartmentNotFound() {
  // On récupère l'id de l'appartement depuis les paramètres de l'url grâce au hook useParams
  const idApartment = useParams("id").id;
  /* On filtre le tableau apartments en comparant l'id récupéré de l'url avec l'id qui se trouve dans le tableau apartments
     Si les deux id se correspondent => on retourne uniquement les informations concerant l'id en question */
  const singleApartmentDetail = apartments.filter(
    (apartment) => apartment.id === idApartment
  );

  /* On vérifie si le tableau singleApartmentDetail contient un élément?
     Si ce n'est pas le cas on redirige l'utilisateur vers la route "/404" qui contient la page NotFound
     Si c'est le cas on appelle la fonction Apartment en passant singleApartmentDetail comme argument */
  if (singleApartmentDetail.length === 0) {
    return <Navigate to="/404" replace />;
  } else {
    return Apartment(singleApartmentDetail);
  }
}

export function Apartment(singleApartmentDetail) {
  // Le hook useState gère l'état de "imageSlider" du composant Slideshow, on initialise useState avec un array vide
  const [imageSlider, setImageSlider] = useState([]);
  /* Le hook useEffect définit l'état de "imageSlider" en utlisant la méthode setImageSlider()
     Ici, on récupère les images contenant dans le tableau singleApartmentDetail 
     puis on passe ces images comme arguments avec la méthode setImageSlider */
  useEffect(() => {
    setImageSlider(singleApartmentDetail[0].pictures);
  }, [singleApartmentDetail]);

  // On récupère les informations nécessaires de l'appartement concerné pour afficher ces détails dans notre page
  const name = singleApartmentDetail[0].host.name.split(" ");
  const rating = singleApartmentDetail[0].rating;
  const description = singleApartmentDetail[0].description;
  const equipments = singleApartmentDetail[0].equipments;

  return (
    <div className="apartment">
      <Header />
      {/* On passe l'état imageSlider à notre composant Slideshow via la propriété imageSlider */}
      <Slideshow imageSlider={imageSlider} />
      <main className="apartment-details-container">
        <div className="apartment-content">
          <div className="apartment-info">
            <h1>{singleApartmentDetail[0].title}</h1>
            <p>{singleApartmentDetail[0].location}</p>
            {/* On va parcourir singleApartmentDetail (qui contient une propriété tags avec un tableau) via la méthode map
                Cette méthode retourne un bouton avec sa valeur pour chaque élément tag */}
            <div>
              {singleApartmentDetail[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="host-content">
            <div>
              <div className="host-info">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                className="host-image"
                src={singleApartmentDetail[0].host.picture}
                alt="Hôte de l'appartement"
              />
            </div>
            <div className="host-rating">
              {/* Le constructeur Array renvoie un tableau dont la propriété length vaut 5 avec des éléments vides
                  On va parcourir ce tableau via la méthode map qui retourne le nombre d'étoile rouge ou gris 
                  pour la notation dans la balise <img> en respectant la condition imposée
                  Si ratingValue est <= rating on affiche une étoile rouge sinon on affiche une étoile grise  */}
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="étoile"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="collapse">
          {/* On définit les propriétés title et content en passant leurs valeurs "Description" et {description} 
          en tant que props dans notre composant Collapse */}
          <Collpase title="Description" content={description} />
          {/* On définit les propriétés title et content en passant leurs valeurs "Equipements" et {equipments} en tant que props
          On parcourt le tableau equipments avec la méthode map
          Cette méthode va retourner une balise <li> contenant l'équipement pour chaque élément (equipement) par rapport à son index  */}
          <Collpase
            title="Équipements"
            content={equipments.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
            })}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
