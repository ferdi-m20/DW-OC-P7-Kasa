import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({ id, title, cover }) {
  return (
    <Link to={`/apartment/${id}`} className="card-link">
      <img className="card-link-image" src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;
