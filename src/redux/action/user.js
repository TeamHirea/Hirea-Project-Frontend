import axios from "../../utils/axios";

export const signinAction = (body) => ({
  type: "SIGNIN",
  payload: axios.post("/api/auth/login", body),
});
