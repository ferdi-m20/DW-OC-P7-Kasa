// Importation du fichier Json contenant les infos nécessaires pour la page About
import principles from "../data/aboutData.json";
// Importation des composants nécéssaires pour la page About
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collpase from "../components/Collapse";
import Footer from "../components/Footer";

// Fonction About renvoie toutes les composants englobés dans un div
function About() {
  return (
    <div className="about">
      <Header />
      <Banner />
      {/* Notre Json principles contient un array qu'on va parcourir via la méthode map
          Cette méthode va retourner notre Composant Collpase pour chaque élément en récupérant les propriétés title et content 
          et en passant leurs valeurs en tant que props dans notre composant Collapse */}
      {principles.map((principle, index) => (
        <Collpase
          key={index}
          title={principle.title}
          content={principle.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default About;
