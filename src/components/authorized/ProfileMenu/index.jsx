import React, {useState} from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { IoStatsChartOutline } from "react-icons/io5";
import { RxPencil2, RxPerson } from "react-icons/rx";
import { GrStar } from "react-icons/gr";
import {IoBookmarksOutline} from "react-icons/io5"

export default function ProfileMenu() {
    const [showMenu, setShowMenu] = useState(false);

  const isActive = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="profile__menu">
      <div className="profile__head">
        <div className="profile__image"></div>
        <div className="profile__dets">
          <h3 className="profile__name">Lilian Okeke</h3>
          <p className="profile__email">Lilibest@gmail.com</p>
        </div>
      </div>
      <ul className="profile__list">
        <li className="profile__link">
          <NavLink to="/profile"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            <RxPerson size={20} fill="#7f7d7d" />
            Profile
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/write"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            <RxPencil2 size={20} fill="#7f7d7d" />
            Start Writing
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/bookmark"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            <IoBookmarksOutline size={20} fill="#7f7d7d" />
            Bookmark
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/stories"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            <CgNotes size={20} fill="#7f7d7d" />
            Stories
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/stats"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            <IoStatsChartOutline size={20} fill="#7f7d7d" />
            Stats
          </NavLink>
        </li>
      </ul>
      <ul className="profile__list">
        <li className="profile__link">
          <NavLink to="/settings"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            Settings
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/support"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            Support
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/signout"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            Sign out
          </NavLink>
        </li>
      </ul>
      <NavLink to="/become-member" className="linkk">
        Become a member 
        <GrStar fill="#f5a623" />
      </NavLink>
      <ul className="profile__bottom">
        <li className="profile__link">
          <NavLink to="/about"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
           About
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/privacy"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            Privacy
          </NavLink>
        </li>
        <li className="profile__link">
          <NavLink to="/terms"  className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }>
            Terms
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
