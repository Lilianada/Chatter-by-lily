import React from 'react';
import logo from '../../../assets/imgs/logo.png';
import './style.scss';

export default function Header() {
  return (
    <header>
        <div className="desktop__header">
            <div className="logo">
                <img src={logo} alt="Chatter logo" />
                <h2 className="logo__name">Chatter</h2>
            </div>
            <nav className="nav__bar">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="/" className="nav__link">Resources</a>
                        <a href="/" className="nav__link">Start Writing</a>
                        <a href="/" className="nav__link">Signin</a>
                        <a href="/" className="nav__button">Get Started</a>
                    </li>    
                </ul>
            </nav>
        </div>
        <div className="mobile__header">
            <div className="logo">
                <img src={logo} alt="Chatter logo" />
                <h2 className="logo__name">Chatter</h2>
            </div>
        </div>
    </header>
  )
}