import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import apartments from "../data/apartmentsData.json";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Collpase from "../components/Collapse";
import Footer from "../components/Footer";
import "../styles/Apartment.css";
import redStar from "../assets/red_star.svg";
import greyStar from "../assets/grey_star.svg";

export default function ApartmentNotFound() {
  const idApartment = useParams("id").id;
  const singleApartmentDetail = apartments.filter(
    (apartment) => apartment.id === idApartment
  );

  if (singleApartmentDetail.length === 0) {
    return <Navigate to="/404" replace />;
  } else {
    return Apartment(singleApartmentDetail);
  }
}

export function Apartment(singleApartmentDetail) {
  const [imageSlider, setImageSlider] = useState([]);

  useEffect(() => {
    setImageSlider(singleApartmentDetail[0].pictures);
  }, [singleApartmentDetail]);

  const name = singleApartmentDetail[0].host.name.split(" ");
  const rating = singleApartmentDetail[0].rating;
  const description = singleApartmentDetail[0].description;
  const equipments = singleApartmentDetail[0].equipments;

  return (
    <div className="apartment">
      <Header />
      <Slideshow imageSlider={imageSlider} />
      <main className="apartment-details-container">
        <div className="apartment-content">
          <div className="apartment-info">
            <h1>{singleApartmentDetail[0].title}</h1>
            <p>{singleApartmentDetail[0].location}</p>
            <div>
              {singleApartmentDetail[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="host-content">
            <div>
              <div className="host-info">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                className="host-image"
                src={singleApartmentDetail[0].host.picture}
                alt="Hôte de l'appartement"
              />
            </div>
            <div className="host-rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="étoile"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="collapse">
          <Collpase title="Description" content={description} />
          <Collpase
            title="Équipements"
            content={equipments.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
            })}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
