import React, { useState } from "react";
import logo from "../../../assets/imgs/logo.png";
import { GrClose } from "react-icons/gr";
import { GiPencil } from "react-icons/gi";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { CiBellOn, CiSearch } from "react-icons/ci";
import ProfileMenu from "../ProfileMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const isActive = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
                to="/notifications"
              >
                <CiBellOn
                  size={28}
                  fill="#7f7d7d"
                  className="notification__bell"
                />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "nav__link"
                }
                to="/write"
              >
                <GiPencil size={20} fill="#7f7d7d" />
                Write
              </NavLink>
            </li>

            <li className="nav__item">
              <div className="nav__menu" onClick={profileActive}>
                <div className="profile"></div>
                <BsChevronDown fill="#aeadad" size={10} />
              </div>
            </li>
            {showProfile && <ProfileMenu />}
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
                to="/notifications"
              >
                <CiBellOn
                  size={28}
                  fill="#7f7d7d"
                  className="notification__bell"
                />
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
