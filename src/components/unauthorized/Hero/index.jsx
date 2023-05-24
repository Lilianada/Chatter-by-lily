import React from "react";
import "./style.scss";

export default function Hero() {
  return (
    <div className="hero__component">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Today 
            <span className="hero__title_colored"> a writer</span>
            <br />
            Tomorrow
            <span className="hero__title_colored"> a leader</span>
          </h1>
          <h6 className="hero__description">
          Everyone has an opinion that needs to be heard, we provide you the platform that helps you get heard. 
          Enjoy beautiful stories written by talented writers.
          </h6>
        </div>
          <button className="hero__button">Get started now</button>
        <div className="hero__image"></div>
      </div>
    </div>
  );
}
