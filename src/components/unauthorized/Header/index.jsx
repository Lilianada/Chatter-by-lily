import React, { useState } from "react";
import logo from "../../../assets/imgs/logo.png";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import "./style.scss";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
              >
                Resources
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/start-writing"
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
              >
                Start Writing
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/signup" className="nav__button">
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

    {/* Mobile Header */}
      <div className="mobile__header">
        <div className="header__logo">
          <img src={logo} className="logo" alt="Chatter logo" />
          <h2 className="logo__name">Chatter</h2>
        </div>
        <button type="button" className="menu__button">
          <FiMenu size={32} stroke="white" fill="white" onClick={isActive} />
        </button>

        <nav className={`nav__bar ${showMenu ? "show__navbar" : "nav__bar"}`}>
          <button type="button" className="close__menu" onClick={closeMenu}>
            <GrClose />
          </button>
          <ul className="nav__list">
            <li className="nav__item">
              <h6 className="nav__title">Menu</h6>
            </li>
          </ul>

          {/* Navigation List */}
          <ul className="nav__list">
            <li className="nav__item">
            <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
                to="/about"
              >
                Resources
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
                to="/about"
              >
                Start Writing
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
                to="/about"
              >
                Sign In
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/" className="nav__button">
                Get Started
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
