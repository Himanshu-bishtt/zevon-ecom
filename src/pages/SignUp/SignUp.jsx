import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userSignup } from '../../api/signup';

import { Icons } from '../../icons';
import classes from './SignUp.module.scss';

const SignUp = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const signUpHandler = async event => {
    event.preventDefault();

    const enteredPassword = passwordRef.current.value;
    const enteredEmail = emailRef.current.value;

    const response = await userSignup(enteredEmail, enteredPassword);

    if (response.idToken) {
      alert('Sign up successful');
      navigate('/');
    } else {
      setError(response);
    }
  };

  return (
    <div className={classes.signUp}>
      <h2 className="main-heading">Register</h2>
      <form className={`${classes.form}`} onSubmit={signUpHandler}>
        <div>
          <svg className={classes.icon}>
            <use href={`${Icons}#icon-mail`} />
          </svg>
          <input
            type="email"
            className={classes.input}
            name="email"
            id="email"
            placeholder="email"
            ref={emailRef}
          />
        </div>

        <div>
          <svg className={classes.icon}>
            <use href={`${Icons}#icon-lock`} />
          </svg>
          <input
            type="password"
            className={classes.input}
            name="password"
            id="password"
            placeholder="password"
            ref={passwordRef}
          />
        </div>
        <button className={classes.loginBtn} type="submit">
          Login
        </button>
        {error && (
          <p className={classes.error}>Sign-in failed: {error.message}</p>
        )}
        <Link to={'/login'} className={classes.newuser}>
          Already Registered? Login here
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
