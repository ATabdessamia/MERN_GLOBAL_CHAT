import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMe } from "../actions/index";

import Header from "./Chat/Header";
import Main from "./Chat/Main";

const Room = () => {
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.CurrentUser);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  if (!CurrentUser.CurrentUser) {
    return <h2>Loading... </h2>;
  }

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Room;
