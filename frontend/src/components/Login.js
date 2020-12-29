import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../actions/index";
import Alert from "./Chat/Alert";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const auths = useSelector((state) => state.logIn);
  const { logIn } = auths;

  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, pwd));
  };

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        {logIn && logIn.status === "Error" && <Alert />}
        <form onSubmit={onSubmitLogin}>
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
          <div className="form__group">
            <button className="btn btn--blue" type="submit">
              Login
            </button>
          </div>
          <div className="form__group">
            <Link to="/singup" className="link">
              Create new account ?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
