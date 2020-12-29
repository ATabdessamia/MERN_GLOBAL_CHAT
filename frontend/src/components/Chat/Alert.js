import React from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  return (
    <>
      <ToastContainer draggable={true} transition={Zoom} autoClose={2500} />
    </>
  );
};

export default Alert;
