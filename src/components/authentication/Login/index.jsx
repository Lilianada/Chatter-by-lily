import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/imgs/logo-white.png";

export default function Login() {
  return (
    <section className="login__form">
      <div className="login__form__container">
        <div className="login__signin">
          <div className="header">
            <h1 className="title">Sign In</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <form className="form__wrap">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input__field"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input__field"
            />
            <Link to="/" className="forgot__password">
              Forgot your password?
            </Link>
            <Link to={"/siginin"}>
              <button className="signin__btn">Sign In</button>
            </Link>
          </form>
        </div>
        <div className="login__signup">
          <img src={logo} alt="Logo" />
          <h1 className="title">Hello Friend!</h1>
          <p className="subtitle">
            Become our member by joining over 500,000 readers and writers over
            the world.
          </p>
          <Link to={"/signup"}>
          <button className="signup__btn">Sign Up</button>
            </Link>
        </div>
      </div>
    </section>
  );
}
