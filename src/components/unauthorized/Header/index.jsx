import React, {useState} from "react";
import logo from "../../../assets/imgs/logo.png";
import "./style.scss";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const isActive = () => {
      setShowMenu(!showMenu);
    };
  
    const closeMenu = () => {
      setShowMenu(false);
    };
    
  return (
    <header className="unauthorized__header">
      <div className="desktop__header">
        <div className="header__logo">
          <img src={logo} className="logo" alt="Chatter logo" />
          <h2 className="logo__name">Chatter</h2>
        </div>
        <nav className="nav__bar">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                Resources
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Start Writing
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Sign In
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__button">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile__header">
        <div className="header__logo">
          <img src={logo} className="logo" alt="Chatter logo" />
          <h2 className="logo__name">Chatter</h2>
        </div>
      </div>
    </header>
  );
}
