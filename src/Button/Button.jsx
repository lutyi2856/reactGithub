import "./Button.css";
import React from "react";

const Button = (props) => {
  console.log(props);
  return (
    <button href="#" onClick={props.action} className={`btn ${props.type}`}>
      <span>{props.icon}</span>
      <span onClick={props.action}>{props.title}</span>
    </button>
  );
};

Button.defaultProps = {
  title: "Подробнее",
  type: "btn-default",
};

export default Button;
