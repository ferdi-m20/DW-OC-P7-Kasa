// Fichier contenant la logique de toutes les routes nécessaires pour le fonctionnement de notre application

// Importation des composants Routes, Route et Navigate de notre bibliothèque React Router
import { Routes, Route, Navigate } from "react-router-dom";
// Importation des différentes pages qui comportent nos composants pour l'affichage complet de notre application
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import NotFound from "./pages/NotFound";

// On crée nos différents routes pour chaque page grâce aux composants Routes et Route
// La fonction myRoutes contient toutes ces routes pour la navigation de notre application
function myRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartment/:id" element={<Apartment />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<NotFound />} />
      {/* Pour chaque route inexistante on redirige vers la route "/404" qui contient la page 404 */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default myRoutes;
