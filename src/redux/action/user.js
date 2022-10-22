import axios from "../../utils/axios";

export const getProfileJobseeker = (id) => ({
  type: "GET_PROFILE_JOBSEEKER",
  payload: axios.get(`/api/user/${id}`),
});
export const updateProfileJobseeker = (form, id) => ({
  type: "UPDATE_PROFILE_JOBSEEKER",
  payload: axios.patch(`/api/user/jobseeker/${id}`, form),
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
    payload: axios.get(`/api/user/${id}`),
  };
};
