import "./hero-content.css";
import MyAlert from "../MyAlert/MyAlert";
import Button from "../Button/Button";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1 className="hero-title">Home</h1>
      <p className="hero-description">This is a home page.</p>
      <MyAlert title="главная страница" description="ntcn ntrcn" type="error" />
      <MyAlert description="илоаимоифуидшфуишмифуд" type="success" />
      <Button type="primary" click="нажатие" />
    </div>
  );
};

export default HeroContent;
