import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/imgs/logo-white.png";

export default function Register() {
  return (
    <section className="registeration__form">
      <div className="registeration__form__container">
        <div className="registeration__signin">
          <img src={logo} alt="Logo" />
          <h1 className="title">Welcome To Chatter!</h1>
          <p className="subtitle">
            Become our member by joining over 500,000 readers and writers on the app.
          </p>
          <Link to={"/siginin"}>
            <button className="signin__btn">Sign In</button>
          </Link>
        </div>
        <div className="registeration__signup">
          <div className="header">
            <h1 className="title">Create Account</h1>
            <p className="subtitle">
              To join us as a writer or a reader, kindly fill in your personal info below.
            </p>
          </div>
          <form className="form__wrap">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input__field"
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input__field"
            />
            <button className="signup__btn">Sign Up</button>
          <div className="signin__info">
            <p className="text">Already have an account?</p>{" "}
            <Link to={"/signin"} className="signin__text">
              Sign In
            </Link>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}
