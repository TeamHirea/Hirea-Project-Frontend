import { combineReducers } from "redux";

import user from "./user";
import auth from "./auth";
import skill from "./skill";
import experience from "./experience";
export default combineReducers({
  user,
  auth,
  skill,
  experience,
});
