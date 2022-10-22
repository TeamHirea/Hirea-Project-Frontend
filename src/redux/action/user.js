import axios from "../../utils/axios";

export const signinAction = (body) => ({
  type: "SIGNIN",
  payload: axios.post("/api/auth/login", body),
});

export const getUserJobseeker = () => {
  return {
    type: "GET_DATA_USER_JOBSEEKER",
    payload: axios.get(`api/user`),
  };
};

export const getUserJobseekerById = (id) => {
  return {
    type: "GET_DATA_USER_JOBSEEKER_ID",
    payload: axios.get(`api/user/${id}`),
  };
};
