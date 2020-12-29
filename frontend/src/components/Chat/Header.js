import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { logout, getUsers } from "../../actions/index";

const Header = ({ name }) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const onSubmitLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const onChangeSearch = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(getUsers(term));
    if (term === "") {
      dispatch(getUsers());
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src="images/brand.png" alt="Brand" />
      </div>
      <nav className="nav nav--tours">
        <form className="nav__search" onSubmit={onSubmitSearch}>
          <input
            type="text"
            placeholder="Search Friend"
            className="nav__search-input"
            value={term}
            onChange={onChangeSearch}
          />
        </form>
      </nav>
      <nav className="nav nav--user">
        <button className="nav__el nav__el--cta" onClick={onSubmitLogout}>
          log out
        </button>
      </nav>
    </header>
  );
};

export default Header;
