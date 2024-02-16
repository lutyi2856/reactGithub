import React from "react";
import { useState } from "react";
import AddForm from "../AddForm/AddForm";
import Input from "../Input/Input";
import Product from "../Product/Product";
import "./hero.css";

const Hero = () => {
  const [products, setProducts] = useState([]);
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero-title">Shop</h1>
          <div className="catalog-product">
            <Product />
            <Product />
            <Product />
          </div>
          <AddForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
