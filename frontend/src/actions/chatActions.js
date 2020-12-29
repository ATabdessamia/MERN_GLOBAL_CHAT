import axios from "axios";

export const getGlobalMessages = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(`/api/chats/global`, config);
  dispatch({ type: "GET_GLOBAL_MSG", payload: data.data.globalMessage });
};

export const postGlobalMessages = (body) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.post(`/api/chats/global`, { body }, config);
  dispatch({ type: "POST_GLOBAL_MSG", payload: data.data.message });
};
