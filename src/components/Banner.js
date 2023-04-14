import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Banner.css";

function Banner() {
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
  }, []);

  return (
    <section className={aboutPage ? "about-banner" : "home-banner"}>
      {!aboutPage && (
        <div className="home-banner-title">
          <div>Chez vous,</div>
          <div>partout et ailleurs</div>
        </div>
      )}
    </section>
  );
}

export default Banner;
