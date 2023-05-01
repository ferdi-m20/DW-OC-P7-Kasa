// Importation des composants nécessaires pour la page Home
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Fonction Home renvoie toutes les composants englobés dans un div
function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
