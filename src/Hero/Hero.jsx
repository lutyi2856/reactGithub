import Sitebar from "../Sitebar/Siterbar";
import HeroContent from "../Hero-content/Hero-content";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <Sitebar />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
