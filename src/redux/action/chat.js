// import axios from "../../utils/axios";

export const getMessage = (form) => ({
  type: "GET_MESSAGE",
  payload: console.log(form),
  // payload: axios.get(`/api/message/history/jobseeker`, form),
});
