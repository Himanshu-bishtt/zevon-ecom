import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../icons';

import classes from './Login.module.scss';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginSubmitHandler = event => {
    event.preventDefault();

    const enteredName = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(enteredName, enteredPassword);
  };

  return (
    <div className={classes.login}>
      <h2 className="main-heading">Login</h2>
      <form className={`${classes.form}`} onSubmit={loginSubmitHandler}>
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
        <Link to={'/register'} className={classes.newuser}>
          New User? Register here
        </Link>
      </form>
    </div>
  );
};

export default Login;
