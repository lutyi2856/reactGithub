import "./hero-content.css";
import MyAlert from "../MyAlert/MyAlert";
import Button from "../Button/Button";
import { SlLike } from "react-icons/sl";
import { Car } from "../Button/ButtonTwo";

const action = () => {
  console.log(this);
};

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1 className="hero-title">Home</h1>
      <p className="hero-description">This is a home page.</p>
      <MyAlert title="главная страница" description="ntcn ntrcn" type="error" />
      <MyAlert description="илоаимоифуидшфуишмифуд" type="success" />
      <Car type="primary" click="нажатие" action={action} icon={<SlLike />} />
    </div>
  );
};

export default HeroContent;
