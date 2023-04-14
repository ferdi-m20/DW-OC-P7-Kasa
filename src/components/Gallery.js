import data from "../data/data.json";
import Card from "../components/Card";
import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      {data.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </div>
  );
}

export default Gallery();
