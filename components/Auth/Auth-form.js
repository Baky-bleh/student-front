import { useState, useRef } from 'react';

import { useRouter } from 'next/router';
import { getCurrentUser, login } from '../../utils/ApiUtil';
import React from 'react';
import classes from '../../styles/auth-form.module.css'


function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [form, setForm] = React.useState({
    username: "",
    password: ""
})
  

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = (event) => {
        event.preventDefault();
        login({
            ...form,
            username: form.username.toLowerCase()
        })
            .then(response => {
                sessionStorage.setItem(process.env.ACCESS_TOKEN, response.access_token);
                getCurrentUser()
                    .then(responseUser => {
                        sessionStorage.setItem("currentUser", JSON.stringify(responseUser))
                        sessionStorage.setItem("authenticated", "true")
                        router.push('/')
                    })
            }).catch(error => {
                if( error.statusCode === 401 ){
                    sessionStorage.setItem("currentUser", JSON.stringify({ username: "null" }))
                    sessionStorage.setItem("authenticated", "false")
                }
                alertService.error((error && error.message) || 'Oops! Something went wrong. Please try again!', {
                    autoClose: true,
                    keepAfterRouteChange: false
                })
            });
           
    }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;