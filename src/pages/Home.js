import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
