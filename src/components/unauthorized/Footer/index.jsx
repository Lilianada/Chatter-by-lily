import React from "react";
import "./style.scss";
import logo from "../../../assets/imgs/logo.png";

export default function Footer() {
  return (
    <footer className="unauthorized__footer">
      <div className="footer__top">
        <div className="footer__top_component">
          <h3 className="title">Discover Greatness</h3>
          <p className="text">
            Welcome to Chatter, the fun and easy way to chat with anyone,
            anywhere, anytime. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum. Deserunt, soluta.
          </p>
        </div>
        <div className="footer__top_component">
          <h3 className="title">Build Greatness</h3>
          <p className="text">
            Welcome to Chatter, the fun and easy way to chat with anyone,
            anywhere, anytime. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="footer__top_component">
          <h3 className="title">Become a member</h3>
          <p className="text">
            Welcome to Chatter, the fun and easy way to chat with anyone,
            anywhere, anytime. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer__right">
          <ul className="footer__list">
            <li className="footer__list_item">
              <a className="footer__link" href="/">
                About
              </a>
            </li>
            <li className="footer__list_item">
              <a className="footer__link" href="/">
                Terms
              </a>
            </li>
            <li className="footer__list_item">
              <a className="footer__link" href="/">
                Privacy
              </a>
            </li>
            <li className="footer__list_item">
              <a className="footer__link" href="/">
                Contact
              </a>
            </li>
          </ul>
          <p className="footer__text">&copy; 2021 Chatter. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
