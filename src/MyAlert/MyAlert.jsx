import { AiFillLike } from "react-icons/ai";
import "./MyAlert.css";

const MyAlert = (props) => {
  return (
    <div className={`alerta  ${props.type}`}>
      <AiFillLike />
      <h2 className="title-alerta">{props.title}</h2>
      <p className="description-alerta">{props.description}</p>
    </div>
  );
};

MyAlert.defaultProps = {
  title: "Нет заголовка",
};

export default MyAlert;
