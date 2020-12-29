import axios from "axios";
import history from "../history";
import { toast } from "react-toastify";

export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/chats",
      { email, password },
      config
    );

    dispatch({ type: "LOGIN", payload: data });

    history.push("/room");
  } catch (error) {
    dispatch({
      type: "LOGIN",
      payload:
        error.response && error.response.data.message
          ? error.response.data
          : error.message,
    });

    toast.error(error.response.data.message, {
      position: "top-center",
      className: "alert",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

export const signup = (name, email, password, passwordConfirm) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/chats/signup",
      { name, email, password, passwordConfirm },
      config
    );

    dispatch({ type: "SIGNUP", payload: data });

    toast.success("Completed Registration,Please go to login", {
      position: "top-center",
      className: "alert",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    history.push("/");
  } catch (error) {
    dispatch({
      type: "SIGNUP",
      payload:
        error.response && error.response.data.message
          ? error.response.data
          : error.message,
    });

    toast.error(error.response.data.message, {
      position: "top-center",
      className: "alert",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

export const logout = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get("/api/chats/logout", config);

  dispatch({ type: "LOGOUT", payload: data });

  history.push("/");
};

export const getUsers = (keyword = "") => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(
    `/api/chats/users?keyword=${keyword}`,
    config
  );

  dispatch({ type: "GET_USERS", payload: data.data.users });
};

export const getMe = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(`/api/chats/me`, config);

  dispatch({ type: "GET_ME", payload: data.data.user });
};
