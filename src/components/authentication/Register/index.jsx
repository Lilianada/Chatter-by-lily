import React from 'react'

export default function Register () {
  return (
    <section className="registeration__form">
      <div className="registeration__form__container">
        <div className="registeratio__signin">
          <h1 className='title'>Welcome Back</h1>
          <p className='subtitle'>To keep connected with us please login with your personal info</p>
          <button className='btn btn--primary'>Sign In</button>
        </div>
        <div className="registeration__signup">
          <h1 className='title'>Create Account</h1>
          <form action="">
            <input type="text" name="name"  className="input__field" />
            <input type="email" name="email"  className="input__field" />
            <input type="password" name="password"  className="input__field" />
            <input type="password" name="confirmPassword"  className="input__field" />
            <button className='btn btn--primary'>Sign Up</button>
          </form>
        </div>
      </div>
    </section>
    
  )
}
