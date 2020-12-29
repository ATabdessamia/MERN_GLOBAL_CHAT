import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signup } from "../actions/index";
import Alert from "./Chat/Alert";

const Signup = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [Cpwd, setCpwd] = useState("");

  const auths = useSelector((state) => state.signUp);
  const { signUp } = auths;

  const onSubmitSignup = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, pwd, Cpwd));
  };

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Create your account!</h2>
        {signUp && signUp.status === "Error" && <Alert />}
        <form onSubmit={onSubmitSignup}>
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Your name
            </label>
            <input
              className="form__input"
              id="name"
              type="text"
              placeholder=""
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              placeholder="you@example.com"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              id="password"
              type="password"
              placeholder="••••••••"
              required=""
              minLength="8"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="passwordConfirm">
              Confirm password
            </label>
            <input
              className="form__input"
              id="passwordConfirm"
              type="password"
              placeholder="••••••••"
              required=""
              minLength="8"
              value={Cpwd}
              onChange={(e) => setCpwd(e.target.value)}
            />
          </div>
          <div className="form__group">
            <button className="btn btn--blue">Sign up</button>
          </div>
          <div className="form__group">
            <Link to="/" className="link">
              Already have an account ?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
