import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Apartment from "./pages/Apartment";
// import NotFound from "./pages/NotFound";

const myRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/apartment/:id" element={<Apartment />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default myRoutes;
