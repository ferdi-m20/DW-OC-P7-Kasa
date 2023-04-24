import principles from "../data/aboutData.json";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collpase from "../components/Collapse";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <Banner />
      <main className="about">
        {principles.map((principle, index) => {
          return (
            <div key={index} className="about-collapse">
              <Collpase title={principle.title} content={principle.content} />
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default About;
