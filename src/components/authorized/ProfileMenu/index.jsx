import React from 'react';
import "./style.scss";
import { NavLink } from 'react-router-dom';


export default function ProfileMenu() {
  return (
    <div className="profile__menu">
        <ul className="profile__list">
            <li className="profile__link">
                <div className="profile__head">
                    <div className="profile__image">

                    </div>
                    <div className="profile__dets">
                        <h3 className="profile__name">Lilian Okeke</h3>
                        <p className="profile__email">Lilibest@gmail.com</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
