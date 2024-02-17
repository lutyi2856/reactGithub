import React, { useRef } from "react";
import { useState } from "react";
import AddForm from "../AddForm/AddForm";
import Product from "../Product/Product";
import "./hero.css";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero-title">Shop</h1>
          <div className="catalog-product">
            {products.map((item, index) => {
              return (
                <Product
                  title={item.title}
                  description={item.description}
                  key={index}
                />
              );
            })}
            <Product />
            <Product />
            <Product />
          </div>
          <AddForm addProduct={addProduct} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
