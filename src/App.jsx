// Premier Composant qui est notre composant principal de l'application

// Importation du composant BrowserRouter de notre bibliothèque React Router afin de pouvoir utiliser le routage dans notre app
import { BrowserRouter } from "react-router-dom";
// Importation du module MyRoutes où la logique du routeur est réunie dans un seul fichier
import MyRoutes from "./Routes";

function App() {
  return (
    // BrowserRouter permet de manipuler l'historique du navigateur et ainsi changer les URL de navigation sans changer de page
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
