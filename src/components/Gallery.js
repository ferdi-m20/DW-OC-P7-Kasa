import apartments from "../data/data.json";
import Card from "../components/Card";
import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      {apartments.map((apartment) => {
        return (
          <Card
            key={apartment.id}
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
