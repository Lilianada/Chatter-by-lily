import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import logo from "../../../assets/imgs/logo-white.png";

export default function Register () {
  return (
    <section className="registeration__form">
      <div className="registeration__form__container">
        <div className="registeration__signin">
          <img src={logo} alt="Logo" />
          <h1 className='title'>Welcome Back!</h1>
          <p className='subtitle'>To keep connected with us please login with your personal info</p>
           <Link to={'/siginin'}>
          <button className='signin__btn'>
            Sign In
            </button>
            </Link> 
        </div>
        <div className="registeration__signup">
          <div className="header">
            <h1 className='title'>Create Account</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <form className="form__wrap">
            <input type="text" name="name" placeholder='Name' className="input__field" />
            <input type="email" name="email" placeholder='Email' className="input__field" />
            <input type="password" name="password" placeholder='Password' className="input__field" />
            <input type="password" name="confirmPassword" placeholder='Confirm Password'  className="input__field" />
            <button className='signup__btn'>Sign Up</button>
          </form>
        </div>
      </div>
    </section>
    
  )
}
