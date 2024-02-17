import React, { useState } from "react";
import "./Product.css";
import { MdOutlineFavorite } from "react-icons/md";

const Product = (props) => {
  const [isStyle, setStyle] = useState(false);
  const action = () => {
    setStyle(!isStyle);
  };
  const getClassName = () => {
    if (isStyle) {
      return "button-faivorite-active";
    } else {
      return "button-faivorite-default";
    }
  };
  return (
    <div className="wrapper-product">
      <div className="wrapper-product-button">
        <button className={`btn-faivorite ${getClassName()}`} onClick={action}>
          <MdOutlineFavorite className="icon-button" />
        </button>
      </div>
      <div className="wrapper-product-image">
        <img src={props.src} alt={props.alt} width="100" height="150"></img>
      </div>
      <div className="wrapper-product-content">
        <h3
          className={`product-title ${isStyle ? "product-title-active" : "product-title-default"}`}
        >
          {props.title}
        </h3>
        <p className="product description">{props.description}</p>
      </div>
    </div>
  );
};

Product.defaultProps = {
  src: "/images/beer-1.png",
  alt: "Бутылка пива.",
  title: "Пиво",
  description:
    "Крафтовое пиво Карлштейн - это светлое пиво янтарного цвета с уникальными солодовыми и хмелевыми оттенками в роскошном многогранном вкусе.",
};

export default Product;
