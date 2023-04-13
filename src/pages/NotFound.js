import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <Header />
      <div className="not-found-info">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-paragraph">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="not-found-link" to="/">
          Retourner sur la page d'accueil
        </Link>
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
