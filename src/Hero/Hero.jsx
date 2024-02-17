import React, { useRef } from "react";
import { useState } from "react";
import AddForm from "../AddForm/AddForm";
import Product from "../Product/Product";
import "./hero.css";

const Hero = () => {
  const formRef = useRef();
  const [isfield, setField] = useState([]);
  const formValue = (event) => {
    console.log("первое", isfield);
    event.preventDefault();
    let formDataProduct = new FormData(formRef.current);
    const formFieldObj = Array.from(formDataProduct.entries()).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value }),
      {},
    );
    console.log("formFieldObj", formFieldObj);
    // isfield.push(formFieldObj);

    setField([...isfield, formFieldObj]);
    console.log("после отправки", isfield);
  };

  // const addProduct = () => {};
  const myProduct = isfield.map((item, index) => {
    console.log("перед созданием", isfield);
    return (
      <Product title={item.title} description={item.description} key={index} />
    );
  });
  console.log("после созданием", isfield);
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero-title">Shop</h1>
          <div className="catalog-product">
            {myProduct}
            <Product />
            <Product />
            <Product />
          </div>
          <AddForm onSubmit={formValue} ref={formRef} onC />
        </div>
      </div>
    </section>
  );
};

export default Hero;
