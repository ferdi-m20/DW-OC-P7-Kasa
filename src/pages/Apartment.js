import { useParams } from "react-router-dom";
import apartments from "../data/data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import "../styles/Apartment.css";

export default function ApartmentNotFound() {
  const apartmentId = useParams("id").id;
  const singleApartmentDetail = apartments.filter(
    (apartment) => apartment.id === apartmentId
  );
  console.log(singleApartmentDetail);
  if (singleApartmentDetail.length === 0) {
    return <NotFound />;
  } else {
    return <Apartment />;
  }
}

export function Apartment() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
