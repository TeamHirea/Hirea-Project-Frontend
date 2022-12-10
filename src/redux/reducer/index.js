import { combineReducers } from "redux";

import user from "./user";
import auth from "./auth";
import skill from "./skill";
import experience from "./experience";
import portfolio from "./portfolio";
import chat from "./chat";
export default combineReducers({
  user,
  auth,
  skill,
  experience,
  portfolio,
  chat,
});
