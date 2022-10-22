import { combineReducers } from "redux";

import user from "./user";
import auth from "./auth";
import experience from "./experience";
export default combineReducers({
  user,
  auth,
  experience,
});
