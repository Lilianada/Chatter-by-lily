import React, { useState } from "react";
import logo from "../../../assets/imgs/logo.png";
import { TfiPencilAlt } from "react-icons/tfi";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import {  CiSearch } from "react-icons/ci";
import { HiOutlineBell } from "react-icons/hi2";
import ProfileMenu from "../ProfileMenu";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const isActive = () => {
    setShowMenu(!showMenu);
  };

  const profileActive = () => {
    setShowProfile(!showProfile);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  return (
    <header className="authorized__header">
      <div className="desktop__header">
        <div className="header__left">
          <div className="header__logo">
            <img src={logo} className="logo" alt="Chatter logo" />
            <h2 className="logo__name">Chatter</h2>
          </div>
          <div className="header__search">
            <CiSearch size={22} fill="#827f7f" />
            <input
              type="text"
              className="search__input"
              placeholder="Search Chatter"
              name="search"
            />
          </div>
        </div>
        <nav className="nav__bar">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
                to="/write"
              >
                <TfiPencilAlt size={20} />
                Write
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__menu"
                }
                to="/notification"
              >
                <div className="notification__bell">
                  <HiOutlineBell
                    size={20}
                  />
                </div>
              </NavLink>
            </li>
            <li className="nav__item">
              <div className="nav__menu" onClick={profileActive}>
                <div className="profile"></div>
                <BsChevronDown fill="#827f7f" size={10} />
              </div>
            </li>
            <div className={`${showProfile ? "profile__modal" : "no__show"} `} onClick={closeProfile} >
              <ProfileMenu />
            </div>
          </ul>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="mobile__header">
        <div className="header__left">
          <div className="header__logo">
            <img src={logo} className="logo" alt="Chatter logo" />
            <h2 className="logo__name">Chatter</h2>
          </div>
          <div className="header__search">
            <CiSearch size={22} fill="#aeadad" />
            <input
              type="text"
              className="search__input"
              placeholder="Search Chatter"
              name="search"
            />
          </div>
        </div>
        <nav className="nav__bar">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__menu"
                }
                to="/notification"
              >
                <div className="notification__bell">
                  <HiOutlineBell
                    size={20}
                  />
                </div>
              </NavLink>
            </li>

            <li className="nav__item">
              <div className="nav__menu" onClick={profileActive}>
                <div className="profile"></div>
                <BsChevronDown fill="#aeadad" size={10} />
              </div>
            </li>
            <div className={`${showProfile ? "profile__modal" : "no__show"} `} onClick={closeProfile} >
              <ProfileMenu />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
