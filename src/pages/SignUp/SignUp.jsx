import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../icons';

import classes from './SignUp.module.scss';

const SignUp = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const signUpHandler = event => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredEmail = emailRef.current.value;

    console.log(enteredName, enteredPassword, enteredEmail);
  };

  return (
    <div className={classes.signUp}>
      <h2 className="main-heading">Register</h2>
      <form className={`${classes.form}`} onSubmit={signUpHandler}>
        <div>
          <svg className={classes.icon}>
            <use href={`${Icons}#icon-user`} />
          </svg>
          <input
            type="text"
            className={classes.input}
            name="username"
            id="username"
            placeholder="username"
            ref={nameRef}
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
        <button className={classes.loginBtn} type="submit">
          Login
        </button>
        <Link to={'/login'} className={classes.newuser}>
          Already Registered? Login here
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
