import axios from "../../utils/axios";

export const getProfileJobseeker = (id) => ({
  type: "GET_PROFILE_JOBSEEKER",
  payload: axios.get(`/api/user/${id}`),
});

export const updateProfileJobseeker = (form, id) => ({
  type: "UPDATE_PROFILE_JOBSEEKER",
  payload: axios.patch(`/api/user/jobseeker/${id}`, form),
});

export const getUserJobseeker = (searchName) => {
  return {
    type: "GET_DATA_USER_JOBSEEKER",
    payload: axios.get(
      `api/user/?page=1&limit=4&column=skill&order=true&search=${searchName}`
    ),
  };
};

export const getUserJobseekerById = (id) => {
  return {
    type: "GET_DATA_USER_JOBSEEKER_ID",
    payload: axios.get(`/api/user/${id}`),
  };
};

export const getUserRecruiterById = (id) => {
  return {
    type: "GET_DATA_USER_RECRUITER_ID",
    payload: axios.get(`/api/user/recruiter/${id}`),
  };
};

export const updateProfileRecruiter = (form, id) => ({
  type: "UPDATE_PROFILE_JOBSEEKER",
  payload: axios.patch(`/api/user/recruiter/${id}`, form),
});

export const updatePasswordJobseeker = (form, id) => ({
  type: "UPDATE_PASSWORD_JOBSEEKER",
  payload: axios.patch(`/api/user/jobseeker/updatePassword/${id}`, form),
});
