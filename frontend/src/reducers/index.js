import { combineReducers } from "redux";
import {
  loginReducer,
  signupReducer,
  logoutReducer,
  getUsersReducer,
  getCurrentUserReducer,
} from "./authReducers";

import {
  getGlobalMessagesReducer,
  postGlobalMessagesReducer,
} from "./chatReducers";

export default combineReducers({
  logIn: loginReducer,
  signUp: signupReducer,
  logOut: logoutReducer,
  users: getUsersReducer,
  CurrentUser: getCurrentUserReducer,
  GlobalMessages: getGlobalMessagesReducer,
  message: postGlobalMessagesReducer,
});
