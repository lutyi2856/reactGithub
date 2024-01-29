import "./Button.css";
import { SlLike } from "react-icons/sl";

const Button = (props) => {
  return (
    <button
      href="#"
      onClick={() => {
        console.log(`${props.click}`);
      }}
      className={`btn ${props.type}`}
    >
      <span>{props.title}</span>
    </button>
  );
};

Button.defaultProps = {
  title: "Подробнее",
  type: "btn-default",
  click: "Клик",
  icon: "",
};

export default Button;
