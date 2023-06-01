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
              To keep connected with us please login with your personal info.
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
            <div className="flex">
              <div className="remember__me">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="remember__me__text">Remember Me</label>
              </div>
              <a href="/" className="forgot__password">
                Forgot your password?
              </a>
            </div>
            <button className="signin__btn">Sign In</button>
          <div className="signup__info">
            <p className="text">Do not have an account?</p>{" "}
            <Link to={"/signup"} className="signup__text">
              Sign Up
            </Link>
          </div>
          </form>
        </div>
        <div className="login__signup">
          <img src={logo} alt="Logo" />
          <h1 className="title">Hello Friend!</h1>
          <p className="subtitle">
            Discover new writers, become a writer, and connect with the
            community.
          </p>
        </div>
      </div>
    </section>
  );
}
