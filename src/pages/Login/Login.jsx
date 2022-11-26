import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/login';
import { Icons } from '../../icons';

import classes from './Login.module.scss';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginSubmitHandler = async event => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const response = await userLogin(enteredEmail, enteredPassword);

    if (response.idToken) {
      console.log(response);
      navigate('/');
    } else {
      setError(response);
    }
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
        {error && (
          <p className={classes.error}>Login failed: {error.message}</p>
        )}
        <Link to={'/register'} className={classes.newuser}>
          New User? Register here
        </Link>
      </form>
    </div>
  );
};

export default Login;
