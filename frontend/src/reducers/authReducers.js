export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, logIn: action.payload };
    default:
      return state;
  }
};

export const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, signUp: action.payload };
    default:
      return state;
  }
};

export const logoutReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT":
      return { ...state, logOut: action.payload };
    default:
      return state;
  }
};

export const getUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const getCurrentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ME":
      return { ...state, CurrentUser: action.payload };
    default:
      return state;
  }
};
