import principles from "../data/aboutData.json";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collpase from "../components/Collapse";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Header />
      <Banner />
      {principles.map((principle, index) => (
        <Collpase
          key={index}
          title={principle.title}
          content={principle.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default About;
