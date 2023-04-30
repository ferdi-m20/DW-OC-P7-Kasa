import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import NotFound from "./pages/NotFound";

const myRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartment/:id" element={<Apartment />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default myRoutes;
