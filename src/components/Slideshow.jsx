// Composant Slideshow présent dans la page apartment

// Importation du hook useState de notre bibliothèque React
import { useState } from "react";
// Importation des images flèches
import arrowRight from "../assets/right_arrow.svg";
import arrowLeft from "../assets/left_arrow.svg";
// Importation du fichier style
import "../styles/components/Slideshow.css";

// La fonction Slideshow prend en props un tableau d'images venant de la page apartment
function Slideshow({ imageSlider }) {
  /* Le hook useState gère l'état de "currentIndex" de notre composant Slideshow
     On définit l'index du premier slide à 0
     L'état "currentIndex" va permettre de savoir l'index de l'image acutellement affichée dans le Slideshow */
  const [currentIndex, setCurrentIndex] = useState(0);

  // Création de deux fonctions nextSlide() et prevSlide permettant la navigation entre les images

  /* Fonction nextSlide() incrémente l'index de l'état "currentIndex" 
     puis on vérifie si "currentIndex" est égal au nombre d'éléments présents dans le tableau imageSlider - 1
     si c'est le cas on met l'index de "currentIndex" à 0 */
  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };

  /* Fonction prevSlide() décrémente l'index de l'état "currentIndex" 
     puis on vérifie si "currentIndex" est égal à 0 
     si c'est le cas on met l'index de "currentIndex" au nombre d'éléments présents dans le tableau imageSlider - 1 */
  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  return (
    /* On affiche l'image actuelle en fonction de l'index de l'état "currentIndex" 
       à l'aide de l'attribut style qui utilise la propriété backgroundImage.
       Si le nombre d'éléments (images) présents dans le tableau imageSlider est supérieur à 1,
       On affiche les flèches droite et gauche sur le Slideshow avec le compteur d'images, 
       Sinon on affiche uniquement la seule image du tableau imageSlide sans les flechès ni le compteur */
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="slideshow"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            className="slideshow-arrow-right"
            src={arrowRight}
            alt="Slider suivant"
            // Au clic, on déclenche la fonction nextSlide() qui affiche l'image suivante
            onClick={nextSlide}
          />
          <img
            className="slideshow-arrow-left"
            src={arrowLeft}
            alt="Slider précédent"
            // Au clic, on déclenche la fonction prevSlide() qui affiche l'image précédente
            onClick={prevSlide}
          />
          <p className="slideshow-counter">
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </section>
  );
}

export default Slideshow;
