import React from "react";
import "./style.scss";
import Doodle1 from '../../../assets/Landing-Page-Doodles/Pin.png';
import Doodle2 from '../../../assets/Landing-Page-Doodles/Star3.png';
import Doodle3 from '../../../assets/Landing-Page-Doodles/Bookmark.png';
import Doodle4 from '../../../assets/Landing-Page-Doodles/Stars1.png';
import Doodle5 from '../../../assets/Landing-Page-Doodles/14.png';
import Doodle6 from '../../../assets/Landing-Page-Doodles/Arrow4.png';
// import the rest of your images...

const doodles = [
  { src: Doodle1, alt: 'Doodle 1', className: 'doodle1' },
  { src: Doodle2, alt: 'Doodle 2', className: 'doodle2' },
  { src: Doodle3, alt: 'Doodle 3', className: 'doodle3' },
  { src: Doodle4, alt: 'Doodle 4', className: 'doodle4' },
  { src: Doodle5, alt: 'Doodle 5', className: 'doodle5' },
  { src: Doodle6, alt: 'Doodle 6', className: 'doodle6' },
  // add the rest of your images...
];
export default function Hero() {
  return (
    <section className="hero__component">
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
            Everyone has an opinion that needs to be heard, we provide you the
            platform that helps you get heard. Enjoy beautiful stories written
            by talented writers.
          </h6>
        </div>
        <button className="hero__button">Get started now</button>
      </div>
    </section>
  );
}
