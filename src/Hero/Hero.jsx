import React from "react";
import Input from "../Input/Input";
import Task from "../Task/Task";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero-title">ToDo List</h1>
          <Input />
        </div>
      </div>
    </section>
  );
};

export default Hero;
