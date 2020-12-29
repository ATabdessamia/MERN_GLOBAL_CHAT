export const getGlobalMessagesReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_GLOBAL_MSG":
      return { ...state, GlobalMessages: action.payload };
    default:
      return state;
  }
};

export const postGlobalMessagesReducer = (state = {}, action) => {
  switch (action.type) {
    case "POST_GLOBAL_MSG":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
