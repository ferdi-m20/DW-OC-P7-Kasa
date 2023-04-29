import apartments from "../data/apartmentsData.json";
import { NavLink } from "react-router-dom";
import "../styles/Card.css";

function Card() {
  return (
    <section className="cards">
      {apartments.map((apartment) => (
        <NavLink to={`/apartment/${apartment.id}`} key={apartment.id}>
          <article className="card-thumbnail">
            <img
              src={apartment.cover}
              alt={apartment.title}
              className="card-image"
            ></img>
            <p className="card-text">{apartment.title}</p>
          </article>
        </NavLink>
      ))}
    </section>
  );
}

export default Card;
