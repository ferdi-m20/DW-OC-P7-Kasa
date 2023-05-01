// Composant Banner présent dans les pages home et about

// Importation des hooks useEffect et useState de notre bibliothèque React
import { useEffect, useState } from "react";
// Importation du hook useLocation de notre bibliothèque React
import { useLocation } from "react-router-dom";
// Importation du fichier style
import "../styles/Banner.css";

function Banner() {
  // Le hook useState gère l'état de "aboutPage" de notre composant Banner
  const [aboutPage, setAboutPage] = useState(false);
  // Le hook useLocation récupère la route actuelle sur laquelle est l'utilisateur
  const location = useLocation();
  /*  Le hook useEffect définit l'état de "aboutPage" en utlisant la méthode setAboutPage() 
      en fonction de la route actuelle sur laquelle est l'utilisateur */
  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
  }, [location.pathname]);

  return (
    // Si aboutPage = true => on applique la classe about-banner sinon home-banner
    <section className={aboutPage ? "about-banner" : "home-banner"}>
      {/* Si aboutPage = false => on retourne le div contenant la classe home-banner-title */}
      {!aboutPage && (
        <div className="home-banner-title">
          <div>Chez vous,</div>
          <div>partout et ailleurs</div>
        </div>
      )}
    </section>
  );
}

export default Banner;
