import arrowRight from "../assets/right_arrow.svg";
import arrowLeft from "../assets/left_arrow.svg";
import { useState } from "react";
import "../styles/Slideshow.css";

function Slideshow({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="slideshow"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            className="slideshow-arrow-right"
            src={arrowRight}
            alt="Slider suivant"
            onClick={nextSlide}
          />
          <img
            className="slideshow-arrow-left"
            src={arrowLeft}
            alt="Slider précédent"
            onClick={prevSlide}
          />
          <p className="slideshow-counter">
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </section>
  );
}

export default Slideshow;
